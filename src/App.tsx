// * Modules
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// * Components
import Navbar from './components/global/Navbar/Navbar';
import Footer from './components/global/Navbar/Footer';

// * Pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar title='GitHub Finder' />

        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
