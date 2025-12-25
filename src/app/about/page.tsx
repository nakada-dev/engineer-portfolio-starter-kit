import { Metadata } from 'next';
import Image from 'next/image';
import { Github, Twitter, Mail, MapPin, Briefcase, Linkedin, Globe } from 'lucide-react';
import { TechBadge } from '@/components/TechBadge';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About',
  description: '自己紹介とスキルセット',
};

export default function AboutPage() {
  const { profile, social, skills, experiences } = siteConfig;

  // ソーシャルリンクの構築
  const socialLinks = [
    social.github && { href: social.github, icon: Github, label: 'GitHub' },
    social.twitter && { href: social.twitter, icon: Twitter, label: 'Twitter' },
    social.linkedin && { href: social.linkedin, icon: Linkedin, label: 'LinkedIn' },
    social.website && { href: social.website, icon: Globe, label: 'Website' },
    social.email && { href: `mailto:${social.email}`, icon: Mail, label: 'Email' },
  ].filter(Boolean) as { href: string; icon: typeof Github; label: string }[];

  return (
    <div className="bg-gradient-mesh bg-grid min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Profile Section */}
        <section className="glass rounded-2xl p-8 mb-10">
          <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
            {/* Avatar */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary-500/30 flex-shrink-0">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Info */}
            <div className="text-center sm:text-left flex-1">
              <h1 className="font-display text-3xl font-bold text-white mb-2">
                {profile.name}
              </h1>
              <p className="flex items-center justify-center sm:justify-start gap-2 text-primary-400 mb-4">
                <Briefcase size={18} />
                {profile.title}
              </p>
              <p className="flex items-center justify-center sm:justify-start gap-2 text-gray-500 mb-6">
                <MapPin size={16} />
                {profile.location}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center sm:justify-start gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="p-2 glass hover:bg-white/10 rounded-lg transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {profile.bio.trim()}
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold text-white mb-6">
            Skills
          </h2>

          <div className="grid gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="glass rounded-xl p-6">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <TechBadge key={skill} name={skill} size="md" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-6">
            Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="glass rounded-xl p-6 relative">
                {/* Timeline dot */}
                <div className="absolute left-6 -top-3 w-3 h-3 bg-primary-500 rounded-full ring-4 ring-[rgb(var(--background))]" />

                <p className="text-sm text-primary-400 font-mono mb-2">
                  {exp.period}
                </p>
                <h3 className="text-lg font-bold text-white mb-1">
                  {exp.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
