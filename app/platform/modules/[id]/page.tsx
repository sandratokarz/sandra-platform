'use client'
import React, { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'

// ── shared styles ──────────────────────────────────────────
const s = {
  shell: { display: 'grid', gridTemplateColumns: '200px 1fr', height: '100%' } as React.CSSProperties,
  left: { background: '#1E1B35', padding: '1.25rem', display: 'flex', flexDirection: 'column' as const, gap: '10px', overflowY: 'auto' as const },
  back: { fontSize: '12px', color: 'rgba(255,255,255,0.3)', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' as const, padding: 0, fontFamily: 'Inter, sans-serif' },
  num: { fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.2)', marginTop: '8px' },
  mlTitle: { fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#fff', lineHeight: 1.35, marginBottom: '14px' },
  step: (on: boolean) => ({ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', cursor: 'pointer', opacity: on ? 1 : 0.4 } as React.CSSProperties),
  dot: (on: boolean) => ({ width: '7px', height: '7px', borderRadius: '50%', background: on ? '#7B5CF5' : 'rgba(255,255,255,0.12)', flexShrink: 0 } as React.CSSProperties),
  stepTxt: { fontSize: '12px', color: '#fff' },
  right: { overflowY: 'auto' as const, padding: '1.5rem 2rem', background: '#F5F0E8', flex: 1 },
  eye: { fontSize: '11px', color: '#9B96C0', marginBottom: '6px' },
  title: { fontFamily: 'Inter, sans-serif', fontSize: '19px', fontWeight: 700, color: '#1A1A2E', marginBottom: '8px', lineHeight: 1.2 },
  body: { fontSize: '14px', color: '#5B5680', lineHeight: 1.7, marginBottom: '14px' },
  card: { background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '10px', padding: '1rem', marginBottom: '10px' },
  nav: { display: 'flex', gap: '8px', marginTop: '14px' },
  btn: { background: '#7B5CF5', color: '#fff', border: 'none', borderRadius: '7px', padding: '8px 16px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif' },
  btnGhost: { background: 'transparent', color: '#7B5CF5', border: '1px solid #7B5CF5', borderRadius: '7px', padding: '8px 16px', fontSize: '13px', cursor: 'pointer', fontFamily: 'Inter, sans-serif' },
  chip: { display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#5B5680', background: '#EDE8DF', borderRadius: '5px', padding: '2px 7px' },
  chipDot: { width: '4px', height: '4px', borderRadius: '50%', background: '#7B5CF5', display: 'inline-block' },
  outcome: { background: '#EDFAF5', border: '1px solid rgba(29,158,117,0.2)', borderRadius: '7px', padding: '8px 11px', marginTop: '8px' },
  quote: { background: '#EDE9FE', borderLeft: '3px solid #7B5CF5', borderRadius: '0 8px 8px 0', padding: '10px 13px', fontSize: '14px', color: '#4C1D95', fontStyle: 'italic' as const, lineHeight: 1.6, marginBottom: '14px' },
  upNext: { marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' },
  upNextLbl: { fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.2)', marginBottom: '5px' },
  upNextItem: { display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(255,255,255,0.5)' },
}

// ── MODULE CONTENT ─────────────────────────────────────────

function M1({ router }: { router: ReturnType<typeof useRouter> }) {
  const [step, setStep] = useState(0)
  const sfData = [
    { title: 'Priorities — Define where AI should matter', body: 'You don\'t start with tools. You start with business tension. Align with leaders to identify where time is lost, quality is inconsistent, or scale is needed. Output: 3–5 AI focus areas (e.g. proposal creation, research, automation).', q: '"If it doesn\'t tie to revenue, efficiency, or risk — it\'s not a priority."' },
    { title: 'Use Cases — Ground learning in real work', body: 'Identify 5–10 specific use cases with the highest adoption potential. Each must be role-relevant, tool-ready, and measurable. Consultants: proposal drafting. Leaders: meeting prep. Internal: data summarisation.', q: '"Generic AI training doesn\'t change behavior. Use cases do."' },
    { title: 'Learning — Design for performance, not completion', body: 'Build short, workflow-embedded learning moments around each use case. 5–10 min max. Immediate practice. Manager-supported. Not one-off events — continuous reinforcement.', q: '"Learning is only valuable if it changes what people do on Monday morning."' },
    { title: 'Adoption — Drive behaviour change', body: 'Adoption requires more than access. Champions, manager check-ins, team challenges, and visible success stories create the social proof and accountability that drives sustained behaviour change.', q: '"Adoption is a design problem, not a motivation problem."' },
    { title: 'Impact — Measure what matters', body: 'Track across three layers: adoption (are people using AI?), behaviour (are they working differently?), and business impact (time saved, quality improved). Use data to refine continuously.', q: '"The strategy evolves based on real usage and performance data — not assumptions."' },
  ]
  const [sfStep, setSfStep] = useState(0)

  return (
    <div style={s.shell}>
      <div style={s.left}>
        <button style={s.back} onClick={() => router.push('/platform')}>← Back to path</button>
        <div style={s.num}>MODULE 01</div>
        <div style={s.mlTitle}>Global AI Enablement Strategy</div>
        {['3-layer framework', 'The strategy model', 'My experience'].map((t, i) => (
          <div key={i} style={s.step(step === i)} onClick={() => setStep(i)}>
            <div style={s.dot(step === i)} /><span style={s.stepTxt}>{t}</span>
          </div>
        ))}
        <div style={s.upNext}>
          <div style={s.upNextLbl}>UP NEXT</div>
          <div style={s.upNextItem}><div style={s.dot(false)} />Role Curriculum</div>
        </div>
      </div>
      <div style={s.right}>
        {step === 0 && <>
          <div style={s.eye}>Page 1 of 3 — Framework</div>
          <div style={s.title}>From Tools to Business Impact</div>
          <div style={s.body}>AI doesn't fail because of tools. It fails because adoption isn't designed. Effective enablement connects three layers starting with priorities, not platforms.</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', marginBottom: '14px' }}>
            {[
              { bg: '#EDE9FE', border: 'rgba(123,92,245,0.2)', ico: '🎯', titleColor: '#4C1D95', title: 'Business Priorities', items: ['Increase consultant productivity', 'Enhance client value', 'Ensure responsible AI usage', 'Scale knowledge globally'], qBg: 'rgba(123,92,245,0.1)', q: '"AI is only successful if it improves billable impact."' },
              { bg: '#FDF2F2', border: 'rgba(244,168,168,0.3)', ico: '👤', titleColor: '#9B1C1C', title: 'User Needs', items: ['Consultants: faster outputs', 'Internal: automate tasks', 'Leaders: understand ROI', 'All: AI in my workflow'], qBg: 'rgba(244,168,168,0.15)', q: '"Adoption happens when AI solves today\'s problem."' },
              { bg: '#EDFAF5', border: 'rgba(29,158,117,0.2)', ico: '🛠', titleColor: '#065F46', title: 'Tools', items: ['Core AI tools & copilots', 'Learning tools (Sana, Synthesia)', 'Microsoft 365 integration', 'Workflow-embedded AI'], qBg: 'rgba(29,158,117,0.08)', q: '"Tools embedded in workflows, not trained separately."' },
            ].map(c => (
              <div key={c.title} style={{ background: c.bg, border: `1px solid ${c.border}`, borderRadius: '11px', padding: '1rem' }}>
                <div style={{ fontSize: '20px', marginBottom: '7px' }}>{c.ico}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: c.titleColor, marginBottom: '6px' }}>{c.title}</div>
                {c.items.map(it => <div key={it} style={{ fontSize: '12px', color: c.titleColor, lineHeight: 1.45, display: 'flex', gap: '5px', marginBottom: '2px' }}><span>·</span>{it}</div>)}
                <div style={{ fontSize: '11px', fontStyle: 'italic', marginTop: '8px', padding: '5px 8px', borderRadius: '5px', background: c.qBg, color: c.titleColor, lineHeight: 1.5 }}>{c.q}</div>
              </div>
            ))}
          </div>
          <div style={s.nav}><button style={s.btn} onClick={() => setStep(1)}>Next →</button></div>
        </>}

        {step === 1 && <>
          <div style={s.eye}>Page 2 of 3 — Strategy Model</div>
          <div style={s.title}>The Strategy Model</div>
          <div style={s.body}>Each step in the chain is interdependent. Click any step to explore how it works in practice.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' as const }}>
            {sfData.map((sf, i) => (
              <React.Fragment key={i}>
                <div onClick={() => setSfStep(i)} style={{ cursor: 'pointer', background: sfStep === i ? '#7B5CF5' : '#fff', border: `1px solid ${sfStep === i ? '#7B5CF5' : 'rgba(0,0,0,0.08)'}`, borderRadius: '8px', padding: '8px 11px', transition: 'all .15s' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: sfStep === i ? '#fff' : '#1A1A2E' }}>{['Priorities', 'Use Cases', 'Learning', 'Adoption', 'Impact'][i]}</div>
                  <div style={{ fontSize: '10px', color: sfStep === i ? 'rgba(255,255,255,0.6)' : '#9B96C0' }}>{['Define focus', 'Real work', 'Performance', 'Behaviour', 'Measure'][i]}</div>
                </div>
                {i < 4 && <span style={{ fontSize: '16px', color: '#9B96C0' }}>→</span>}
              </React.Fragment>
            ))}
          </div>
          <div style={{ background: '#EDE9FE', border: '1px solid rgba(123,92,245,0.2)', borderRadius: '10px', padding: '1rem', marginBottom: '12px' }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 700, color: '#4C1D95', marginBottom: '6px' }}>{sfData[sfStep].title}</div>
            <div style={{ fontSize: '13px', color: '#1A1A2E', lineHeight: 1.65, marginBottom: '8px' }}>{sfData[sfStep].body}</div>
            <div style={{ fontSize: '13px', color: '#7B5CF5', fontStyle: 'italic', borderLeft: '2px solid #7B5CF5', paddingLeft: '8px' }}>{sfData[sfStep].q}</div>
          </div>
          <div style={s.nav}><button style={s.btnGhost} onClick={() => setStep(0)}>← Back</button><button style={s.btn} onClick={() => setStep(2)}>Next →</button></div>
        </>}

        {step === 2 && <>
          <div style={s.eye}>Page 3 of 3 — My Experience</div>
          <div style={s.title}>Applied in Practice</div>
          <div style={s.card}>
            <div style={{ fontSize: '10px', color: '#7B5CF5', fontWeight: 500, letterSpacing: '0.06em', marginBottom: '8px' }}>Prosus · Finance Transformation · 2022</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
              <div><div style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A2E', marginBottom: '3px' }}>The situation</div><div style={{ fontSize: '12px', color: '#5B5680', lineHeight: 1.5 }}>Finance had near-zero AI literacy. Learning was a one-off event. Leadership wanted digital transformation but had no L&D strategy.</div></div>
              <div><div style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A2E', marginBottom: '3px' }}>What Sandra did</div><div style={{ fontSize: '12px', color: '#5B5680', lineHeight: 1.5 }}>Created a strategy aligned to Finance capability goals, moving from one-off events to role-specific, tool-connected, manager-supported learning embedded in daily work.</div></div>
            </div>
            <div style={s.outcome}><div style={{ fontSize: '10px', fontWeight: 600, color: '#065F46', marginBottom: '2px' }}>OUTCOME</div><div style={{ fontSize: '12px', color: '#1A1A2E', lineHeight: 1.5 }}>Finance moved from resistance to active AI adoption.</div></div>
            <div style={{ display: 'flex', gap: '5px', marginTop: '8px' }}><span style={s.chip}><span style={s.chipDot} />Prosus · Learning Lead · 2022</span><span style={s.chip}><span style={s.chipDot} />Org-wide impact</span></div>
          </div>
          <div style={s.quote}>"AI enablement is not a training program. It's a continuous system that connects business priorities to measurable behavior change."</div>
          <div style={s.nav}><button style={s.btnGhost} onClick={() => setStep(1)}>← Back</button><button style={s.btn} onClick={() => router.push('/platform/modules/m2')}>Next module →</button></div>
        </>}
      </div>
    </div>
  )
}

function M2({ router }: { router: ReturnType<typeof useRouter> }) {
  const [step, setStep] = useState(0)
  const [activeRole, setActiveRole] = useState(0)

  const roles = [
    {
      emoji: '💼', bg: '#EDE9FE', title: 'AI-Enhanced Consulting', sub: 'Consultant · 4 modules',
      curriculum: { title: 'AI-Enhanced Consulting: From Insight to Client Impact', outcomes: ['Create high-quality client deliverables faster', 'Use AI to generate insights and structure thinking', 'Apply AI responsibly in client-facing work'], modules: [{ n: '1. Foundations: AI in Consulting', items: ['🎥 Video (3 min): How AI transforms consulting workflows', '📄 Article: Responsible AI in client engagements', '⚡ Interactive: What to use AI for vs. not'] }, { n: '2. AI for Client Deliverables', items: ['🎥 Demo: Prompting for proposal drafts', '🧩 Guided Practice: Build a proposal using AI', '📄 Template Pack: Prompt library for consulting'] }, { n: '3. Research & Insight Generation', items: ['🎥 Walkthrough: From raw data to synthesized insight', '⚡ Simulation: Analyze a case using AI', '📄 Checklist: Validating AI-generated insights'] }, { n: '4. Advanced: AI-Augmented Storytelling', items: ['🎥 Masterclass: Turning AI output into narratives', '🧩 Exercise: Improve an AI-generated client story'] }] }
    },
    {
      emoji: '🧭', bg: '#FDF2F2', title: 'Leading in the Age of AI', sub: 'Leader · 4 modules',
      curriculum: { title: 'Leading in the Age of AI', outcomes: ['Identify high-impact AI opportunities in your team', 'Confidently lead AI adoption and behaviour change', 'Balance innovation with risk and responsibility'], modules: [{ n: '1. AI for Business Leaders', items: ['🎥 Executive Briefing (5 min): What AI means for our business', '📄 Article: AI opportunities vs. hype', '⚡ Self-Assessment: Your team\'s AI readiness'] }, { n: '2. Identifying Use Cases', items: ['🎥 Explainer: Finding AI opportunities in daily work', '🧩 Workshop-in-a-box: Define 3 use cases for your team', '📄 Canvas Tool: Use case identification template'] }, { n: '3. Driving Adoption', items: ['🎥 Scenario: Leading AI change in teams', '⚡ Simulation: Handle resistance to AI', '📄 Playbook: Leader actions for adoption'] }, { n: '4. Responsible AI & Governance', items: ['🎥 Expert Talk: Risk, ethics, compliance', '📄 Quick Guide: Do\'s & Don\'ts for leaders', '⚡ Decision Simulation: AI risk scenario'] }] }
    },
    {
      emoji: '⚙️', bg: '#EDFAF5', title: 'AI for Productivity', sub: 'Internal Functions · 4 modules',
      curriculum: { title: 'AI for Productivity & Smarter Workflows', outcomes: ['Automate repetitive tasks using AI', 'Improve quality and speed of daily work', 'Use AI tools confidently in core workflows'], modules: [{ n: '1. AI for Daily Productivity', items: ['🎥 Quick Demo (2–3 min): Using AI for emails, summaries', '📄 Cheat Sheet: Top prompts for daily work', '⚡ Exercise: Rewrite real work using AI'] }, { n: '2. Automating Workflows', items: ['🎥 Walkthrough: Automating reporting tasks', '🧩 Interactive Build: Create a simple AI-supported workflow', '📄 Guide: Where automation adds value'] }, { n: '3. AI for Decision Support', items: ['🎥 Explainer: Using AI for data interpretation', '⚡ Scenario: Make decisions using AI outputs', '📄 Checklist: Validating AI recommendations'] }, { n: '4. Embedding AI into Daily Work', items: ['🎥 Tool Demo: AI inside Microsoft 365', '📄 Workflow Map: Where AI fits into your day', '⚡ Reflection: Identify 2 automation opportunities'] }] }
    },
  ]
  const colors = ['#7B5CF5', '#F4A8A8', '#1D9E75']
  const r = roles[activeRole]

  return (
    <div style={s.shell}>
      <div style={s.left}>
        <button style={s.back} onClick={() => router.push('/platform')}>← Back to path</button>
        <div style={s.num}>MODULE 02</div>
        <div style={s.mlTitle}>Role-Based Learning Journeys</div>
        {['Role curricula', 'My experience'].map((t, i) => (
          <div key={i} style={s.step(step === i)} onClick={() => setStep(i)}>
            <div style={s.dot(step === i)} /><span style={s.stepTxt}>{t}</span>
          </div>
        ))}
        <div style={s.upNext}><div style={s.upNextLbl}>UP NEXT</div><div style={s.upNextItem}><div style={s.dot(false)} />Toolkits</div></div>
      </div>
      <div style={s.right}>
        {step === 0 && <>
          <div style={s.eye}>Page 1 of 2 — Role Curricula</div>
          <div style={s.title}>Role-Based Learning Journeys</div>
          <div style={s.body}>Each curriculum is built from real use cases and designed as short, practical learning moments embedded into daily work. Click a role to explore its curriculum.</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', marginBottom: '12px' }}>
            {roles.map((role, i) => (
              <div key={i} onClick={() => setActiveRole(i)} style={{ background: '#fff', border: `1.5px solid ${activeRole === i ? '#7B5CF5' : 'rgba(0,0,0,0.07)'}`, borderRadius: '11px', overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', background: role.bg }}>{role.emoji}</div>
                <div style={{ padding: '10px 11px' }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, color: '#1A1A2E', marginBottom: '2px', lineHeight: 1.3 }}>{role.title}</div>
                  <div style={{ fontSize: '11px', color: '#5B5680' }}>{role.sub}</div>
                  <div style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '5px', marginTop: '5px', display: 'inline-block', background: activeRole === i ? '#EDE9FE' : '#EDE8DF', color: activeRole === i ? '#4C1D95' : '#9B96C0' }}>{activeRole === i ? 'Active' : 'Click to view'}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '11px', padding: '1.1rem', marginBottom: '12px' }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 700, color: '#1A1A2E', marginBottom: '4px' }}>{r.curriculum.title}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '10px' }}>
              {r.curriculum.outcomes.map(o => <div key={o} style={{ fontSize: '12px', color: '#5B5680', display: 'flex', gap: '5px' }}><span style={{ color: '#1D9E75', fontSize: '11px', marginTop: '1px' }}>✓</span>{o}</div>)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {r.curriculum.modules.map((m, mi) => (
                <div key={mi} style={{ background: '#F5F0E8', borderRadius: '7px', padding: '8px 10px' }}>
                  <div style={{ fontSize: '10px', color: colors[activeRole], marginBottom: '3px' }}>{m.n}</div>
                  {m.items.map(it => <div key={it} style={{ fontSize: '12px', color: '#5B5680', display: 'flex', gap: '5px', marginBottom: '2px' }}><span style={{ fontSize: '11px', flexShrink: 0 }}>{it.split(' ')[0]}</span><span>{it.split(' ').slice(1).join(' ')}</span></div>)}
                </div>
              ))}
            </div>
          </div>
          <div style={s.nav}><button style={s.btn} onClick={() => setStep(1)}>Next →</button></div>
        </>}
        {step === 1 && <>
          <div style={s.eye}>Page 2 of 2 — My Experience</div>
          <div style={s.title}>Role-based curriculum in practice</div>
          <div style={s.card}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
              <div><div style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A2E', marginBottom: '3px' }}>Prosus — Finance Growth Curriculum</div><div style={{ fontSize: '12px', color: '#5B5680', lineHeight: 1.5 }}>Built role-based curriculum for Finance aligned to capability goals and career stages. Learning became purposeful, not generic.</div></div>
              <div><div style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A2E', marginBottom: '3px' }}>Booking.com — Capability Maps</div><div style={{ fontSize: '12px', color: '#5B5680', lineHeight: 1.5 }}>Implemented capability learning maps for 18k associates as part of a full career framework. People could see their growth path clearly.</div></div>
            </div>
            <div style={{ display: 'flex', gap: '5px' }}><span style={s.chip}><span style={s.chipDot} />Prosus 2020–24</span><span style={s.chip}><span style={s.chipDot} />Booking.com 2017–24</span><span style={s.chip}><span style={s.chipDot} />18k associates</span></div>
          </div>
          <div style={s.nav}><button style={s.btnGhost} onClick={() => setStep(0)}>← Back</button><button style={s.btn} onClick={() => router.push('/platform/modules/m3')}>Next module →</button></div>
        </>}
      </div>
    </div>
  )
}

function M3({ router }: { router: ReturnType<typeof useRouter> }) {
  const [step, setStep] = useState(0)
  const [challenge, setChallenge] = useState('')
  const [audience, setAudience] = useState('consultant')
  const [format, setFormat] = useState('blended')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  async function generate() {
    if (!challenge.trim()) return alert('Please describe your challenge first.')
    setLoading(true); setResult(null)
    const sys = `You are Sandra Tokarz, Strategic L&D Leader. Generate a practical learning programme as JSON:
{"title":"...","overview":"2 sentences","modules":[{"number":1,"title":"...","duration":"...","format":"...","description":"2 sentences","objectives":["...","..."],"activity":"one specific practical activity"}],"outcomes":"2-3 sentences"}
3-4 modules. Role-specific, immediately applicable. Return ONLY valid JSON.`
    try {
      const r = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 1200, system: sys, messages: [{ role: 'user', content: `Challenge: ${challenge}\nAudience: ${audience}\nFormat: ${format}` }] }) })
      const d = await r.json()
      const prog = JSON.parse(d.content?.[0]?.text.replace(/```json|```/g, '').trim() || '{}')
      setResult(prog)
    } catch (e) { setResult({ error: true }) }
    setLoading(false)
  }

  return (
    <div style={s.shell}>
      <div style={s.left}>
        <button style={s.back} onClick={() => router.push('/platform')}>← Back to path</button>
        <div style={s.num}>MODULE 03</div>
        <div style={s.mlTitle}>Learning That Drives Action</div>
        {['AI generator', 'My experience'].map((t, i) => (
          <div key={i} style={s.step(step === i)} onClick={() => setStep(i)}>
            <div style={s.dot(step === i)} /><span style={s.stepTxt}>{t}</span>
          </div>
        ))}
        <div style={s.upNext}><div style={s.upNextLbl}>UP NEXT</div><div style={s.upNextItem}><div style={s.dot(false)} />Delivery</div></div>
      </div>
      <div style={s.right}>
        {step === 0 && <>
          <div style={s.eye}>Page 1 of 2 — AI Toolkit Generator</div>
          <div style={s.title}>Practical content designed for real work</div>
          <div style={s.body}>Describe your learning challenge — the AI generates a full programme using Sandra's design approach: role-specific, behaviour-focused, immediately applicable.</div>
          <div style={s.card}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px' }}>✦</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 700, color: '#1A1A2E' }}>AI Programme Builder</div>
            </div>
            <div style={{ fontSize: '13px', color: '#5B5680', marginBottom: '10px', lineHeight: 1.6 }}>Input your challenge and audience — get a full learning programme with modules, objectives, and activities.</div>
            <textarea rows={2} value={challenge} onChange={e => setChallenge(e.target.value)} placeholder="e.g. 'KF consultants need to use AI tools in client projects but are resistant to starting'" style={{ width: '100%', background: '#F5F0E8', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '7px', padding: '8px 11px', fontSize: '13px', color: '#1A1A2E', fontFamily: 'Inter, sans-serif', outline: 'none', resize: 'none', marginBottom: '8px', boxSizing: 'border-box' }} />
            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' as const }}>
              <select value={audience} onChange={e => setAudience(e.target.value)} style={{ background: '#F5F0E8', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '6px', padding: '5px 9px', fontSize: '12px', color: '#5B5680', fontFamily: 'Inter, sans-serif', outline: 'none' }}>
                <option value="consultant">Consultants</option><option value="executive">Executives</option><option value="hr">HR / L&D</option><option value="all">All staff</option>
              </select>
              <select value={format} onChange={e => setFormat(e.target.value)} style={{ background: '#F5F0E8', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '6px', padding: '5px 9px', fontSize: '12px', color: '#5B5680', fontFamily: 'Inter, sans-serif', outline: 'none' }}>
                <option value="blended">Blended</option><option value="online">Self-paced</option><option value="workshop">Workshop</option>
              </select>
              <button onClick={generate} disabled={loading} style={{ ...s.btn, fontSize: '12px', padding: '5px 14px', opacity: loading ? 0.7 : 1 }}>{loading ? '⟳ Generating…' : '✦ Generate'}</button>
            </div>
            {result && !result.error && (
              <div style={{ marginTop: '12px' }}>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#1A1A2E', marginBottom: '5px' }}>{result.title}</div>
                <div style={{ fontSize: '12px', color: '#5B5680', marginBottom: '8px', lineHeight: 1.55 }}>{result.overview}</div>
                {(result.modules || []).map((m: any) => (
                  <div key={m.number} style={{ background: '#F5F0E8', borderRadius: '7px', padding: '8px 10px', marginBottom: '5px', borderLeft: '2.5px solid #7B5CF5' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}><div style={{ fontSize: '13px', fontWeight: 500, color: '#1A1A2E' }}>Module {m.number}: {m.title}</div><div style={{ fontSize: '10px', color: '#9B96C0' }}>{m.duration} · {m.format}</div></div>
                    <div style={{ fontSize: '12px', color: '#5B5680', lineHeight: 1.5, marginBottom: '4px' }}>{m.description}</div>
                    {(m.objectives || []).map((o: string) => <div key={o} style={{ fontSize: '11px', color: '#5B5680', paddingLeft: '9px', position: 'relative', lineHeight: 1.4, marginBottom: '1px' }}><span style={{ position: 'absolute', left: 0, color: '#1D9E75', fontSize: '10px' }}>✓</span>{o}</div>)}
                    {m.activity && <div style={{ marginTop: '5px', padding: '5px 8px', background: '#EDE9FE', borderRadius: '5px', fontSize: '11px', color: '#4C1D95' }}><strong>Activity: </strong>{m.activity}</div>}
                  </div>
                ))}
                {result.outcomes && <div style={{ background: '#EDFAF5', border: '1px solid rgba(29,158,117,0.2)', borderRadius: '7px', padding: '8px 10px', fontSize: '11px', color: '#065F46', lineHeight: 1.5 }}><strong style={{ display: 'block', marginBottom: '2px' }}>OUTCOMES</strong>{result.outcomes}</div>}
              </div>
            )}
          </div>
          <div style={s.nav}><button style={s.btn} onClick={() => setStep(1)}>Next →</button></div>
        </>}
        {step === 1 && <>
          <div style={s.eye}>Page 2 of 2 — My Experience</div>
          <div style={s.title}>Toolkits built in real organisations</div>
          <div style={{ ...s.card, marginBottom: '8px' }}>
            <div style={{ fontSize: '10px', color: '#A78BFA', fontWeight: 500, letterSpacing: '0.06em', marginBottom: '5px' }}>Sample 1 · Booking.com · 2019</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#1A1A2E', marginBottom: '6px' }}>Global Hiring Manager Toolkit</div>
            <div style={{ fontSize: '12px', color: '#5B5680', lineHeight: 1.5, marginBottom: '8px' }}>eLearning + competency toolkit for 18k associates. Became the global standard from day one of launch.</div>
            <span style={s.chip}><span style={s.chipDot} />18k associates · global standard</span>
          </div>
          <div style={s.card}>
            <div style={{ fontSize: '10px', color: '#1D9E75', fontWeight: 500, letterSpacing: '0.06em', marginBottom: '5px' }}>Sample 2 · Prosus · 2021</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#1A1A2E', marginBottom: '6px' }}>Inclusion Workshop Programme</div>
            <div style={{ fontSize: '12px', color: '#5B5680', lineHeight: 1.5, marginBottom: '8px' }}>Full workshop design with facilitation guide, action planning toolkit, leadership reporting. 10+ point improvement in engagement scores. Rolled out globally.</div>
            <span style={s.chip}><span style={s.chipDot} />Prosus · global rollout · &gt;10pt improvement</span>
          </div>
          <div style={s.nav}><button style={s.btnGhost} onClick={() => setStep(0)}>← Back</button><button style={s.btn} onClick={() => router.push('/platform/modules/m4')}>Next module →</button></div>
        </>}
      </div>
    </div>
  )
}

