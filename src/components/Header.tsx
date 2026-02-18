import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  {
    label: "Safety Nets",
    href: "#services",
    children: [
      "Balcony Safety Nets",
      "Building Safety Nets",
      "Car Parking Safety Nets",
      "Children Safety Nets",
      "Construction Safety Nets",
      "Duct Area Safety Nets",
      "Industrial Safety Nets",
      "Swimming Pool Safety Nets",
    ],
  },
  {
    label: "Bird Nets",
    href: "#services",
    children: [
      "Anti Bird Nets",
      "Pigeon Safety Nets",
      "Bird Protection Nets",
      "Pigeon & Bird Spikes",
    ],
  },
  { label: "Sports Nets", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-md">
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex flex-col items-center rounded-lg border-2 border-primary px-3 py-1">
            <span className="text-2xl font-extrabold font-heading text-primary leading-none">
              G<span className="text-secondary">D</span>R
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-primary uppercase">
              Enterprises
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold font-heading text-primary hover:text-secondary transition-colors"
              >
                {item.label}
                {item.children && <ChevronDown className="w-3 h-3" />}
              </a>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-background shadow-lg rounded-md py-2 min-w-[220px] border border-border z-50">
                  {item.children.map((child) => (
                    <a
                      key={child}
                      href="#services"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Phone + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:9100579116"
            className="hidden md:flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            9100579116
          </a>
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-background pb-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-6 py-3 text-sm font-semibold text-primary hover:bg-accent transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
