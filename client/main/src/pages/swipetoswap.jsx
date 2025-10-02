import { useState } from "react"
import { X, Bookmark, Info, Send, ChevronLeft, ChevronUp } from "lucide-react"
import Navbar from "../components/navbar"

export default function SwipePage() {
  const [isCardExpanded, setIsCardExpanded] = useState(false)

  const toggleCard = () => {
    setIsCardExpanded(!isCardExpanded)
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-200 flex flex-col">
    
      {/* Desktop Layout */}
      <main className="hidden md:flex flex-1 px-6 py-10">
        <div className="mx-auto max-w-7xl flex flex-row sm:flex-col gap-10 items-start w-full">
          <div className="w-full">
            <Navbar></Navbar>
          </div>
          {/* Left: Book image */}
          <div className="flex sm:flex-row sm:gap-x-10">
                <section className="w-1/2 h-full flex items-center">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/30 bg-white/40 backdrop-blur-md w-full max-h-[85vh]">
                      <img
                        src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=480&h=640&fit=crop"
                        alt="Suggested book cover"
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-amber-50/90 to-transparent">
                        <p className="text-amber-700 text-sm">1.2 km away</p>
                      </div>
                    </div>
              </section>

          {/* Right: Book details */}
          <section className="w-1/2">
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

              {/* Desktop Action buttons */}
              <div className="mt-8 flex items-center justify-center gap-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-amber-900 hover:text-amber-700 hover:bg-white/50 transition-colors"
                  aria-label="Skip this book"
                >
                  <X className="w-5 h-5" />
                  <span>Skip</span>
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-amber-900 hover:text-amber-700 hover:bg-white/50 transition-colors"
                  aria-label="Save for later"
                >
                  <Bookmark className="w-5 h-5" />
                  <span>Save</span>
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-white bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-600 hover:from-amber-600 hover:via-orange-500 hover:to-yellow-500 shadow-md transition-all"
                  aria-label="Send swap request"
                >
                  {/* <Send className="w-5 h-5" /> */}
                  Go
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-amber-900 hover:text-amber-700 hover:bg-white/50 transition-colors"
                  aria-label="More info"
                >
                  {/* <Info className="w-5 h-5" /> */}
                  <span>Info</span>
                </button>
              </div>
            </div>
          </section>
        </div>
          </div>
   
      </main>

      {/* Mobile Layout */}
      <main className="md:hidden flex-1 relative overflow-hidden">
        {/* Background Book Image */}
        <div className={`absolute inset-0 transition-all duration-300 ${isCardExpanded ? 'blur-md scale-105' : ''}`}>
          
          <img
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=480&h=640&fit=crop"
            alt="Suggested book cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-amber-900/60 to-transparent">
            <p className="text-white text-sm font-medium">1.2 km away</p>
          </div>
        </div>

        {/* Backdrop overlay when card is expanded */}
        {isCardExpanded && (
          <div 
            className="absolute inset-0 bg-black/30 z-10"
            onClick={toggleCard}
          />
        )}

        {/* Bottom Card */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl rounded-t-3xl border-t border-white/30 shadow-2xl transition-all duration-300 z-20 ${
            isCardExpanded ? 'h-[85vh]' : 'h-[30vh]'
          }`}
        >
          {/* Drag Handle */}
          <button
            onClick={toggleCard}
            className="w-full py-4 flex justify-center items-center cursor-pointer"
            aria-label="Toggle card"
          >
            <div className="w-12 h-1.5 bg-amber-300 rounded-full"></div>
          </button>

          {/* Card Content */}
          <div className="px-6 pb-6 overflow-y-auto h-[calc(100%-4rem)]">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-semibold text-amber-900">The Paper Trail</h2>
              <button onClick={toggleCard} className="text-amber-900">
                <ChevronUp className={`w-6 h-6 transition-transform ${isCardExpanded ? 'rotate-180' : ''}`} />
              </button>
            </div>
            <p className="text-amber-700 text-sm mb-4">by A. Reader</p>

            {isCardExpanded && (
              <>
                <p className="text-amber-800/90 leading-relaxed mb-4">
                  A cozy mystery that follows a librarian turned sleuth as she uncovers secrets hidden between the stacks.
                  Perfect for fans of bookish adventures and charming small towns.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
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

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="rounded-2xl bg-amber-50 border border-white/30 p-4 text-center">
                    <p className="text-xl font-semibold text-amber-900">4.6</p>
                    <p className="text-xs text-amber-700">rating</p>
                  </div>
                  <div className="rounded-2xl bg-amber-50 border border-white/30 p-4 text-center">
                    <p className="text-xl font-semibold text-amber-900">312</p>
                    <p className="text-xs text-amber-700">pages</p>
                  </div>
                  <div className="rounded-2xl bg-amber-50 border border-white/30 p-4 text-center">
                    <p className="text-xl font-semibold text-amber-900">Good</p>
                    <p className="text-xs text-amber-700">condition</p>
                  </div>
                </div>
              </>
            )}

            {/* Action Bar inside the card */}
            <div className="flex items-center justify-between gap-3 bg-white/60 backdrop-blur-md rounded-2xl px-4 py-3 border border-amber-200 shadow-lg">
              <button
                type="button"
                className="inline-flex flex-col items-center gap-1 text-amber-900 hover:text-amber-700 transition-colors"
                aria-label="Skip this book"
              >
                <X className="w-5 h-5" />
                <span className="text-xs">Skip</span>
              </button>

              <button
                type="button"
                className="inline-flex flex-col items-center gap-1 text-amber-900 hover:text-amber-700 transition-colors"
                aria-label="Save for later"
              >
                {/* <Bookmark className="w-5 h-5" /> */}
                <span className="text-xs">Save</span>
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-white bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-600 hover:from-amber-600 hover:via-orange-500 hover:to-yellow-500 shadow-md transition-all"
                aria-label="Send swap request"
              >
                {/* <Send className="w-5 h-5" /> */}
                <span className="font-semibold">Go</span>
              </button>

              <button
                type="button"
                className="inline-flex flex-col items-center gap-1 text-amber-900 hover:text-amber-700 transition-colors"
                aria-label="More info"
              >
                {/* <Info className="w-5 h-5" /> */}
                <span className="text-xs">Info</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}