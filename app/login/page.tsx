'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleLogin() {
    if (password === 'sandra2026') {
      router.push('/platform')
    } else {
      setError('Incorrect password. Try again.')
    }
  }

  return (
    <main style={{ backgroundColor: '#1A1A2E', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '2rem', width: '100%', maxWidth: '380px' }}>

        {/* Logo */}
        <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '15px', fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '24px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7B5CF5', display: 'inline-block' }} />
          Sandra Tokarz
        </div>

        {/* Heading */}
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>
          Welcome back
        </h1>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, marginBottom: '20px' }}>
          Enter the access code to explore the interactive L&D platform.
        </p>

        {/* Input */}
        <label style={{ display: 'block', fontSize: '9px', fontWeight: 500, color: 'rgba(255,255,255,0.35)', marginBottom: '5px', letterSpacing: '0.07em' }}>
          ACCESS CODE
        </label>
        <input
          type="password"
          placeholder="Enter access code"
          value={password}
          onChange={e => { setPassword(e.target.value); setError('') }}
          onKeyDown={e => e.key === 'Enter' && handleLogin()}
          style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '10px 12px', fontSize: '12px', color: '#fff', outline: 'none', fontFamily: 'Inter, sans-serif', marginBottom: '10px', boxSizing: 'border-box' }}
        />

        {/* Error */}
        {error && (
          <p style={{ fontSize: '11px', color: '#F4A8A8', marginBottom: '8px' }}>{error}</p>
        )}

        {/* Button */}
        <button
          onClick={handleLogin}
          style={{ width: '100%', background: '#7B5CF5', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: 'Syne, sans-serif', marginTop: '4px' }}>
          Enter Platform →
        </button>

        {/* Note */}
        <p style={{ textAlign: 'center', fontSize: '10px', color: 'rgba(255,255,255,0.18)', marginTop: '14px' }}>
          Contact Sandra for access · sandra.tokarz@gmail.com
        </p>

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