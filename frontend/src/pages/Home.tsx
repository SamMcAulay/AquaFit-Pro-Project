import { Link } from 'react-router-dom';

export function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-sky-200 via-teal-100 to-indigo-100 p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900">Dive into Fitness with AquaFit Pro</h1>
            <p className="mt-4 text-gray-700 text-lg">Join community swimming courses, improve technique, and have fun in a safe space for all ages.</p>

            <div className="mt-6 flex gap-4">
              <Link to="/courses" className="px-5 py-3 rounded-md bg-gradient-to-r from-teal-500 to-sky-600 text-white font-semibold shadow">View Courses</Link>
              <Link to="/booking" className="px-5 py-3 rounded-md border border-sky-600 text-sky-700 font-semibold">Book a Class</Link>
            </div>
          </div>

          <div className="flex-1">
            <div className="w-full h-56 md:h-64 bg-white rounded-lg shadow flex items-center justify-center">
              {/* Decorative SVG water graphic */}
              <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <path d="M0 200 C150 100 350 300 800 200 L800 400 L0 400 Z" fill="url(#g1)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
