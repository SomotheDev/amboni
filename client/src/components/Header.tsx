import { Link } from "wouter";
import { APP_TITLE } from "@/const";
import { trpc } from "@/lib/trpc";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: categories } = trpc.categories.list.useQuery();

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      {/* Top bar with logo */}
      <div className="border-b border-border">
        <div className="container py-4">
          <Link href="/">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center cursor-pointer hover:opacity-80 transition-opacity">
              {APP_TITLE}
            </h1>
          </Link>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-background">
        <div className="container">
          <div className="flex items-center justify-between py-3">
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-6 flex-1">
              {categories?.slice(0, 6).map((category) => (
                <Link key={category.id} href={`/category/${category.slug}`}>
                  <span className="text-sm font-medium uppercase tracking-wide hover:text-muted-foreground transition-colors cursor-pointer">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Search icon */}
            <div className="hidden md:block">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center justify-between w-full">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border py-4">
              <div className="flex flex-col space-y-3">
                {categories?.map((category) => (
                  <Link key={category.id} href={`/category/${category.slug}`}>
                    <span
                      className="text-sm font-medium uppercase tracking-wide hover:text-muted-foreground transition-colors py-2 cursor-pointer block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
