import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Project, categoryLabels, categoryColors } from '@/lib/types';
import { TechBadge } from './TechBadge';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const {
    slug,
    title,
    description,
    category,
    techs,
    thumbnail,
    github,
    demo,
  } = project;

  return (
    <article
      className={`
        group relative glass rounded-2xl overflow-hidden card-hover
        ${featured ? 'md:col-span-2 md:grid md:grid-cols-2' : ''}
      `}
    >
      {/* Thumbnail */}
      <Link
        href={`/projects/${slug}`}
        className={`
          block relative overflow-hidden
          ${featured ? 'aspect-video md:aspect-auto md:h-full' : 'aspect-video'}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={
            featured
              ? '(max-width: 768px) 100vw, 66vw'
              : '(max-width: 768px) 100vw, 33vw'
          }
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span
            className={`
            px-3 py-1 rounded-full text-xs font-medium text-white
            ${categoryColors[category]}
          `}
          >
            {categoryLabels[category]}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className={`p-6 ${featured ? 'flex flex-col justify-center' : ''}`}>
        <Link href={`/projects/${slug}`}>
          <h3
            className={`
            font-display font-bold text-white group-hover:text-primary-400 transition-colors
            ${featured ? 'text-2xl mb-3' : 'text-xl mb-2'}
          `}
          >
            {title}
          </h3>
        </Link>

        <p
          className={`
          text-gray-400 line-clamp-2
          ${featured ? 'text-base mb-4' : 'text-sm mb-3'}
        `}
        >
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techs.slice(0, featured ? 6 : 4).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
          {techs.length > (featured ? 6 : 4) && (
            <span className="text-xs text-gray-500 self-center">
              +{techs.length - (featured ? 6 : 4)}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-auto">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-primary-400 hover:text-primary-300 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
