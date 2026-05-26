import { useState } from 'react'
import { motion } from 'framer-motion'

const PROJECTS = [
  { id: '01', name: 'Ember & Smoke BBQ',       niche: 'Restaurant',       url: 'https://embersmokebbq.vercel.app',       bg: 'linear-gradient(135deg,#1a0800 0%,#0d0300 100%)' },
  { id: '02', name: 'Auberge Kamouraska',       niche: 'Hospitality',      url: 'https://aubergekamouraska.vercel.app',   bg: 'linear-gradient(135deg,#0a1520 0%,#040a10 100%)' },
  { id: '03', name: 'La Forge du Terroir',      niche: 'Restaurant',       url: 'https://laforgeduterroir.vercel.app',    bg: 'linear-gradient(135deg,#1a0d00 0%,#0d0600 100%)' },
  { id: '04', name: 'ScènePrime',               niche: 'Entertainment',    url: 'https://sc-neprime.vercel.app',          bg: 'linear-gradient(135deg,#0d0020 0%,#060010 100%)' },
  { id: '05', name: 'Ember & Elm Body Studio',  niche: 'Beauty & Spa',     url: 'https://emberelmbodystudio.vercel.app',  bg: 'linear-gradient(135deg,#1a0f12 0%,#0d0709 100%)' },
  { id: '06', name: 'Lumière Aesthetics',       niche: 'MedSpa',           url: 'https://lumi-reaesthetics.vercel.app',   bg: 'linear-gradient(135deg,#0a0f1a 0%,#050810 100%)' },
  { id: '07', name: 'Velour Studio',            niche: 'Permanent Makeup', url: 'https://velourstudio.vercel.app',        bg: 'linear-gradient(135deg,#120a15 0%,#08050a 100%)' },
  { id: '08', name: 'Lumière Aesthetics & Spa', niche: 'Medical Spa',      url: 'https://lumi-reaestheticsspa.vercel.app',bg: 'linear-gradient(135deg,#081210 0%,#040908 100%)' },
]

const PROCESS = [
  { num: '01', title: 'Deep Scan',   desc: 'Full crawl across every page — SEO signals, services, visual tone. No guessing, no templates.' },
  { num: '02', title: 'AI Rebuild',  desc: 'Claude generates a production React clone: tailored copy, niche design standards, licensed photography.' },
  { num: '03', title: 'Live in 60s', desc: 'Pushed to GitHub, auto-deployed on Vercel. A shareable URL delivered within the hour.' },
]

function Marquee() {
  const text = 'RESTAURANT  ·  HOSPITALITY  ·  BEAUTY  ·  MEDSPA  ·  ENTERTAINMENT  ·  PERMANENT MAKEUP  ·  MEDICAL SPA  ·  '
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid #161616', borderBottom: '1px solid #161616', padding: '0.7rem 0' }}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', whiteSpace: 'nowrap' }}
      >
        {[text, text].map((t, i) => (
          <span key={i} style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.6rem', letterSpacing: '0.22em', color: '#3a3a3a' }}>{t}</span>
        ))}
      </motion.div>
    </div>
  )
}

function Card({ p, i }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: p.bg,
        border: `1px solid ${hovered ? '#c9a96e' : '#161616'}`,
        padding: '1.75rem',
        textDecoration: 'none',
        minHeight: '210px',
        position: 'relative',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-3px)' : 'none',
        transition: 'border-color 0.3s ease, transform 0.3s ease',
      }}
    >
      <span style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: '3rem',
        fontWeight: 300,
        lineHeight: 1,
        color: hovered ? '#c9a96e' : '#222',
        transition: 'color 0.3s ease',
      }}>
        {p.id}
      </span>

      <div>
        <div style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '1.35rem',
          fontWeight: 500,
          color: '#f0f0f0',
          lineHeight: 1.25,
          marginBottom: '0.6rem',
          letterSpacing: '0.01em',
        }}>
          {p.name}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '0.6rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#c9a96e',
          }}>
            {p.niche}
          </span>
          <span style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '0.72rem',
            color: hovered ? '#c9a96e' : '#444',
            transition: 'color 0.3s ease',
          }}>
            View Live →
          </span>
        </div>
      </div>

      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.28 }}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: '#c9a96e', transformOrigin: 'left' }}
      />
    </motion.a>
  )
}

