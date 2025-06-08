// app/loading.tsx
export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-background text-primary text-xl font-semibold">
      Loading<span className="animate-pulse">...</span>
    </div>
  );
}
