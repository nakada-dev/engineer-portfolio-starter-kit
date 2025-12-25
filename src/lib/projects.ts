import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project, ProjectFrontmatter } from './types';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

/**
 * 全プロジェクトのスラッグ一覧を取得
 * （_で始まるファイルは除外：テンプレートファイル用）
 */
export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx') && !fileName.startsWith('_'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

/**
 * スラッグからプロジェクトデータを取得
 */
export function getProjectBySlug(slug: string): Project | null {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as ProjectFrontmatter),
  };
}

/**
 * 全プロジェクトデータを取得（日付順でソート）
 */
export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => project !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return projects;
}

/**
 * 注目プロジェクトを取得
 */
export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

/**
 * カテゴリー別にプロジェクトを取得
 */
export function getProjectsByCategory(
  category: ProjectFrontmatter['category']
): Project[] {
  return getAllProjects().filter((project) => project.category === category);
}

/**
 * 全ての使用技術タグを取得
 */
export function getAllTechs(): string[] {
  const projects = getAllProjects();
  const techSet = new Set<string>();

  projects.forEach((project) => {
    project.techs.forEach((tech) => techSet.add(tech));
  });

  return Array.from(techSet).sort();
}
