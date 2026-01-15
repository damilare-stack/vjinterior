export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-serif font-bold tracking-tighter">
          VJ INTERIORS
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#about" className="hover:text-gray-500 transition">About</a>
          <a href="#services" className="hover:text-gray-500 transition">Services</a>
          <a href="#gallery" className="hover:text-gray-500 transition">Portfolio</a>
          <a href="#reviews" className="hover:text-gray-500 transition">Reviews</a>
        </div>
        <button className="bg-black text-white px-5 py-2 text-sm">Contact</button>
      </div>
    </nav>
  );
}
