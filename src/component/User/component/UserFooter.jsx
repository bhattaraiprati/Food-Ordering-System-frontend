import React from 'react'
import {Facebook, Instagram, Twitter,} from 'lucide-react';

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
            <p className="text-muted-foreground text-gray-900 text-sm mt-2">
              Discover exceptional dining experiences with our curated selection
              of restaurants.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/featured"
                  className="text-sm text-gray-900 text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  Featured Restaurants
                </a>
              </li>
              <li>
                <a
                  href="/explore"
                  className="text-sm text-gray-900 text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  Explore Cuisines
                </a>
              </li>
              <li>
                <a
                  href="/map"
                  className="text-sm text-gray-900 text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  Restaurant Map
                </a>
              </li>
              <li>
                <a
                  href="/new"
                  className="text-sm text-gray-900 text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  New Additions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-sm text-gray-900 text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-gray-900 text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-sm text-gray-900 text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-sm text-gray-900 text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/terms"
                  className="text-sm text-gray-900 text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-gray-900 text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="text-sm text-gray-900 text-muted-foreground hover:text-primary transition-colors"
                  style={{ hoverColor: "#ffb700" }}
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-900 text-muted-foreground">
            © {new Date().getFullYear()} Foodie Feature Finder. All rights
            reserved.
          </p>

          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-muted-foreground rounded-full w-7 h-7  hover:bg-[#fcdb86] transition-colors"
              style={{ hoverColor: "#ffb700" }}
            >
              <span className="sr-only text-gray-900">Facebook</span>

              <Facebook color="#8334f9" />
            </a>
            <a
              href="#"
              className="text-muted-foreground align-center rounded-full w-7 h-7  hover:bg-[#fcdb86] transition-colors"
              style={{ hoverColor: "#ffb700" }}
            >
              <span className="sr-only">Twitter</span>

              <Twitter color="#8334f9" />
            </a>
            <a
              href="#"
              className="text-muted-foreground rounded-full w-7 h-7  hover:bg-[#fcdb86] transition-colors"
              style={{ hoverColor: "#ffb700" }}
            >
              <span className="sr-only">Instagram</span>
              <Instagram color="#8334f9" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default UserFooter;