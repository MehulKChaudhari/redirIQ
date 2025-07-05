import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { Footer } from './components/Footer';
import { NotFoundPage } from './components/NotFoundPage';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
