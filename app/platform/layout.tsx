'use client'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const navItems = [
  { id: 'learning', label: 'Learning Path', path: '/platform', icon: '⬡' },
  { id: 'about', label: 'About Me', path: '/platform/about', icon: '◉' },
]

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div style={{ display: 'grid', gridTemplateRows: '52px 1fr', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

      {/* TOP NAV */}
      <nav style={{ backgroundColor: '#1A1A2E', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.25rem' }}>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7B5CF5', display: 'inline-block' }} />
          Sandra Tokarz
        </div>
        <div style={{ display: 'flex', gap: '2px' }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => router.push(item.path)}
              style={{
                fontSize: '11px', padding: '5px 11px', borderRadius: '16px', border: 'none',
                background: pathname === item.path ? '#7B5CF5' : 'transparent',
                color: pathname === item.path ? '#fff' : 'rgba(255,255,255,0.35)',
                cursor: 'pointer', fontFamily: 'Inter, sans-serif'
              }}>
              {item.label}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '14px', padding: '3px 10px' }}>
          <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.25)' }}>XP</span>
          <div style={{ width: '40px', height: '2px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '78%', background: '#7B5CF5', borderRadius: '2px' }} />
          </div>
          <span style={{ fontSize: '9px', color: '#A78BFA', fontWeight: 500 }}>780</span>
        </div>
      </nav>

      {/* BODY */}
      <div style={{ display: 'flex', height: 'calc(100vh - 52px)' }}>

        {/* SIDEBAR */}
        <aside style={{ width: '188px', minWidth: '188px', backgroundColor: '#1E1B35', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '1rem 0', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>

          {/* Avatar block */}
          <div style={{ padding: '0 .9rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: '.9rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#7B5CF5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
              ST
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, color: '#fff' }}>Sandra Tokarz</div>
            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.28)', marginTop: '1px' }}>L&D Leader · Coach</div>
            <div style={{ marginTop: '8px', display: 'flex', gap: '4px' }}>
              <span style={{ fontSize: '8px', padding: '2px 6px', borderRadius: '6px', background: 'rgba(123,92,245,0.2)', color: '#A78BFA' }}>Explorer</span>
              <span style={{ fontSize: '8px', padding: '2px 6px', borderRadius: '6px', background: 'rgba(29,158,117,0.15)', color: '#1D9E75' }}>Active</span>
            </div>
          </div>

          {/* Nav items */}
          <div style={{ padding: '0 .6rem', flex: 1 }}>
            <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em', padding: '0 .5rem', marginBottom: '6px' }}>NAVIGATE</div>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => router.push(item.path)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '7px 10px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                  background: pathname === item.path ? 'rgba(123,92,245,0.15)' : 'transparent',
                  color: pathname === item.path ? '#fff' : 'rgba(255,255,255,0.4)',
                  fontSize: '11px', fontFamily: 'Inter, sans-serif', marginBottom: '2px',
                  textAlign: 'left',
                  borderLeft: pathname === item.path ? '2px solid #7B5CF5' : '2px solid transparent',
                }}>
                <span style={{ fontSize: '13px' }}>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>

          {/* Bottom logout */}
          <div style={{ padding: '1rem .9rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 'auto' }}>
            <button
              onClick={() => router.push('/')}
              style={{ width: '100%', fontSize: '10px', color: 'rgba(255,255,255,0.25)', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '4px 0' }}>
              ← Exit Platform
            </button>
          </div>
        </aside>

        {/* PAGE CONTENT */}
        <main style={{ flex: 1, overflowY: 'auto', backgroundColor: '#F5F0E8' }}>
          {children}
        </main>

      </div>
    </div>
  )
}