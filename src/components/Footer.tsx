
import { ThemeToggle } from "./ThemeToggle";

export function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sreyas S. All rights reserved.
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
