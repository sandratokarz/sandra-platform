'use client'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const navItems = [
  { id: 'learning', label: 'Learning Path', path: '/platform/systemiq' },
  { id: 'about', label: 'About Me', path: '/platform/systemiq/about' },
]

const G = 'linear-gradient(135deg, #7B5CF5, #F4A8A8)'

export default function SystemiqLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div style={{ display: 'grid', gridTemplateRows: '52px 1fr', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

      {/* TOP NAV */}
      <nav style={{ backgroundColor: '#0A1628', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.25rem' }}>
        <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#fff', border: '1px solid rgba(255,255,255,0.4)', padding: '2px 6px', letterSpacing: '0.1em' }}>SYSTEMIQ</span>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '14px' }}>×</span>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>Sandra Tokarz</span>
        </div>
        <div style={{ display: isMobile ? 'none' : 'flex', gap: '2px' }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => router.push(item.path)} style={{ fontSize: '13px', padding: '5px 11px', borderRadius: '16px', border: 'none', background: pathname === item.path ? 'linear-gradient(135deg, #7B5CF5, #A78BFA)' : 'transparent', color: pathname === item.path ? '#fff' : 'rgba(255,255,255,0.35)', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
              {item.label}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '14px', padding: '3px 10px' }}>
          <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.25)' }}>XP</span>
          <div style={{ width: '40px', height: '2px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '78%', background: G, borderRadius: '2px' }} />
          </div>
          <span style={{ fontSize: '11px', color: '#A78BFA', fontWeight: 500 }}>780</span>
        </div>
      </nav>

      {/* BODY */}
      <div style={{ display: 'flex', height: 'calc(100vh - 52px)' }}>

        {/* SIDEBAR */}
        <aside style={{ display: isMobile ? 'none' : 'flex', width: '188px', minWidth: '188px', backgroundColor: '#0F1F3D', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '1rem 0', flexDirection: 'column', overflowY: 'auto' }}>

          <div style={{ padding: '0 .9rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: '.9rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: G, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '6px', overflow: 'hidden' }}>
              <img src="/sandra.jpg" alt="ST" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>Sandra Tokarz</div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.28)', marginTop: '1px' }}>AI Enablement Manager</div>
            <div style={{ marginTop: '8px', display: 'flex', gap: '4px' }}>
              <span style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '6px', background: 'rgba(123,92,245,0.2)', color: '#A78BFA' }}>Explorer</span>
              <span style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '6px', background: 'rgba(29,158,117,0.15)', color: '#1D9E75' }}>Active</span>
            </div>
          </div>

          <div style={{ padding: '0 .6rem', flex: 1 }}>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em', padding: '0 .5rem', marginBottom: '6px' }}>NAVIGATE</div>
            {navItems.map(item => (
              <button key={item.id} onClick={() => router.push(item.path)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 10px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: pathname === item.path ? 'rgba(123,92,245,0.15)' : 'transparent', color: pathname === item.path ? '#fff' : 'rgba(255,255,255,0.4)', fontSize: '13px', fontFamily: 'Inter, sans-serif', marginBottom: '2px', textAlign: 'left', borderLeft: pathname === item.path ? '2px solid #7B5CF5' : '2px solid transparent' }}>
                {item.label}
              </button>
            ))}
          </div>

          <div style={{ padding: '1rem .9rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 'auto' }}>
            <button onClick={() => router.push('/')} style={{ width: '100%', fontSize: '12px', color: 'rgba(255,255,255,0.25)', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '4px 0' }}>
              ← Exit Platform
            </button>
          </div>
        </aside>

        {/* PAGE CONTENT */}
        <main style={{ flex: 1, overflowY: 'auto', backgroundColor: '#F4F6F9' }}>
          {children}
        </main>
      </div>

      {/* MOBILE BOTTOM NAV */}
      {isMobile && (
        <div style={{ display: 'flex', position: 'fixed', bottom: 0, left: 0, right: 0, background: '#0A1628', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '8px 0', zIndex: 100, justifyContent: 'space-around' }}>
          <button onClick={() => router.push('/platform/systemiq')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px 12px' }}>
            <span style={{ fontSize: '16px' }}>⊞</span>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Path</span>
          </button>
          <button onClick={() => router.push('/platform/systemiq/about')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px 12px' }}>
            <span style={{ fontSize: '16px' }}>◉</span>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>About</span>
          </button>
          <button onClick={() => router.push('/platform/systemiq/modules/m1')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px 12px' }}>
            <span style={{ fontSize: '16px' }}>⬡</span>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Modules</span>
          </button>
        </div>
      )}
    </div>
  )
}