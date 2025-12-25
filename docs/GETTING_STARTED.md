# Getting Started

このガイドでは、ポートフォリオサイトキットのセットアップ方法を説明します。

## 前提条件

以下がインストールされていることを確認してください：

- **Node.js** 18.0 以上
- **npm** または **yarn** または **pnpm**
- **Git**（推奨）

## インストール

### 1. リポジトリのクローン

```bash
git clone https://github.com/yourusername/engineer-portfolio-starter-kit.git
cd engineer-portfolio-starter-kit
```

または、GitHubの「Use this template」ボタンから新しいリポジトリを作成してください。

### 2. 依存関係のインストール

```bash
npm install
# または
yarn install
# または
pnpm install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開くと、サイトが表示されます。

## 初期設定

### site.config.ts の編集

プロジェクトルートにある `site.config.ts` を開いて、あなたの情報に編集します。

```typescript
export const siteConfig = {
  // サイト情報
  site: {
    name: 'Portfolio',
    title: 'Portfolio | あなたの名前',
    description: 'あなたのサイトの説明',
    url: 'https://your-domain.com',
  },

  // プロフィール
  profile: {
    name: 'あなたの名前',
    title: 'エンジニア / 開発者',
    location: 'Tokyo, Japan',
    bio: `ここに自己紹介を書きます。
      複数行で書くこともできます。`,
    avatar: '/images/avatar.svg',
  },

  // ソーシャルリンク
  social: {
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourusername',
    email: 'your@email.com',
  },

  // スキル
  skills: {
    frontend: ['React', 'TypeScript', 'Next.js'],
    backend: ['Node.js', 'Python'],
    // ...
  },

  // 経歴
  experiences: [
    {
      period: '2022 - Present',
      title: 'エンジニア',
      company: '会社名',
      description: '担当業務',
    },
  ],

  // ホームページの統計情報
  stats: {
    yearsExperience: '3+',
    technologies: '10+',
    ideas: '∞',
  },
};
```

### プロフィール画像の設定

`public/images/avatar.svg` をあなたの画像に置き換えます。

- 推奨サイズ: 400x400px
- 対応形式: SVG, PNG, JPG, WebP
- 円形にクリップされて表示されます

## プロジェクトの追加

### 1. MDXファイルの作成

`content/projects/` ディレクトリに新しい `.mdx` ファイルを作成します。

```bash
# テンプレートをコピー
cp content/projects/_template.mdx content/projects/my-awesome-project.mdx
```

ファイル名がURLになります（例: `my-awesome-project.mdx` → `/projects/my-awesome-project`）

### 2. フロントマターの編集

```yaml
---
title: "プロジェクト名"
description: "プロジェクトの説明"
category: "web"  # web | mobile | other
techs: ["React", "TypeScript", "Next.js"]
thumbnail: "/images/projects/my-project.png"
github: "https://github.com/yourusername/project"
demo: "https://project.example.com"
featured: true  # ホームページに表示
publishedAt: "2024-01-15"
---
```

### 3. コンテンツの記述

フロントマター以降に、Markdownでプロジェクトの詳細を記述します。

```markdown
## 概要

プロジェクトの概要を書きます。

## 主な機能

- 機能1
- 機能2

## 技術的なポイント

技術的な工夫について説明します。
```

### 4. サムネイル画像の追加

`public/images/projects/` にサムネイル画像を追加します。

- 推奨サイズ: 1200x630px（16:9）
- OGP画像としても使用されます

## ビルドと確認

```bash
# 本番ビルド
npm run build

# 本番サーバーでプレビュー
npm run start
```

## 次のステップ

- [Customization](./CUSTOMIZATION.md) - デザインのカスタマイズ方法
- [Content Guide](./CONTENT_GUIDE.md) - コンテンツ作成の詳細ガイド
