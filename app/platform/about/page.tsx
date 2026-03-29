export default function AboutPage() {
  const skills = [
    { label: 'AI enablement', pct: 96, color: '#7B5CF5' },
    { label: 'Instructional design', pct: 98, color: '#7B5CF5' },
    { label: 'Exec facilitation', pct: 91, color: '#A78BFA' },
    { label: 'Change management', pct: 93, color: '#A78BFA' },
    { label: 'Global delivery', pct: 100, color: '#1D9E75' },
  ]

  const timeline = [
    {
      co: 'Sandra Tokarz Coaching · 2024–present',
      color: '#7B5CF5',
      title: 'Founder — Leadership & EQ Coach',
      period: 'Feb 2024 – ongoing',
      bullets: [
        'Established professional coaching practice focused on leadership development, emotional intelligence, and authentic performance',
        'Developed Leading with Authentic Intelligence, leadership model combining EQ, self-awareness, and decision-making',
        'Built and shipped two live web applications: Pathly, career design & CV matching (currently in staging) and Wowly, teaching non-developers to build apps (deployed)',
        'Partnered with HR and L&D leaders on team development workshops',
      ],
      tags: [{ label: 'Founder', style: 'p' }, { label: '2 live apps', style: 'p' }],
    },
    {
      co: 'Mibelle Group · 2024–2025',
      color: '#7B5CF5',
      title: 'Global Learning and Development Manager',
      period: 'Jul 2024 – Aug 2025',
      bullets: [
        'Led global FranklinCovey Change Management rollout post-acquisition; lead and enabled Change Champions network across all regions',
        'Developed AI-powered agents to evaluate external training approval requests interactively',
        'Automated training registrations via Microsoft PowerAutomate, significantly reducing L&D admin overhead',
        'Designed and delivered new global onboarding program aligned to post-acquisition culture',
        "Enhanced learning culture aligned with company transformation by program managing and delivery of FranklinCovey's 'The 4 Essential Roles of Leadership' Training",
      ],
      tags: [{ label: 'AI agents', style: 'p' }, { label: 'Global rollout', style: 'g' }],
    },
    {
      co: 'Prosus · 2020–2024',
      color: '#7B5CF5',
      title: 'Learning Lead Corporate Functions',
      period: 'Jan 2020 – Feb 2024',
      bullets: [
        'Designed and implemented corporate-wide L&D strategy aligned to business priorities focused on soft skills, leadership, professional and tech skills. Outcome: enhanced learning culture',
        'Pioneered AI learning solutions for non-tech departments; digitally transformed Finance function from zero literacy to embedded adoption',
        'Designed and delivered Inclusion workshops, 10+ point improvement in engagement scores; replicated globally across sub-companies',
        'Project lead of the Onboarding process',
        'Analysis and follow up on Employee Engagement survey results',
      ],
      tags: [{ label: 'Strategy', style: 'p' }, { label: 'D&I', style: 'g' }],
    },
    {
      co: 'Booking.com · 2019–2024 · 18,000 associates',
      color: '#7B5CF5',
      title: 'Senior Digital Learning Specialist',
      period: 'Apr 2019 – Feb 2024',
      bullets: [
        'Learning Lead for a key people priority in charge of setting up learning solution strategy for new hiring process implementation',
        'New LMS (Degreed) companywide implementation',
        'Design and development of the right learning solution including video and eLearning creation as well as content curation',
        'Driving stakeholder management to get buy in from subject matter experts as well as vendor management to develop further content',
        'Set up of learning data strategy to identify success metrics with learning data dashboard implementation',
        'Development of competency based hiring toolkit',
        'Building and implementing new policies',
        'Mentoring of colleagues to help their career growth (Mentee promoted from Customer Service Specialist to L&D Coordinator)',
      ],
      tags: [{ label: 'Degreed', style: 'p' }, { label: '18k associates', style: 'g' }],
    },
    {
      co: 'Booking.com · 2017–2019 · Finance Department · 750 associates',
      color: '#7B5CF5',
      title: 'Global Learning Specialist',
      period: 'Jun 2017 – Apr 2019',
      bullets: [
        'Roll out and implementation of new Mentoring Program',
        'Special events delivery including conferences and public speaking',
        'Training consultation with departments to develop individual learning plans based on learning needs analysis',
        'Learning content development and delivery',
        'Redesign and implementation of Finance Orientation Program',
        'Implementation of capabilities learning maps',
      ],
      tags: [{ label: 'Booking.com', style: 'p' }, { label: '750 associates', style: 'g' }],
    },
    {
      co: 'Starwood · 2014–2017 · 260 properties · 54,000 associates',
      color: '#9B96C0',
      title: 'Learning & Development Specialist, EAME',
      period: 'Mar 2016 – Jun 2017 · Brussels',
      bullets: [
        'Started 2014 as Learning and Development Coordinator and promoted to Specialist',
        'Starwood Careers talent development program management',
        'Managed L&D trainee',
        'Implementation of new L&D communication strategy',
        'Preopening support in form of Strategic Planning, Simulations, After Action Review',
        'Development, implementation and delivery of Training Manager and HR Manager Orientation',
        'Support regions and properties to improve their use of L&D platform',
        'Yearly preparation of Training/Fee Matrix and Training Book',
      ],
      tags: [{ label: 'EAME', style: 'p' }, { label: '54k associates', style: 'g' }],
    },
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
          <img src="/sandra.jpg" alt="Sandra Tokarz" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 7px', display: 'block', border: '2px solid rgba(255,255,255,0.1)' }} />
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#fff' }}>Sandra Tokarz</div>
          <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.5, marginTop: '2px' }}>Strategic L&D Leader<br />AI Enablement Builder · ICF Coach</div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px' }}>
          {[['12+', 'Years L&D'], ['54k', 'Reached'], ['5', 'Languages'], ['2', 'Live apps']].map(([num, lbl]) => (
            <div key={lbl} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '7px', padding: '7px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 700, color: '#fff' }}>{num}</div>
              <div style={{ fontSize: '7px', color: 'rgba(255,255,255,0.25)', marginTop: '1px' }}>{lbl}</div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <div style={{ fontSize: '7px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.18)', marginBottom: '6px' }}>CAPABILITIES</div>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '4px' }}>
            {['AI Enablement', 'Change Management', 'Instructional Design', 'Executive Facilitation', 'Coaching', 'Global L&D Strategy', 'Leadership Development'].map(cap => (
              <span key={cap} style={{ fontSize: '8px', padding: '2px 6px', borderRadius: '5px', fontWeight: 500, background: '#EDE9FE', color: '#4C1D95' }}>{cap}</span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <div style={{ fontSize: '7px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.18)', marginBottom: '6px' }}>LANGUAGES</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {[['🇩🇪 German', 'Native'], ['🇵🇱 Polish', 'Mother tongue'], ['🇬🇧 English', 'C2'], ['🇳🇱 Dutch', 'B2'], ['🇪🇸 Spanish', 'B1'], ['🇫🇷 French', 'A2']].map(([lang, level]) => (
              <div key={lang} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>{lang}</span>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>{level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <div style={{ fontSize: '7px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.18)', marginBottom: '6px' }}>TOOLS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '4px' }}>
            {['Degreed', 'Cornerstone', 'LearnUpon', 'Microsoft 365', 'Canva', 'Github', 'Notion', 'Claude Code', 'Vercel', 'Articulate', 'PowerAutomate', 'AI Agents', 'Google Suite'].map(tool => (
              <span key={tool} style={{ fontSize: '8px', padding: '2px 6px', borderRadius: '5px', fontWeight: 500, background: '#EDE9FE', color: '#4C1D95' }}>{tool}</span>
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

        <button style={{ background: '#7B5CF5', color: '#fff', border: 'none', borderRadius: '7px', padding: '8px', fontSize: '10px', fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif', width: '100%' }}>
          Get in touch →
        </button>
      </div>

      {/* RIGHT PANEL */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 2rem', background: '#F5F0E8' }}>

        {/* Professional summary */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '9px', fontWeight: 500, letterSpacing: '0.1em', color: '#7B5CF5', marginBottom: '6px' }}>PROFESSIONAL SUMMARY</div>
          <p style={{ fontSize: '13px', color: '#5B5680', lineHeight: 1.8, margin: 0 }}>Strategic Learning & Development Leader with 12+ years designing and delivering impactful, data-driven learning strategies across global technology and corporate environments. Expert in AI-driven enablement, role-based curriculum design, instructional design, and executive facilitation. Proven ability to translate business goals into scalable L&D programmes that drive measurable behaviour change and adoption. Multicultural experience across EMEA in complex global matrix organisations. Currently building two live web applications in parallel with coaching practice.</p>
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
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 700, color: '#1A1A2E', marginBottom: '2px' }}>{entry.title}</div>
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