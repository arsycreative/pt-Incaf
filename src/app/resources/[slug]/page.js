import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ChevronLeft } from 'lucide-react'
import { ARTICLES } from '@/data/articles'
import { ArticleCard } from '@/components/resources/ArticleCard'

// Generate static params for the blog posts
export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }))
}

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const article = ARTICLES.find((a) => a.slug === resolvedParams.slug)
  if (!article) return { title: 'Artikel Tidak Ditemukan' }
  return {
    title: `${article.title} — PT. Incaf Nutri Solusindo`,
    description: article.excerpt,
  }
}

// A simple utility to convert standard markdown into Tailwind typography HTML
// Note: In a production CMS, we would use a library like marked, react-markdown, or next-mdx-remote
function parseMarkdownToHTML(markdownText) {
  let html = markdownText
  
  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')
  
  // Bold & Italic
  html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
  html = html.replace(/\*(.*)\*/gim, '<em>$1</em>')
  
  // Bullet Lists (basic handling)
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>')
  // Wrap contiguous <li> elements in <ul> (simple regex for basic lists)
  html = html.replace(/(<li>.*<\/li>(\n<li>.*<\/li>)*)/gim, '<ul>$1</ul>')
  
  // Paragraphs (double newlines)
  // Split by double newline, wrap in <p>, ignore empty blocks
  const blocks = html.split(/\n\s*\n/)
  html = blocks.map(block => {
    if (block.trim() === '' || block.startsWith('<h') || block.startsWith('<ul')) {
      return block
    }
    return `<p>${block.trim()}</p>`
  }).join('\n')

  return html
}

export default async function ArticlePage({ params }) {
  const resolvedParams = await params
  const { slug } = resolvedParams
  
  const article = ARTICLES.find((a) => a.slug === slug)
  if (!article) notFound()

  // Get other articles for "Baca Artikel Lainnya"
  const otherArticles = ARTICLES.filter(a => a.slug !== slug).slice(0, 3)

  const articleHTML = parseMarkdownToHTML(article.content)

  return (
    <article className="pt-24 bg-white min-h-screen">
      
      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 md:px-8 py-16 text-center">
        <Link href="/resources" className="inline-flex items-center gap-2 text-navy hover:text-amber font-semibold text-sm transition-colors mb-8">
          <ChevronLeft className="w-4 h-4" />
          Kembali ke Resources
        </Link>
        
        <div className="flex items-center justify-center gap-4 text-sm font-semibold text-gray-500 mb-6 uppercase tracking-wider">
          <span className="text-green">{article.category}</span>
          <span>&bull;</span>
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {article.date}</span>
          <span>&bull;</span>
          <span>{article.readTime}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
          {article.title}
        </h1>
        
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {article.excerpt}
        </p>
      </header>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-16">
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 pb-24 markdown-content text-lg text-gray-600 leading-relaxed">
        <style dangerouslySetInnerHTML={{__html: `
          .markdown-content h2 { font-size: 1.875rem; font-weight: 700; color: #111827; margin-top: 2.5rem; margin-bottom: 1rem; }
          .markdown-content h3 { font-size: 1.5rem; font-weight: 700; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem; }
          .markdown-content p { margin-bottom: 1.5rem; }
          .markdown-content ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; }
          .markdown-content li { margin-bottom: 0.5rem; }
          .markdown-content strong { color: #111827; font-weight: 700; }
        `}} />
        <div dangerouslySetInnerHTML={{ __html: articleHTML }} />
      </div>

      {/* More Articles Section */}
      {otherArticles.length > 0 && (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Baca Artikel Lainnya</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherArticles.map((otherArticle) => (
                <ArticleCard key={otherArticle.slug} article={otherArticle} />
              ))}
            </div>
          </div>
        </section>
      )}

    </article>
  )
}
