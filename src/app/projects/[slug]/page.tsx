import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Github, Calendar } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProjectBySlug, getProjectSlugs } from '@/lib/projects';
import { TechBadge } from '@/components/TechBadge';
import { categoryLabels, categoryColors } from '@/lib/types';

interface Props {
  params: Promise<{ slug: string }>;
}

// 静的パスを生成
export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

// メタデータを生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.thumbnail],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const {
    title,
    description,
    category,
    techs,
    thumbnail,
    github,
    demo,
    publishedAt,
    content,
  } = project;

  const formattedDate = new Date(publishedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-gradient-mesh bg-grid min-h-screen pt-24 pb-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          <span>プロジェクト一覧に戻る</span>
        </Link>

        {/* Header */}
        <header className="mb-10">
          {/* Category & Date */}
          <div className="flex items-center gap-4 mb-4">
            <span
              className={`
              px-3 py-1 rounded-full text-xs font-medium text-white
              ${categoryColors[category]}
            `}
            >
              {categoryLabels[category]}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-500">
              <Calendar size={14} />
              {formattedDate}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            {title}
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-400 leading-relaxed">{description}</p>
        </header>

        {/* Thumbnail */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-10 glass">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        {/* Tech Stack & Links */}
        <div className="glass rounded-2xl p-6 mb-10">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Tech Stack */}
            <div>
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                使用技術
              </h2>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <TechBadge key={tech} name={tech} size="md" />
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                リンク
              </h2>
              <div className="flex flex-wrap gap-3">
                {demo && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>デモを見る</span>
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 glass hover:bg-white/10 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <Github size={16} />
                    <span>ソースコード</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content (MDX) */}
        <div className="prose-custom">
          <MDXRemote source={content} />
        </div>

        {/* Footer Navigation */}
        <footer className="mt-16 pt-8 border-t border-white/10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>他のプロジェクトを見る</span>
          </Link>
        </footer>
      </article>
    </div>
  );
}
