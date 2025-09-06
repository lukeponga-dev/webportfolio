
export function Loader() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="flex items-end justify-center space-x-2">
        <div className="h-4 w-4 rounded-full bg-primary animate-loader-bar" style={{ animationDelay: '0s' }}></div>
        <div className="h-4 w-4 rounded-full bg-primary animate-loader-bar" style={{ animationDelay: '0.15s' }}></div>
        <div className="h-4 w-4 rounded-full bg-primary animate-loader-bar" style={{ animationDelay: '0.3s' }}></div>
      </div>
    </div>
  );
}
