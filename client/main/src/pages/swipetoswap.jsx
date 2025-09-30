import { useState } from "react"
import { X, Bookmark, Info, Send, ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/navbar"

export default function SwipePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 flex flex-col">
      {/* Top bar */}
      <Navbar></Navbar>

      {/* Main content */}
      <main className="flex-1 px-6 py-10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-10 items-start">
          {/* Right: Book details */}
          <section className="w-full order-2 md:order-1">
            <div className="rounded-3xl border border-white/30 bg-white/40 backdrop-blur-md shadow-xl p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-amber-900">The Paper Trail</h2>
              <p className="text-amber-700 mt-1">by A. Reader</p>

              <p className="text-amber-800/90 leading-relaxed mt-6">
                A cozy mystery that follows a librarian turned sleuth as she uncovers secrets hidden between the stacks.
                Perfect for fans of bookish adventures and charming small towns.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm text-amber-900 bg-gradient-to-r from-amber-100 to-yellow-100 border border-white/30">
                  Mystery
                </span>
                <span className="px-3 py-1 rounded-full text-sm text-amber-900 bg-gradient-to-r from-orange-100 to-amber-100 border border-white/30">
                  Cozy
                </span>
                <span className="px-3 py-1 rounded-full text-sm text-amber-900 bg-gradient-to-r from-yellow-100 to-orange-100 border border-white/30">
                  Light Read
                </span>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="rounded-2xl bg-white/40 border border-white/30 p-4 text-center">
                  <p className="text-xl font-semibold text-amber-900">4.6</p>
                  <p className="text-xs text-amber-700">rating</p>
                </div>
                <div className="rounded-2xl bg-white/40 border border-white/30 p-4 text-center">
                  <p className="text-xl font-semibold text-amber-900">312</p>
                  <p className="text-xs text-amber-700">pages</p>
                </div>
                <div className="rounded-2xl bg-white/40 border border-white/30 p-4 text-center">
                  <p className="text-xl font-semibold text-amber-900">Good</p>
                  <p className="text-xs text-amber-700">condition</p>
                </div>
              </div>

              {/* Success message */}
              {message && (
                <div className="mt-6 rounded-xl border border-white/40 bg-white/50 text-amber-900 px-4 py-3">
                  {message}
                </div>
              )}
            </div>
          </section>

          {/* Left: Book image */}
          <section className="w-full order-1 md:order-2">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/30 bg-white/40 backdrop-blur-md">
              <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=480&h=640&fit=crop"
                alt="Suggested book cover"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-amber-50/90 to-transparent">
                <p className="text-amber-700 text-sm">1.2 km away</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Action bar */}
      <section aria-label="Actions" className="fixed left-4 bottom-4 z-40 w-[min(90vw,28rem)]">
        <div className="flex items-center justify-between gap-3 rounded-2xl px-4 py-3 border border-white/20 bg-white/40 backdrop-blur-md shadow-lg">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-amber-900 hover:text-amber-700 hover:bg-white/50 transition-colors"
            aria-label="Skip this book"
          >
            <X className="w-5 h-5" />
            <span className="hidden sm:inline">Skip</span>
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-amber-900 hover:text-amber-700 hover:bg-white/50 transition-colors"
            aria-label="Save for later"
          >
            <Bookmark className="w-5 h-5" />
            <span className="hidden sm:inline">Save</span>
          </button>

          <button
            type="button"
            onClick={handleGo}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-white bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-600 hover:from-amber-600 hover:via-orange-500 hover:to-yellow-500 shadow-md transition-all"
            aria-label="Send swap request"
          >
            <Send className="w-5 h-5" />
            Go
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-amber-900 hover:text-amber-700 hover:bg-white/50 transition-colors"
            aria-label="More info"
          >
            <Info className="w-5 h-5" />
            <span className="hidden sm:inline">Info</span>
          </button>
        </div>
      </section>
    </div>
  )
}