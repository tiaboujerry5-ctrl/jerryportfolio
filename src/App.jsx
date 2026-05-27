import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const BASE = 'https://mdceqvjsrzkvnrigaili.supabase.co/storage/v1/object/public/site-assets/portfolio-previews'

const PROJECTS = [
  {
    id: '01', name: 'Ember & Elm Body Studio', niche: 'Beauty & Spa',
    url: 'https://emberelmbodystudio.vercel.app', img: `${BASE}/emberelmbodystudio.jpg`,
    color: '#9d174d', arch: 'React 18 · Vite · Tailwind CSS', seoScore: 42,
    built: ['Booking flow', 'Service gallery', 'Mobile-first layout', 'Schema markup'],
  },
  {
    id: '02', name: 'Nails by Su', niche: 'Nail Studio',
    url: 'https://nailsbysu.vercel.app', img: `${BASE}/nailsbysu.jpg`,
    color: '#be185d', arch: 'React 18 · Vite · Tailwind CSS', seoScore: null,
    built: ['Portfolio gallery', 'Service pricing', 'Contact CTA', 'Responsive grid'],
  },
  {
    id: '03', name: 'Lumière Aesthetics', niche: 'MedSpa',
    url: 'https://lumi-reaesthetics.vercel.app', img: `${BASE}/lumi-reaesthetics.jpg`,
    color: '#1e40af', arch: 'React 18 · Vite · Tailwind CSS', seoScore: 52,
    built: ['Treatment catalogue', 'Before/after section', 'Booking CTA', 'Meta optimization'],
  },
  {
    id: '04', name: 'Auberge Kamouraska', niche: 'Hospitality',
    url: 'https://aubergekamouraska.vercel.app', img: `${BASE}/aubergekamouraska.jpg`,
    color: '#1e6091', arch: 'React 18 · Vite · Tailwind CSS', seoScore: 34,
    built: ['Room showcase', 'Seasonal menu', 'Bilingual content', 'Local SEO schema'],
  },
  {
    id: '05', name: 'Ember & Smoke BBQ', niche: 'Restaurant',
    url: 'https://embersmokebbq.vercel.app', img: `${BASE}/embersmokebbq.jpg`,
    color: '#c84b00', arch: 'React 18 · Vite · Tailwind CSS', seoScore: 22,
    built: ['Online ordering UI', 'Menu sections', 'Hours & location', 'Open Graph tags'],
  },
  {
    id: '06', name: 'Biztro Le Mauricien', niche: 'Restaurant',
    url: 'https://biztrolemauricien.vercel.app', img: `${BASE}/biztrolemauricien.jpg`,
    color: '#b45309', arch: 'React 18 · Vite · Tailwind CSS', seoScore: null,
    built: ['Menu layout', 'Ambiance gallery', 'Reservation CTA', 'Mobile UX'],
  },
  {
    id: '07', name: 'La Forge du Terroir', niche: 'Restaurant',
    url: 'https://laforgeduterroir.vercel.app', img: `${BASE}/laforgeduterroir.jpg`,
    color: '#7c4d00', arch: 'React 18 · Vite · Tailwind CSS', seoScore: 28,
    built: ['Butcher shop catalog', 'Farm-to-table story', 'Product cards', 'Structured data'],
  },
  {
    id: '08', name: 'ScènePrime', niche: 'Entertainment',
    url: 'https://sc-neprime.vercel.app', img: `${BASE}/sc-neprime.jpg`,
    color: '#6b21a8', arch: 'React 18 · Vite · Tailwind CSS', seoScore: 28,
    built: ['Event listings', 'Ticket CTA', 'Artist showcase', 'Dynamic hero'],
  },
  {
    id: '09', name: 'Velour Studio', niche: 'Permanent Makeup',
    url: 'https://velourstudio-wheat.vercel.app', img: `${BASE}/velourstudio.jpg`,
    color: '#7c3aed', arch: 'React 18 · Vite · Tailwind CSS', seoScore: 42,
    built: ['Portfolio gallery', 'Service pricing', 'Consultation CTA', 'Schema markup'],
  },
  {
    id: '10', name: 'Lumière Aesthetics & Spa', niche: 'Medical Spa',
    url: 'https://lumi-reaestheticsspa.vercel.app', img: `${BASE}/lumi-reaestheticsspa.jpg`,
    color: '#065f46', arch: 'React 18 · Vite · Tailwind CSS', seoScore: 52,
    built: ['Treatment pages', 'Therapist profiles', 'Retail section', 'Performance audit'],
  },
]

