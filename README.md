# Mellow Tea 奶茶店/咖啡店菜单网站 Demo

这是一个适合奶茶店、咖啡店、甜品店、小餐馆展示使用的静态官网模板。页面包含顶部导航、Hero 首页、招牌饮品、菜单价格、店铺介绍、营业时间、地址联系方式和页脚，适合以后接单时作为作品集 Demo 展示。

## 适合什么客户

- 奶茶店、咖啡店、甜品店
- 轻食店、烘焙店、小餐馆
- 需要一个简洁官网、菜单展示页、开业宣传页的本地小店
- 预算不高但希望页面看起来专业、现代、温暖的客户

## 如何修改店名

打开 `index.html`，搜索 `Mellow Tea`，替换成客户的店名即可。

常见位置：

- 页面标题：`<title>Mellow Tea | Milk Tea & Coffee Menu Demo</title>`
- 导航 Logo 文案：`Mellow Tea`
- 关于我们标题和页脚店名

如果想修改圆形 Logo 里的字母，搜索 `MT`，改成客户店名缩写，例如 `CT`、`BK`。

## 如何修改菜单和价格

菜单数据集中写在 `script.js` 顶部的 `menuData` 里。

示例：

```js
{
  name: "Classic Milk Tea",
  description: "Black tea, fresh milk and mellow sweetness.",
  price: "$4.20"
}
```

你可以直接修改：

- `name`：产品名称
- `description`：产品描述
- `price`：价格

分类目前有：

- `milk-tea`
- `coffee`
- `dessert`

如果要新增分类，需要同时修改 `index.html` 里的分类按钮，以及 `script.js` 里的 `menuData`。

## 如何修改联系方式

打开 `index.html`，搜索以下示例内容并替换：

- 电话：`+86 138 0000 8888`
- 微信：`mellowtea_demo`
- 邮箱：`hello@mellowtea.demo`
- 地址：`88 Cream Street, Sunny Plaza, Shanghai`
- 营业时间：`09:00 - 21:30`

联系按钮现在使用的是邮箱链接：

```html
<a class="btn btn-primary" href="mailto:hello@mellowtea.demo">Book a Table</a>
```

如果客户想跳转微信二维码页面、地图页面或表单页面，可以把 `href` 改成对应链接。

## 如何部署到 GitHub Pages

1. 新建一个 GitHub 仓库。
2. 把 `index.html`、`style.css`、`script.js`、`README.md` 上传到仓库根目录。
3. 进入仓库的 `Settings`。
4. 找到 `Pages`。
5. 在 `Build and deployment` 中选择 `Deploy from a branch`。
6. Branch 选择 `main`，目录选择 `/root`。
7. 保存后等待 GitHub 生成访问链接。

部署完成后，GitHub Pages 会给你一个类似这样的链接：

```text
https://你的用户名.github.io/仓库名/
```

## 如何部署到 Netlify

方法一：拖拽部署

1. 打开 [Netlify](https://www.netlify.com/)。
2. 登录账号。
3. 进入 `Sites`。
4. 把整个项目文件夹拖进去。
5. 等待部署完成，Netlify 会自动生成一个访问链接。

方法二：连接 GitHub 仓库

1. 把项目上传到 GitHub。
2. 在 Netlify 中选择 `Add new site`。
3. 选择 `Import an existing project`。
4. 连接 GitHub 并选择你的仓库。
5. 构建命令留空。
6. 发布目录留空或填写 `/`。
7. 点击部署。

## 文件说明

- `index.html`：页面结构和示例内容
- `style.css`：视觉样式、响应式布局、hover 动效
- `script.js`：手机导航、菜单分类切换、平滑滚动
- `README.md`：项目修改和部署说明

## 本地预览

这个项目不需要安装依赖，直接双击打开 `index.html` 就可以预览。

如果你使用 VS Code，也可以用 Live Server 插件打开，修改代码后刷新页面查看效果。
