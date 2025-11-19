import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Listings from './components/Listings'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Listings />
        <About />
        <Contact />
        <footer className="py-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Team Jafri — DRE# 01234567</p>
            <p className="text-slate-500 text-xs">Mountain House, CA 95391 • Investment properties, flips, builds & renovations</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