const STACK = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'PostgreSQL', 'Redis', 'Vercel', 'Supabase', 'GitHub Actions']

const PROCESS = [
  {
    num: '01', title: 'Discovery & Architecture',
    desc: 'Every project starts with understanding the "why." I map out the system architecture, choose the right data structures, and define the technical requirements before a single line of code is written.',
  },
  {
    num: '02', title: 'Modular Implementation',
    desc: 'I build using a component-driven approach. This ensures the codebase remains modular, readable, and easy for teams to collaborate on. I prioritize type safety and clean abstractions to minimize technical debt.',
  },
  {
    num: '03', title: 'Testing & Optimization',
    desc: "I don't consider a feature done until it's tested. From unit tests to end-to-end flows, I ensure the logic is sound. I also perform rigorous performance audits to optimize load times and resource consumption.",
  },
  {
    num: '04', title: 'Deployment & Monitoring',
    desc: 'I utilize CI/CD pipelines for automated, reliable deployments. Once live, I focus on monitoring and feedback loops to identify areas for refinement, ensuring the application stays healthy in production.',
  },
]

function TechDrawer({ p }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderTop: '1px solid #1c1c1c' }}>
      <button
        onClick={e => { e.preventDefault(); e.stopPropagation(); setOpen(o => !o) }}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '0.65rem 1.25rem', background: 'transparent', border: 'none', cursor: 'pointer',
        }}
      >
        <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#444' }}>
          Tech Details
        </span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }} style={{ color: '#444', fontSize: '0.9rem', display: 'inline-block' }}>+</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0.5rem 1.25rem 1rem', borderTop: '1px solid #161616' }}>
              {/* Architecture */}
              <div style={{ marginBottom: '0.75rem' }}>
                <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#333', marginBottom: '0.3rem' }}>Architecture</div>
                <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.68rem', color: '#666', fontFamily: 'monospace' }}>
                  Browser → Vite Build → React SPA → Vercel Edge
                </div>
              </div>
              {/* Stack */}
              <div style={{ marginBottom: '0.75rem' }}>
                <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#333', marginBottom: '0.3rem' }}>Stack</div>
                <div style={{ fontFamily: 'monospace', fontSize: '0.66rem', color: '#555' }}>React 18 · Vite 5 · Tailwind 3 · Framer Motion 11</div>
              </div>
              {/* Built */}
              <div style={{ marginBottom: p.seoScore ? '0.75rem' : 0 }}>
                <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#333', marginBottom: '0.3rem' }}>What was built</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                  {p.built.map(b => (
                    <span key={b} style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.58rem', color: '#4a4a4a', border: '1px solid #1e1e1e', padding: '0.2rem 0.5rem' }}>{b}</span>
                  ))}
                </div>
              </div>
              {/* SEO score */}
              {p.seoScore && (
                <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#333' }}>Original SEO audit</div>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.62rem', color: '#c84b00', border: '1px solid #c84b0044', padding: '0.15rem 0.4rem' }}>{p.seoScore}/100</span>
                  <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.55rem', color: '#065f46' }}>→ rebuilt</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ProjectCard({ p, i }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2 }}
      style={{
        background: '#0e0e0e',
        border: `1px solid ${hovered ? p.color : '#1c1c1c'}`,
        transition: 'border-color 0.3s ease',
        display: 'flex', flexDirection: 'column',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Screenshot — clickable area */}
      <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', position: 'relative', overflow: 'hidden', aspectRatio: '16/9', flexShrink: 0 }}>
        <img
          src={p.img} alt={p.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', transform: hovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.5s ease' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: hovered ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)', transition: 'background 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', border: '1px solid rgba(255,255,255,0.55)', padding: '0.55rem 1.3rem', opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(8px)', transition: 'opacity 0.3s ease, transform 0.3s ease' }}>
            View Live →
          </div>
        </div>
        <div style={{ position: 'absolute', top: '0.6rem', left: '0.6rem', fontFamily: '"Cormorant Garamond", serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', background: 'rgba(0,0,0,0.5)', padding: '0.1rem 0.45rem', letterSpacing: '0.08em' }}>
          {p.id}
        </div>
        {p.seoScore && (
          <div style={{ position: 'absolute', top: '0.6rem', right: '0.6rem', fontFamily: 'monospace', fontSize: '0.58rem', color: '#c9a96e', background: 'rgba(0,0,0,0.65)', padding: '0.1rem 0.45rem', letterSpacing: '0.05em' }}>
            SEO {p.seoScore}
          </div>
        )}
      </a>

      {/* Card footer */}
      <div style={{ padding: '0.9rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderTop: `1px solid ${hovered ? p.color + '33' : '#1c1c1c'}`, transition: 'border-color 0.3s ease', flex: 1 }}>
        <div>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.05rem', fontWeight: 500, color: '#e8e8e8', lineHeight: 1.2, marginBottom: '0.2rem' }}>{p.name}</div>
          <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: hovered ? p.color : '#4a4a4a', transition: 'color 0.3s ease', marginBottom: '0.2rem' }}>{p.niche}</div>
          <div style={{ fontFamily: 'monospace', fontSize: '0.6rem', color: '#2e2e2e' }}>{p.arch}</div>
        </div>
        <div style={{ width: '1.8rem', height: '1.8rem', border: `1px solid ${hovered ? p.color : '#222'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.3s ease', flexShrink: 0, marginTop: '0.1rem' }}>
          <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.7rem', color: hovered ? p.color : '#333', transition: 'color 0.3s ease', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>↗</a>
        </div>
      </div>

      {/* Tech drawer */}
      <TechDrawer p={p} />

      {/* Bottom color bar */}
      <motion.div animate={{ scaleX: hovered ? 1 : 0 }} transition={{ duration: 0.3 }} style={{ height: '2px', background: p.color, transformOrigin: 'left' }} />
    </motion.div>
  )
}

function Marquee() {
  const text = 'FULL-STACK  ·  REACT  ·  NODE.JS  ·  SYSTEM DESIGN  ·  PERFORMANCE  ·  TYPESCRIPT  ·  CI/CD  ·  '
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid #141414', borderBottom: '1px solid #141414', padding: '0.6rem 0' }}>
      <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} style={{ display: 'flex', whiteSpace: 'nowrap' }}>
        {[text, text].map((t, i) => (
          <span key={i} style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.58rem', letterSpacing: '0.22em', color: '#2a2a2a' }}>{t}</span>
        ))}
      </motion.div>
    </div>
  )
}

export default function App() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <div style={{ background: '#080808', minHeight: '100vh', color: '#f5f5f5' }}>

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 3rem', background: 'rgba(8,8,8,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #111' }}>
        <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '0.95rem', letterSpacing: '0.12em', color: '#e0e0e0' }}>JERRY TIABOU</span>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#work" style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#555', textDecoration: 'none' }}>Work</a>
          <a href="#about" style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#555', textDecoration: 'none' }}>About</a>
          <a href="mailto:tiaboujerry5@gmail.com" style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c9a96e', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} style={{ padding: '11rem 3rem 6rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '14vh', right: '3rem', width: '1px', height: '32vh', background: 'linear-gradient(to bottom, transparent, #c9a96e55, transparent)' }} />
        <motion.div style={{ y: heroY }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(4rem, 14vw, 13rem)', fontWeight: 300, lineHeight: 0.88, letterSpacing: '-0.02em', color: '#f5f5f5' }}>
              JERRY
            </div>
            <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(4rem, 14vw, 13rem)', fontWeight: 300, lineHeight: 0.88, letterSpacing: '-0.02em', marginBottom: '3rem' }}>
              <span style={{ color: '#c9a96e' }}>PORT</span><span style={{ color: '#f5f5f5' }}>FOLIO</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ width: '2.5rem', height: '1px', background: '#c9a96e' }} />
              <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.72rem', letterSpacing: '0.16em', color: '#484848', textTransform: 'uppercase', margin: 0 }}>
                Full-Stack Engineering · Performance · System Design
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Marquee />

      {/* Work */}
      <section id="work" style={{ padding: '6rem 3rem' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.4rem' }}>
            <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#f5f5f5' }}>Selected Work</span>
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.6rem', letterSpacing: '0.18em', color: '#333', textTransform: 'uppercase' }}>10 live projects</span>
          </div>
          <div style={{ width: '2rem', height: '1px', background: '#c9a96e' }} />
          <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.72rem', color: '#444', lineHeight: 1.7, marginTop: '1rem', maxWidth: '520px' }}>
            Production-grade React applications built for real businesses. Each project was architected from a full technical audit of the original site. Click any card to visit the live version.
          </p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1px', background: '#141414', border: '1px solid #141414' }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: '6rem 3rem', borderTop: '1px solid #141414' }}>
        <div style={{ maxWidth: '900px' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '2rem', height: '1px', background: '#c9a96e' }} />
              <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: '#444', textTransform: 'uppercase' }}>About</span>
            </div>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 400, color: '#f0f0f0', margin: '0 0 1.5rem 0', lineHeight: 1.3 }}>
              Building Scalable Systems with a Focus on User Impact
            </h2>
            <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.82rem', fontWeight: 400, lineHeight: 1.85, color: '#888', margin: '0 0 1.25rem 0', maxWidth: '780px' }}>
              I'm a Software Developer driven by the challenge of turning complex problems into clean, maintainable code. My background isn't just about writing scripts; it's about architecting full-stack applications that scale. I specialize in the modern web ecosystem, primarily working with <span style={{ color: '#c0c0c0' }}>React, Next.js, and Node.js</span>, but I view tools as a means to an end — the end being a robust, high-performance product.
            </p>
            <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.82rem', fontWeight: 400, lineHeight: 1.85, color: '#888', margin: '0 0 2.5rem 0', maxWidth: '780px' }}>
              I thrive at the intersection of logic and design. Whether I'm optimizing a backend API for speed or refining a frontend component for accessibility, my goal is always the same: to build software that is as reliable as it is intuitive. I'm constantly exploring new patterns in <span style={{ color: '#c0c0c0' }}>system design and performance optimization</span> to ensure the solutions I deliver today can handle the demands of tomorrow.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {STACK.map(s => (
                <span key={s} style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4a4a4a', border: '1px solid #1e1e1e', padding: '0.35rem 0.75rem' }}>{s}</span>
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
          <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#f5f5f5' }}>How I Work: From Concept to Production</span>
          <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.72rem', color: '#3a3a3a', marginTop: '0.75rem', maxWidth: '480px', lineHeight: 1.7 }}>
            My development process is built on transparency, rigorous testing, and iterative improvement.
          </p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', borderTop: '1px solid #141414' }}>
          {PROCESS.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ padding: '2.5rem 2rem', borderRight: i < 3 ? '1px solid #141414' : 'none', borderBottom: '1px solid #141414' }}>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.8rem', fontWeight: 300, color: '#c9a96e', opacity: 0.45, lineHeight: 1, marginBottom: '1.25rem' }}>{s.num}</div>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', fontWeight: 500, color: '#e0e0e0', marginBottom: '0.75rem', lineHeight: 1.3 }}>{s.title}</div>
              <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.76rem', color: '#5a5a5a', lineHeight: 1.8, margin: 0 }}>{s.desc}</p>
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
            Let's<br /><span style={{ color: '#c9a96e' }}>build.</span>
          </div>
          <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.78rem', color: '#4a4a4a', lineHeight: 1.7, maxWidth: '480px', marginBottom: '3rem' }}>
            Have a project in mind or want to discuss a technical challenge? Reach out — I'm always open to interesting problems.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
            <a href="mailto:tiaboujerry5@gmail.com" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.3rem', color: '#c9a96e', textDecoration: 'none', borderBottom: '1px solid #c9a96e44', paddingBottom: '3px' }}>tiaboujerry5@gmail.com</a>
            <a href="https://instagram.com/more_jerryt" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.68rem', color: '#555', textDecoration: 'none', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#c9a96e', fontWeight: 600 }}>IG</span> more_jerryt
            </a>
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.68rem', color: '#555', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#c9a96e', fontWeight: 600 }}>FB</span> Jerry Tiabou
            </span>
          </div>
        </motion.div>
      </section>

      <footer style={{ padding: '1.5rem 3rem', borderTop: '1px solid #0f0f0f', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.58rem', color: '#1e1e1e', letterSpacing: '0.1em', textTransform: 'uppercase' }}>© 2026 Jerry Tiabou</span>
        <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.58rem', color: '#1e1e1e', letterSpacing: '0.1em', textTransform: 'uppercase' }}>10 Projects · React · Vercel</span>
      </footer>
    </div>
  )
}
