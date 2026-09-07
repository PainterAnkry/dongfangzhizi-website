# 东方栀子同人音源官网 · 现代化重构

「东方栀子」（Dongfang Zhizi）同人音源官方网站的现代化静态站重构版本。暗色「涅槃荣光」主题 —— 深夜紫黑底色、熔金火焰渐变、玻璃拟态卡片与浮游花瓣动效。

> ✿ 东方栀子 · 披戴涅槃的荣光 ✿

## 页面结构

| 页面 | 说明 |
|---|---|
| `index.html` | 首页：全屏英雄轮播（历年拜年纪）、四组声库卡片、拜年纪回顾、CTA |
| `about.html` | 关于栀子：角色介绍、四组音源档案、B 站空间、常见问题 |
| `download.html` | 音源下载区：五组音源选项卡（旧音源 / Blossom / Nectar / Era / Shine）、立绘图库、提取码复制 |
| `tools.html` | 创作软件：OpenUTAU / Diffsinger 入口 |
| `rules.html` | 音源使用规约 V1.0.0 |
| `mmd.html` | MMD 模型配布导航（建设中占位） |

```
├── index.html / about.html / download.html / tools.html / rules.html / mmd.html
└── assets/
    ├── css/style.css   # 全站样式（主题变量 / 响应式 / 动效）
    ├── js/main.js      # 轮播、选项卡、滚动显现、提取码复制
    └── img/            # 全部图片（已本地化，无外部热链）
```

## 本地预览

无任何构建依赖，二选一：

```bash
# 方式一：直接双击 index.html 用浏览器打开

# 方式二：起本地服务（推荐）
python -m http.server 8765
# 访问 http://127.0.0.1:8765/index.html
```

## 部署

- 纯静态站点，无需 PHP / 数据库 / Node 构建
- 解压到任意静态主机根目录即可（Nginx / Apache / IIS / OSS / COS / GitHub Pages 等）
- 默认文档设为 `index.html`，建议启用 HTTPS（提取码「复制」按钮在 HTTPS 下体验最佳，HTTP 下自动降级）

## 相关链接

- [Era & Shine 音源管理团队（B 站）](https://space.bilibili.com/62351857)
- [Blossom & Nectar 音源管理团队（B 站）](https://space.bilibili.com/3493088064440814)
- [东方栀子相关收集站 · 东站（B 站）](https://space.bilibili.com/356626629)
- 问题反馈：`dongfangzhizi_f@foxmail.com`

## 声明

本站为同人性质网站。东方栀子同人音源由栀子同人社出品并免费配布，站内图片、文案与角色版权归原权利方所有。使用音源前请阅读 [《音源使用规约》](https://dongfangzhizi.top/rules/)。
