import { Menu } from "./components/menu.tsx";
import { About } from "./components/about.tsx";
import { Contact } from "./components/contact.tsx";
import { Hero } from "./components/Hero.tsx";
import { Projects } from "./components/Projects.tsx";
import { Skills } from "./components/Skills.tsx";
import { CV } from "./components/CV.tsx";
import { Footer } from "./components/Footer.tsx";
import { useTheme } from "./hooks/useTheme";
import { motion, useScroll, useTransform } from 'motion/react'

function App() {
  useTheme()
  const { scrollYProgress } = useScroll()
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.75])

  return (
    <div className="relative">
      <motion.div style={{ y: glowY, opacity: glowOpacity }} className="pointer-events-none absolute inset-x-0 top-0 -z-10 overflow-hidden" aria-hidden>
        <div className="relative h-[85vh]">
          <div className="absolute left-1/2 -top-[50rem] h-[120rem] w-[120rem] -translate-x-1/2 rounded-full bg-indigo-300/18 dark:bg-indigo-900/18 blur-3xl [mask-image:radial-gradient(closest-side,white_22%,transparent_72%)]" />
        </div>
      </motion.div>

      <Menu />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <CV />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
