import { Link } from "wouter";
import { APP_TITLE } from "@/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-foreground mt-16 bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">{APP_TITLE}</h3>
            <p className="text-sm text-muted-foreground">
              East Africa's premier source for news, analysis, and insights on Tanzania, Kenya, Uganda, Rwanda, and the broader region.
            </p>
          </div>

          {/* Sections */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-4">Sections</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/category/tanzania">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">Tanzania</a>
                </Link>
              </li>
              <li>
                <Link href="/category/business">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">Business</a>
                </Link>
              </li>
              <li>
                <Link href="/category/politics">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">Politics</a>
                </Link>
              </li>
              <li>
                <Link href="/category/technology">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">Technology</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-4">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Advertise</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {APP_TITLE}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
