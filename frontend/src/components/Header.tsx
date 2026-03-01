import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-blue-600 flex items-center justify-center text-white font-bold">A</div>
          <div className="text-lg font-semibold text-sky-800">AquaFit Pro</div>
        </Link>

        <nav className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-blue-600">Home</Link>
          <Link to="/courses" className="text-sm font-medium hover:text-blue-600">Courses</Link>
          <Link to="/booking" className="text-sm font-medium hover:text-blue-600">Booking</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
