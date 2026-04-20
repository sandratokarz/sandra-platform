'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const G = 'linear-gradient(135deg, #7B5CF5, #F4A8A8)'

const modules = [
  { id: 'm1', num: '01', cat: 'Enablement & Training', color: '#7B5CF5', badgeBg: '#EDE9FE', badgeColor: '#4C1D95', badge: 'Case study', title: 'AI Enablement, Training & Capability Building', desc: 'Role-based learning for advisory and operations teams across all levels — from associates to directors.' },
  { id: 'm2', num: '02', cat: 'Roadmap & Deployment', color: '#0A1628', badgeBg: '#E8EDF5', badgeColor: '#0A1628', badge: 'Framework', title: 'AI Roadmap & Tool Deployment', desc: 'Owning the internal AI tool roadmap, prioritising high-impact use cases and guiding pilots to scale.' },
  { id: 'm3', num: '03', cat: 'Platform Support', color: '#1D9E75', badgeBg: '#EDFAF5', badgeColor: '#065F46', badge: 'Experience', title: 'Platform Support & Coordination', desc: 'Working with platform leadership to identify AI opportunities and connect best practices across teams.' },
  { id: 'm4', num: '04', cat: 'Governance', color: '#BA7517', badgeBg: '#FAEEDA', badgeColor: '#633806', badge: 'Interactive', title: 'Collaboration & Governance', desc: 'Partnering across IT, Academy, and Analytics to ensure safe, consistent AI adoption across Systemiq.' },
  { id: 'm5', num: '05', cat: 'AI Toolkit', color: '#A78BFA', badgeBg: '#EDE9FE', badgeColor: '#4C1D95', badge: 'AI powered', title: 'AI Programme Builder', desc: 'Generate a custom AI enablement programme for any of Systemiq\'s 5 platforms instantly.' },
]

export default function SystemiqLearningPath() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div style={{ padding: isMobile ? '1rem 1rem 80px' : '1.5rem 2.5rem', maxWidth: '100%' }}>

      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(10,22,40,0.08)', border: '1px solid rgba(10,22,40,0.12)', borderRadius: '12px', padding: '3px 10px', fontSize: '11px', color: '#0A1628', marginBottom: '10px', fontWeight: 500, letterSpacing: '0.08em' }}>
          SYSTEMIQ · AI ENABLEMENT LEAD
        </div>
        <h1 style={{ fontSize: isMobile ? '20px' : '22px', fontWeight: 700, color: '#0A1628', marginBottom: '6px' }}>
          How I would approach this role
        </h1>
        <p style={{ fontSize: '14px', color: '#4A5568', lineHeight: 1.7 }}>
          An interactive demonstration of how I'd build AI capability, deploy tools, support Systemiq's platforms, and create a culture of responsible AI use — drawn from real experience doing exactly this.
        </p>
      </div>

      {/* Module pills */}
      <div style={{ display: 'flex', gap: '5px', marginBottom: '14px', flexWrap: 'wrap' as const }}>
        {modules.map(m => (
          <button key={m.id} onClick={() => router.push(`/platform/systemiq/modules/${m.id}`)} style={{ fontSize: '11px', padding: '3px 9px', borderRadius: '10px', border: '1px solid rgba(10,22,40,0.12)', background: '#fff', color: '#4A5568', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
            {m.num} — {m.cat}
          </button>
        ))}
      </div>

      {/* Module grid */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '10px' }}>
        {modules.map(m => (
          <div key={m.id} onClick={() => router.push(`/platform/systemiq/modules/${m.id}`)} style={{ background: '#fff', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(10,22,40,0.08)', cursor: 'pointer', transition: 'all .15s' }}>
            <img src={`/modules/${m.id}.jpg`} alt={m.title} style={{ width: '100%', height: '130px', objectFit: 'cover', display: 'block' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            <div style={{ height: '3px', background: m.id === 'm5' ? G : m.color }} />
            <div style={{ padding: '11px 13px' }}>
              <div style={{ fontSize: '10px', color: m.color, fontWeight: 500, letterSpacing: '0.06em', marginBottom: '3px' }}>{m.num} — {m.cat}</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#0A1628', marginBottom: '5px', lineHeight: 1.3 }}>{m.title}</div>
              <div style={{ fontSize: '12px', color: '#4A5568', lineHeight: 1.55, marginBottom: '8px' }}>{m.desc}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '10px', color: '#9B96C0' }}>⏱ ~1 min</span>
                <span style={{ fontSize: '9px', padding: '2px 6px', borderRadius: '4px', background: m.badgeBg, color: m.badgeColor }}>{m.badge}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}