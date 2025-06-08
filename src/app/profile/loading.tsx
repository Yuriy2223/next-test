export default function ProfileLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
        <p className="text-muted-foreground text-lg font-medium">
          Завантаження профілю...
        </p>
      </div>
    </div>
  );
}
