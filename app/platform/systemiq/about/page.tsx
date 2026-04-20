'use client'
import React, { useState, useEffect } from 'react'

const G = 'linear-gradient(135deg, #7B5CF5, #F4A8A8)'

export default function SystemiqAboutPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const skills = ['AI Enablement', 'Change Management', 'Instructional Design', 'Executive Facilitation', 'Coaching', 'Global L&D Strategy', 'Leadership Development']
  const tools = ['Degreed', 'Cornerstone', 'LearnUpon', 'Microsoft 365', 'Canva', 'Github', 'Notion', 'Claude Code', 'Vercel', 'Articulate', 'PowerAutomate', 'AI Agents', 'Google Suite']
  const certs = ['ICF Life Coach', 'Insights Discovery · EQi 2.0', 'FranklinCovey Trainer', 'vILT Instructor · Master TTT']
  const langs = [['🇩🇪 German', 'Native'], ['🇵🇱 Polish', 'Mother tongue'], ['🇬🇧 English', 'C2'], ['🇳🇱 Dutch', 'B2'], ['🇪🇸 Spanish', 'B1'], ['🇫🇷 French', 'A2']]

  const timeline = [
    { co: 'Sandra Tokarz Coaching · 2024–present', color: '#7B5CF5', title: 'Founder — Leadership & EQ Coach', period: 'Feb 2024 – ongoing', bullets: ['Established professional coaching practice focused on leadership development, emotional intelligence, and authentic performance', 'Developed Leading with Authentic Intelligence, leadership model combining EQ, self-awareness, and decision-making', 'Built and shipped two live web applications: Pathly and Wowly', 'Partnered with HR and L&D leaders on team development workshops'], tags: [{ l: 'Founder', s: 'p' }, { l: '2 live apps', s: 'p' }] },
    { co: 'Mibelle Group · 2024–2025', color: '#7B5CF5', title: 'Global Learning and Development Manager', period: 'Jul 2024 – Aug 2025', bullets: ['Led global FranklinCovey Change Management rollout post-acquisition; built Change Champions network across all regions', 'Developed AI-powered agents to evaluate external training approval requests interactively', 'Automated training registrations via Microsoft PowerAutomate', 'Designed and delivered new global onboarding program aligned to post-acquisition culture'], tags: [{ l: 'AI agents', s: 'p' }, { l: 'Global rollout', s: 'g' }] },
    { co: 'Prosus · 2020–2024', color: '#7B5CF5', title: 'Learning Lead Corporate Functions', period: 'Jan 2020 – Feb 2024', bullets: ['Designed and implemented corporate-wide L&D strategy aligned to business priorities', 'Pioneered AI learning solutions for non-tech departments; digitally transformed Finance from zero literacy to embedded adoption', 'Designed and delivered Inclusion workshops, 10+ point improvement in engagement scores; replicated globally', 'Project lead of the Onboarding process'], tags: [{ l: 'Strategy', s: 'p' }, { l: 'D&I', s: 'g' }] },
    { co: 'Booking.com · 2019–2024 · 18,000 associates', color: '#7B5CF5', title: 'Senior Digital Learning Specialist', period: 'Apr 2019 – Feb 2024', bullets: ['Learning Lead for new hiring process implementation — full L&D strategy, online modules, toolkits, vendor management', 'New LMS (Degreed) companywide implementation', 'Set up learning data strategy with dashboard implementation'], tags: [{ l: 'Degreed', s: 'p' }, { l: '18k associates', s: 'g' }] },
    { co: 'Booking.com · 2017–2019 · Finance · 750 associates', color: '#7B5CF5', title: 'Global Learning Specialist', period: 'Jun 2017 – Apr 2019', bullets: ['Roll out and implementation of new Mentoring Program', 'Redesign and implementation of Finance Orientation Program', 'Implementation of capabilities learning maps'], tags: [{ l: 'Booking.com', s: 'p' }, { l: '750 associates', s: 'g' }] },
    { co: 'Starwood · 2014–2017 · 54,000 associates', color: '#9B96C0', title: 'L&D Specialist, EAME', period: 'Mar 2016 – Jun 2017 · Brussels', bullets: ['Promoted from L&D Coordinator to Specialist · cross-regional L&D strategy', 'Preopening support: Strategic Planning, Simulations, After Action Review'], tags: [{ l: 'EAME', s: 'p' }, { l: '54k associates', s: 'g' }] },
  ]

  const SB = '#0F1F3D'
  const chipStyle = { fontSize: '10px', padding: '3px 8px', borderRadius: '5px', fontWeight: 500, display: 'inline-block', margin: '2px', background: 'rgba(123,92,245,0.2)', color: '#A78BFA' } as React.CSSProperties

  return (
    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '220px 1fr', height: '100%' }}>

      {/* LEFT */}
      <div style={{ background: SB, padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: G, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 700, color: '#fff', margin: '0 auto 7px', border: '2px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
            <img src="/sandra.jpg" alt="ST" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
          </div>
          <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>Sandra Tokarz</div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.5, marginTop: '2px' }}>Strategic L&D Leader<br />AI Enablement Builder · ICF Coach</div>
        </div>

        <div>
          <div style={{ fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.18)', marginBottom: '6px' }}>CAPABILITIES</div>
          <div>{skills.map(s => <span key={s} style={chipStyle}>{s}</span>)}</div>
        </div>

        <div>
          <div style={{ fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.18)', marginBottom: '6px' }}>LANGUAGES</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
            {langs.map(([lang, level]) => (
              <React.Fragment key={lang}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>{lang}</div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', textAlign: 'right' }}>{level}</div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.18)', marginBottom: '6px' }}>TOOLS</div>
          <div>{tools.map(t => <span key={t} style={{ ...chipStyle, background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}>{t}</span>)}</div>
        </div>

        <div>
          <div style={{ fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.18)', marginBottom: '6px' }}>CERTIFICATIONS</div>
          {certs.map(c => (
            <div key={c} style={{ display: 'flex', gap: '5px', alignItems: 'center', fontSize: '10px', color: 'rgba(255,255,255,0.4)', marginBottom: '3px' }}>
              <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#7B5CF5', display: 'inline-block' }} />{c}
            </div>
          ))}
        </div>

        <button style={{ background: G, color: '#fff', border: 'none', borderRadius: '7px', padding: '8px', fontSize: '12px', fontWeight: 700, cursor: 'pointer', width: '100%', marginTop: 'auto' }}>
          Get in touch →
        </button>
      </div>

      {/* RIGHT */}
      <div style={{ flex: 1, overflowY: 'auto', padding: isMobile ? '1rem 1rem 80px' : '1.5rem 2rem', background: '#F4F6F9' }}>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', color: '#7B5CF5', marginBottom: '6px' }}>PROFESSIONAL SUMMARY</div>
          <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.8 }}>Strategic Learning & Development Leader with 12+ years designing and delivering impactful, data-driven learning strategies across global technology and corporate environments. Expert in AI-driven enablement, role-based curriculum design, instructional design, and executive facilitation. Proven ability to translate business goals into scalable L&D programmes that drive measurable behaviour change and adoption. Multicultural experience across EMEA in complex global matrix organisations. Currently building two live web applications in parallel with coaching practice.</p>
        </div>

        <div style={{ fontSize: '15px', fontWeight: 600, color: '#0A1628', marginBottom: '12px' }}>Career journey</div>
        <div style={{ position: 'relative', paddingLeft: '20px' }}>
          <div style={{ position: 'absolute', left: '6px', top: '5px', bottom: 0, width: '1.5px', background: 'rgba(10,22,40,0.1)' }} />
          {timeline.map((entry, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: '12px' }}>
              <div style={{ position: 'absolute', left: '-16px', top: '4px', width: '8px', height: '8px', borderRadius: '50%', border: `2px solid ${entry.color}`, background: '#F4F6F9' }} />
              <div style={{ background: '#fff', border: '1px solid rgba(10,22,40,0.08)', borderRadius: '10px', padding: '.9rem 1rem' }}>
                <div style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.06em', color: entry.color, marginBottom: '3px' }}>{entry.co}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#0A1628', marginBottom: '2px' }}>{entry.title}</div>
                <div style={{ fontSize: '10px', color: '#9B96C0', marginBottom: '6px' }}>{entry.period}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {entry.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: '12px', color: '#4A5568', paddingLeft: '11px', position: 'relative', lineHeight: 1.4 }}>
                      <span style={{ position: 'absolute', left: 0, color: '#7B5CF5', fontSize: '11px' }}>→</span>{b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '3px', marginTop: '6px' }}>
                  {entry.tags.map(tag => (
                    <span key={tag.l} style={{ fontSize: '9px', padding: '2px 5px', borderRadius: '4px', background: tag.s === 'p' ? '#EDE9FE' : '#EDFAF5', color: tag.s === 'p' ? '#4C1D95' : '#0F6E56' }}>{tag.l}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}