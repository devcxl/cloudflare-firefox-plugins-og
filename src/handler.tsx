// src/handler.ts
import { OGTemplate } from './template';
import satori from 'satori';
export async function handleRequest(request: Request, env: Env): Promise<Response> {
	const { searchParams } = new URL(request.url);
	const addon = searchParams.get('addon') || 'fuckoffcsdn';
	const lang = searchParams.get('lang') || 'zh-CN';
	// https://mozilla.github.io/addons-server/topics/api/addons.html#detail
	const targetUrl = `https://addons.mozilla.org/api/v5/addons/addon/${addon}`;
	const addonData: any = await (await fetch(targetUrl)).json();
	// 从 R2 读取字体
	const fontObject = await env.ASSETS.get('fonts/NotoSansSC/NotoSansSC-Regular.ttf');
	if (!fontObject) {
		return new Response('Font not found in R2', { status: 404 });
	}

	const fontData = await fontObject.arrayBuffer();

	const svg = await satori(<OGTemplate title={addonData['name'][lang]} iconUrl={addonData.icon_url} description={addonData['summary'][lang]} />, {
		width: 720,
		fonts: [
			{
				name: 'NotoSansSC',
				data: fontData,
				weight: 400,
				style: 'normal',
			},
		],
	});

	return new Response(svg, {
		headers: {
			'Content-Type': 'image/svg+xml',
			'Cache-Control': 'public, max-age=86400',
		},
	});
}
