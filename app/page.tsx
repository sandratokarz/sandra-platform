'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main style={{ backgroundColor: '#1A1A2E', minHeight: '100vh', fontFamily: 'Inter, sans-serif', margin: 0, padding: 0, display: 'block' }}>

      {/* HERO */}
      <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        {/* Background image */}
        <img src="/hero.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,26,46,0.85) 40%, rgba(26,26,46,0.4) 100%)' }} />
        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, padding: '8rem 4rem', maxWidth: '600px' }}>
          <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', color: '#A78BFA', marginBottom: '20px' }}>
            SANDRA TOKARZ · AI ENABLEMENT & LEARNING STRATEGY
          </div>
          <h1 style={{ fontSize: '56px', fontWeight: 700, lineHeight: 1.05, color: '#fff', marginBottom: '20px', letterSpacing: '-0.02em' }}>
            Enabling<br />
            <span style={{ background: 'linear-gradient(135deg, #7B5CF5 0%, #A78BFA 50%, #F4A8A8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AI adoption</span><br />
            at scale
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '36px', maxWidth: '440px' }}>
            Step into a hands-on AI enablement experience designed to show how I support organisations build capability, drive adoption, and translate AI into real performance.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => router.push('/platform')} style={{ background: 'linear-gradient(135deg, #7B5CF5 0%, #A78BFA 100%)', color: '#fff', border: 'none', borderRadius: '10px', padding: '14px 28px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
              ▶ Start learning journey
            </button>
            <button onClick={() => router.push('/platform')} style={{ background: 'transparent', color: '#fff', border: '2px solid transparent', borderRadius: '10px', padding: '14px 28px', fontSize: '14px', cursor: 'pointer', backgroundImage: 'linear-gradient(#1A1A2E, #1A1A2E), linear-gradient(135deg, #7B5CF5, #A78BFA)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box' }}>
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1A1A2E' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.25)' }}>Sandra Tokarz</span>
        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.18)' }}>© 2026 · sandratokarzcoaching.com</span>
      </div>

    </main>
  )
}