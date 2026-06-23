# 小鹿奶茶 Mellow Tea 菜单展示网站 Demo

这是一个使用 HTML、CSS、JavaScript 制作的奶茶店 / 咖啡店菜单展示网站 Demo。

页面以「小鹿奶茶 Mellow Tea」为示例门店，展示菜单、价格、今日推荐、口味选项、营业时间、地址和联系方式。项目不依赖 React、Vue 或构建工具，下载后可直接打开 `index.html` 预览。

## 项目定位

这个项目适合作为本地小店的菜单展示页、门店介绍页或宣传链接，可用于二维码、朋友圈、小红书、闲鱼等渠道。

适合的门店类型：

- 奶茶店
- 咖啡店
- 小餐馆
- 甜品店
- 小吃店

## 功能说明

- 电脑端、平板端、手机端响应式布局
- 固定导航栏与手机端汉堡菜单
- Swiper 今日推荐产品轮播
- 奶茶、咖啡、甜点分类切换
- 甜度、冰度、小料选择展示
- AOS 滚动淡入动画
- 关于小店数据增长动画
- 营业时间、地址、电话、微信展示
- 原生平滑滚动与导航状态提示

## 文件结构

```text
.
├── index.html   页面结构、文案、图片和 CDN 资源
├── style.css    配色、布局、组件样式和响应式规则
├── script.js    菜单数据、轮播、动画和交互逻辑
└── README.md    项目说明和修改方法
```

## 如何修改店名

打开 `index.html`，搜索：

```text
小鹿奶茶
Mellow Tea
```

替换为实际门店名称即可。左上角圆形标志中的「鹿」也可以改成门店简称。

## 如何修改菜单和价格

菜单数据统一放在 `script.js` 顶部的 `menuData` 中，分为：

- `milk-tea`：奶茶
- `coffee`：咖啡
- `dessert`：甜点

单个菜单项目格式：

```js
{
  name: "黑糖珍珠奶茶",
  description: "黑糖珍珠、鲜奶和红茶底，默认七分糖。",
  price: "￥16"
}
```

修改 `name`、`description` 和 `price` 后，页面会自动生成对应菜单。

## 如何修改今日推荐

今日推荐卡片写在 `index.html` 的 `.signature-swiper` 区域。

每张卡片包含：

- 产品图片
- 产品标签
- 产品分类
- 产品名称
- 产品介绍
- 价格

复制一段 `.swiper-slide` 可以增加推荐产品。

## 如何修改图片

页面图片位于 `index.html` 的 `<img>` 标签中。

修改步骤：

1. 找到需要替换的图片。
2. 修改 `src` 为新的图片链接或本地图片路径。
3. 同时修改 `alt`，简要描述图片内容。

本地图片建议放入新建的 `images` 文件夹，例如：

```html
<img src="images/brown-sugar-milk-tea.jpg" alt="黑糖珍珠奶茶">
```

产品图片和门店图片已经设置 `object-fit: cover`，替换后会保持比例并自动裁切。

## 如何修改口味选项

甜度、冰度和小料选项位于 `index.html` 的 `.preference-panel` 区域。

复制、删除或修改按钮文字即可调整选项：

```html
<button type="button" data-value="三分糖">三分糖</button>
```

每组选中的按钮使用 `is-selected` 类。这个模块只做菜单展示，不会提交订单。

## 如何修改联系方式

打开 `index.html`，搜索并替换以下示例内容：

```text
上海市徐汇区桂林路 88 号阳光里 1F-12
021-6688 5200
xiaolu_milk_tea
```

电话按钮使用 `tel:` 链接：

```html
<a href="tel:+862166885200">021-6688 5200</a>
```

替换号码时，需要同时修改页面显示文字和 `href` 中的号码。

## 如何修改营业时间

营业时间位于 `index.html` 的 `.hours-list` 中：

```html
<div><dt>周一至周五</dt><dd>09:00 - 21:30</dd></div>
```

可按门店实际情况增加、删除或调整日期和时间。

## 如何修改颜色

主要颜色放在 `style.css` 顶部的 `:root` 中：

- `--cream`：页面背景
- `--milk`：浅色卡片
- `--coffee`：主要文字和深色区域
- `--caramel`：价格和重点色
- `--orange`：辅助强调色

建议一次只调整少量变量，保持整页风格统一。

## 本地预览

直接双击打开：

```text
index.html
```

也可以使用 VS Code Live Server 或其他静态服务器预览。

页面通过 CDN 加载 AOS、Swiper 和在线图片，因此联网时可以看到完整动画、轮播和图片效果。即使插件加载失败，菜单切换、口味选择和基础布局仍可正常使用。

## 部署到 GitHub Pages

1. 将项目上传到 GitHub 仓库。
2. 进入仓库 `Settings`。
3. 打开 `Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/ (root)`。
6. 保存并等待 GitHub 生成访问链接。

推送新代码到 `main` 后，GitHub Pages 会自动更新。

## 部署到 Netlify

拖拽部署：

1. 登录 [Netlify](https://www.netlify.com/)。
2. 进入 `Sites`。
3. 将整个项目文件夹拖入页面。
4. 等待部署完成。

连接 GitHub 部署：

1. 在 Netlify 新建站点并连接 GitHub 仓库。
2. Build command 留空。
3. Publish directory 填写 `/` 或留空。
4. 保存并部署。

## 使用说明

这是一个展示型网页 Demo，用于展示菜单、价格与门店信息。

项目不包含以下功能：

- 在线点单
- 在线支付
- 会员系统
- 订单管理
- 门店后台

如需以上功能，需要根据门店流程另外开发。
