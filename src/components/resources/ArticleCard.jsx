import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

export function ArticleCard({ article }) {
  return (
    <Link href={`/resources/${article.slug}`} className="block group h-full">
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col h-full">
        
        {/* Thumbnail */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Category Badge overlay */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
            {article.category}
          </div>
        </div>
        
        <div className="p-6 md:p-8 flex flex-col flex-1">
          {/* Meta */}
          <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span>&bull;</span>
            <span>{article.readTime}</span>
          </div>
          
          {/* Title */}
          <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-navy transition-colors line-clamp-2">
            {article.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 flex-1">
            {article.excerpt}
          </p>
          
          {/* Read More Link */}
          <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy mt-auto opacity-80 group-hover:opacity-100 group-hover:text-amber transition-all duration-500">
            Baca Artikel
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out" />
          </div>
        </div>
        
      </div>
    </Link>
  )
}
