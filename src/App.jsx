import { useState } from 'react'
import { motion } from 'framer-motion'

const PROJECTS = [
  { id: '01', name: 'Ember & Smoke BBQ',       niche: 'Restaurant',       url: 'https://embersmokebbq.vercel.app',        color: '#c84b00' },
  { id: '02', name: 'Auberge Kamouraska',       niche: 'Hospitality',      url: 'https://aubergekamouraska.vercel.app',    color: '#1e6091' },
  { id: '03', name: 'La Forge du Terroir',      niche: 'Restaurant',       url: 'https://laforgeduterroir.vercel.app',     color: '#7c4d00' },
  { id: '04', name: 'ScènePrime',               niche: 'Entertainment',    url: 'https://sc-neprime.vercel.app',           color: '#6b21a8' },
  { id: '05', name: 'Ember & Elm Body Studio',  niche: 'Beauty & Spa',     url: 'https://emberelmbodystudio.vercel.app',   color: '#9d174d' },
  { id: '06', name: 'Lumière Aesthetics',       niche: 'MedSpa',           url: 'https://lumi-reaesthetics.vercel.app',    color: '#1e40af' },
  { id: '07', name: 'Velour Studio',            niche: 'Permanent Makeup', url: 'https://velourstudio.vercel.app',         color: '#7c3aed' },
  { id: '08', name: 'Lumière Aesthetics & Spa', niche: 'Medical Spa',      url: 'https://lumi-reaestheticsspa.vercel.app', color: '#065f46' },
]

const STACK = ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Claude AI', 'Vercel', 'Supabase', 'GitHub API']

function ProjectRow({ p, i }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '4rem 1fr auto auto',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '1.6rem 3rem',
        borderBottom: '1px solid #141414',
        textDecoration: 'none',
        background: hovered ? `${p.color}14` : 'transparent',
        borderLeft: `3px solid ${hovered ? p.color : 'transparent'}`,
        transition: 'background 0.25s ease, border-left-color 0.25s ease',
        cursor: 'pointer',
      }}
    >
      {/* Number */}
      <span style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: '1rem',
        fontWeight: 400,
        color: hovered ? p.color : '#2e2e2e',
        letterSpacing: '0.05em',
        transition: 'color 0.25s ease',
      }}>
        {p.id}
      </span>

      {/* Name */}
      <span style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: hovered ? '1.7rem' : '1.5rem',
        fontWeight: 500,
        color: hovered ? '#ffffff' : '#d4d4d4',
        letterSpacing: '0.01em',
        lineHeight: 1.2,
        transition: 'font-size 0.2s ease, color 0.25s ease',
      }}>
        {p.name}
      </span>

      {/* Niche */}
      <span style={{
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: '0.6rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: hovered ? p.color : '#3a3a3a',
        transition: 'color 0.25s ease',
        whiteSpace: 'nowrap',
      }}>
        {p.niche}
      </span>

      {/* Arrow */}
      <span style={{
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: '1rem',
        color: hovered ? p.color : '#2a2a2a',
        transition: 'color 0.25s ease, transform 0.2s ease',
        transform: hovered ? 'translateX(4px)' : 'none',
        display: 'inline-block',
      }}>
        →
      </span>
    </motion.a>
  )
}

function Marquee() {
  const text = 'RESTAURANT  ·  HOSPITALITY  ·  BEAUTY  ·  MEDSPA  ·  ENTERTAINMENT  ·  PERMANENT MAKEUP  ·  MEDICAL SPA  ·  '
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid #141414', borderBottom: '1px solid #141414', padding: '0.6rem 0' }}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', whiteSpace: 'nowrap' }}
      >
        {[text, text].map((t, i) => (
          <span key={i} style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.58rem', letterSpacing: '0.22em', color: '#2e2e2e' }}>{t}</span>
        ))}
      </motion.div>
    </div>
  )
}

