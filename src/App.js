import './styles/main.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Contacts from './pages/Contacts'

import ScrollToTop from './utils/scrollToTop'
import Vk from './components/footer/Vk'
import Instagram from './components/footer/Instagram'
import Twitter from './components/footer/Twitter'
import GitHub from './components/footer/GitHub'
import LinkedIn from './components/footer/LinkedIn'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="https://vk.com/" element={<Vk />} />
          <Route path="https://instagram.com/" element={<Instagram />} />
          <Route path="https://twitter.com/" element={<Twitter />} />
          <Route path="https://github.com/" element={<GitHub />} />
          <Route path="https://linkedin.com/" element={<LinkedIn />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App
