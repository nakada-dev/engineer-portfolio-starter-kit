import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-gradient-mesh bg-grid min-h-screen pt-24 pb-20 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-display text-8xl font-bold text-gradient mb-4">
          404
        </h1>
        <h2 className="font-display text-2xl font-bold text-white mb-4">
          ページが見つかりません
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          お探しのページは存在しないか、移動された可能性があります。
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-full transition-all"
        >
          <Home size={18} />
          <span>ホームに戻る</span>
        </Link>
      </div>
    </div>
  );
}
