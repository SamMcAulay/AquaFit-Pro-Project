import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Courses } from './pages/Courses';
import { Home } from './pages/Home';
import { Booking } from './pages/Booking';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-sky-50 to-indigo-50 text-gray-900 font-sans">
        <Header />

        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
