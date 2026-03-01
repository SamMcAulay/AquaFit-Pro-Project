export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-white/70">
      <div className="max-w-6xl mx-auto p-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} AquaFit Pro — Local community swimming courses.
      </div>
    </footer>
  );
}
