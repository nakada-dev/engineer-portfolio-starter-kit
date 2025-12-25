import { Metadata } from 'next';
import { getAllProjects } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { categoryLabels, ProjectFrontmatter } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Projects',
  description: '個人開発で作成したWebアプリ・モバイルアプリの一覧',
};

// カテゴリーフィルター
const categories: Array<{
  value: ProjectFrontmatter['category'] | 'all';
  label: string;
}> = [
  { value: 'all', label: 'すべて' },
  { value: 'web', label: categoryLabels.web },
  { value: 'mobile', label: categoryLabels.mobile },
  { value: 'other', label: categoryLabels.other },
];

interface Props {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProjectsPage({ searchParams }: Props) {
  const params = await searchParams;
  const allProjects = getAllProjects();
  const selectedCategory = params.category || 'all';

  const filteredProjects =
    selectedCategory === 'all'
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-gradient-mesh bg-grid min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-display text-4xl font-bold text-white mb-4">
            Projects
          </h1>
          <p className="text-gray-400 max-w-2xl">
            個人開発で作成したプロダクトの一覧です。
            それぞれのプロジェクトをクリックすると詳細を確認できます。
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <a
              key={cat.value}
              href={
                cat.value === 'all'
                  ? '/projects'
                  : `/projects?category=${cat.value}`
              }
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all
                ${
                  selectedCategory === cat.value
                    ? 'bg-primary-500 text-white'
                    : 'glass text-gray-400 hover:text-white hover:bg-white/10'
                }
              `}
            >
              {cat.label}
            </a>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">
              このカテゴリーにはまだプロジェクトがありません。
            </p>
            <a
              href="/projects"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              すべてのプロジェクトを見る
            </a>
          </div>
        )}

        {/* Project Count */}
        <div className="mt-12 text-center text-sm text-gray-500">
          {filteredProjects.length} プロジェクト
        </div>
      </div>
    </div>
  );
}