export default function App() {
  return (
    <div style={{ background: '#080808', minHeight: '100vh', color: '#f5f5f5' }}>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.1rem 3rem',
        background: 'rgba(8,8,8,0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid #111',
      }}>
        <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '0.95rem', letterSpacing: '0.12em', color: '#e0e0e0' }}>
          JERRY PORTFOLIO
        </span>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#work" style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#555', textDecoration: 'none' }}>Work</a>
          <a href="#about" style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#555', textDecoration: 'none' }}>About</a>
          <a href="mailto:tiaboujerry5@gmail.com" style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c9a96e', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 3rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '14vh', right: '3rem',
          width: '1px', height: '32vh',
          background: 'linear-gradient(to bottom, transparent, #c9a96e66, transparent)',
        }} />

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(4rem, 14vw, 13rem)', fontWeight: 300, lineHeight: 0.88, letterSpacing: '-0.02em', color: '#f5f5f5' }}>
            JERRY
          </div>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(4rem, 14vw, 13rem)', fontWeight: 300, lineHeight: 0.88, letterSpacing: '-0.02em', marginBottom: '3.5rem' }}>
            <span style={{ color: '#c9a96e' }}>PORT</span><span style={{ color: '#f5f5f5' }}>FOLIO</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ width: '2.5rem', height: '1px', background: '#c9a96e' }} />
            <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.72rem', letterSpacing: '0.16em', color: '#555', textTransform: 'uppercase', margin: 0 }}>
              AI-crafted sites for real businesses
            </p>
          </div>
        </motion.div>
      </section>

      <Marquee />

      {/* About */}
      <section id="about" style={{ padding: '6rem 3rem', borderBottom: '1px solid #141414' }}>
        <div style={{ maxWidth: '860px' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ width: '2rem', height: '1px', background: '#c9a96e' }} />
              <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: '#444', textTransform: 'uppercase' }}>About</span>
            </div>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400, lineHeight: 1.5, color: '#c8c8c8', margin: '0 0 2rem 0' }}>
              I'm <span style={{ color: '#f5f5f5' }}>Jerry Tiabou</span> — a developer who builds production-ready websites for local businesses using AI. I scan a business's existing site, rebuild it in React with real SEO improvements, and have it live on Vercel in under an hour.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '2.5rem' }}>
              {STACK.map(s => (
                <span key={s} style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: '0.62rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#555',
                  border: '1px solid #1e1e1e',
                  padding: '0.4rem 0.8rem',
                }}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work */}
      <section id="work" style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ padding: '0 3rem 2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
            <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#f5f5f5' }}>Selected Work</span>
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.6rem', letterSpacing: '0.18em', color: '#333', textTransform: 'uppercase' }}>8 live projects</span>
          </div>
          <div style={{ width: '2rem', height: '1px', background: '#c9a96e', marginTop: '0.5rem' }} />
        </motion.div>

        <div style={{ borderTop: '1px solid #141414' }}>
          {PROJECTS.map((p, i) => <ProjectRow key={p.id} p={p} i={i} />)}
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '6rem 3rem', borderTop: '1px solid #141414' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
            <div style={{ width: '2rem', height: '1px', background: '#c9a96e' }} />
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: '#444', textTransform: 'uppercase' }}>Process</span>
          </div>
          <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#f5f5f5' }}>How it works</span>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0', borderTop: '1px solid #141414' }}>
          {[
            { num: '01', title: 'Deep Scan',   desc: 'Full crawl across every page — SEO signals, services, visual tone, PDF extraction. Zero guessing, no templates.' },
            { num: '02', title: 'AI Rebuild',  desc: 'Claude generates a production React clone: tailored copy, niche design standards, licensed Unsplash photography.' },
            { num: '03', title: 'Live in 60s', desc: 'Pushed to GitHub, auto-deployed on Vercel. A shareable preview URL delivered within the hour.' },
          ].map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.14 }}
              style={{ padding: '3rem 2.5rem', borderRight: i < 2 ? '1px solid #141414' : 'none', borderBottom: '1px solid #141414' }}
            >
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '3rem', fontWeight: 300, color: '#c9a96e', opacity: 0.5, lineHeight: 1, marginBottom: '1.5rem' }}>{s.num}</div>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.3rem', fontWeight: 500, color: '#e8e8e8', marginBottom: '0.8rem' }}>{s.title}</div>
              <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.78rem', color: '#666', lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: '6rem 3rem 5rem', borderTop: '1px solid #141414' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: '2rem', height: '1px', background: '#c9a96e' }} />
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: '#444', textTransform: 'uppercase' }}>Contact</span>
          </div>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, lineHeight: 0.92, marginBottom: '3rem', color: '#f5f5f5' }}>
            Let's<br /><span style={{ color: '#c9a96e' }}>talk.</span>
          </div>
          <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.78rem', color: '#555', lineHeight: 1.7, maxWidth: '480px', marginBottom: '3rem' }}>
            Want an AI-rebuilt version of your site — live in under an hour? Get in touch and I'll send you a free preview.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
            <a href="mailto:tiaboujerry5@gmail.com" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.3rem', color: '#c9a96e', textDecoration: 'none', borderBottom: '1px solid #c9a96e44', paddingBottom: '3px' }}>
              tiaboujerry5@gmail.com
            </a>
            <a href="https://instagram.com/more_jerryt" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.68rem', color: '#555', textDecoration: 'none', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#c9a96e', fontWeight: 600 }}>IG</span> more_jerryt
            </a>
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.68rem', color: '#555', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#c9a96e', fontWeight: 600 }}>FB</span> Jerry Tiabou
            </span>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '1.5rem 3rem', borderTop: '1px solid #0f0f0f', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.58rem', color: '#222', letterSpacing: '0.1em', textTransform: 'uppercase' }}>© 2026 Jerry Portfolio</span>
        <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.58rem', color: '#222', letterSpacing: '0.1em', textTransform: 'uppercase' }}>8 Sites · AI-Crafted · Vercel</span>
      </footer>
    </div>
  )
}
