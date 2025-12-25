// ============================================================================
// 型定義
// ============================================================================

// プロジェクトのフロントマター型定義
export interface ProjectFrontmatter {
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'other';
  techs: string[];
  thumbnail: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  publishedAt: string;
}

// プロジェクトデータ全体の型
export interface Project extends ProjectFrontmatter {
  slug: string;
  content: string;
}

// カテゴリーのラベルマッピング
export const categoryLabels: Record<ProjectFrontmatter['category'], string> = {
  web: 'Webアプリ',
  mobile: 'モバイルアプリ',
  other: 'その他',
};

// カテゴリーの色マッピング
export const categoryColors: Record<ProjectFrontmatter['category'], string> = {
  web: 'bg-blue-500',
  mobile: 'bg-green-500',
  other: 'bg-purple-500',
};
