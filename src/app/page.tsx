import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getFeaturedProjects, getAllProjects } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { siteConfig } from '@/lib/config';

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const allProjects = getAllProjects();
  const displayProjects =
    featuredProjects.length > 0
      ? featuredProjects.slice(0, 3)
      : allProjects.slice(0, 3);

  return (
    <div className="bg-gradient-mesh bg-grid min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-400 mb-8 animate-fade-in">
              <Sparkles size={16} className="text-accent" />
              <span>Welcome to my portfolio</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up">
              <span className="text-white">個人開発で</span>
              <br />
              <span className="text-gradient">アイデアを形に。</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 animate-slide-up animation-delay-100">
              WebアプリからモバイルアプリまでⅮ、 様々なプロダクトを開発しています。
              <br className="hidden sm:block" />
              新しい技術を学び、課題を解決するプロダクトを作ることが好きです。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-200">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-full transition-all hover:gap-3"
              >
                <span>プロジェクトを見る</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 glass hover:bg-white/10 text-white font-medium rounded-full transition-all"
              >
                <span>自己紹介</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {displayProjects.length > 0 && (
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-display text-3xl font-bold text-white mb-2">
                  Featured Projects
                </h2>
                <p className="text-gray-400">注目のプロジェクト</p>
              </div>
              <Link
                href="/projects"
                className="hidden sm:flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
              >
                <span>すべて見る</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {displayProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  featured={index === 0}
                />
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
              >
                <span>すべてのプロジェクトを見る</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: allProjects.length.toString(), label: 'Projects' },
              { value: siteConfig.stats.yearsExperience, label: 'Years Experience' },
              { value: siteConfig.stats.technologies, label: 'Technologies' },
              { value: siteConfig.stats.ideas, label: 'Ideas' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
