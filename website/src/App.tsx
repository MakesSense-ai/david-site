import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import UseCaseDetail from './components/UseCaseDetail';
import SolutionDetail from './components/SolutionDetail';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header setSidebarOpen={setSidebarOpen} />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/use-case/:id" element={<UseCaseDetail />} />
              <Route path="/solution/:id" element={<SolutionDetail />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
