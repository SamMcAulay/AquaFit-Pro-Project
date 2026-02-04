import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Placeholder Pages (We will move these to src/pages later)
const Home = () => (
  <div className="p-10">
    <h1 className="text-3xl font-bold text-gray-800">Home Page</h1>
    <p className="mt-4 text-gray-600">Start of the skeleton for frontend</p>
  </div>
);

const Courses = () => (
  <div className="p-10">
    <h1 className="text-3xl font-bold text-blue-600">Courses Page</h1>
    <p className="mt-4 text-gray-600">Here we would put the courses and timetables maybe</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
        {/* Navigation Bar */}
        <nav className="flex items-center gap-6 bg-white p-4 shadow-sm">
          <div className="mr-4 text-xl font-bold text-blue-800">AquaFit Pro</div>
          <Link to="/" className="font-medium hover:text-blue-600">Home</Link>
          <Link to="/courses" className="font-medium hover:text-blue-600">Courses</Link>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
