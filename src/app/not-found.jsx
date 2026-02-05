import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-950 px-6 text-center">
      <h1 className="text-9xl font-extrabold text-orange-600 mb-4 opacity-80">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        Sorry, we couldn't find the page you're looking for. It might have been removed or relocated.
      </p>
      
      <Link 
        href="/"
        className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-orange-500/30"
      >
        Return Home
      </Link>
    </div>
  );
}
