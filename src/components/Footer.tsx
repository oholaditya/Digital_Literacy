import { Sparkles, Mail, Facebook, Twitter, Linkedin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-accent to-secondary rounded-xl flex items-center justify-center shadow-md">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold gradient-text leading-none">Women's Digital</span>
                <span className="text-xs text-muted-foreground leading-none">Literacy Project</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering women with essential digital skills and technological literacy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>info@digitalliteracy.org</span>
            </div>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1 mb-2">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for Women's Empowerment
            </p>
            <p>© {new Date().getFullYear()} CEP Project. All rights reserved.</p>
          </div>
          
          {/* References & Credits */}
          <div className="text-center text-xs text-muted-foreground space-y-1">
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
