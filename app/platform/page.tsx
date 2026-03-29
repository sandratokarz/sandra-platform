'use client'
import { useRouter } from 'next/navigation'

const modules = [
  { id: 'm1', num: '01', cat: 'Strategy', color: '#7B5CF5', badgeBg: '#EDE9FE', badgeColor: '#4C1D95', badge: 'Case study', title: 'Global AI Enablement Strategy', desc: 'Connect business priorities, user needs, and AI tools to drive real adoption and measurable impact.', time: '~1 min' },
  { id: 'm2', num: '02', cat: 'Curriculum', color: '#A78BFA', badgeBg: '#EDE9FE', badgeColor: '#4C1D95', badge: 'Interactive', title: 'Role-Based Learning Journeys', desc: 'Tailored AI learning designed around how consultants, leaders, and teams actually work.', time: '~1 min' },
  { id: 'm3', num: '03', cat: 'Toolkits', color: '#F4A8A8', badgeBg: '#FDF2F2', badgeColor: '#9B1C1C', badge: 'AI powered', title: 'Learning That Drives Action', desc: 'Practical content combining microlearning, toolkits, and AI-generated programmes.', time: '~1 min' },
  { id: 'm4', num: '04', cat: 'Delivery', color: '#378ADD', badgeBg: '#E6F1FB', badgeColor: '#0C447C', badge: 'Experience', title: 'Facilitation That Engages & Scales', desc: 'From executive sessions to global rollouts — delivering learning that changes behaviour.', time: '~1 min' },
  { id: 'm5', num: '05', cat: 'Network', color: '#1D9E75', badgeBg: '#EDFAF5', badgeColor: '#065F46', badge: 'Case study', title: 'Scaling Through AI Champions', desc: 'A trained champion network embedded in teams to drive AI adoption from within.', time: '~1 min' },
  { id: 'm6', num: '06', cat: 'Dashboard', color: '#BA7517', badgeBg: '#FAEEDA', badgeColor: '#633806', badge: 'Interactive', title: 'Measure, Learn, Improve', desc: 'Track adoption, behaviour change, and business impact to continuously improve programmes.', time: '~1 min' },
]

export default function LearningPath() {
  const router = useRouter()

  return (
    <div style={{ padding: '1.5rem 2rem', maxWidth: '860px' }}>
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ fontSize: '9px', fontWeight: 500, letterSpacing: '0.1em', color: '#7B5CF5', marginBottom: '3px' }}>LEARNING PATH</div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: '18px', fontWeight: 800, color: '#1A1A2E', marginBottom: '3px' }}>AI Enablement Platform</h1>
        <p style={{ fontSize: '11px', color: '#5B5680', lineHeight: 1.6 }}>An interactive learning platform demonstrating how AI capability is built across roles, leadership levels, and geographies.</p>
      </div>
      <div style={{ display: 'flex', gap: '5px', marginBottom: '14px', flexWrap: 'wrap' as const }}>
        {modules.map(m => (
          <button key={m.id} onClick={() => router.push(`/platform/modules/${m.id}`)} style={{ fontSize: '9px', padding: '3px 9px', borderRadius: '10px', border: `1px solid rgba(0,0,0,0.08)`, background: '#fff', color: '#5B5680', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
            {m.num} — {m.cat}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        {modules.map(m => (
          <div key={m.id} onClick={() => router.push(`/platform/modules/${m.id}`)} style={{ background: '#fff', borderRadius: '10px', overflow: 'hidden', border: `1px solid rgba(0,0,0,0.06)`, cursor: 'pointer' }}>
            <div style={{ height: '3px', background: m.color }} />
            <div style={{ padding: '11px 13px' }}>
              <div style={{ fontSize: '8px', color: m.color, fontWeight: 500, letterSpacing: '0.06em', marginBottom: '3px' }}>{m.num} — {m.cat}</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '12px', fontWeight: 700, color: '#1A1A2E', marginBottom: '4px', lineHeight: 1.3 }}>{m.title}</div>
              <div style={{ fontSize: '10px', color: '#5B5680', lineHeight: 1.55, marginBottom: '8px' }}>{m.desc}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '8px', color: '#9B96C0' }}>⏱ {m.time}</span>
                <span style={{ fontSize: '7px', padding: '2px 6px', borderRadius: '4px', background: m.badgeBg, color: m.badgeColor }}>{m.badge}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '14px', display: 'flex', gap: '22px', padding: '12px 16px', background: '#fff', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.06)' }}>
        {[['12+', 'Years in L&D'], ['54k', 'Associates reached'], ['6', 'Modules'], ['~6min', 'Full experience']].map(([num, lbl]) => (
          <div key={lbl}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '18px', fontWeight: 800, color: '#1A1A2E' }}>{num}</div>
            <div style={{ fontSize: '8px', color: '#9B96C0', marginTop: '1px' }}>{lbl}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
