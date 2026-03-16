import { FiExternalLink } from 'react-icons/fi';

export default function BlogCard({ article }) {
  return (
    <a href={article.href} target="_blank" rel="noopener noreferrer" style={{background: 'var(--surface)', border: '1px solid var(--border)'}} className="rounded-2xl p-6 flex flex-col gap-4 hover:border-[#1e6fff] transition-all duration-300 no-underline group">

      <div className="flex items-center justify-between">
        <span className="text-[#1e6fff] text-xs tracking-widest">
          {article.number}
        </span>
        <span style={{border: '1px solid var(--border)'}} className="text-[#8899aa] text-xs px-3 py-1 rounded-full">
          {article.platform}
        </span>
      </div>

      <h3 style={{fontFamily: 'var(--font-syne)', fontWeight: 700}} className="text-lg text-[#f0f4ff] leading-snug group-hover:text-[#1e6fff] transition-colors duration-300">
        {article.title}
      </h3>

      <p className="text-[#8899aa] text-xs leading-relaxed flex-1">
        {article.summary}
      </p>

      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span key={tag} style={{background: 'var(--border)', color: 'var(--accent2)'}} className="text-xs px-3 py-1 rounded-full tracking-widest">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-2">
        <span className="text-[#8899aa] text-xs">{article.date}</span>
        <FiExternalLink size={14} className="text-[#8899aa] group-hover:text-[#1e6fff] transition-colors duration-300" />
      </div>

    </a>
  );
}