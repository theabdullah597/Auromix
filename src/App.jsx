import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Platform from './pages/Platform'
import Aetheon from './pages/Aetheon'
import Solutions from './pages/Solutions'
import About from './pages/About'
import Contact from './pages/Contact'
import TechnicalBrief from './pages/TechnicalBrief'
import ThankyouPage from './pages/ThankyouPage'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookie from './pages/Cookie'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="aurix" element={<Platform />} />
                    <Route path="aetheon" element={<Aetheon />} />
                    <Route path="solutions" element={<Solutions />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="aurix-technical-brief" element={<TechnicalBrief />} />
                    <Route path="technical-brief-request-received" element={<ThankyouPage />} />
                    <Route path="privacy" element={<Privacy />} />
                    <Route path="terms" element={<Terms />} />
                    <Route path="cookie" element={<Cookie />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
