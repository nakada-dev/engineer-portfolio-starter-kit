import Link from 'next/link';
import { Github, Twitter, Mail, Linkedin, Globe } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // ソーシャルリンクの構築（空でないもののみ）
  const socialLinks = [
    siteConfig.social.github && {
      href: siteConfig.social.github,
      icon: Github,
      label: 'GitHub',
    },
    siteConfig.social.twitter && {
      href: siteConfig.social.twitter,
      icon: Twitter,
      label: 'Twitter',
    },
    siteConfig.social.linkedin && {
      href: siteConfig.social.linkedin,
      icon: Linkedin,
      label: 'LinkedIn',
    },
    siteConfig.social.website && {
      href: siteConfig.social.website,
      icon: Globe,
      label: 'Website',
    },
    siteConfig.social.email && {
      href: `mailto:${siteConfig.social.email}`,
      icon: Mail,
      label: 'Email',
    },
  ].filter(Boolean) as { href: string; icon: typeof Github; label: string }[];

  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="font-display font-bold text-lg tracking-tight hover:text-primary-400 transition-colors"
            >
              <span className="text-gradient">{siteConfig.site.name}</span>
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              © {currentYear} {siteConfig.profile.name}. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-all"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
