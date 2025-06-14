# Modern 网站模板

一个基于 Next.js 和 Tailwind CSS 构建的现代化品牌网站模板。

## 技术栈

- **前端框架**: Next.js
- **样式方案**: Tailwind CSS
- **UI 组件**: shadcn/ui
- **类型系统**: TypeScript
- **代码规范**: ESLint + Prettier

## 功能特点

- 📱 响应式设计，完美适配各种设备
- 🎨 现代化 UI 设计，基于 shadcn/ui 组件库
- 🚀 利用 Next.js App Router 实现混合渲染 (Client/Server Components)
- 🔍 SEO 友好 (通过 Next.js Metadata API)
- 💻 TypeScript 支持，提供完整的类型定义
- ✨ 平滑滚动和动态交互效果

## 页面列表

- 🏠 首页 (`/`)
- 📄 关于我们 (`/about`)
- 💼 项目案例 (`/projects`)
- 🤝 合作伙伴 (`/partners`)
- 📞 联系我们 (`/contact`)

## 快速开始

1. **克隆项目**

```bash
git clone [项目的 Git 地址]
cd [你的项目目录]
```

2. **安装依赖**

```bash
npm install
# 或
yarn install
```

3. **启动开发服务器**

```bash
npm run dev
```

4. **构建生产版本**

```bash
npm run build
```

## 项目结构

```
├── app/             ## App Router 路由目录 (页面、布局、API 路由等)
│   ├── api/         ## API 路由
│   ├── [页面目录]/  ## 各页面目录 (如 about, projects)
│   └── layout.tsx   ## 根布局文件
├── components/      ## 可复用组件
│   ├── layout/      ## 布局相关组件 (Header, Footer)
│   ├── projects/    ## 项目案例相关组件 (ProjectCard)
│   ├── ui/          ## shadcn/ui 组件
│   ├── scroll-button.tsx ## 滚动按钮组件
│   └── testimonial-slider.tsx ## 客户评价轮播组件
├── lib/             ## 工具函数和数据文件
│   ├── data.ts      ## 数据定义 (项目案例、合作伙伴、客户评价等)
│   └── utils.ts     ## 工具函数 (如 cn 类名合并函数)
├── public/          ## 静态资源目录
├── .eslintrc.js    ## ESLint 配置文件
├── .prettierrc     ## Prettier 配置文件
├── next.config.js  ## Next.js 配置文件
├── package.json     ## 项目依赖及脚本配置
├── tailwind.config.js ## Tailwind 配置
└── tsconfig.json    ## TypeScript 配置文件
```

## 配置文件说明

项目主要的数据和配置集中在以下文件：

-   `lib/data.ts`: 包含项目案例、合作伙伴和客户评价等核心数据。
-   `tailwind.config.js`: 用于自定义 Tailwind CSS 的主题、颜色、间距等。
-   `next.config.js`: Next.js 框架的配置，如图片优化、静态导出设置等。

## 开发指南

### 组件开发规范

1.  所有组件推荐使用 TypeScript 开发，确保类型安全。
2.  组件命名采用 PascalCase 风格。
3.  为组件 Props 添加明确的类型定义。
4.  优先使用 Tailwind CSS 类名进行样式开发。
5.  使用 `"use client"` 指令标记客户端组件，处理交互和状态。

### 样式开发规范

1.  优先使用 Tailwind CSS 提供的原子化类名进行样式构建。
2.  遵循移动优先的响应式设计原则，使用断点类名适配不同设备。
3.  保持颜色、间距、字体等样式元素在整个项目中的一致性。

### 页面开发规范

1.  利用 `app/layout.tsx` 作为应用的根布局，实现页面的统一结构。
2.  为页面添加适当的 SEO 元数据，使用 Next.js 内置的 Metadata API。
3.  确保页面在不同设备和屏幕尺寸上都具有良好的响应式表现。

## 部署说明

本项目基于 Next.js App Router 构建，支持多种渲染方式。默认构建会生成混合输出。如果需要纯静态导出，请在 `next.config.js` 中配置 `output: 'export'`。

1.  安装 `next-sitemap` (如果需要生成站点地图)：
    ```bash
    npm install -D next-sitemap
    ```
2.  根据需要在 `next.config.js` 中配置静态导出 (`output: 'export'`) 和站点地图生成脚本 (package.json)。
3.  构建项目：
    ```bash
    npm run build
    ```
4.  如果配置了静态导出，生成的静态文件通常在 `out` 目录 (或根据 next.config.js 配置)。
5.  将构建输出的目录部署到任何静态托管服务 (如 Vercel, Netlify, EdgeOne Pages 等)。

## 贡献指南

欢迎对本项目进行贡献！请遵循以下步骤：

1.  Fork 本项目仓库。
2.  创建你的特性分支 (`git checkout -b feature/your-amazing-feature`)。
3.  提交你的修改 (`git commit -m 'feat: 添加炫酷新功能'`)。
4.  推送到你的分支 (`git push origin feature/your-amazing-feature`)。
5.  创建一个 Pull Request 到原仓库。

## 许可证

[MIT License](LICENSE)

## 一键部署
[![Deploy with EdgeOne Pages](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://console.cloud.tencent.com/edgeone/pages/new?template=modern-website-template) 