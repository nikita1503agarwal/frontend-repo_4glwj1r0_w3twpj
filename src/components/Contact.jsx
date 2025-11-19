import { useState } from "react"

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      message: form.get('message'),
      property_id: null,
    }
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thanks! We will contact you shortly.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-16 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-white">Book a Consultation</h2>
          <p className="text-slate-300 mt-2">Tell us about your goals—buying, selling, flipping or building—and we'll reach out.</p>
          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input name="name" required placeholder="Full name" className="bg-slate-900/60 border border-white/10 rounded-md px-4 py-3 text-white placeholder-slate-500" />
              <input name="email" required type="email" placeholder="Email" className="bg-slate-900/60 border border-white/10 rounded-md px-4 py-3 text-white placeholder-slate-500" />
            </div>
            <input name="phone" placeholder="Phone (optional)" className="bg-slate-900/60 border border-white/10 rounded-md px-4 py-3 text-white placeholder-slate-500" />
            <textarea name="message" required placeholder="How can we help?" rows="5" className="bg-slate-900/60 border border-white/10 rounded-md px-4 py-3 text-white placeholder-slate-500" />
            <div className="flex items-center gap-4">
              <button className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500">Send</button>
              {status && <p className="text-slate-300">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
