export default function AboutPage() {
  const skills = [
    { label: 'AI enablement', pct: 96, color: '#7B5CF5' },
    { label: 'Instructional design', pct: 98, color: '#7B5CF5' },
    { label: 'Exec facilitation', pct: 91, color: '#A78BFA' },
    { label: 'Change management', pct: 93, color: '#A78BFA' },
    { label: 'Global delivery', pct: 100, color: '#1D9E75' },
  ]

  const timeline = [
    { co: 'Sandra Tokarz Coaching · 2024–present', color: '#7B5CF5', title: 'Founder — Leadership & EQ Coach', period: 'Feb 2024 – ongoing', bullets: ['Founded practice: leadership dev, EI, authentic performance', 'Created Leading with Authentic Intelligence — proprietary model', 'Shipped two live web apps: Pathly (career design) and Wowly'], tags: [{ label: 'Founder', style: 'p' }, { label: '2 live apps', style: 'p' }] },
    { co: 'Mibelle Group · 2024–2025', color: '#7B5CF5', title: 'Global L&D Manager', period: 'Jul 2024 – Aug 2025', bullets: ['FranklinCovey global rollout post-acquisition · built champions network', 'Built first AI training evaluation agent — no vendor, no blueprint'], tags: [{ label: 'AI agents', style: 'p' }, { label: 'Global rollout', style: 'g' }] },
    { co: 'Prosus · 2020–2024', color: '#7B5CF5', title: 'Learning Lead, Corporate Functions', period: 'Jan 2020 – Feb 2024', bullets: ['Corporate-wide L&D strategy for business transformation', 'AI learning solutions for non-tech departments', 'Inclusion workshops: 10+ point score improvement, global rollout'], tags: [{ label: 'Strategy', style: 'p' }, { label: 'D&I', style: 'g' }] },
    { co: 'Booking.com · 2017–2024 · 18,000 associates', color: '#7B5CF5', title: 'Senior Digital Learning Specialist → Global Learning Specialist', period: 'Jun 2017 – Feb 2024', bullets: ['Led Degreed LMS rollout company-wide', 'Designed Global Hiring Manager Toolkit for 18k associates'], tags: [{ label: 'Degreed', style: 'p' }, { label: '18k associates', style: 'g' }] },
    { co: 'Starwood · 2014–2019 · 54,000 associates', color: '#9B96C0', title: 'L&D Coordinator → Specialist, EAME', period: 'Sep 2014 – Apr 2019 · Brussels', bullets: ['Promoted to Specialist · cross-regional L&D strategy'], tags: [{ label: 'EAME', style: 'p' }, { label: '54k associates', style: 'g' }] },
  ]

  const kfBars = [
    { label: 'AI enablement strategy', pct: 96, color: '#7B5CF5' },
    { label: 'Instructional design', pct: 98, color: '#7B5CF5' },
    { label: 'Champions network', pct: 95, color: '#A78BFA' },
    { label: 'Global delivery', pct: 100, color: '#1D9E75' },
  ]

  const successItems = [
    'A clear, evolving AI Enablement strategy that stays current and is anchored in business impact.',
    'Role-based learning journeys that improve confidence, responsible usage, and measurable adoption.',
    'High-quality content assets that are consistently used and easy to find.',
    'Strong participant outcomes from trainings — especially at the leadership/executive level.',
  ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', height: '100%' }}>

      {/* LEFT PANEL */}
      <div style={{ background: '#1E1B35', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.1rem', overflowY: 'auto' }}>
        {/* Avatar */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#7B5CF5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne, sans-serif', fontSize: '18px', fontWeight: 800, color: '#fff', margin: '0 auto 7px', border: '2px solid rgba(255,255,255,0.1)' }}>ST</div>
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '14px', fontWeight: 800, color: '#fff' }}>Sandra Tokarz</div>
          <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.5, marginTop: '2px' }}>Strategic L&D Leader<br />AI Enablement Builder · ICF Coach</div>
        </div>

        {/* XP */}
        <div style={{ background: 'rgba(123,92,245,0.15)', borderRadius: '8px', padding: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '9px', color: '#A78BFA', fontWeight: 500, marginBottom: '4px' }}>⭐ Level 8 — Expert · 780 XP</div>
          <div style={{ height: '2.5px', background: 'rgba(255,255,255,0.07)', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '78%', background: '#7B5CF5', borderRadius: '2px' }} />
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px' }}>
          {[['12+', 'Years L&D'], ['54k', 'Reached'], ['5', 'Languages'], ['2', 'Live apps']].map(([num, lbl]) => (
            <div key={lbl} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '7px', padding: '7px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '16px', fontWeight: 800, color: '#fff' }}>{num}</div>
              <div style={{ fontSize: '7px', color: 'rgba(255,255,255,0.25)', marginTop: '1px' }}>{lbl}</div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <div style={{ fontSize: '7px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.18)', marginBottom: '6px' }}>CAPABILITIES</div>
          {skills.map(s => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '5px' }}>
              <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', minWidth: '75px' }}>{s.label}</div>
              <div style={{ flex: 1, height: '2px', background: 'rgba(255,255,255,0.07)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${s.pct}%`, background: s.color, borderRadius: '2px' }} />
              </div>
              <div style={{ fontSize: '7px', color: 'rgba(255,255,255,0.25)', minWidth: '20px', textAlign: 'right' }}>{s.pct}%</div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div>
          <div style={{ fontSize: '7px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.18)', marginBottom: '6px' }}>LANGUAGES</div>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '4px' }}>
            {[['🇩🇪 German', '#EDE9FE', '#4C1D95'], ['🇵🇱 Polish', '#EDE9FE', '#4C1D95'], ['🇬🇧 English', '#EDE9FE', '#4C1D95'], ['🇪🇸 Spanish', '#EDE9FE', '#4C1D95'], ['🇳🇱 Dutch B1', '#EDE8DF', '#5B5680']].map(([lang, bg, color]) => (
              <span key={lang} style={{ fontSize: '8px', padding: '2px 6px', borderRadius: '5px', fontWeight: 500, background: bg, color }}>{lang}</span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <div style={{ fontSize: '7px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.18)', marginBottom: '6px' }}>TOOLS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '4px' }}>
            {[['Degreed', '#EDE9FE', '#4C1D95'], ['Cornerstone', '#EDE9FE', '#4C1D95'], ['Articulate', '#EDE9FE', '#4C1D95'], ['Sana', '#EDE9FE', '#4C1D95'], ['PowerAutomate', '#EDFAF5', '#065F46'], ['AI Agents', '#FAEEDA', '#633806']].map(([tool, bg, color]) => (
              <span key={tool} style={{ fontSize: '8px', padding: '2px 6px', borderRadius: '5px', fontWeight: 500, background: bg, color }}>{tool}</span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div style={{ fontSize: '7px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.18)', marginBottom: '6px' }}>CERTIFICATIONS</div>
          {['ICF Life Coach', 'Insights Discovery · EQi 2.0', 'FranklinCovey Trainer', 'vILT Instructor · Master TTT'].map(cert => (
            <div key={cert} style={{ display: 'flex', gap: '4px', alignItems: 'center', fontSize: '8px', color: 'rgba(255,255,255,0.4)', marginBottom: '3px' }}>
              <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#7B5CF5', display: 'inline-block', flexShrink: 0 }} />
              {cert}
            </div>
          ))}
        </div>

        <button style={{ background: '#7B5CF5', color: '#fff', border: 'none', borderRadius: '7px', padding: '8px', fontSize: '10px', fontWeight: 700, cursor: 'pointer', fontFamily: 'Syne, sans-serif', width: '100%' }}>
          Get in touch →
        </button>
      </div>

      {/* RIGHT PANEL */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 2rem', background: '#F5F0E8' }}>

        {/* KF fit header */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '9px', fontWeight: 500, letterSpacing: '0.1em', color: '#7B5CF5', marginBottom: '3px' }}>KF FIT</div>
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '18px', fontWeight: 800, color: '#1A1A2E', marginBottom: '3px' }}>Why Sandra fits Korn Ferry</div>
        </div>

        {/* KF match box */}
        <div style={{ background: '#252246', borderRadius: '11px', padding: '1.1rem', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ background: '#7B5CF5', borderRadius: '7px', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne, sans-serif', fontSize: '10px', fontWeight: 800, color: '#fff', flexShrink: 0 }}>KF</div>
            <div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '14px', fontWeight: 800, color: '#fff' }}>Senior Director, AI Enablement</div>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', marginTop: '1px' }}>Korn Ferry · EMEA · Hybrid</div>
            </div>
            <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '32px', fontWeight: 800, color: '#A78BFA', lineHeight: 1 }}>94%</div>
              <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.25)' }}>role match</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            {kfBars.map(b => (
              <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', minWidth: '130px' }}>{b.label}</div>
                <div style={{ flex: 1, height: '3px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${b.pct}%`, background: b.color, borderRadius: '2px' }} />
                </div>
                <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', minWidth: '28px', textAlign: 'right' }}>{b.pct}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Success criteria */}
        <div style={{ background: '#EDE9FE', border: '2px solid #7B5CF5', borderRadius: '11px', padding: '1.1rem', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '6px', background: '#7B5CF5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#fff', flexShrink: 0 }}>★</div>
            <div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '13px', fontWeight: 700, color: '#4C1D95' }}>Success criteria — what KF needs</div>
              <div style={{ fontSize: '10px', color: '#7B5CF5', marginTop: '1px' }}>Sandra is aligned to every one of these</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            {successItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '9px', alignItems: 'flex-start', background: '#fff', borderRadius: '8px', padding: '9px 11px', border: '1px solid rgba(123,92,245,0.15)' }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#7B5CF5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 700, color: '#fff', flexShrink: 0, marginTop: '1px' }}>{i + 1}</div>
                <div style={{ fontSize: '11px', color: '#4C1D95', lineHeight: 1.55 }}>{item}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Career timeline */}
        <div style={{ fontSize: '12px', fontWeight: 500, color: '#1A1A2E', marginBottom: '10px' }}>Career journey</div>
        <div style={{ position: 'relative', paddingLeft: '20px' }}>
          <div style={{ position: 'absolute', left: '6px', top: '5px', bottom: 0, width: '1.5px', background: 'rgba(0,0,0,0.07)' }} />
          {timeline.map((entry, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: '12px' }}>
              <div style={{ position: 'absolute', left: '-16px', top: '4px', width: '8px', height: '8px', borderRadius: '50%', border: `2px solid ${entry.color}`, background: '#F5F0E8' }} />
              <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '10px', padding: '.9rem 1rem' }}>
                <div style={{ fontSize: '8px', fontWeight: 500, letterSpacing: '0.06em', color: entry.color, marginBottom: '3px' }}>{entry.co}</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '12px', fontWeight: 700, color: '#1A1A2E', marginBottom: '2px' }}>{entry.title}</div>
                <div style={{ fontSize: '8px', color: '#9B96C0', marginBottom: '6px' }}>{entry.period}</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '3px', padding: 0, margin: 0 }}>
                  {entry.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: '10px', color: '#5B5680', paddingLeft: '11px', position: 'relative', lineHeight: 1.4 }}>
                      <span style={{ position: 'absolute', left: 0, color: '#7B5CF5', fontSize: '9px' }}>→</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '3px', marginTop: '6px' }}>
                  {entry.tags.map(tag => (
                    <span key={tag.label} style={{ fontSize: '7px', padding: '2px 5px', borderRadius: '4px', background: tag.style === 'p' ? '#EDE9FE' : '#EDFAF5', color: tag.style === 'p' ? '#4C1D95' : '#0F6E56' }}>{tag.label}</span>
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