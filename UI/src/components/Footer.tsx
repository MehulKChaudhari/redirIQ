export const Footer = () => {
  return (
    <footer className="py-6 px-4 backdrop-blur-sm bg-white/80 border-t border-gray-200/50">
      <div className="container mx-auto text-center text-sm text-gray-600">
        Made with{' '}
        <span className="text-red-500" aria-label="love">
          ❤️
        </span>{' '}
        by{' '}
        <a
          href="https://github.com/MehulKChaudhari"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-700 transition-colors font-medium"
        >
          Mehul Chaudhari
        </a>{' '}
        | © 2025 RedirIQ. All rights reserved
      </div>
    </footer>
  );
}; 