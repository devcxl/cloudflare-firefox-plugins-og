# Firefox Plugin Open Graph (OG) Image Generator

Chinese | [English](README.md)  

向他人推荐Firefox浏览器插件时没有好用的图片？别担心、我来帮助你。

想在你的文章中插入Firefox插件的简要介绍卡片？

可以在你的markdown文本中插入以下代码

```markdown
![fuckoffcsdn](https://firefox-plugins-og.devcxl.cn/?addon=fuckoffcsdn&lang=zh-CN)
```

或者插入img标签（可以自由控制图片的宽高）

```html
<img src="https://firefox-plugins-og.devcxl.cn/?addon=fuckoffcsdn&lang=zh-CN" title="fuckoffcsdn">
```
即可将如下图片插入到你的文章中

<img src="https://firefox-plugins-og.devcxl.cn/?addon=fuckoffcsdn&lang=zh-CN" title="fuckoffcsdn">

## 参数介绍

在上面介绍的例子中

https://firefox-plugins-og.devcxl.cn/?addon=fuckoffcsdn&lang=zh-CN

我们填入了如上链接

其中分别有两个参数 addon 和 lang 

- addon

    插件的唯一标识符，可以从插件页面的url中找到

- lang
    
    插件简介的语言，默认使用中文，插件简介没有中文的可以使用其他语言。 


## 自部署


1. 克隆项目

    `git clone https://github.com/devcxl/cloudflare-firefox-plugins-og`

2. 在[Google Fonts](https://fonts.google.com/)中找到你喜爱的一款字体并下载

3. 创建存储字体用的存储桶

    `npx wrangler r2 bucket create og-assets`

4. 将字体文件上传到存储桶（这里以`NotoSansSC`字体为例）

    `npx wrangler r2 object put fonts/NotoSansSC/NotoSansSC-Regular.ttf --file /path/to/NotoSansSC-Regular.ttf`

5. 修改`src/handler.tsx`中加载字体的路径为你自己上传字体的路径

6. 部署到Cloudflare

    `npx wrangler deploy`


## 参考

- https://vercel.com/docs/og-image-generation
- https://fonts.google.com/
- https://github.com/vercel/satori

## 鸣谢

- Cloudflare 
- Google Fonts
- Vercel