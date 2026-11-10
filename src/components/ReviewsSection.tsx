import React, { useState } from 'react';
import { 
  Star, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  MessageSquarePlus, 
  X,
  Heart
} from 'lucide-react';
import { REVIEWS } from '../data/storeData';
import { Review } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [modalOpen, setModalOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newProduct, setNewProduct] = useState('Birthday Chocolate Bouquet');
  const [newRating, setNewRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment) return;

    const newReviewItem: Review = {
      id: `rev-${Date.now()}`,
      author: newAuthor,
      location: newCity || 'Pakistan',
      rating: newRating,
      comment: newComment,
      date: 'Just now',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      productName: newProduct,
      verified: true
    };

    setReviewsList([newReviewItem, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setNewAuthor('');
      setNewCity('');
      setNewComment('');
    }, 1800);
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#FFF8F9] border-t border-[#F9D5D9]/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div className="text-center sm:text-left space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#F9D5D9] text-xs font-semibold text-[#82444D] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Real Pakistani Girl Testimonials
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1618]">
              What Our Happy Girls Say - Real Reviews
            </h2>
            <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-bold text-[#1C1618]">5.0 / 5.0</span>
              <span className="text-xs text-[#82444D] font-medium">
                (Based on 280+ personalized gifts delivered across Pakistan)
              </span>
            </div>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="px-5 py-2.5 text-xs font-semibold text-[#1C1618] bg-white hover:bg-[#FFF5F7] border border-[#F9D5D9] hover:border-[#D4AF37] rounded-xl shadow-xs transition-colors flex items-center gap-2 cursor-pointer shrink-0"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#D47986]" />
            <span>Leave a Review</span>
          </button>
        </div>

        {/* 8 Reviews Grid (2 col on tablet, 4 col on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="silk-card rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-[#F9D5D9]/70"
            >
              <div className="space-y-3">
                {/* User Header */}
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-[#F9D5D9]"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-[#1C1618] truncate">
                        {rev.author}
                      </h4>
                      {rev.verified && (
                        <span title="Verified Customer" className="inline-flex shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-[#82444D] truncate">
                      <MapPin className="w-3 h-3 text-[#D4AF37]" />
                      <span>{rev.location}</span>
                    </div>
                  </div>
                </div>

                {/* Stars & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#9E737B] font-medium">{rev.date}</span>
                </div>

                {/* Urdu/English Review Text */}
                <p className="text-xs text-[#2D2326] leading-relaxed italic">
                  “{rev.comment}”
                </p>
              </div>

              {/* Product Badge Pill */}
              <div className="mt-4 pt-3 border-t border-[#F9D5D9]/60 flex items-center justify-between">
                <span className="text-[11px] text-[#82444D] font-medium truncate flex items-center gap-1">
                  <Heart className="w-3 h-3 text-[#D47986] fill-[#D47986]/30" />
                  {rev.productName}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-xs">
                  Verified Buyer
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Leave Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#F9D5D9] relative animate-fadeIn">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-[#82444D] hover:text-[#1C1618] p-1 rounded-full hover:bg-[#F9D5D9]/40"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1618] mb-1">
              Share Your Experience
            </h3>
            <p className="text-xs text-[#662F38] mb-4">
              Help other girls discover the beauty of customized gifts from Cardsy by Aneeqa.
            </p>

            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="font-bold text-sm text-[#1C1618]">Thank you for your love!</h4>
                <p className="text-xs text-[#82444D]">Your review has been added to our live wall.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#662F38] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="e.g. Mahnoor Khan"
                    className="w-full px-3 py-2 text-sm border border-[#F9D5D9] rounded-xl focus:ring-2 focus:ring-[#D47986] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#662F38] mb-1">City / Location</label>
                  <input
                    type="text"
                    required
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                    placeholder="e.g. Muzaffarabad AJK, Islamabad, Lahore"
                    className="w-full px-3 py-2 text-sm border border-[#F9D5D9] rounded-xl focus:ring-2 focus:ring-[#D47986] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#662F38] mb-1">Product You Ordered</label>
                  <input
                    type="text"
                    value={newProduct}
                    onChange={(e) => setNewProduct(e.target.value)}
                    placeholder="e.g. Dairy Milk Bouquet, Nikkah Frame"
                    className="w-full px-3 py-2 text-sm border border-[#F9D5D9] rounded-xl focus:ring-2 focus:ring-[#D47986] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#662F38] mb-1">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="text-[#D4AF37]"
                      >
                        <Star
                          className={`w-5 h-5 ${star <= newRating ? 'fill-current' : 'text-gray-300'}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#662F38] mb-1">Your Review</label>
                  <textarea
                    rows={3}
                    required
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Tell us about the packaging, quality, and recipient's reaction..."
                    className="w-full px-3 py-2 text-sm border border-[#F9D5D9] rounded-xl focus:ring-2 focus:ring-[#D47986] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#D47986] to-[#C96774] rounded-xl shadow-sm hover:opacity-95 transition-opacity"
                >
                  Publish Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
