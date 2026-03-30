'use client'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()

  return (
    <main style={{ backgroundColor: '#1A1A2E', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '2rem', width: '100%', maxWidth: '380px' }}>

        {/* Logo */}
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '24px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7B5CF5', display: 'inline-block' }} />
          Sandra Tokarz
        </div>

        {/* Heading */}
        <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
          Welcome back
        </h1>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, marginBottom: '20px' }}>
          Enter the access code to explore the interactive L&D platform.
        </p>

        {/* Button */}
        <button
          onClick={() => router.push('/platform')}
          style={{ width: '100%', background: '#7B5CF5', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif', marginTop: '4px' }}>
          Enter Platform →
        </button>

        {/* Back link */}
        <p
          onClick={() => router.push('/')}
          style={{ textAlign: 'center', fontSize: '10px', color: 'rgba(255,255,255,0.25)', marginTop: '10px', cursor: 'pointer' }}>
          ← Back to home
        </p>

      </div>
    </main>
  )
}
