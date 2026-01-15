import Navbar from '@/components/Navbar';
import { ArrowRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-bold tracking-widest text-gold-600 uppercase">About</span>
            <h1 className="text-4xl md:text-5xl font-serif mt-4 mb-6">About VJ Interiors</h1>
            <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition">
              Learn more
            </button>
          </div>
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              VJ Interior Designs in Lagos crafts unique, affordable spaces for homes and offices, 
              blending comfort with bold style to fit every budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-square bg-gray-200 overflow-hidden rounded-lg">
              <img 
                src="/api/placeholder/600/600" 
                alt="Our Interior Design Work" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-serif mb-6">Our Services</h2>
            <p className="text-gray-600 mb-8">
              We offer residential and commercial design, space planning, furniture sourcing, 
              color palettes, and project management to deliver stylish, functional interiors on time.
            </p>
            <button className="border-2 border-black px-8 py-3 flex items-center gap-2 hover:bg-black hover:text-white transition">
              View services <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="columns-1 md:columns-3 gap-4 space-y-4">
            <img src="/api/placeholder/400/600" alt="VJ Interior 1" className="rounded-lg w-full" />
            <img src="/api/placeholder/400/300" alt="VJ Interior 2" className="rounded-lg w-full" />
            <img src="/api/placeholder/400/500" alt="VJ Interior 3" className="rounded-lg w-full" />
            <img src="/api/placeholder/400/400" alt="VJ Interior 4" className="rounded-lg w-full" />
            <img src="/api/placeholder/400/600" alt="VJ Interior 5" className="rounded-lg w-full" />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-16">Reviews</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard 
              name="Paulina Godwin" 
              initials="PG"
              text="VJ Interiors transformed our Lagos apartment with clever space use and warm lighting; the team was professional, on time, and affordable."
            />
            <TestimonialCard 
              name="Peju Oloruntele" 
              initials="PO"
              text="From concept to completion, the design process was seamless and inspiring; we love the modern yet cozy feel."
            />
          </div>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-gray-100 text-gray-400 text-sm">
        © 2026 VJ Interiors Lagos. All rights reserved.
      </footer>
    </main>
  );
}

function TestimonialCard({ name, text, initials }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mb-4 font-bold">
        {initials}
      </div>
      <h3 className="font-bold mb-2">{name}</h3>
      <div className="flex gap-1 mb-4 text-yellow-500">
        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
      </div>
      <p className="text-gray-600 italic">"{text}"</p>
    </div>
  );
}
