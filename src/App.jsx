import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import ClubActivities from './components/ClubActivities'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Resume from './components/Resume'
import ScrollTop from './components/ScrollTop'

function App() {
  const [page, setPage] = useState('home')
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark'
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <Navbar
        onNavigate={setPage}
        currentPage={page}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      {page === 'resume' ? (
        <Resume onBack={() => setPage('home')} />
      ) : (
        <>
          <Hero onViewResume={() => setPage('resume')} />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Experience />
          <ClubActivities />
          <Contact />
          <Footer onViewResume={() => setPage('resume')} />
        </>
      )}
      <ScrollTop />
    </>
  )
}

export default App
