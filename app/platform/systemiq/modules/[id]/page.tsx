'use client'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

const G = 'linear-gradient(135deg, #7B5CF5, #F4A8A8)'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

const s = {
  shell: (isMobile: boolean) => ({ display: isMobile ? 'flex' : 'grid', flexDirection: 'column' as const, gridTemplateColumns: isMobile ? undefined : '200px 1fr', height: '100%' }),
  left: { background: '#0F1F3D', padding: '1.25rem', display: 'flex', flexDirection: 'column' as const, gap: '10px', overflowY: 'auto' as const },
  back: { fontSize: '12px', color: 'rgba(255,255,255,0.3)', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' as const, padding: 0, fontFamily: 'Inter, sans-serif' },
  num: { fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.2)', marginTop: '8px' },
  mlTitle: { fontSize: '14px', fontWeight: 700, color: '#fff', lineHeight: 1.35, marginBottom: '14px' },
  step: (on: boolean) => ({ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', cursor: 'pointer', opacity: on ? 1 : 0.4 } as React.CSSProperties),
  dot: (on: boolean) => ({ width: '7px', height: '7px', borderRadius: '50%', background: on ? '#7B5CF5' : 'rgba(255,255,255,0.12)', flexShrink: 0 } as React.CSSProperties),
  stepTxt: { fontSize: '12px', color: '#fff' },
  right: (isMobile: boolean) => ({ overflowY: 'auto' as const, padding: isMobile ? '1rem 1rem 80px' : '1.5rem 2rem', background: '#F4F6F9', flex: 1 }),
  eye: { fontSize: '12px', color: '#9B96C0', marginBottom: '6px' },
  title: { fontSize: 'clamp(15px, 4vw, 19px)', fontWeight: 700, color: '#0A1628', marginBottom: '8px', lineHeight: 1.2 },
  body: { fontSize: 'clamp(12px, 2vw, 13px)', color: '#4A5568', lineHeight: 1.7, marginBottom: '14px' },
  card: { background: '#fff', border: '1px solid rgba(10,22,40,0.08)', borderRadius: '10px', padding: '1rem', marginBottom: '10px' },
  nav: { display: 'flex', gap: '8px', marginTop: '14px' },
  btn: { background: G, color: '#fff', border: 'none', borderRadius: '7px', padding: '9px 18px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, sans-serif' },
  btnGhost: { background: 'transparent', color: '#7B5CF5', border: '1px solid #7B5CF5', borderRadius: '7px', padding: '9px 18px', fontSize: '14px', cursor: 'pointer', fontFamily: 'Inter, sans-serif' },
  chip: { display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#4A5568', background: '#E8EDF5', borderRadius: '5px', padding: '2px 7px' } as React.CSSProperties,
  chipDot: { width: '4px', height: '4px', borderRadius: '50%', background: '#7B5CF5', display: 'inline-block' } as React.CSSProperties,
  outcome: { background: '#EDFAF5', border: '1px solid rgba(29,158,117,0.2)', borderRadius: '7px', padding: '8px 11px', marginTop: '8px' },
  quote: { background: '#EDE9FE', borderLeft: '3px solid #7B5CF5', borderRadius: '0 8px 8px 0', padding: '10px 13px', fontSize: '14px', color: '#4C1D95', fontStyle: 'italic' as const, lineHeight: 1.6, marginBottom: '14px' },
  upNext: { marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' },
  upNextLbl: { fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.2)', marginBottom: '5px' },
  upNextItem: { fontSize: '12px', color: 'rgba(255,255,255,0.4)' },
}

// ── MODULE 1: AI Enablement, Training & Capability Building ──
function M1({ router, isMobile }: { router: ReturnType<typeof useRouter>, isMobile: boolean }) {
  const [step, setStep] = useState(0)

  return (
    <div style={s.shell(isMobile)}>
      <div style={{ ...s.left, display: isMobile ? 'none' : 'flex' }}>
        <button style={s.back} onClick={() => router.push('/platform/systemiq')}>← Back to path</button>
        <div style={s.num}>MODULE 01</div>
        <div style={s.mlTitle}>AI Enablement, Training & Capability Building</div>
        {['My approach', 'Role-based design', 'My experience'].map((t, i) => (
          <div key={i} style={s.step(step === i)} onClick={() => setStep(i)}>
            <div style={s.dot(step === i)} /><span style={s.stepTxt}>{t}</span>
          </div>
        ))}
        <div style={s.upNext}><div style={s.upNextLbl}>UP NEXT</div><div style={s.upNextItem}>◦ AI Roadmap & Tool Deployment</div></div>
      </div>
      <div style={s.right(isMobile)}>
        {isMobile && <button onClick={() => router.push('/platform/systemiq')} style={{ fontSize: '13px', color: '#7B5CF5', background: 'transparent', border: 'none', cursor: 'pointer', padding: '0 0 12px 0' }}>← Back to path</button>}

        {step === 0 && <>
          <div style={s.eye}>Page 1 of 3 — My Approach</div>
          <div style={s.title}>Building AI fluency across every level</div>
          <div style={s.body}>Effective AI enablement isn't a one-time training event. It's a continuous system built around five core responsibilities from building AI fluency at every level, to shaping a culture where responsible experimentation becomes the norm.</div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
            {[
              { color: '#7B5CF5', bg: '#EDE9FE', ico: '🏆', title: 'AI Champions Programme', items: ['Lead cross-functional champion network', 'Build strong internal AI community', 'Champions drive local adoption', 'Regular enablement and peer learning sessions'] },
              { color: '#0A1628', bg: '#E8EDF5', ico: '🎓', title: 'Training & Capability Building', items: ['AI training for advisory and operations teams', 'All levels: associates to directors/leadership', 'Role-specific, behaviour-focused design', 'Blended formats: workshops, microlearning, simulations'] },
              { color: '#1D9E75', bg: '#EDFAF5', ico: '📋', title: 'Playbooks & Learning Pathways', items: ['Develop use-case guides per role and platform', 'Learning pathways tied to career stages', 'Job aids and prompt libraries', 'Manager toolkits for team enablement'] },
              { color: '#BA7517', bg: '#FAEEDA', ico: '🔬', title: 'Responsible Experimentation', items: ['Shape a culture of everyday AI use', 'Safe space to test and learn', 'Governance embedded in culture not compliance', 'Celebrate wins and share learnings openly'] },
            ].map(c => (
              <div key={c.title} style={{ background: c.bg, borderRadius: '11px', padding: '1rem' }}>
                <div style={{ fontSize: '18px', marginBottom: '7px' }}>{c.ico}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: c.color, marginBottom: '6px' }}>{c.title}</div>
                {c.items.map(it => <div key={it} style={{ fontSize: '12px', color: c.color, lineHeight: 1.45, display: 'flex', gap: '5px', marginBottom: '2px' }}><span>·</span>{it}</div>)}
              </div>
            ))}
            <div style={{ background: '#E6F1FB', borderRadius: '11px', padding: '1rem', gridColumn: isMobile ? undefined : '1 / -1' }}>
              <div style={{ fontSize: '18px', marginBottom: '7px' }}>🎓</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#378ADD', marginBottom: '6px' }}>Academy Partnership</div>
              {['Embed AI capability into formal learning programmes', 'Align AI pathways with career development', 'Co-design with Academy for consistency', 'Track progress through formal learning infrastructure'].map(it => (
                <div key={it} style={{ fontSize: '12px', color: '#378ADD', lineHeight: 1.45, display: 'flex', gap: '5px', marginBottom: '2px' }}><span>·</span>{it}</div>
              ))}
            </div>
          </div>
          <div style={s.nav}><button style={s.btn} onClick={() => setStep(1)}>Next →</button></div>
        </>}

        {step === 1 && <>
          <div style={s.eye}>Page 2 of 3 — Role-Based Design</div>
          <div style={s.title}>Playbooks, pathways and use-case guides</div>
          <div style={s.body}>For Systemiq's advisory and operations teams, learning needs to be immediately applicable. I design short, role-specific learning moments embedded in daily work not generic training events.</div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
            {[
              { color: '#7B5CF5', title: 'Advisory Teams', items: ['AI for research synthesis and insight generation', 'Prompting for client deliverables and proposals', 'Responsible AI use in client-facing work', 'Use-case library per practice area'] },
              { color: '#0A1628', title: 'Operations Teams', items: ['AI for workflow automation and reporting', 'Microsoft 365 AI tools embedded in daily tasks', 'Template-based prompting for common tasks', 'Peer learning through champion network'] },
              { color: '#1D9E75', title: 'Learning Formats', items: ['5–10 min microlearning modules', 'Playbooks and job aids', 'Live workshops and simulations', 'Champion-led team sessions'] },
              { color: '#BA7517', title: 'Academy Integration', items: ['AI capability embedded in formal programmes', 'Career-stage learning pathways', 'Manager toolkit for team enablement', 'Progress tracking and completion metrics'] },
            ].map(c => (
              <div key={c.title} style={{ ...s.card, borderTop: `3px solid ${c.color}`, marginBottom: 0 }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: c.color, marginBottom: '8px' }}>{c.title}</div>
                {c.items.map(it => <div key={it} style={{ fontSize: '12px', color: '#4A5568', paddingLeft: '11px', position: 'relative', lineHeight: 1.5, marginBottom: '3px' }}><span style={{ position: 'absolute', left: 0, color: '#7B5CF5' }}>→</span>{it}</div>)}
              </div>
            ))}
          </div>
          <div style={s.nav}><button style={s.btnGhost} onClick={() => setStep(0)}>← Back</button><button style={s.btn} onClick={() => setStep(2)}>Next →</button></div>
        </>}

        {step === 2 && <>
          <div style={s.eye}>Page 3 of 3 — My Experience</div>
          <div style={s.title}>Applied in practice</div>
          <div style={s.card}>
            <div style={{ fontSize: '10px', color: '#7B5CF5', fontWeight: 500, letterSpacing: '0.06em', marginBottom: '8px' }}>Prosus · Corporate Functions · 2020–2024</div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
              <div><div style={{ fontSize: '12px', fontWeight: 600, color: '#0A1628', marginBottom: '3px' }}>The situation</div><div style={{ fontSize: '12px', color: '#4A5568', lineHeight: 1.5 }}>Corporate functions had varied AI literacy — near zero in Finance, slightly higher in HR. No consistent L&D strategy existed. Leadership wanted digital transformation but lacked a clear enablement path.</div></div>
              <div><div style={{ fontSize: '12px', fontWeight: 600, color: '#0A1628', marginBottom: '3px' }}>What I did</div><div style={{ fontSize: '12px', color: '#4A5568', lineHeight: 1.5 }}>Designed and implemented a corporate-wide L&D strategy focused on AI literacy, digital skills and leadership capability. Created role-specific learning pathways, playbooks, and embedded tools into daily workflows.</div></div>
            </div>
            <div style={s.outcome}><div style={{ fontSize: '10px', fontWeight: 600, color: '#065F46', marginBottom: '2px' }}>OUTCOME</div><div style={{ fontSize: '12px', color: '#0A1628', lineHeight: 1.5 }}>Finance moved from near-zero AI literacy to embedded daily adoption in one quarter. Replicated across Legal and HR. Became the internal case study for L&D-led digital transformation.</div></div>
            <div style={{ display: 'flex', gap: '5px', marginTop: '8px', flexWrap: 'wrap' as const }}><span style={s.chip}><span style={s.chipDot} />Prosus · 2020–2024</span><span style={s.chip}><span style={s.chipDot} />3 departments</span><span style={s.chip}><span style={s.chipDot} />Org-wide impact</span></div>
          </div>
          <div style={s.card}>
            <div style={{ fontSize: '10px', color: '#7B5CF5', fontWeight: 500, letterSpacing: '0.06em', marginBottom: '8px' }}>Mibelle Group · 2024–2025</div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
              <div><div style={{ fontSize: '12px', fontWeight: 600, color: '#0A1628', marginBottom: '3px' }}>The situation</div><div style={{ fontSize: '12px', color: '#4A5568', lineHeight: 1.5 }}>Post-acquisition, the organisation needed rapid AI adoption across all global regions. Top-down communication alone wouldn't create the speed or depth of adoption needed.</div></div>
              <div><div style={{ fontSize: '12px', fontWeight: 600, color: '#0A1628', marginBottom: '3px' }}>What I did</div><div style={{ fontSize: '12px', color: '#4A5568', lineHeight: 1.5 }}>Recruited, trained and equipped AI Change Champions across all regions with full plans, role-based toolkits, and autonomy to adapt to their local context and add their own ideas.</div></div>
            </div>
            <div style={s.outcome}><div style={{ fontSize: '10px', fontWeight: 600, color: '#065F46', marginBottom: '2px' }}>OUTCOME</div><div style={{ fontSize: '12px', color: '#0A1628', lineHeight: 1.5 }}>Champions became the connective tissue of the transition. Local adoption accelerated significantly. The model became the template for future change programmes at the organisation.</div></div>
            <div style={{ display: 'flex', gap: '5px', marginTop: '8px', flexWrap: 'wrap' as const }}><span style={s.chip}><span style={s.chipDot} />Mibelle · 2024–25</span><span style={s.chip}><span style={s.chipDot} />Global champions network</span><span style={s.chip}><span style={s.chipDot} />All regions</span></div>
          </div>
          <div style={s.quote}>"AI enablement is not a training programme. It's a continuous system that connects business priorities to measurable behaviour change."</div>
          <div style={s.nav}><button style={s.btnGhost} onClick={() => setStep(1)}>← Back</button><button style={s.btn} onClick={() => router.push('/platform/systemiq/modules/m2')}>Next module →</button></div>
        </>}
      </div>
    </div>
  )
}

// ── MODULE 2: AI Roadmap & Tool Deployment ──
function M2({ router, isMobile }: { router: ReturnType<typeof useRouter>, isMobile: boolean }) {
  const [step, setStep] = useState(0)

  return (
    <div style={s.shell(isMobile)}>
      <div style={{ ...s.left, display: isMobile ? 'none' : 'flex' }}>
        <button style={s.back} onClick={() => router.push('/platform/systemiq')}>← Back to path</button>
        <div style={s.num}>MODULE 02</div>
        <div style={s.mlTitle}>AI Roadmap & Tool Deployment</div>
        {['Use case framework', 'Tool deployment', 'My experience'].map((t, i) => (
          <div key={i} style={s.step(step === i)} onClick={() => setStep(i)}>
            <div style={s.dot(step === i)} /><span style={s.stepTxt}>{t}</span>
          </div>
        ))}
        <div style={s.upNext}><div style={s.upNextLbl}>UP NEXT</div><div style={s.upNextItem}>◦ Platform Support</div></div>
      </div>
      <div style={s.right(isMobile)}>
        {isMobile && <button onClick={() => router.push('/platform/systemiq')} style={{ fontSize: '13px', color: '#7B5CF5', background: 'transparent', border: 'none', cursor: 'pointer', padding: '0 0 12px 0' }}>← Back to path</button>}

        {step === 0 && <>
          <div style={s.eye}>Page 1 of 3 — Use Case Framework</div>
          <div style={s.title}>Prioritising high-impact AI opportunities</div>
          <div style={s.body}>Owning the AI tool roadmap means starting not with tools — but with where AI creates the most value. I partner with IT to identify, prioritise and sequence use cases before any deployment begins, ensuring every tool decision is grounded in real team needs.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' as const }}>
            {[['Discover', 'Map pain points'], ['Prioritise', 'Impact vs effort'], ['Pilot', 'Test with real users'], ['Scale', 'Embed & measure']].map(([title, sub], i) => (
              <React.Fragment key={i}>
                <div style={{ background: '#fff', border: '1px solid rgba(10,22,40,0.08)', borderRadius: '8px', padding: '8px 12px', flex: 1, minWidth: '80px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#0A1628' }}>{title}</div>
                  <div style={{ fontSize: '10px', color: '#9B96C0' }}>{sub}</div>
                </div>
                {i < 3 && <span style={{ fontSize: '16px', color: '#9B96C0' }}>→</span>}
              </React.Fragment>
            ))}
          </div>
          <div style={s.card}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#0A1628', marginBottom: '10px' }}>Use Case Prioritisation Matrix</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {[
                { label: 'High Impact · Low Effort', color: '#1D9E75', bg: '#EDFAF5', desc: 'Start here. Quick wins that demonstrate AI value fast. E.g. meeting summaries, email drafting, research synthesis.' },
                { label: 'High Impact · High Effort', color: '#7B5CF5', bg: '#EDE9FE', desc: 'Strategic bets. Plan carefully, pilot first. E.g. custom AI agents, workflow automation across platforms.' },
                { label: 'Low Impact · Low Effort', color: '#BA7517', bg: '#FAEEDA', desc: 'Nice to have. Do only if bandwidth allows. E.g. template formatting, basic data lookups.' },
                { label: 'Low Impact · High Effort', color: '#E24B4A', bg: '#FDF2F2', desc: 'Avoid. Resource drain with minimal return. Redirect energy to high-impact quadrants.' },
              ].map(c => (
                <div key={c.label} style={{ background: c.bg, borderRadius: '8px', padding: '10px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: c.color, marginBottom: '4px' }}>{c.label}</div>
                  <div style={{ fontSize: '12px', color: '#4A5568', lineHeight: 1.5 }}>{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={s.nav}><button style={s.btn} onClick={() => setStep(1)}>Next →</button></div>
        </>}

        {step === 1 && <>
          <div style={s.eye}>Page 2 of 3 — Tool Deployment</div>
          <div style={s.title}>From requirements to safe, scaled deployment</div>
          <div style={s.body}>Deploying AI tools successfully requires more than IT sign-off. I gather real requirements from teams, translate them into IT specifications, manage vendor relationships, and ensure every tool meets standards for safety, privacy, and responsible use — before it reaches anyone's workflow.</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
            {[
              { num: '1', color: '#7B5CF5', title: 'Gather requirements', body: 'Work directly with teams to understand their actual workflows, pain points, and AI readiness. Translate this into clear IT specifications.' },
              { num: '2', color: '#0A1628', title: 'Safety & governance check', body: 'Ensure every tool meets Systemiq\'s standards for data privacy, responsible use, and compliance before deployment.' },
              { num: '3', color: '#1D9E75', title: 'Pilot with real users', body: 'Test with a small group first. Gather feedback, iterate on the learning support, and resolve friction before scaling.' },
              { num: '4', color: '#BA7517', title: 'Scale with enablement', body: 'Pair tool rollout with targeted training, playbooks, and champion support to drive genuine adoption — not just access.' },
            ].map(c => (
              <div key={c.num} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', ...s.card, marginBottom: 0 }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>{c.num}</div>
                <div><div style={{ fontSize: '14px', fontWeight: 600, color: '#0A1628', marginBottom: '3px' }}>{c.title}</div><div style={{ fontSize: '12px', color: '#4A5568', lineHeight: 1.5 }}>{c.body}</div></div>
              </div>
            ))}
          </div>
          <div style={s.nav}><button style={s.btnGhost} onClick={() => setStep(0)}>← Back</button><button style={s.btn} onClick={() => setStep(2)}>Next →</button></div>
        </>}

        {step === 2 && <>
          <div style={s.eye}>Page 3 of 3 — My Experience</div>
          <div style={s.title}>Leading a global LXP implementation at Booking.com</div>
          <div style={s.card}>
            <div style={{ fontSize: '10px', color: '#7B5CF5', fontWeight: 500, letterSpacing: '0.06em', marginBottom: '8px' }}>Booking.com · Amsterdam · 2019 · 18,000 associates</div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#0A1628', marginBottom: '3px' }}>The situation</div>
                <div style={{ fontSize: '12px', color: '#4A5568', lineHeight: 1.5 }}>Booking.com needed to implement a new Learning Experience Platform (Degreed) across 18,000 associates globally. The project required cross-functional alignment, technical specification, vendor management, and a full rollout strategy — with no existing blueprint to follow.</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#0A1628', marginBottom: '3px' }}>What I did as Project Lead</div>
                <div style={{ fontSize: '12px', color: '#4A5568', lineHeight: 1.5 }}>Led the end-to-end LXP implementation: gathered requirements from departments across the business, translated them into IT and vendor specifications, managed the vendor relationship with Degreed, ensured compliance with data privacy and security standards, and drove adoption through targeted enablement.</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '10px' }}>
              {[
                { color: '#7B5CF5', title: 'Requirements gathering', body: 'Ran stakeholder sessions across HR, L&D, IT and business units to surface needs, map existing workflows, and define must-have platform capabilities.' },
                { color: '#0A1628', title: 'IT & vendor specifications', body: 'Translated business requirements into technical specifications for IT and Degreed. Managed the vendor relationship through configuration, testing, and go-live phases.' },
                { color: '#1D9E75', title: 'Standards & compliance', body: "Ensured the platform met Booking.com's data privacy, security, and accessibility standards before deployment. Coordinated sign-off across IT, Legal, and HR." },
                { color: '#BA7517', title: 'Rollout & adoption', body: 'Designed the learning content strategy, built capability maps for 18,000 associates, and created adoption resources to drive engagement from day one.' },
              ].map(c => (
                <div key={c.title} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', background: '#F4F6F9', borderRadius: '8px', padding: '10px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: c.color, flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#0A1628', marginBottom: '2px' }}>{c.title}</div>
                    <div style={{ fontSize: '11px', color: '#4A5568', lineHeight: 1.5 }}>{c.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={s.outcome}>
              <div style={{ fontSize: '10px', fontWeight: 600, color: '#065F46', marginBottom: '2px' }}>OUTCOME</div>
              <div style={{ fontSize: '12px', color: '#0A1628', lineHeight: 1.5 }}>Degreed successfully launched as the global LXP for 18,000 associates. Became the standard platform for learning content curation, capability mapping, and career development at Booking.com — and the foundation for the learning data strategy that followed.</div>
            </div>
            <div style={{ display: 'flex', gap: '5px', marginTop: '8px', flexWrap: 'wrap' as const }}>
              <span style={s.chip}><span style={s.chipDot} />Booking.com · 2019</span>
              <span style={s.chip}><span style={s.chipDot} />18k associates</span>
              <span style={s.chip}><span style={s.chipDot} />Project Lead</span>
              <span style={s.chip}><span style={s.chipDot} />Degreed LXP</span>
            </div>
          </div>
          <div style={s.quote}>"The best AI tool deployments happen when L&D, IT and the business speak the same language from day one."</div>
          <div style={s.nav}>
            <button style={s.btnGhost} onClick={() => setStep(1)}>← Back</button>
            <button style={s.btn} onClick={() => router.push('/platform/systemiq/modules/m3')}>Next module →</button>
          </div>
        </>}
      </div>
    </div>
  )
}

// ── MODULE 3: Platform Support & Coordination ──
function M3({ router, isMobile }: { router: ReturnType<typeof useRouter>, isMobile: boolean }) {
  const [step, setStep] = useState(0)

  return (
    <div style={s.shell(isMobile)}>
      <div style={{ ...s.left, display: isMobile ? 'none' : 'flex' }}>
        <button style={s.back} onClick={() => router.push('/platform/systemiq')}>← Back to path</button>
        <div style={s.num}>MODULE 03</div>
        <div style={s.mlTitle}>Platform Support & Coordination</div>
        {['My approach', 'My experience'].map((t, i) => (
          <div key={i} style={s.step(step === i)} onClick={() => setStep(i)}>
            <div style={s.dot(step === i)} /><span style={s.stepTxt}>{t}</span>
          </div>
        ))}
        <div style={s.upNext}><div style={s.upNextLbl}>UP NEXT</div><div style={s.upNextItem}>◦ Collaboration & Governance</div></div>
      </div>
      <div style={s.right(isMobile)}>
        {isMobile && <button onClick={() => router.push('/platform/systemiq')} style={{ fontSize: '13px', color: '#7B5CF5', background: 'transparent', border: 'none', cursor: 'pointer', padding: '0 0 12px 0' }}>← Back to path</button>}

        {step === 0 && <>
          <div style={s.eye}>Page 1 of 2 — My Approach</div>
          <div style={s.title}>Supporting platform-led AI mobilisation</div>
          <div style={s.body}>Platform teams are closest to the work and therefore closest to where AI can have the most impact. My role is not to impose a top-down AI agenda, but to work alongside platform leadership to surface opportunities, connect what is being learned across teams, and provide the strategic support that helps each platform move at its own pace.</div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
            {[
              { color: '#7B5CF5', bg: '#EDE9FE', title: 'Identify AI opportunities with platform leadership', body: 'Run structured discovery sessions with each platform lead to map where AI could reduce friction, accelerate research, or improve the quality of client deliverables. Focus on real workflows, not hypothetical use cases. Output: a prioritised AI opportunity list per platform, reviewed quarterly.' },
              { color: '#0A1628', bg: '#E8EDF5', title: 'Connect use cases and learnings across teams', body: 'When one platform cracks a use case — like AI-assisted research synthesis or automated reporting — that learning should spread fast. I create the infrastructure for this: shared playbooks, a use case library, and regular cross-platform knowledge sessions so no team reinvents the wheel.' },
              { color: '#1D9E75', bg: '#EDFAF5', title: 'Maintain visibility of AI progress', body: 'Keep a live view of AI activities, adoption levels, and progress across all platforms. This gives the COO and leadership a clear picture of where AI is taking hold, where support is needed, and what is working. Visibility enables better decisions — and faster course correction.' },
              { color: '#BA7517', bg: '#FAEEDA', title: 'Light-touch strategic support', body: 'Platforms lead their own AI mobilisation — I am there to strengthen it, not own it. This means providing input on use case selection, reviewing AI tool choices, supporting change management when adoption stalls, and being a trusted partner rather than a central gatekeeper.' },
            ].map(c => (
              <div key={c.title} style={{ background: c.bg, borderRadius: '11px', padding: '1rem' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: c.color, marginBottom: '6px' }}>{c.title}</div>
                <div style={{ fontSize: '12px', color: c.color, lineHeight: 1.6 }}>{c.body}</div>
              </div>
            ))}
          </div>
          <div style={{ background: '#EDE9FE', border: '1px solid rgba(123,92,245,0.2)', borderRadius: '10px', padding: '1rem', marginBottom: '14px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#4C1D95', marginBottom: '6px' }}>Why this model works</div>
            <div style={{ fontSize: '12px', color: '#5B5680', lineHeight: 1.7 }}>Centralised AI enablement often fails because it tries to own what platforms should lead. The most effective model is a strong centre that enables, connects and supports while platform teams retain the autonomy to mobilise AI in ways that fit their specific context and client work.</div>
          </div>
          <div style={s.nav}><button style={s.btn} onClick={() => setStep(1)}>Next →</button></div>
        </>}

        {step === 1 && <>
          <div style={s.eye}>Page 2 of 2 — My Experience</div>
          <div style={s.title}>Platform support and continuous improvement in practice</div>
          <div style={s.body}>Supporting a platform is not a one-time project it is an ongoing partnership. Two experiences across different organisations shaped how I think about platform coordination: keeping systems working for people, not the other way around.</div>
          <div style={s.card}>
            <div style={{ fontSize: '10px', color: '#7B5CF5', fontWeight: 500, letterSpacing: '0.06em', marginBottom: '8px' }}>Booking.com · Degreed LXP · 2019–2024</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#0A1628', marginBottom: '6px' }}>Continuous platform support for 18,000 associates</div>
            <div style={{ fontSize: '12px', color: '#4A5568', lineHeight: 1.6, marginBottom: '8px' }}>After the initial Degreed LXP rollout, my role shifted to ongoing platform stewardship. This meant maintaining visibility of how teams were using the platform, identifying friction points, gathering feedback from users and stakeholders, and working with the vendor to improve configuration and content structure. I regularly reviewed adoption data to understand which features were being used, which were being ignored, and what needed to change. Platform support also meant keeping leadership informed — translating usage data into strategic insights about learning culture and capability gaps.</div>
            <div style={s.outcome}><div style={{ fontSize: '10px', fontWeight: 600, color: '#065F46', marginBottom: '2px' }}>OUTCOME</div><div style={{ fontSize: '12px', color: '#0A1628', lineHeight: 1.5 }}>Degreed remained the active global LXP for the full duration of my time at Booking.com. Continuous improvement cycles kept adoption high and ensured the platform evolved with the organisation's needs rather than becoming outdated.</div></div>
            <div style={{ display: 'flex', gap: '5px', marginTop: '8px', flexWrap: 'wrap' as const }}><span style={s.chip}><span style={s.chipDot} />Booking.com · 2019–2024</span><span style={s.chip}><span style={s.chipDot} />18k associates</span><span style={s.chip}><span style={s.chipDot} />Degreed</span><span style={s.chip}><span style={s.chipDot} />Ongoing stewardship</span></div>
          </div>
          <div style={s.card}>
            <div style={{ fontSize: '10px', color: '#9B96C0', fontWeight: 500, letterSpacing: '0.06em', marginBottom: '8px' }}>Starwood · Cornerstone · 2014–2017</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#0A1628', marginBottom: '6px' }}>Regional L&D platform support across EAME</div>
            <div style={{ fontSize: '12px', color: '#4A5568', lineHeight: 1.6, marginBottom: '8px' }}>At Starwood, I supported regions and properties across EAME in improving their use of the Cornerstone learning platform. This involved training property L&D teams on platform capabilities, troubleshooting usage issues, identifying configuration improvements, and advocating for regional needs back to the central team. With 260 properties and 10 brands across the region, keeping the platform relevant and usable for diverse local teams required continuous attention and a good understanding of both the technology and the people using it.</div>
            <div style={s.outcome}><div style={{ fontSize: '10px', fontWeight: 600, color: '#065F46', marginBottom: '2px' }}>OUTCOME</div><div style={{ fontSize: '12px', color: '#0A1628', lineHeight: 1.5 }}>Improved platform adoption and capability across EAME properties. Regional teams moved from passive users to active contributors — uploading local content, tracking compliance, and using the platform as a genuine learning tool rather than a reporting system.</div></div>
            <div style={{ display: 'flex', gap: '5px', marginTop: '8px', flexWrap: 'wrap' as const }}><span style={s.chip}><span style={s.chipDot} />Starwood · 2014–2017</span><span style={s.chip}><span style={s.chipDot} />260 properties</span><span style={s.chip}><span style={s.chipDot} />Cornerstone</span><span style={s.chip}><span style={s.chipDot} />EAME</span></div>
          </div>
          <div style={s.quote}>"Platform support is where trust is built. When people know someone is listening and improving the system for them, adoption follows naturally."</div>
          <div style={s.nav}><button style={s.btnGhost} onClick={() => setStep(0)}>← Back</button><button style={s.btn} onClick={() => router.push('/platform/systemiq/modules/m4')}>Next module →</button></div>
        </>}
      </div>
    </div>
  )
}

// ── MODULE 4: Collaboration & Governance ──
function M4({ router, isMobile }: { router: ReturnType<typeof useRouter>, isMobile: boolean }) {
  const [step, setStep] = useState(0)

  return (
    <div style={s.shell(isMobile)}>
      <div style={{ ...s.left, display: isMobile ? 'none' : 'flex' }}>
        <button style={s.back} onClick={() => router.push('/platform/systemiq')}>← Back to path</button>
        <div style={s.num}>MODULE 04</div>
        <div style={s.mlTitle}>Collaboration & Governance</div>
        {['Stakeholder approach', 'Responsible AI', 'My experience'].map((t, i) => (
          <div key={i} style={s.step(step === i)} onClick={() => setStep(i)}>
            <div style={s.dot(step === i)} /><span style={s.stepTxt}>{t}</span>
          </div>
        ))}
        <div style={s.upNext}><div style={s.upNextLbl}>UP NEXT</div><div style={s.upNextItem}>◦ AI Programme Builder</div></div>
      </div>
      <div style={s.right(isMobile)}>
        {isMobile && <button onClick={() => router.push('/platform/systemiq')} style={{ fontSize: '13px', color: '#7B5CF5', background: 'transparent', border: 'none', cursor: 'pointer', padding: '0 0 12px 0' }}>← Back to path</button>}

        {step === 0 && <>
          <div style={s.eye}>Page 1 of 3 — Stakeholder Approach</div>
          <div style={s.title}>Working across IT, Academy, Analytiq and Knowledge</div>
          <div style={s.body}>AI enablement only works when all the right functions are aligned. I act as the connective layer — bringing together IT for tool deployment, Academy for learning integration, Analytiq for data and insights, and Knowledge for content and sharing.</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
            {[
              { partner: 'IT', color: '#0A1628', bg: '#E8EDF5', role: 'Tool deployment partner', how: 'Translate team requirements into IT specs. Co-own the AI tool roadmap. Ensure safe, compliant deployment of all AI tools.' },
              { partner: 'Academy', color: '#7B5CF5', bg: '#EDE9FE', role: 'Learning integration partner', how: 'Embed AI capability into formal learning programmes. Align AI pathways with career development frameworks.' },
              { partner: 'Analytiq', color: '#1D9E75', bg: '#EDFAF5', role: 'Data & insights partner', how: 'Use adoption data to refine enablement. Share insights on AI usage patterns to continuously improve programmes.' },
              { partner: 'Knowledge', color: '#BA7517', bg: '#FAEEDA', role: 'Content & sharing partner', how: 'Ensure AI use cases, playbooks and learnings are captured, accessible, and shared across the organisation.' },
            ].map(c => (
              <div key={c.partner} style={{ display: 'flex', gap: '12px', background: c.bg, borderRadius: '10px', padding: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>{c.partner}</div>
                <div><div style={{ fontSize: '13px', fontWeight: 600, color: c.color, marginBottom: '2px' }}>{c.role}</div><div style={{ fontSize: '12px', color: '#4A5568', lineHeight: 1.5 }}>{c.how}</div></div>
              </div>
            ))}
          </div>
          <div style={s.nav}><button style={s.btn} onClick={() => setStep(1)}>Next →</button></div>
        </>}

        {step === 1 && <>
          <div style={s.eye}>Page 2 of 3 — Responsible AI</div>
          <div style={s.title}>Safe, consistent and responsible AI adoption</div>
          <div style={s.body}>As a certified B Corp, Systemiq holds itself to a higher standard. AI governance isn't just compliance — it's about ensuring AI use aligns with Systemiq's values and builds trust internally and externally.</div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '10px', marginBottom: '14px' }}>
            {[
              { ico: '🔒', color: '#0A1628', bg: '#E8EDF5', title: 'Data Privacy', items: ['Clear guidelines on what data can be used with AI', 'No client data in public AI tools', 'Approved tool list with privacy standards', 'Regular governance reviews'] },
              { ico: '⚖️', color: '#7B5CF5', bg: '#EDE9FE', title: 'Responsible Use', items: ['AI output always reviewed by humans', 'Transparent AI use in client work', 'Bias awareness training for all users', 'Escalation path for ethical concerns'] },
              { ico: '🌱', color: '#1D9E75', bg: '#EDFAF5', title: 'Values Alignment', items: ['AI use supports Systemiq\'s mission', 'Sustainability lens on tool selection', 'Responsible experimentation culture', 'Regular culture and governance check-ins'] },
            ].map(c => (
              <div key={c.title} style={{ background: c.bg, borderRadius: '10px', padding: '1rem' }}>
                <div style={{ fontSize: '18px', marginBottom: '6px' }}>{c.ico}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: c.color, marginBottom: '8px' }}>{c.title}</div>
                {c.items.map(it => <div key={it} style={{ fontSize: '12px', color: '#4A5568', paddingLeft: '11px', position: 'relative', lineHeight: 1.5, marginBottom: '3px' }}><span style={{ position: 'absolute', left: 0, color: c.color, fontSize: '11px' }}>→</span>{it}</div>)}
              </div>
            ))}
          </div>
          <div style={s.nav}><button style={s.btnGhost} onClick={() => setStep(0)}>← Back</button><button style={s.btn} onClick={() => setStep(2)}>Next →</button></div>
        </>}

        {step === 2 && <>
          <div style={s.eye}>Page 3 of 3 — My Experience</div>
          <div style={s.title}>Data-driven governance and stakeholder reporting in practice</div>
          <div style={s.body}>Supporting the COO with clear visibility of AI progress requires the same analytical discipline I have applied throughout my career — turning data into decisions, and reporting into action.</div>
          <div style={s.card}>
            <div style={{ fontSize: '10px', color: '#7B5CF5', fontWeight: 500, letterSpacing: '0.06em', marginBottom: '8px' }}>Booking.com · 2019</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#0A1628', marginBottom: '6px' }}>Learning data strategy and dashboard implementation</div>
            <div style={{ fontSize: '12px', color: '#4A5568', lineHeight: 1.6, marginBottom: '8px' }}>As part of a key strategic people priority at Booking.com, I was responsible for setting up the learning data strategy from scratch. This meant defining the right success metrics, building a learning data dashboard to track them, and using that data to continuously refine the programme. It required close collaboration with IT, HR and business stakeholders to agree on what good looked like — and then making that visible to leadership in a clear, actionable format. This is directly how I would approach AI adoption reporting at Systemiq: defining the right metrics early, building visibility, and using data to drive continuous improvement rather than just report activity.</div>
            <div style={s.outcome}><div style={{ fontSize: '10px', fontWeight: 600, color: '#065F46', marginBottom: '2px' }}>OUTCOME</div><div style={{ fontSize: '12px', color: '#0A1628', lineHeight: 1.5 }}>A functioning learning data dashboard that gave stakeholders real-time visibility of programme performance and enabled data-led decisions on content, format and targeting.</div></div>
            <div style={{ display: 'flex', gap: '5px', marginTop: '8px', flexWrap: 'wrap' as const }}><span style={s.chip}><span style={s.chipDot} />Booking.com · 2019</span><span style={s.chip}><span style={s.chipDot} />Data strategy</span><span style={s.chip}><span style={s.chipDot} />Dashboard build</span><span style={s.chip}><span style={s.chipDot} />Success metrics</span><span style={s.chip}><span style={s.chipDot} />Stakeholder reporting</span></div>
          </div>
          <div style={s.card}>
            <div style={{ fontSize: '10px', color: '#7B5CF5', fontWeight: 500, letterSpacing: '0.06em', marginBottom: '8px' }}>Prosus · 2020–2024</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#0A1628', marginBottom: '6px' }}>Employee engagement analysis and targeted follow-up</div>
            <div style={{ fontSize: '12px', color: '#4A5568', lineHeight: 1.6, marginBottom: '8px' }}>At Prosus I was responsible for analysing Employee Engagement survey results across corporate functions and translating findings into targeted L&D interventions. This meant working across HR, leadership and individual departments — identifying patterns in the data, proposing action plans, and reporting progress back to senior stakeholders over time. The same approach applies directly to AI governance: regular review of adoption data, honest analysis of where enablement is and is not working, and clear reporting to the COO that supports better decisions.</div>
            <div style={s.outcome}><div style={{ fontSize: '10px', fontWeight: 600, color: '#065F46', marginBottom: '2px' }}>OUTCOME</div><div style={{ fontSize: '12px', color: '#0A1628', lineHeight: 1.5 }}>Engagement data translated into concrete L&D actions across multiple departments. Senior leadership received regular progress updates that connected L&D activity to business outcomes.</div></div>
            <div style={{ display: 'flex', gap: '5px', marginTop: '8px', flexWrap: 'wrap' as const }}><span style={s.chip}><span style={s.chipDot} />Prosus · 2020–2024</span><span style={s.chip}><span style={s.chipDot} />Engagement analysis</span><span style={s.chip}><span style={s.chipDot} />Cross-functional collaboration</span><span style={s.chip}><span style={s.chipDot} />Executive reporting</span></div>
          </div>
          <div style={s.quote}>"Good governance is not about control — it is about giving leadership the clarity they need to make confident decisions."</div>
          <div style={s.nav}><button style={s.btnGhost} onClick={() => setStep(1)}>← Back</button><button style={s.btn} onClick={() => router.push('/platform/systemiq/modules/m5')}>Next module →</button></div>
        </>}
      </div>
    </div>
  )
}

// ── MODULE 5: AI Programme Builder ──
function M5({ router, isMobile }: { router: ReturnType<typeof useRouter>, isMobile: boolean }) {
  const [challenge, setChallenge] = useState('')
  const [platform, setPlatform] = useState('energy')
  const [audience, setAudience] = useState('all')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  async function generate() {
    if (!challenge.trim()) return alert('Please describe your challenge first.')
    setLoading(true); setResult(null)
    const sys = `You are Sandra Tokarz, AI Enablement Manager. You are designing a programme for Systemiq, a certified B Corp focused on system change for net-zero and nature-positive economies across 5 platforms: energy, nature & food, materials & circularity, sustainable finance, and urban transformation. Generate a practical AI enablement programme as JSON:
{"title":"...","overview":"2 sentences","modules":[{"number":1,"title":"...","duration":"...","format":"...","description":"2 sentences","objectives":["...","..."],"activity":"one specific practical activity"}],"outcomes":"2-3 sentences"}
3-4 modules. Role-specific, immediately applicable. Tie to Systemiq's mission where relevant. Return ONLY valid JSON.`
    try {
      const r = await fetch('/api/generate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 1200, system: sys, messages: [{ role: 'user', content: `Platform: ${platform}\nAudience: ${audience}\nChallenge: ${challenge}` }] }) })
      const d = await r.json()
      const prog = JSON.parse(d.content?.[0]?.text.replace(/```json|```/g, '').trim() || '{}')
      setResult(prog)
    } catch (e) { setResult({ error: true }) }
    setLoading(false)
  }

  return (
    <div style={s.shell(isMobile)}>
      <div style={{ ...s.left, display: isMobile ? 'none' : 'flex' }}>
        <button style={s.back} onClick={() => router.push('/platform/systemiq')}>← Back to path</button>
        <div style={s.num}>MODULE 05</div>
        <div style={s.mlTitle}>AI Programme Builder</div>
        <div style={s.step(true)}><div style={s.dot(true)} /><span style={s.stepTxt}>Generate programme</span></div>
      </div>
      <div style={s.right(isMobile)}>
        {isMobile && <button onClick={() => router.push('/platform/systemiq')} style={{ fontSize: '13px', color: '#7B5CF5', background: 'transparent', border: 'none', cursor: 'pointer', padding: '0 0 12px 0' }}>← Back to path</button>}
        <div style={s.eye}>Module 05 — AI Toolkit Generator</div>
        <div style={s.title}>Generate a custom AI enablement programme</div>
        <div style={s.body}>Describe a real AI enablement challenge at Systemiq — the AI generates a full programme using Sandra's design approach, tailored to the platform and audience.</div>
        <div style={s.card}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '6px', background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✦</div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#0A1628' }}>AI Programme Builder</div>
          </div>
          <div style={{ fontSize: '13px', color: '#4A5568', marginBottom: '10px', lineHeight: 1.6 }}>Select a Systemiq platform, describe your challenge, and get a full learning programme with modules, objectives, and activities.</div>
          <textarea rows={3} value={challenge} onChange={e => setChallenge(e.target.value)} placeholder="e.g. 'The energy platform team needs to use AI for research synthesis but lacks confidence in prompting'" style={{ width: '100%', background: '#F4F6F9', border: '1px solid rgba(10,22,40,0.1)', borderRadius: '7px', padding: '8px 11px', fontSize: '13px', color: '#0A1628', fontFamily: 'Inter, sans-serif', outline: 'none', resize: 'none', marginBottom: '8px', boxSizing: 'border-box' as const }} />
          <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' as const }}>
            <select value={platform} onChange={e => setPlatform(e.target.value)} style={{ background: '#F4F6F9', border: '1px solid rgba(10,22,40,0.1)', borderRadius: '6px', padding: '6px 10px', fontSize: '12px', color: '#4A5568', fontFamily: 'Inter, sans-serif', outline: 'none' }}>
              <option value="energy">⚡ Energy</option>
              <option value="nature">🌿 Nature & Food</option>
              <option value="materials">♻️ Materials</option>
              <option value="finance">💰 Sustainable Finance</option>
              <option value="urban">🏙 Urban Transformation</option>
              <option value="operations">⚙️ Operations</option>
            </select>
            <select value={audience} onChange={e => setAudience(e.target.value)} style={{ background: '#F4F6F9', border: '1px solid rgba(10,22,40,0.1)', borderRadius: '6px', padding: '6px 10px', fontSize: '12px', color: '#4A5568', fontFamily: 'Inter, sans-serif', outline: 'none' }}>
              <option value="all">All staff</option>
              <option value="advisory">Advisory teams</option>
              <option value="operations">Operations teams</option>
              <option value="leadership">Leadership</option>
            </select>
            <button onClick={generate} disabled={loading} style={{ ...s.btn, fontSize: '13px', padding: '6px 16px', opacity: loading ? 0.7 : 1 }}>{loading ? '⟳ Generating…' : '✦ Generate'}</button>
          </div>
          {loading && (
            <div style={{ marginTop: '12px', background: '#F4F6F9', borderRadius: '7px', padding: '14px' }}>
              <div style={{ fontSize: '13px', color: '#7B5CF5', fontWeight: 500, marginBottom: '4px' }}>✦ Building your programme...</div>
              <div style={{ fontSize: '12px', color: '#9B96C0' }}>Designing role-specific modules for Systemiq. This takes about 10 seconds.</div>
            </div>
          )}
          {result && !result.error && (
            <div style={{ marginTop: '12px' }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#0A1628', marginBottom: '5px' }}>{result.title}</div>
              <div style={{ fontSize: '13px', color: '#4A5568', marginBottom: '8px', lineHeight: 1.55 }}>{result.overview}</div>
              {(result.modules || []).map((m: any) => (
                <div key={m.number} style={{ background: '#F4F6F9', borderRadius: '7px', padding: '8px 10px', marginBottom: '6px', borderLeft: '2.5px solid #7B5CF5' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}><div style={{ fontSize: '14px', fontWeight: 500, color: '#0A1628' }}>Module {m.number}: {m.title}</div><div style={{ fontSize: '10px', color: '#9B96C0' }}>{m.duration} · {m.format}</div></div>
                  <div style={{ fontSize: '12px', color: '#4A5568', lineHeight: 1.5, marginBottom: '4px' }}>{m.description}</div>
                  {(m.objectives || []).map((o: string) => <div key={o} style={{ fontSize: '11px', color: '#4A5568', paddingLeft: '9px', position: 'relative', lineHeight: 1.4, marginBottom: '1px' }}><span style={{ position: 'absolute', left: 0, color: '#1D9E75', fontSize: '10px' }}>✓</span>{o}</div>)}
                  {m.activity && <div style={{ marginTop: '5px', padding: '5px 8px', background: '#EDE9FE', borderRadius: '5px', fontSize: '11px', color: '#4C1D95' }}><strong>Activity: </strong>{m.activity}</div>}
                </div>
              ))}
              {result.outcomes && <div style={{ background: '#EDFAF5', border: '1px solid rgba(29,158,117,0.2)', borderRadius: '7px', padding: '8px 10px', fontSize: '11px', color: '#065F46', lineHeight: 1.5 }}><strong style={{ display: 'block', marginBottom: '2px' }}>OUTCOMES</strong>{result.outcomes}</div>}
            </div>
          )}
          {result?.error && <div style={{ marginTop: '12px', fontSize: '13px', color: '#4A5568' }}>Could not connect to AI. Please try again.</div>}
        </div>
        <div style={s.nav}><button style={s.btn} onClick={() => router.push('/platform/systemiq/about')}>View About Sandra →</button></div>
      </div>
    </div>
  )
}

// ── ROUTER ──
import React from 'react'

export default function SystemiqModulePage() {
  const router = useRouter()
  const params = useParams()
  const id = params?.id as string
  const isMobile = useIsMobile()

  if (id === 'm1') return <M1 router={router} isMobile={isMobile} />
  if (id === 'm2') return <M2 router={router} isMobile={isMobile} />
  if (id === 'm3') return <M3 router={router} isMobile={isMobile} />
  if (id === 'm4') return <M4 router={router} isMobile={isMobile} />
  if (id === 'm5') return <M5 router={router} isMobile={isMobile} />
  return <div style={{ padding: '2rem' }}>Module not found.</div>
}