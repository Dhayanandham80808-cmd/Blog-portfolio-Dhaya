import React, { useState, useEffect } from 'react';
import { getBlogs, likeBlog } from '../services/api';
import BlogModal from './BlogModal';
import BlogCreateModal from './BlogCreateModal';
import {
  BookOpen,
  Search,
  PlusCircle,
  Heart,
  MessageSquare,
  Clock,
  Calendar,
  User,
  ArrowRight,
  Sparkles,
  RefreshCw
} from 'lucide-react';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [readingBlog, setReadingBlog] = useState(null);
  const [isCreatingBlog, setIsCreatingBlog] = useState(false);

  const categories = ['All', 'AI & Machine Learning', 'Full Stack Web', 'Embedded & IoT'];

  const fetchBlogsList = async () => {
    try {
      setLoading(true);
      const data = await getBlogs();
      setBlogs(data);
    } catch (err) {
      console.error('Error loading blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogsList();
  }, []);

  const handleLike = async (e, blogId) => {
    e.stopPropagation();
    try {
      const updated = await likeBlog(blogId);
      setBlogs(prev => prev.map(b => b._id === blogId ? { ...b, likes: updated.likes } : b));
    } catch (err) {
      console.error('Like failed:', err);
    }
  };

  const filteredBlogs = blogs.filter(b => {
    const matchesCategory = selectedCategory === 'All' || b.category?.toLowerCase() === selectedCategory.toLowerCase();
    const query = searchTerm.toLowerCase();
    const matchesSearch = !searchTerm ||
      (b.newTitle && b.newTitle.toLowerCase().includes(query)) ||
      (b.summary && b.summary.toLowerCase().includes(query)) ||
      (b.newContent && b.newContent.toLowerCase().includes(query)) ||
      (b.tags && b.tags.some(t => t.toLowerCase().includes(query)));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blogs" className="py-20 bg-slate-100/50 dark:bg-navy-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              Technical Articles &amp; Insights
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Dhayanandham's <span className="gradient-text">Tech Blog</span> 📚
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-2 max-w-xl">
              Deep dives into federated learning, neural backpropagation, responsive web architectures, and embedded accessibility hardware.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCreatingBlog(true)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-500/25 hover:-translate-y-0.5 transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Write New Article</span>
            </button>
            <button
              onClick={fetchBlogsList}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-colors"
              title="Refresh Articles"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="glass-card p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title, tag, or topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:border-orange-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blogs Feed */}
        {loading ? (
          <div className="py-20 text-center">
            <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm font-semibold text-slate-500">Loading articles from MongoDB...</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="glass-card py-16 px-6 text-center rounded-3xl border border-slate-200 dark:border-slate-800">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No articles found</h3>
            <p className="text-sm text-slate-500 mt-1 mb-4">
              Try adjusting your search terms or publish a new article using the button above.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="px-4 py-2 rounded-xl bg-orange-500 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog._id}
                onClick={() => setReadingBlog(blog)}
                className="glass-card rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Cover Image */}
                  {blog.coverImage && (
                    <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                      <img
                        src={blog.coverImage}
                        alt={blog.newTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-extrabold px-3 py-1 rounded-lg bg-orange-500 text-white shadow-md">
                          {blog.category || 'Tech'}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-950/70 text-white backdrop-blur-xs flex items-center gap-1">
                          <Clock className="w-3 h-3 text-orange-400" />
                          {blog.readTime || '4 min read'}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Date & Author */}
                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {blog.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
                        <User className="w-3.5 h-3.5 text-orange-500" />
                        {blog.author || 'Dhayanandham A'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors leading-snug">
                      {blog.newTitle}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 leading-relaxed">
                      {blog.summary || blog.newContent?.slice(0, 160) + '...'}
                    </p>

                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {blog.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer bar */}
                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <button
                      onClick={(e) => handleLike(e, blog._id)}
                      className="flex items-center gap-1.5 hover:text-rose-500 transition-colors p-1"
                      title="Like Article"
                    >
                      <Heart className="w-4 h-4 text-rose-500 fill-rose-500/30 hover:fill-rose-500" />
                      <span>{blog.likes || 0} Likes</span>
                    </button>

                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4 text-amber-500" />
                      <span>{blog.comments?.length || 0} Comments</span>
                    </span>
                  </div>

                  <span className="text-xs font-bold text-orange-600 dark:text-orange-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article &rarr;
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* Modals */}
      {readingBlog && (
        <BlogModal
          blog={readingBlog}
          onClose={() => setReadingBlog(null)}
          onBlogUpdated={fetchBlogsList}
        />
      )}

      {isCreatingBlog && (
        <BlogCreateModal
          onClose={() => setIsCreatingBlog(false)}
          onBlogCreated={fetchBlogsList}
        />
      )}
    </section>
  );
}

export default Blogs;
