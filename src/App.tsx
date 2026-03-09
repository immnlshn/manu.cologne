import { Menu } from "./components/menu.tsx";
import { About } from "./components/about.tsx";
import { Contact } from "./components/contact.tsx";
import { Hero } from "./components/Hero.tsx";
import { Projects } from "./components/Projects.tsx";
import { Skills } from "./components/Skills.tsx";
import { CV } from "./components/CV.tsx";
import { Footer } from "./components/Footer.tsx";
import { useTheme } from "./hooks/useTheme";
import { MotionConfig } from 'motion/react'

function App() {
  useTheme()

  return (
    <MotionConfig reducedMotion="user">
      {/* Grain overlay — fixed pseudo layer */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.032]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div
        className="relative min-h-screen"
        style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
      >
        {/* Global gradient mesh background */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 10% 15%, color-mix(in srgb, var(--rose) 7%, transparent) 0%, transparent 65%),
              radial-gradient(ellipse 60% 60% at 88% 75%, color-mix(in srgb, var(--lavender) 8%, transparent) 0%, transparent 65%),
              radial-gradient(ellipse 45% 45% at 55% 45%, color-mix(in srgb, var(--peach) 5%, transparent) 0%, transparent 70%),
              var(--bg)
            `,
          }}
        />

        <Menu />
        <main id="main-content">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <CV />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
