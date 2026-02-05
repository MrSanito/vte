export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-950 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        {/* Animated V Logo */}
        <div className="relative w-16 h-16 mb-4 animate-pulse">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-xl opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">V</div>
        </div>
        
        {/* Loading Spinner */}
        <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-600 animate-bounce delay-75"></div>
            <div className="w-3 h-3 rounded-full bg-orange-600 animate-bounce delay-150"></div>
            <div className="w-3 h-3 rounded-full bg-orange-600 animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
}
