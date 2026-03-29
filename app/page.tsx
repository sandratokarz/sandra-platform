'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main style={{ backgroundColor: '#1A1A2E', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

      {/* NAV */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', height: '56px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '15px', fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: '7px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7B5CF5', display: 'inline-block' }} />
          Sandra Tokarz
        </div>
        <button
          onClick={() => router.push('/login')}
          style={{ background: '#7B5CF5', color: '#fff', border: 'none', borderRadius: '8px', padding: '8px 16px', fontSize: '12px', fontWeight: 700, cursor: 'pointer', fontFamily: 'Syne, sans-serif' }}>
          Enter Platform →
        </button>
      </nav>

      {/* HERO */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2.5rem', alignItems: 'center', padding: '3.5rem 2rem 2.5rem', maxWidth: '900px', margin: '0 auto' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(123,92,245,0.15)', border: '1px solid rgba(123,92,245,0.3)', borderRadius: '16px', padding: '4px 12px', fontSize: '10px', color: '#A78BFA', marginBottom: '16px' }}>
            ✦ Interactive L&D Experience
          </div>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: '38px', fontWeight: 800, lineHeight: 1.05, marginBottom: '12px', color: '#fff' }}>
            Learning &amp; Development<br />
            <em style={{ color: '#7B5CF5', fontStyle: 'normal' }}>Reimagined.</em>
          </h1>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.42)', lineHeight: 1.8, marginBottom: '22px', maxWidth: '400px' }}>
            Explore Sandra Tokarz's approach to leadership, emotional intelligence, and AI-powered learning — through an interactive platform built for modern teams.
          </p>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '28px' }}>
            <button
              onClick={() => router.push('/login')}
              style={{ background: '#7B5CF5', color: '#fff', border: 'none', borderRadius: '9px', padding: '11px 22px', fontSize: '12px', fontWeight: 800, cursor: 'pointer', fontFamily: 'Syne, sans-serif' }}>
              Enter Platform →
            </button>
            <button
              onClick={() => router.push('/login')}
              style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9px', padding: '11px 22px', fontSize: '12px', cursor: 'pointer' }}>
              View CV
            </button>
          </div>
          <div style={{ display: 'flex', gap: '22px', paddingTop: '18px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {[['10+', 'Years Experience'], ['3', 'Global Companies'], ['5', 'Languages'], ['500+', 'Leaders Coached']].map(([num, lbl]) => (
              <div key={lbl}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '20px', fontWeight: 800, color: '#fff' }}>{num}</div>
                <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.28)', marginTop: '1px' }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PREVIEW CARD */}
        <div style={{ background: '#252246', border: '1px solid rgba(123,92,245,0.2)', borderRadius: '14px', overflow: 'hidden' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '9px 12px', display: 'flex', alignItems: 'center', gap: '5px' }}>
            {['#FF5F57','#FFBD2E','#28CA41'].map(c => <span key={c} style={{ width: '7px', height: '7px', borderRadius: '50%', background: c, display: 'inline-block' }} />)}
          </div>
          <div style={{ padding: '12px' }}>
            <div style={{ background: '#1A1A2E', borderRadius: '9px', padding: '11px 12px', marginBottom: '9px' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '15px', fontWeight: 800, color: '#fff', marginBottom: '3px' }}>
                Sandra <em style={{ color: '#A78BFA', fontStyle: 'normal' }}>Tokarz</em>
              </div>
              <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.28)', marginBottom: '7px' }}>L&D Leader · Coach · AI Practitioner</div>
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' as const }}>
                {['Leadership', 'EQ', 'AI Learning', 'Global'].map((p, i) => (
                  <span key={p} style={{ fontSize: '8px', padding: '2px 7px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', color: i === 0 ? '#fff' : 'rgba(255,255,255,0.45)', background: i === 0 ? '#7B5CF5' : 'transparent' }}>{p}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {[['COACHING', 'Authentic Intelligence'], ['L&D STRATEGY', 'Global Programs'], ['AI TOOLS', 'Learning Automation'], ['WORKSHOPS', 'EQ & Leadership']].map(([cat, name]) => (
                <div key={name} style={{ background: '#1A1A2E', borderRadius: '7px', padding: '8px 9px', borderLeft: '2.5px solid #7B5CF5' }}>
                  <div style={{ fontSize: '7px', color: '#A78BFA', marginBottom: '2px' }}>{cat}</div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '10px', fontWeight: 700, color: '#fff' }}>{name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', maxWidth: '900px', margin: '0 auto', padding: '0 2rem 2rem' }}>
        {[
          ['✦', 'AI-Powered Toolkit', 'Generate custom L&D programmes instantly using Sandra\'s methodology and AI.'],
          ['◈', 'Interactive Modules', 'Explore leadership, EQ, and AI learning through hands-on experiences.'],
          ['⬡', 'Real Experience', 'Over a decade of global L&D leadership across tech, hospitality and corporate.'],
        ].map(([icon, title, txt]) => (
          <div key={title} style={{ background: 'rgba(123,92,245,0.08)', border: '1px solid rgba(123,92,245,0.18)', borderRadius: '12px', padding: '1.1rem' }}>
            <div style={{ fontSize: '18px', marginBottom: '6px' }}>{icon}</div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '5px' }}>{title}</div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.6 }}>{txt}</div>
          </div>
        ))}
      </div>

      {/* CTA BAND */}
      <div style={{ textAlign: 'center', padding: '3rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '26px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
          Ready to explore?
        </h2>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginBottom: '20px' }}>
          Step inside the platform and discover a new way to experience L&D.
        </p>
        <button
          onClick={() => router.push('/login')}
          style={{ background: '#7B5CF5', color: '#fff', border: 'none', borderRadius: '9px', padding: '12px 28px', fontSize: '13px', fontWeight: 800, cursor: 'pointer', fontFamily: 'Syne, sans-serif' }}>
          Enter Platform →
        </button>
      </div>

      {/* FOOTER */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '12px', fontWeight: 800, color: 'rgba(255,255,255,0.25)' }}>Sandra Tokarz</span>
        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.18)' }}>© 2026 · sandratokarzcoaching.com</span>
      </div>

    </main>
  )
}