function M4({ router }: { router: ReturnType<typeof useRouter> }) {
  return (
    <div style={s.shell}>
      <div style={s.left}>
        <button style={s.back} onClick={() => router.push('/platform')}>← Back to path</button>
        <div style={s.num}>MODULE 04</div>
        <div style={s.mlTitle}>Facilitation That Engages & Scales</div>
        <div style={s.step(true)}><div style={s.dot(true)} /><span style={s.stepTxt}>Track record</span></div>
        <div style={s.upNext}><div style={s.upNextLbl}>UP NEXT</div><div style={s.upNextItem}><div style={s.dot(false)} />AI Network</div></div>
      </div>
      <div style={s.right}>
        <div style={s.eye}>Module 04 — Delivery & Facilitation</div>
        <div style={s.title}>Facilitation is the art of creating conditions where people genuinely change</div>
        <div style={s.body}>10+ years across every level — from blue collar operators to C-suite executives. In person and virtual. Across 5 countries and 4 languages.</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>
          {[
            { title: 'Executive workshops', desc: 'C-suite AI strategy sessions and leadership development programmes', chip: 'Mibelle · Prosus · KF-ready' },
            { title: '750 people on stage', desc: 'Held a full keynote at Booking.com Finance conference', chip: 'Booking.com · 2019' },
            { title: 'Global facilitation', desc: 'FranklinCovey Change & Leadership training across all Mibelle regions', chip: 'Mibelle · 2024–25' },
            { title: 'Preopening simulations', desc: 'Strategic planning with GMs and executive teams at Starwood · 54k associates', chip: 'Starwood · EAME · 2014–19' },
          ].map(c => (
            <div key={c.title} style={s.card}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A2E', marginBottom: '3px' }}>{c.title}</div>
              <div style={{ fontSize: '12px', color: '#5B5680', lineHeight: 1.5, marginBottom: '6px' }}>{c.desc}</div>
              <span style={s.chip}><span style={s.chipDot} />{c.chip}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
          {['Certified vILT instructor — online facilitation at scale', 'Master Train the Trainer — developing facilitators across organisations', '5 languages · delivered in English, German, Polish and via interpreters'].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', borderRadius: '8px', padding: '9px 12px', border: '1px solid rgba(0,0,0,0.07)' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#378ADD', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#fff', flexShrink: 0 }}>✓</div>
              <div style={{ fontSize: '13px', color: '#1A1A2E' }}>{t}</div>
            </div>
          ))}
        </div>
        <div style={s.nav}><button style={s.btn} onClick={() => router.push('/platform/modules/m5')}>Next module →</button></div>
      </div>
    </div>
  )
}

function M5({ router }: { router: ReturnType<typeof useRouter> }) {
  return (
    <div style={s.shell}>
      <div style={s.left}>
        <button style={s.back} onClick={() => router.push('/platform')}>← Back to path</button>
        <div style={s.num}>MODULE 05</div>
        <div style={s.mlTitle}>Scaling Through AI Champions</div>
        <div style={s.step(true)}><div style={s.dot(true)} /><span style={s.stepTxt}>Case study</span></div>
        <div style={s.upNext}><div style={s.upNextLbl}>UP NEXT</div><div style={s.upNextItem}><div style={s.dot(false)} />Dashboard</div></div>
      </div>
      <div style={s.right}>
        <div style={s.eye}>Module 05 — AI Champions Network</div>
        <div style={s.title}>Adoption doesn't scale through training alone</div>
        <div style={s.body}>A champions network is the connective tissue between an enablement programme and sustainable adoption. Champions create local momentum, reduce friction, and give people someone to ask who isn't in L&D.</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginBottom: '12px' }}>
          {[['Recruit', 'Select by influence, not just enthusiasm'], ['Equip', 'Playbooks, talking points, local use cases'], ['Activate', 'Drive adoption locally, with L&D as strategic support']].map(([t, d]) => (
            <div key={t} style={{ ...s.card, textAlign: 'center' as const, marginBottom: 0 }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 700, color: '#7B5CF5', marginBottom: '4px' }}>{t}</div>
              <div style={{ fontSize: '12px', color: '#5B5680', lineHeight: 1.5 }}>{d}</div>
            </div>
          ))}
        </div>
        <div style={s.card}>
          <div style={{ fontSize: '10px', color: '#7B5CF5', fontWeight: 500, letterSpacing: '0.06em', marginBottom: '8px' }}>Case Study · Mibelle Group · 2024–25</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
            <div><div style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A2E', marginBottom: '3px' }}>The situation</div><div style={{ fontSize: '12px', color: '#5B5680', lineHeight: 1.5 }}>Post-acquisition. People were uncertain. Top-down comms wouldn't create the adoption speed needed across global teams.</div></div>
            <div><div style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A2E', marginBottom: '3px' }}>What Sandra did</div><div style={{ fontSize: '12px', color: '#5B5680', lineHeight: 1.5 }}>Recruited, trained, and equipped AI Champions across all regions with full plans, role-based toolkits, and autonomy to add their own ideas.</div></div>
          </div>
          <div style={s.outcome}><div style={{ fontSize: '10px', fontWeight: 600, color: '#065F46', marginBottom: '2px' }}>OUTCOME</div><div style={{ fontSize: '12px', color: '#1A1A2E', lineHeight: 1.5 }}>Champions became the connective tissue of the transition. Local adoption accelerated. The model became the template for future change programmes at the organisation.</div></div>
          <div style={{ display: 'flex', gap: '5px', marginTop: '8px' }}><span style={s.chip}><span style={s.chipDot} />Mibelle · Global L&D Manager · 2024–25</span></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '7px', marginBottom: '14px' }}>
          {[['4×', 'Faster adoption vs top-down comms'], ['↓', 'Reduced L&D support burden'], ['↑', 'Sustained engagement beyond launch']].map(([num, txt]) => (
            <div key={txt} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '9px', padding: '10px', textAlign: 'center' as const }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: 700, color: '#7B5CF5' }}>{num}</div>
              <div style={{ fontSize: '11px', color: '#5B5680', marginTop: '2px', lineHeight: 1.4 }}>{txt}</div>
            </div>
          ))}
        </div>
        <div style={s.nav}><button style={s.btn} onClick={() => router.push('/platform/modules/m6')}>Next module →</button></div>
      </div>
    </div>
  )
}

