import React, { useState } from 'react';
import {
  X,
  Heart,
  MessageSquare,
  Share2,
  Calendar,
  Clock,
  User,
  Send,
  Check
} from 'lucide-react';
import { likeBlog, addComment } from '../services/api';

function BlogModal({ blog, onClose, onBlogUpdated }) {
  const [likes, setLikes] = useState(blog.likes || 0);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState(blog.comments || []);
  const [newCommentAuthor, setNewCommentAuthor] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [copied, setCopied] = useState(false);
  const [submittingComment, setSubmittingComment] = useState(false);

  if (!blog) return null;

  const handleLikeClick = async () => {
    if (hasLiked) return;
    try {
      setLikes(prev => prev + 1);
      setHasLiked(true);
      await likeBlog(blog._id);
      if (onBlogUpdated) onBlogUpdated();
    } catch (err) {
      console.error('Failed to like blog:', err);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    setSubmittingComment(true);
    try {
      const payload = {
        author: newCommentAuthor.trim() || 'Reader',
        text: newCommentText.trim()
      };
      const res = await addComment(blog._id, payload);
      if (res && res.comments) {
        setComments(res.comments);
      } else {
        setComments(prev => [
          ...prev,
          {
            id: Date.now().toString(),
            author: payload.author,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            text: payload.text
          }
        ]);
      }
      setNewCommentText('');
      setNewCommentAuthor('');
      if (onBlogUpdated) onBlogUpdated();
    } catch (err) {
      console.error('Failed to add comment:', err);
    } finally {
      setSubmittingComment(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-700/80 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col">
        
        {/* Sticky Close & Share Header */}
        <div className="sticky top-0 z-10 px-6 py-4 bg-white/95 dark:bg-navy-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400">
              {blog.category || 'Tech'}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">
              {blog.readTime || '4 min read'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              title="Copy Link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Title & Metadata */}
          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug mb-4">
              {blog.newTitle}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5 font-medium text-slate-800 dark:text-slate-200">
                <User className="w-4 h-4 text-orange-500" />
                <span>{blog.author || 'Dhayanandham A'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime || '4 min read'}</span>
              </div>
            </div>
          </div>

          {/* Cover Image if available */}
          {blog.coverImage && (
            <div className="rounded-2xl overflow-hidden max-h-72 w-full">
              <img
                src={blog.coverImage}
                alt={blog.newTitle}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Formatted Article Text */}
          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base whitespace-pre-line font-sans">
            {blog.newContent}
          </div>

          {/* Author Card */}
          <div className="mt-8 p-5 rounded-2xl bg-orange-500/5 dark:bg-orange-500/10 border border-orange-500/20 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Written by {blog.author || 'Dhayanandham A'}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Full Stack Developer &amp; AI/ML Engineer • Puducherry
              </p>
            </div>

            <button
              onClick={handleLikeClick}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-sm ${
                hasLiked
                  ? 'bg-rose-500 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-rose-400 hover:text-rose-500'
              }`}
            >
              <Heart className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} />
              <span>{likes} Likes</span>
            </button>
          </div>

          {/* Comments Section */}
          <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-orange-500" />
              <span>Community Comments ({comments.length})</span>
            </h3>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mb-6 space-y-3">
              <input
                type="text"
                placeholder="Your Name (optional)"
                value={newCommentAuthor}
                onChange={(e) => setNewCommentAuthor(e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <div className="flex gap-2">
                <textarea
                  rows="2"
                  placeholder="Leave a comment or question..."
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  required
                  className="flex-1 px-3.5 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={submittingComment}
                  className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md flex items-center justify-center shrink-0 self-end"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {comments.length === 0 ? (
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  Be the first to share your thoughts on this article!
                </p>
              ) : (
                comments.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60"
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-slate-900 dark:text-white">
                        {c.author}
                      </span>
                      <span className="text-slate-400">{c.date}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {c.text}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default BlogModal;
