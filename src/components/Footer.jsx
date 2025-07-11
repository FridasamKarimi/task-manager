function Footer() {
    return (
      <footer className="bg-gray-100 dark:bg-gray-900 p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Task Manager. All rights reserved.
          </p>
          <div className="space-x-4 mt-2">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Privacy</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Terms</a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  