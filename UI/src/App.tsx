import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { Footer } from './components/Footer';
import { SlugHandler } from './components/SlugHandler';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/:slug" element={<SlugHandler />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
