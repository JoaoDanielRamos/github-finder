// * Modules
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// * Components
import Navbar from './components/global/Navbar/Navbar';

// * Pages
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between'>
        <Navbar title='GitHub Finder' />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
