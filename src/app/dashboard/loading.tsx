"use client";

export default function DashboardLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="w-full max-w-md rounded-xl border border-border bg-card shadow-xl p-8 text-center animate-fade-in">
        <h2 className="text-xl font-semibold mb-4 animate-pulse text-muted-foreground">
          Завантаження дашборду...
        </h2>
        <div className="relative w-24 h-2 mx-auto bg-muted rounded-full overflow-hidden">
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-foreground/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
