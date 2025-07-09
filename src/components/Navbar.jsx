import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Task Manager</div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Home</Link>
          <Link to="/tasks" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Tasks</Link>
          <Link to="/data" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Data</Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;