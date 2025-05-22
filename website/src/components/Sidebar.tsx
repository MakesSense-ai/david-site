import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCases, customSolutions } from '../data/content';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const [activeTab, setActiveTab] = useState<'useCases' | 'solutions'>('useCases');
  
  return (
    <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:w-64 md:flex-shrink-0`}>
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Real Estate AI</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex border-b border-gray-200">
          <button
            className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === 'useCases' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('useCases')}
          >
            Use Cases
          </button>
          <button
            className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === 'solutions' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('solutions')}
          >
            Solutions
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 px-3">
          {activeTab === 'useCases' ? (
            <ul className="space-y-2">
              {useCases.map(useCase => (
                <li key={useCase.id}>
                  <Link
                    to={`/use-case/${useCase.id}`}
                    className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{useCase.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="space-y-2">
              {customSolutions.map(solution => (
                <li key={solution.id}>
                  <Link
                    to={`/solution/${solution.id}`}
                    className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{solution.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <Link
            to="/"
            className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
