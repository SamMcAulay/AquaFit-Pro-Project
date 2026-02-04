import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Courses } from './pages/Courses'; 

// Simple Home Placeholder (We can keep this for now)
const Home = () => (
  <div className="p-10">
    <h1 className="text-3xl font-bold text-gray-800">Home Page</h1>
    <p className="mt-4 text-gray-600">Welcome to AquaFit Pro!</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        {/* Navigation Bar */}
        <nav className="flex items-center gap-6 bg-white p-4 shadow-sm">
          <div className="mr-4 text-xl font-bold text-blue-800">AquaFit Pro</div>
          <Link to="/" className="font-medium hover:text-blue-600">Home</Link>
          <Link to="/courses" className="font-medium hover:text-blue-600">Courses</Link>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} /> {/* Now uses the imported file */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
