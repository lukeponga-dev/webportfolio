export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Luke Ponga. All Rights Reserved.</p>
        <p className="mt-1">Designed with ♥ in Hamilton, New Zealand</p>
      </div>
    </footer>
  );
}
