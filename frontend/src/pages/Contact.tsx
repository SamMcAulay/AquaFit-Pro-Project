import { useState } from 'react';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now save to localStorage as a simple "sent" simulation
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    messages.push({ name, email, message, at: new Date().toISOString() });
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    setSent(true);
    setName(''); setEmail(''); setMessage('');
  };

  return (
    <section className="max-w-3xl mx-auto px-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-sky-800 mb-4">Contact Us</h2>

        {sent && <div className="mb-4 text-green-700">Thanks — your message has been recorded.</div>}

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" type="email" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea value={message} onChange={e => setMessage(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2 h-32" />
          </div>

          <div>
            <button className="px-4 py-2 rounded bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