function M6({ router }: { router: ReturnType<typeof useRouter> }) {
  const [step, setStep] = useState(0)
  const [filter, setFilter] = useState('All departments')

  return (
    <div style={s.shell}>
      <div style={s.left}>
        <button style={s.back} onClick={() => router.push('/platform')}>← Back to path</button>
        <div style={s.num}>MODULE 06</div>
        <div style={s.mlTitle}>Measure, Learn, Improve</div>
        {['My approach', 'Sample dashboard', 'My experience'].map((t, i) => (
          <div key={i} style={s.step(step === i)} onClick={() => setStep(i)}>
            <div style={s.dot(step === i)} /><span style={s.stepTxt}>{t}</span>
          </div>
        ))}
      </div>
      <div style={s.right}>
        {step === 0 && <>
          <div style={s.eye}>Page 1 of 3 — Measurement Approach</div>
          <div style={s.title}>From Learning to Impact</div>
          <div style={s.body}>"I measure effectiveness across three layers — adoption, behaviour, and business impact — and use these insights to continuously refine use cases, learning design, and delivery."</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '9px', marginBottom: '14px' }}>
            {[
              { color: '#7B5CF5', label: '1. Adoption', q: 'Are people using AI?', items: 'Tool usage · prompts · active users · daily workflow frequency', note: 'Signals whether enablement reaches the workflow' },
              { color: '#A78BFA', label: '2. Behaviour', q: 'Working differently?', items: 'Use case completion · template usage · repeat engagement with learning', note: 'Shows if learning translates into action' },
              { color: '#1D9E75', label: '3. Business Impact', q: 'Does it matter?', items: 'Time saved · quality improvements · productivity gains', note: 'Connects enablement to real business value' },
            ].map(c => (
              <div key={c.label} style={{ ...s.card, borderTop: `3px solid ${c.color}`, marginBottom: 0 }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: c.color, marginBottom: '5px' }}>{c.label}</div>
                <div style={{ fontSize: '12px', color: '#1A1A2E', fontWeight: 500, marginBottom: '4px' }}>{c.q}</div>
                <div style={{ fontSize: '11px', color: '#5B5680', lineHeight: 1.6, marginBottom: '4px' }}>{c.items}</div>
                <div style={{ fontSize: '11px', color: c.color, fontStyle: 'italic', marginTop: '6px' }}>{c.note}</div>
              </div>
            ))}
          </div>
          <div style={s.card}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#1A1A2E', marginBottom: '10px' }}>Continuous Iteration Engine</div>
            <div style={{ display: 'flex', alignItems: 'stretch' }}>
              <div style={{ flex: 1, background: '#EDE9FE', borderRadius: '8px 0 0 8px', padding: '10px' }}><div style={{ fontSize: '11px', fontWeight: 600, color: '#4C1D95', marginBottom: '4px' }}>Step 1: Identify signals</div><div style={{ fontSize: '11px', color: '#7B5CF5', lineHeight: 1.5 }}>Low adoption → friction · High usage low impact → poor use case · High engagement low application → wrong format</div></div>
              <div style={{ width: '1px', background: 'rgba(123,92,245,0.15)' }} />
              <div style={{ flex: 1, background: '#FDF2F2', padding: '10px' }}><div style={{ fontSize: '11px', fontWeight: 600, color: '#9B1C1C', marginBottom: '4px' }}>Step 2: Take action</div><div style={{ fontSize: '11px', color: '#9B1C1C', lineHeight: 1.5 }}>Refine use cases · Redesign learning · Strengthen champion involvement</div></div>
              <div style={{ width: '1px', background: 'rgba(244,168,168,0.3)' }} />
              <div style={{ flex: 1, background: '#EDFAF5', borderRadius: '0 8px 8px 0', padding: '10px' }}><div style={{ fontSize: '11px', fontWeight: 600, color: '#065F46', marginBottom: '4px' }}>Step 3: Scale what works</div><div style={{ fontSize: '11px', color: '#065F46', lineHeight: 1.5 }}>Double down on high-impact use cases · Expand into advanced learning · Share success stories</div></div>
            </div>
          </div>
          <div style={s.nav}><button style={s.btn} onClick={() => setStep(1)}>See sample dashboard →</button></div>
        </>}

        {step === 1 && <>
          <div style={s.eye}>Page 2 of 3 — Sample Dashboard</div>
          <div style={s.title}>AI Enablement Dashboard</div>
          <div style={{ display: 'flex', gap: '7px', marginBottom: '12px', flexWrap: 'wrap' as const }}>
            {['All departments', 'Consulting', 'Leadership', 'Internal Functions'].map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{ fontSize: '12px', padding: '4px 10px', borderRadius: '14px', border: `1px solid ${filter === f ? '#7B5CF5' : 'rgba(0,0,0,0.08)'}`, background: filter === f ? '#7B5CF5' : '#fff', color: filter === f ? '#fff' : '#5B5680', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>{f}</button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '8px', marginBottom: '12px' }}>
            {[['71%', 'Active AI users', '#7B5CF5'], ['84%', 'Module completion', '#A78BFA'], ['+22pt', 'Confidence score', '#1D9E75'], ['3.2h', 'Avg time saved/wk', '#BA7517']].map(([num, lbl, color]) => (
              <div key={lbl} style={{ ...s.card, position: 'relative', overflow: 'hidden', marginBottom: 0 }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '2.5px', background: color }} />
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: 700, color: '#1A1A2E', lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: '11px', color: '#5B5680', marginTop: '2px' }}>{lbl}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
            <div style={s.card}>
              <div style={{ fontSize: '14px', fontWeight: 500, color: '#1A1A2E', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7B5CF5' }} />AI adoption by role</div>
              {[['Consultants', 86, '#7B5CF5'], ['Leaders', 58, '#A78BFA'], ['Internal teams', 71, '#1D9E75']].map(([lbl, pct, color]) => (
                <div key={lbl as string} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '7px' }}>
                  <div style={{ fontSize: '12px', color: '#5B5680', minWidth: '100px' }}>{lbl}</div>
                  <div style={{ flex: 1, height: '5px', background: '#F5F0E8', borderRadius: '3px', overflow: 'hidden' }}><div style={{ height: '100%', width: `${pct}%`, background: color as string, borderRadius: '3px' }} /></div>
                  <div style={{ fontSize: '12px', fontWeight: 500, color: '#1A1A2E', minWidth: '30px', textAlign: 'right' }}>{pct}%</div>
                </div>
              ))}
              <div style={{ background: '#EDE9FE', border: '1px solid rgba(123,92,245,0.18)', borderRadius: '7px', padding: '8px 10px', marginTop: '8px' }}><div style={{ fontSize: '10px', fontWeight: 500, color: '#4C1D95', marginBottom: '2px', letterSpacing: '0.06em' }}>INSIGHT</div><div style={{ fontSize: '12px', color: '#7B5CF5' }}>Leaders require stronger enablement for activation — priority for Q2</div></div>
            </div>
            <div style={s.card}>
              <div style={{ fontSize: '14px', fontWeight: 500, color: '#1A1A2E', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1D9E75' }} />Learning → Application funnel</div>
              {[['Completed', '84%', '90%', '#7B5CF5'], ['Practiced', '71%', '75%', '#A78BFA'], ['Applied', '52%', '55%', '#1D9E75']].map(([lbl, val, w, color]) => (
                <div key={lbl as string} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
                  <div style={{ fontSize: '12px', color: '#5B5680', minWidth: '80px' }}>{lbl}</div>
                  <div style={{ height: '20px', width: w as string, background: color as string, borderRadius: '4px', display: 'flex', alignItems: 'center', paddingLeft: '8px' }}><span style={{ fontSize: '11px', fontWeight: 600, color: '#fff' }}>{val}</span></div>
                </div>
              ))}
            </div>
          </div>
          <div style={s.card}>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#1A1A2E', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#BA7517' }} />Use case performance — Proposal Creation</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', textAlign: 'center' as const }}>
              {[['78%', 'Consultant adoption rate', '#7B5CF5'], ['-45min', 'Avg time saved per proposal', '#1D9E75'], ['4.2/5', 'Output quality rating', '#A78BFA']].map(([num, lbl, color]) => (
                <div key={lbl as string}><div style={{ fontFamily: 'Inter, sans-serif', fontSize: '22px', fontWeight: 700, color: color as string }}>{num}</div><div style={{ fontSize: '11px', color: '#5B5680', marginTop: '2px' }}>{lbl}</div></div>
              ))}
            </div>
          </div>
          <div style={s.nav}><button style={s.btnGhost} onClick={() => setStep(0)}>← Back</button><button style={s.btn} onClick={() => setStep(2)}>Next →</button></div>
        </>}

        {step === 2 && <>
          <div style={s.eye}>Page 3 of 3 — My Experience</div>
          <div style={s.title}>Built dashboards in 3 organisations</div>
          <div style={s.card}><div style={{ fontSize: '12px', color: '#5B5680', lineHeight: 1.6 }}>"I've built and used learning dashboards at Starwood, Booking.com, and Prosus to move beyond reporting — using data to continuously refine learning strategies and drive measurable impact. This ensured learning investments translated into performance outcomes."</div><div style={{ display: 'flex', gap: '5px', marginTop: '8px' }}><span style={s.chip}><span style={s.chipDot} />Starwood 2016</span><span style={s.chip}><span style={s.chipDot} />Booking.com 2019</span><span style={s.chip}><span style={s.chipDot} />Prosus 2022</span></div></div>
          <div style={s.quote}>"The strategy evolves based on real usage and performance data — not assumptions."</div>
          <div style={s.nav}><button style={s.btnGhost} onClick={() => setStep(1)}>← Back</button><button style={s.btn} onClick={() => router.push('/platform/about')}>View About Sandra →</button></div>
        </>}
      </div>
    </div>
  )
}

// ── ROUTER ─────────────────────────────────────────────────
export default function ModulePage() {
  const router = useRouter()
  const params = useParams()
  const id = params?.id as string

  if (id === 'm1') return <M1 router={router} />
  if (id === 'm2') return <M2 router={router} />
  if (id === 'm3') return <M3 router={router} />
  if (id === 'm4') return <M4 router={router} />
  if (id === 'm5') return <M5 router={router} />
  if (id === 'm6') return <M6 router={router} />
  return <div style={{ padding: '2rem' }}>Module not found.</div>
}