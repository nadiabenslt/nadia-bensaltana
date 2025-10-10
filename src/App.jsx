
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Nav'
import './style.css'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
       
       <Route path='/about' element={<About />} />
       <Route path='/skills' element={<Skills />} />
       <Route path='/projects' element={<Projects />} />
       <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
