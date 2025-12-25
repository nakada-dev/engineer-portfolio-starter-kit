# Engineer Portfolio Starter Kit

エンジニア向けポートフォリオサイトのスターターキットです。
設定ファイルを編集するだけで、あなただけのポートフォリオサイトを簡単に作成できます。

## Features

- **モダンなデザイン** - グラスモーフィズムとグラデーションを活用したダークテーマ
- **簡単カスタマイズ** - `site.config.ts` を編集するだけで設定完了
- **MDX対応** - Markdownでプロジェクトを追加可能
- **レスポンシブ** - モバイルフレンドリーなデザイン
- **SEO最適化** - メタデータ自動生成
- **高速表示** - Next.js 14 の静的生成

## Quick Start

### 1. プロジェクトのセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで http://localhost:3000 を開いてサイトを確認できます。

### 2. 設定のカスタマイズ

`site.config.ts` を開いて、あなたの情報に編集します：

```typescript
export const siteConfig = {
  // プロフィール情報
  profile: {
    name: 'Your Name',        // ← あなたの名前
    title: 'エンジニア',        // ← 肩書き
    location: 'Tokyo, Japan', // ← 所在地
    bio: '自己紹介...',        // ← 自己紹介文
  },

  // ソーシャルリンク
  social: {
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourusername',
    email: 'your@email.com',
  },

  // スキル・経歴なども設定可能
  // ...
};
```

### 3. プロジェクトの追加

`content/projects/` ディレクトリに新しい `.mdx` ファイルを作成：

```bash
# テンプレートをコピー
cp content/projects/_template.mdx content/projects/my-project.mdx
```

MDXファイルを編集してプロジェクト情報を記載します。

### 4. デプロイ

Vercelにデプロイする場合：

```bash
npm run build  # ビルド確認
```

GitHubにプッシュ後、[Vercel](https://vercel.com)でリポジトリを連携すれば自動デプロイされます。

## Project Structure

```
engineer-portfolio-starter-kit/
├── site.config.ts          # 設定ファイル（ここを編集！）
├── content/
│   └── projects/           # プロジェクトMDXファイル
│       ├── _template.mdx   # テンプレート
│       └── sample-project.mdx
├── public/
│   └── images/
│       ├── avatar.svg      # プロフィール画像
│       └── projects/       # プロジェクトサムネイル
├── src/
│   ├── app/                # Next.js App Router
│   ├── components/         # Reactコンポーネント
│   └── lib/                # ユーティリティ
└── docs/                   # 詳細ドキュメント
```

## Documentation

詳細なドキュメントは `docs/` ディレクトリを参照してください：

- [Getting Started](docs/GETTING_STARTED.md) - セットアップガイド
- [Customization](docs/CUSTOMIZATION.md) - カスタマイズ方法
- [Content Guide](docs/CONTENT_GUIDE.md) - コンテンツ作成ガイド

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## License

MIT License - 自由にご利用ください。

---

Made with Next.js and Tailwind CSS
