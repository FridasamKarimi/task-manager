import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto text-center animate-fade-in">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Welcome to Task Manager
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Organize your tasks efficiently and explore data from external APIs with this responsive
          React application. Built with Tailwind CSS, it supports light and dark modes for a seamless
          user experience.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/tasks">
            <Button variant="primary">Manage Tasks</Button>
          </Link>
          <Link to="/data">
            <Button variant="secondary">Explore Data</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default Home;