import { Link } from 'react-router-dom';

interface HeaderProps {
  setSidebarOpen: (isOpen: boolean) => void;
}

const Header = ({ setSidebarOpen }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">Real Estate AI</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/use-case/market-analysis" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Use Cases
            </Link>
            <Link to="/solution/market-pulse-ai" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Solutions
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
