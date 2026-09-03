import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Resume from './components/Resume'
import ScrollTop from './components/ScrollTop'

function App() {
  const [page, setPage] = useState('home')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  return (
    <>
      <Navbar onNavigate={setPage} currentPage={page} />
      {page === 'resume' ? (
        <Resume onBack={() => setPage('home')} />
      ) : (
        <>
          <Hero onViewResume={() => setPage('resume')} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer onViewResume={() => setPage('resume')} />
        </>
      )}
      <ScrollTop />
    </>
  )
}

export default App
