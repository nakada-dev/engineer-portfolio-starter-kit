# Customization Guide

このガイドでは、ポートフォリオサイトのカスタマイズ方法を説明します。

## 設定ファイルでのカスタマイズ

### site.config.ts

ほとんどのカスタマイズは `site.config.ts` で行えます。

#### サイト情報

```typescript
site: {
  name: 'Portfolio',        // ヘッダーロゴに表示
  title: 'Portfolio | Your Name',  // ブラウザタブのタイトル
  description: '...',       // SEO用の説明文
  url: 'https://...',       // サイトURL（OGP用）
  locale: 'ja_JP',          // ロケール
},
```

#### プロフィール

```typescript
profile: {
  name: 'Your Name',
  title: 'エンジニア / 開発者',
  location: 'Tokyo, Japan',
  bio: `自己紹介文を書きます。
    複数行に分けることもできます。`,
  avatar: '/images/avatar.svg',
},
```

#### ソーシャルリンク

空文字を設定すると、そのリンクは非表示になります。

```typescript
social: {
  github: 'https://github.com/yourusername',
  twitter: 'https://twitter.com/yourusername',
  email: 'your@email.com',
  linkedin: '',      // 空の場合は非表示
  website: '',       // 空の場合は非表示
},
```

#### スキル

カテゴリ名は自動的にセクションタイトルになります。

```typescript
skills: {
  frontend: ['React', 'Next.js', 'TypeScript'],
  backend: ['Node.js', 'Python', 'Go'],
  mobile: ['React Native', 'Flutter'],
  infrastructure: ['AWS', 'Docker', 'Vercel'],
  tools: ['Git', 'Figma', 'Notion'],
},
```

#### 経歴

上から順に表示されます。

```typescript
experiences: [
  {
    period: '2022 - Present',
    title: 'シニアエンジニア',
    company: 'テック企業',
    description: 'Webアプリケーション開発',
  },
  // ...
],
```

#### 統計情報

ホームページに表示される統計。

```typescript
stats: {
  yearsExperience: '3+',
  technologies: '10+',
  ideas: '∞',
},
```

## テーマのカスタマイズ

### カラーの変更

`tailwind.config.ts` でプライマリカラーを変更できます。

```typescript
// tailwind.config.ts
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ...
    500: '#0ea5e9',  // メインカラー
    // ...
  },
  accent: {
    DEFAULT: '#f97316',  // アクセントカラー
  },
},
```

#### カラープリセット

以下のTailwindカラーをコピーして使用できます：

- **Sky (デフォルト)**: `#0ea5e9`
- **Blue**: `#3b82f6`
- **Violet**: `#8b5cf6`
- **Emerald**: `#10b981`
- **Rose**: `#f43f5e`

### フォントの変更

`src/app/layout.tsx` でGoogleフォントを変更できます。

```typescript
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});
```

## コンポーネントのカスタマイズ

### ナビゲーション

`site.config.ts` の `navigation` を編集します。

```typescript
navigation: [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },  // 新しいページを追加
],
```

### TechBadge のカラー

`src/components/TechBadge.tsx` で技術ごとの色を追加できます。

```typescript
const colors: Record<string, string> = {
  'React': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'Vue.js': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  // 新しい技術を追加
  'Svelte': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
};
```

## ページの追加

### 新しいページを作成

`src/app/` ディレクトリにフォルダとファイルを作成します。

```bash
# 例: /blog ページを追加
mkdir -p src/app/blog
touch src/app/blog/page.tsx
```

```tsx
// src/app/blog/page.tsx
export default function BlogPage() {
  return (
    <div className="bg-gradient-mesh bg-grid min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-white">
          Blog
        </h1>
      </div>
    </div>
  );
}
```

## 高度なカスタマイズ

### グローバルスタイル

`src/app/globals.css` でカスタムスタイルを追加できます。

```css
@layer components {
  .my-custom-class {
    @apply bg-white/10 rounded-lg p-4;
  }
}
```

### アニメーション

`tailwind.config.ts` でアニメーションを追加できます。

```typescript
animation: {
  'custom-bounce': 'customBounce 1s infinite',
},
keyframes: {
  customBounce: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  },
},
```
