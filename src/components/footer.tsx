export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Luke Ponga. All Rights Reserved.</p>
        <p className="mt-1">Designed with ♥ in Hamilton, New Zealand</p>
      </div>
    </footer>
  );
}
