import Navbar from './components/Nav'
import Home    from './components/Home'
import About   from './components/About'
import Skills  from './components/Skills'
import Projects from './components/Projects'
import Contact  from './components/Contact'
import './style.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
