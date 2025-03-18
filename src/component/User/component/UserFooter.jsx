import React from 'react'

const UserFooter = () => {

  return (
    <footer className="bg-secondary/30 border-t border-border/50 py-16">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <a href="/" className="text-xl font-medium tracking-tight">
              <span
                className="text-xs font-semibold tracking-widest uppercase block"
                style={{ color: "#ffb700" }}
              >
                Foodie
              </span>
              Feature Finder
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              Discover exceptional dining experiences with our curated selection
              of restaurants.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/featured"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  Featured Restaurants
                </a>
              </li>
              <li>
                <a
                  href="/explore"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  Explore Cuisines
                </a>
              </li>
              <li>
                <a
                  href="/map"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  Restaurant Map
                </a>
              </li>
              <li>
                <a
                  href="/new"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  New Additions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Foodie Feature Finder. All rights
            reserved.
          </p>

          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              style={{ hoverColor: "#ffb700" }}
            >
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              style={{ hoverColor: "#ffb700" }}
            >
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              style={{ hoverColor: "#ffb700" }}
            >
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default UserFooter;