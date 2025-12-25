interface TechBadgeProps {
  name: string;
  size?: 'sm' | 'md';
}

// 技術名に応じた色を返す（一部の主要技術のみカスタム色）
function getTechColor(name: string): string {
  const colors: Record<string, string> = {
    // Frontend
    React: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    'Next.js': 'bg-white/10 text-white border-white/20',
    'Vue.js': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    TypeScript: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    JavaScript: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Tailwind CSS': 'bg-teal-500/20 text-teal-400 border-teal-500/30',

    // Mobile
    'React Native': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    Flutter: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
    Swift: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    Kotlin: 'bg-purple-500/20 text-purple-400 border-purple-500/30',

    // Backend
    'Node.js': 'bg-green-500/20 text-green-400 border-green-500/30',
    Python: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    Go: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    Rust: 'bg-orange-500/20 text-orange-400 border-orange-500/30',

    // Database
    PostgreSQL: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    MySQL: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    MongoDB: 'bg-green-500/20 text-green-400 border-green-500/30',
    Redis: 'bg-red-500/20 text-red-400 border-red-500/30',

    // Cloud & Infrastructure
    AWS: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    GCP: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    Firebase: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    Vercel: 'bg-white/10 text-white border-white/20',
    Docker: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  };

  return colors[name] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
}

export function TechBadge({ name, size = 'sm' }: TechBadgeProps) {
  const colorClass = getTechColor(name);

  return (
    <span
      className={`
        inline-flex items-center border rounded-full font-mono
        ${colorClass}
        ${size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'}
      `}
    >
      {name}
    </span>
  );
}
