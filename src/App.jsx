import { useState } from 'react'
import { motion } from 'framer-motion'

const BASE = 'https://mdceqvjsrzkvnrigaili.supabase.co/storage/v1/object/public/site-assets/portfolio-previews'

const PROJECTS = [
  { id: '01', name: 'Ember & Elm Body Studio',  niche: 'Beauty & Spa',     url: 'https://emberelmbodystudio.vercel.app',       img: `${BASE}/emberelmbodystudio.jpg`,   color: '#9d174d' },
  { id: '02', name: 'Nails by Su',              niche: 'Nail Studio',      url: 'https://nailsbysu.vercel.app',                img: `${BASE}/nailsbysu.jpg`,            color: '#be185d' },
  { id: '03', name: 'Lumière Aesthetics',       niche: 'MedSpa',           url: 'https://lumi-reaesthetics.vercel.app',        img: `${BASE}/lumi-reaesthetics.jpg`,    color: '#1e40af' },
  { id: '04', name: 'Auberge Kamouraska',       niche: 'Hospitality',      url: 'https://aubergekamouraska.vercel.app',        img: `${BASE}/aubergekamouraska.jpg`,    color: '#1e6091' },
  { id: '05', name: 'Ember & Smoke BBQ',        niche: 'Restaurant',       url: 'https://embersmokebbq.vercel.app',            img: `${BASE}/embersmokebbq.jpg`,        color: '#c84b00' },
  { id: '06', name: 'La Forge du Terroir',      niche: 'Restaurant',       url: 'https://laforgeduterroir.vercel.app',         img: `${BASE}/laforgeduterroir.jpg`,     color: '#7c4d00' },
  { id: '07', name: 'Velour Studio',            niche: 'Permanent Makeup', url: 'https://velourstudio-wheat.vercel.app',       img: `${BASE}/velourstudio.jpg`,         color: '#7c3aed' },
  { id: '08', name: 'Lumière Aesthetics & Spa', niche: 'Medical Spa',      url: 'https://lumi-reaestheticsspa.vercel.app',     img: `${BASE}/lumi-reaestheticsspa.jpg`, color: '#065f46' },
]

const STACK = ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Claude AI', 'Vercel', 'Supabase', 'GitHub API']

function ProjectCard({ p, i }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
        background: '#0e0e0e',
        border: `1px solid ${hovered ? p.color : '#1c1c1c'}`,
        transition: 'border-color 0.3s ease',
        cursor: 'pointer',
      }}
    >
      {/* Screenshot */}
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}>
        <img
          src={p.img}
          alt={p.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            display: 'block',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.5s ease',
          }}
        />
        {/* Dark overlay on hover with "View Live" CTA */}
        <div style={{
          position: 'absolute', inset: 0,
          background: hovered ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0)',
          transition: 'background 0.3s ease',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.6)',
            padding: '0.6rem 1.4rem',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}>
            View Live →
          </div>
        </div>

        {/* Number badge */}
        <div style={{
          position: 'absolute', top: '0.75rem', left: '0.75rem',
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.5)',
          background: 'rgba(0,0,0,0.5)',
          padding: '0.15rem 0.5rem',
          letterSpacing: '0.08em',
        }}>
          {p.id}
        </div>
      </div>

      {/* Card footer */}
      <div style={{
        padding: '1rem 1.25rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: `1px solid ${hovered ? p.color + '44' : '#1c1c1c'}`,
        transition: 'border-color 0.3s ease',
      }}>
        <div>
          <div style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.1rem',
            fontWeight: 500,
            color: '#e8e8e8',
            lineHeight: 1.2,
            marginBottom: '0.2rem',
          }}>
            {p.name}
          </div>
          <div style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '0.58rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: hovered ? p.color : '#555',
            transition: 'color 0.3s ease',
          }}>
            {p.niche}
          </div>
        </div>
        <div style={{
          width: '2rem', height: '2rem',
          border: `1px solid ${hovered ? p.color : '#2a2a2a'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'border-color 0.3s ease',
          flexShrink: 0,
        }}>
          <span style={{
            fontSize: '0.75rem',
            color: hovered ? p.color : '#3a3a3a',
            transition: 'color 0.3s ease',
          }}>↗</span>
        </div>
      </div>

      {/* Bottom color bar */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ height: '2px', background: p.color, transformOrigin: 'left' }}
      />
    </motion.a>
  )
}

function Marquee() {
  const text = 'RESTAURANT  ·  HOSPITALITY  ·  BEAUTY  ·  MEDSPA  ·  NAIL STUDIO  ·  PERMANENT MAKEUP  ·  MEDICAL SPA  ·  '
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
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '0 3rem 5rem', position: 'relative', overflow: 'hidden',
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

      {/* Work */}
      <section id="work" style={{ padding: '6rem 3rem' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.4rem' }}>
            <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#f5f5f5' }}>Selected Work</span>
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.6rem', letterSpacing: '0.18em', color: '#333', textTransform: 'uppercase' }}>8 live projects</span>
          </div>
          <div style={{ width: '2rem', height: '1px', background: '#c9a96e' }} />
          <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.72rem', color: '#484848', lineHeight: 1.7, marginTop: '1rem', maxWidth: '480px' }}>
            Each site is AI-rebuilt from scratch — click any card to visit the live version.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1px',
          background: '#141414',
          border: '1px solid #141414',
        }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: '6rem 3rem', borderTop: '1px solid #141414' }}>
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
                  fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.62rem',
                  letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555',
                  border: '1px solid #1e1e1e', padding: '0.4rem 0.8rem',
                }}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '4rem 3rem 6rem', borderTop: '1px solid #141414' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
            <div style={{ width: '2rem', height: '1px', background: '#c9a96e' }} />
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: '#444', textTransform: 'uppercase' }}>Process</span>
          </div>
          <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#f5f5f5' }}>How it works</span>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', borderTop: '1px solid #141414' }}>
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
            <a href="https://instagram.com/more_jerryt" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.68rem', color: '#666', textDecoration: 'none', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#c9a96e', fontWeight: 600 }}>IG</span> more_jerryt
            </a>
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.68rem', color: '#666', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#c9a96e', fontWeight: 600 }}>FB</span> Jerry Tiabou
            </span>
          </div>
        </motion.div>
      </section>

      <footer style={{ padding: '1.5rem 3rem', borderTop: '1px solid #0f0f0f', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.58rem', color: '#222', letterSpacing: '0.1em', textTransform: 'uppercase' }}>© 2026 Jerry Portfolio</span>
        <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.58rem', color: '#222', letterSpacing: '0.1em', textTransform: 'uppercase' }}>8 Sites · AI-Crafted · Vercel</span>
      </footer>
    </div>
  )
}
