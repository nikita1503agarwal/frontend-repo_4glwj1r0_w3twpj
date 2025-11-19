import { Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  const NavLinks = () => (
    <>
      <button onClick={() => scrollTo('services')} className="px-3 py-2 text-slate-300 hover:text-white">Services</button>
      <button onClick={() => scrollTo('listings')} className="px-3 py-2 text-slate-300 hover:text-white">Listings</button>
      <button onClick={() => scrollTo('about')} className="px-3 py-2 text-slate-300 hover:text-white">About</button>
      <button onClick={() => scrollTo('contact')} className="px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500">Contact</button>
    </>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 grid place-items-center text-white font-bold">TJ</div>
          <div>
            <p className="text-white font-semibold leading-tight">Team Jafri</p>
            <p className="text-xs text-slate-400">Mountain House, CA</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-2">
          <NavLinks />
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <div className="flex flex-col gap-2">
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  )
}
