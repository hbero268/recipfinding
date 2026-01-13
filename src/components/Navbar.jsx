import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="bg-blue-900 text-white px-8 py-4 flex justify-between items-center">
      <Link to="/" className="font-semibold text-lg hover:text-blue-200">
        RECIPE FINDING
      </Link>

      <div className="flex gap-8 font-medium">
        <Link 
          to="/" 
          className={`hover:text-blue-200 ${location.pathname === '/' ? 'text-blue-200' : ''}`}
        >
          HOME
        </Link>
        <Link 
          to="/about" 
          className={`hover:text-blue-200 ${location.pathname === '/about' ? 'text-blue-200' : ''}`}
        >
          ABOUT
        </Link>
        <Link 
          to="/contact" 
          className={`hover:text-blue-200 ${location.pathname === '/contact' ? 'text-blue-200' : ''}`}
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
