export function Toggle() {
    return (
      <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full border-2 border-white/50 relative">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></span>
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-white/50 rounded-full"></span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-white/50 rounded-full"></span>
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0.5 bg-white/50 rounded-full"></span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-0.5 bg-white/50 rounded-full"></span>
        </div>
      </div>
    );
  }
  