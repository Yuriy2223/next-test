export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-background text-primary">
      <div className="text-2xl sm:text-3xl font-semibold tracking-wide flex items-center gap-1">
        <span className="animate-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Завантаження
        </span>
        <span className="flex">
          <span className="animate-bounce delay-0">.</span>
          <span className="animate-bounce delay-200">.</span>
          <span className="animate-bounce delay-400">.</span>
        </span>
      </div>
    </div>
  );
}
