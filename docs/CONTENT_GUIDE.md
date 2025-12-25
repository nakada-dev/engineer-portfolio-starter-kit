# Content Guide

このガイドでは、プロジェクトコンテンツの作成方法を説明します。

## プロジェクトの追加

### ファイルの作成

`content/projects/` ディレクトリに `.mdx` ファイルを作成します。

```bash
# テンプレートからコピー
cp content/projects/_template.mdx content/projects/my-project.mdx
```

### ファイル名の命名規則

- 英数字とハイフンのみ使用
- 小文字推奨
- ファイル名がURLスラッグになります

例:
- `my-project.mdx` → `/projects/my-project`
- `react-todo-app.mdx` → `/projects/react-todo-app`

### アンダースコアファイル

ファイル名が `_` で始まるファイルは公開されません。

```
_template.mdx  → 非公開（テンプレート用）
_draft.mdx     → 非公開（下書き用）
my-project.mdx → 公開
```

## フロントマター

MDXファイルの先頭に、YAML形式でメタデータを記述します。

### 必須フィールド

```yaml
---
title: "プロジェクト名"
description: "プロジェクトの短い説明（1〜2文）"
category: "web"
techs: ["React", "TypeScript"]
thumbnail: "/images/projects/my-project.png"
publishedAt: "2024-01-15"
---
```

| フィールド | 型 | 説明 |
|-----------|------|------|
| `title` | string | プロジェクト名 |
| `description` | string | 短い説明文 |
| `category` | string | `web`, `mobile`, `other` のいずれか |
| `techs` | string[] | 使用技術のリスト |
| `thumbnail` | string | サムネイル画像のパス |
| `publishedAt` | string | 公開日（YYYY-MM-DD形式） |

### オプションフィールド

```yaml
---
# ... 必須フィールド ...
featured: true
github: "https://github.com/user/repo"
demo: "https://demo.example.com"
---
```

| フィールド | 型 | 説明 |
|-----------|------|------|
| `featured` | boolean | `true` でホームページに表示 |
| `github` | string | GitHubリポジトリURL |
| `demo` | string | デモサイトURL |

## カテゴリー

3種類のカテゴリーが使用可能です。

| 値 | 表示名 | 用途 |
|---|--------|------|
| `web` | Webアプリ | Webサイト、Webアプリケーション |
| `mobile` | モバイルアプリ | iOS、Android、React Native等 |
| `other` | その他 | CLI、ライブラリ、ツール等 |

## MDXコンテンツ

フロントマター以降に、Markdown形式でコンテンツを記述します。

### 基本的な書き方

```markdown
## 概要

プロジェクトの概要を書きます。

## 主な機能

- **機能1**: 説明
- **機能2**: 説明
- **機能3**: 説明

## 技術スタック

1. フロントエンド: React + TypeScript
2. バックエンド: Node.js
3. データベース: PostgreSQL

## コード例

\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`

## 学んだこと

このプロジェクトを通じて学んだことを書きます。
```

### 見出しレベル

- `## 見出し2` - セクションタイトル（下線付き）
- `### 見出し3` - サブセクション
- `####` 以降 - 細分化が必要な場合

### リンク

```markdown
[リンクテキスト](https://example.com)
```

### 画像

```markdown
![代替テキスト](/images/projects/screenshot.png)
```

### コードブロック

```markdown
\`\`\`言語名
コードを記述
\`\`\`
```

対応言語: `typescript`, `javascript`, `python`, `go`, `rust`, `bash`, `json`, `yaml` など

### 引用

```markdown
> 引用テキストを書きます。
```

## サムネイル画像

### 推奨仕様

- **サイズ**: 1200 x 630px（16:9）
- **形式**: PNG, JPG, SVG, WebP
- **配置場所**: `public/images/projects/`

### OGP対応

サムネイル画像はSNSシェア時のOGP画像としても使用されます。

### プレースホルダー

画像がない場合は、同梱の `placeholder.svg` を使用できます。

```yaml
thumbnail: "/images/projects/placeholder.svg"
```

## ベストプラクティス

### 良いプロジェクト説明

1. **概要を明確に** - 何を解決するプロジェクトか
2. **機能を列挙** - 主要な機能を箇条書き
3. **技術的なポイント** - 工夫した点、チャレンジした点
4. **学び** - 得られた知見
5. **今後の展望**（任意） - 追加予定の機能

### 避けるべきこと

- 長すぎる説明文
- 技術用語の乱用
- 機密情報の記載
- 動作しないデモリンク

## トラブルシューティング

### プロジェクトが表示されない

1. ファイル名が `_` で始まっていないか確認
2. ファイル拡張子が `.mdx` か確認
3. フロントマターの形式が正しいか確認
4. 開発サーバーを再起動

### 画像が表示されない

1. パスが `/images/...` から始まっているか確認
2. ファイルが `public/images/` に存在するか確認
3. ファイル名の大文字小文字を確認

### MDXのパースエラー

1. フロントマターの `---` が正しく閉じられているか
2. YAML構文が正しいか（インデント、クォート等）
3. 特殊文字がエスケープされているか
