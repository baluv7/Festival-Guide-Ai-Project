import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-[#E84D1C] text-white p-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">Festival Guide</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/stories" className="hover:text-gray-200">Festival Stories</Link>
          <Link to="/videos" className="hover:text-gray-200">Festival Videos</Link>
        </div>
      </nav>
    </header>
  );
}