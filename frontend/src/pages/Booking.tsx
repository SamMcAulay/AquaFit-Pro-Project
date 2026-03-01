import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

interface Course {
  id: number;
  name: string;
}

export function Booking() {
  const [searchParams] = useSearchParams();
  const preCourseId = searchParams.get('courseId');

  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(preCourseId ? Number(preCourseId) : null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [spots, setSpots] = useState(1);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://localhost:3000/courses')
      .then(res => setCourses(res.data))
      .catch(() => setCourses([]));
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourseId) return setStatus('Please select a course');
    if (!name || !email) return setStatus('Please provide name and email');

    try {
      await axios.post('http://localhost:3000/bookings', {
        courseId: selectedCourseId,
        name,
        email,
        spots,
      });
      setStatus('Booking successful — we will email confirmation.');
      setName(''); setEmail(''); setSpots(1);
    } catch (err) {
      setStatus('Failed to create booking — please try later.');
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-sky-800 mb-4">Book a Course</h2>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Course</label>
            <select value={selectedCourseId ?? ''} onChange={e => setSelectedCourseId(e.target.value ? Number(e.target.value) : null)} className="mt-1 block w-full rounded border px-3 py-2">
              <option value="">Select a course</option>
              {courses.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Full name</label>
            <input value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" type="email" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Spots</label>
            <input value={spots} onChange={e => setSpots(Number(e.target.value))} className="mt-1 block w-24 rounded border px-3 py-2" type="number" min={1} />
          </div>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded bg-gradient-to-r from-teal-500 to-sky-600 text-white font-semibold">Confirm Booking</button>
            {status && <div className="text-sm text-gray-700">{status}</div>}
          </div>
        </form>
      </div>
    </section>
  );
}
