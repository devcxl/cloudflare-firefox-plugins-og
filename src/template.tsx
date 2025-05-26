export function OGTemplate({ title, iconUrl, description }: { title: string; iconUrl: string; description: string }) {
	return (
		<div
			style={{
				width:'720px',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'flex-start',
				padding: '12px',
				backgroundColor: '#fff',
				border: '1px solid #e5e7eb',
			}}
		>
			{/* 图标 */}
			<img
				src={iconUrl}
				alt="icon"
				width={48}
				height={48}
				style={{
					borderRadius: '8px',
					marginRight: '12px',
					flexShrink: 0,
				}}
			/>

			{/* 文本内容 */}
			<div style={{ display: 'flex', flexDirection: 'column', width:'638px' }}>
				<span
					style={{
						fontSize: '18px',
						fontWeight: '600',
						color: '#111827',
						marginBottom: '4px',
					}}
				>
					{title}
				</span>
				<span
					style={{
						fontSize: '16px',
						color: '#6b7280',
					}}
				>
					{description}
				</span>
			</div>
		</div>
	);
}
