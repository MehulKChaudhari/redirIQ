import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { Footer } from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