export default function App() {
  return (
    <div style={{ background: '#080808', minHeight: '100vh', color: '#f5f5f5' }}>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.2rem 3rem',
        background: 'rgba(8,8,8,0.88)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid #111',
      }}>
        <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1rem', letterSpacing: '0.1em', color: '#f0f0f0' }}>
          JERRY PORTFOLIO
        </span>
        <a href="mailto:tiaboujerry5@gmail.com" style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: '0.65rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#c9a96e',
          textDecoration: 'none',
        }}>
          Get in touch
        </a>
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
        {/* Vertical gold line */}
        <div style={{
          position: 'absolute', top: '12vh', right: '3rem',
          width: '1px', height: '38vh',
          background: 'linear-gradient(to bottom, transparent, #c9a96e55, transparent)',
        }} />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          <div style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(3.5rem, 13vw, 12rem)',
            fontWeight: 300, lineHeight: 0.88, letterSpacing: '-0.02em',
            color: '#f5f5f5',
          }}>
            JERRY
          </div>
          <div style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(3.5rem, 13vw, 12rem)',
            fontWeight: 300, lineHeight: 0.88, letterSpacing: '-0.02em',
            marginBottom: '3rem',
          }}>
            <span style={{ color: '#c9a96e' }}>PORT</span><span style={{ color: '#f5f5f5' }}>FOLIO</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ width: '2.5rem', height: '1px', background: '#c9a96e' }} />
            <p style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '0.75rem', letterSpacing: '0.14em',
              color: '#666', textTransform: 'uppercase', margin: 0,
            }}>
              AI-crafted sites for real businesses
            </p>
          </div>
        </motion.div>
      </section>

      <Marquee />

      {/* Work */}
      <section style={{ padding: '6rem 3rem' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.4rem' }}>
            <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#f5f5f5' }}>Work</span>
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.6rem', letterSpacing: '0.18em', color: '#444', textTransform: 'uppercase' }}>8 projects</span>
          </div>
          <div style={{ width: '2.5rem', height: '1px', background: '#c9a96e' }} />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: '1px',
          background: '#111',
          border: '1px solid #111',
        }}>
          {PROJECTS.map((p, i) => <Card key={p.id} p={p} i={i} />)}
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '6rem 3rem', borderTop: '1px solid #111' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: '4rem' }}>
          <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#f5f5f5' }}>How it works</span>
          <div style={{ width: '2.5rem', height: '1px', background: '#c9a96e', marginTop: '0.4rem' }} />
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          {PROCESS.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.14 }}>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '3.5rem', fontWeight: 300, color: '#c9a96e', opacity: 0.55, lineHeight: 1, marginBottom: '1rem' }}>{s.num}</div>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.35rem', fontWeight: 500, color: '#f0f0f0', marginBottom: '0.75rem' }}>{s.title}</div>
              <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.8rem', color: '#777', lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: '5rem 3rem', borderTop: '1px solid #111' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2.5rem, 7vw, 6rem)', fontWeight: 300, lineHeight: 1, marginBottom: '0.2em' }}>
            Let's talk.
          </div>
          <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.7rem', letterSpacing: '0.16em', color: '#444', textTransform: 'uppercase', marginBottom: '3rem' }}>
            Your site, elevated.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'center' }}>
            <a href="mailto:tiaboujerry5@gmail.com" style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.85rem', color: '#c9a96e', textDecoration: 'none', borderBottom: '1px solid #c9a96e44', paddingBottom: '2px' }}>
              tiaboujerry5@gmail.com
            </a>
            <a href="https://instagram.com/more_jerryt" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.72rem', color: '#666', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#c9a96e', fontSize: '0.75rem', fontWeight: 600 }}>IG</span> more_jerryt
            </a>
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.72rem', color: '#666', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#c9a96e', fontSize: '0.75rem', fontWeight: 600 }}>FB</span> Jerry Tiabou
            </span>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '1.5rem 3rem', borderTop: '1px solid #111', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.6rem', color: '#2a2a2a', letterSpacing: '0.1em', textTransform: 'uppercase' }}>© 2026 Jerry Portfolio</span>
        <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.6rem', color: '#2a2a2a', letterSpacing: '0.1em', textTransform: 'uppercase' }}>AI-Crafted · Vercel Deployed</span>
      </footer>
    </div>
  )
}
