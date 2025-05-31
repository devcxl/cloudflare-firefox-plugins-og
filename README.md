# Firefox Plugin Open Graph (OG) Image Generator

[简体中文](README_ZH.md) | English

Having trouble finding good images when recommending Firefox browser plugins? Don't worry, I've got you covered.

Want to insert a brief introduction card for Firefox plugins in your articles?

You can add the following code to your markdown:

```markdown
![fuckoffcsdn](https://firefox-plugins-og.devcxl.cn/?addon=fuckoffcsdn&lang=zh-CN)
```

Or use an img tag (allowing flexible control of image dimensions):

```html
<img src="https://firefox-plugins-og.devcxl.cn/?addon=fuckoffcsdn&lang=zh-CN" title="fuckoffcsdn">
```
This will insert the following image into your article:

<img src="https://firefox-plugins-og.devcxl.cn/?addon=fuckoffcsdn&lang=zh-CN" title="fuckoffcsdn">

## Parameters

In the example above:

https://firefox-plugins-og.devcxl.cn/?addon=fuckoffcsdn&lang=en-US

We used two parameters: addon and lang

- addon

    The unique identifier of the plugin, which can be found in the plugin page's URL

- lang
    
    The language for the plugin description. Defaults to Chinese. If Chinese isn't available, other languages can be used.

## Self-hosting

1. Clone the project

    `git clone https://github.com/devcxl/cloudflare-firefox-plugins-og`

2. Find and download your preferred font from [Google Fonts](https://fonts.google.com/)

3. Create an R2 bucket for font storage

    `npx wrangler r2 bucket create og-assets`

4. Upload the font file to your bucket (using `NotoSansSC` as example)

    `npx wrangler r2 object put fonts/NotoSansSC/NotoSansSC-Regular.ttf --file /path/to/NotoSansSC-Regular.ttf`

5. Modify the font path in `src/handler.tsx` to point to your uploaded font

6. Deploy to Cloudflare

    `npx wrangler deploy`


## References

- https://vercel.com/docs/og-image-generation
- https://fonts.google.com/
- https://github.com/vercel/satori

## Acknowledgments

- Cloudflare 
- Google Fonts
- Vercel