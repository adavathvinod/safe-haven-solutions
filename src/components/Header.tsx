import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const safetyNetChildren = [
  { label: "Balcony Safety Nets", slug: "balcony-safety-nets" },
  { label: "Building Safety Nets", slug: "building-safety-nets" },
  { label: "Car Parking Safety Nets", slug: "car-parking-safety-nets" },
  { label: "Children Safety Nets", slug: "children-safety-nets" },
  { label: "Construction Safety Nets", slug: "construction-safety-nets" },
  { label: "Duct Area Safety Nets", slug: "duct-area-safety-nets" },
  { label: "Industrial Safety Nets", slug: "industrial-safety-nets" },
  { label: "Swimming Pool Safety Nets", slug: "swimming-pool-safety-nets" },
];

const birdNetChildren = [
  { label: "Anti Bird Nets", slug: "" },
  { label: "Pigeon Safety Nets", slug: "" },
  { label: "Bird Protection Nets", slug: "" },
  { label: "Pigeon & Bird Spikes", slug: "" },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Safety Nets", href: "/#services", children: safetyNetChildren },
  { label: "Bird Nets", href: "/#services", children: birdNetChildren },
  { label: "Sports Nets", href: "/#services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact Us", href: "/#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-md">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex flex-col items-center rounded-lg border-2 border-primary px-3 py-1">
            <span className="text-2xl font-extrabold font-heading text-primary leading-none">
              G<span className="text-secondary">D</span>R
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-primary uppercase">
              Enterprises
            </span>
          </div>
        </Link>

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
                    child.slug ? (
                      <Link
                        key={child.label}
                        to={`/service/${child.slug}`}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {child.label}
                      </Link>
                    ) : (
                      <a
                        key={child.label}
                        href="/#services"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {child.label}
                      </a>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

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
            <div key={item.label}>
              <a
                href={item.href}
                className="block px-6 py-3 text-sm font-semibold text-primary hover:bg-accent transition-colors"
                onClick={() => !item.children && setMobileOpen(false)}
              >
                {item.label}
              </a>
              {item.children && item.children.map((child) => (
                child.slug ? (
                  <Link
                    key={child.label}
                    to={`/service/${child.slug}`}
                    className="block pl-10 pr-6 py-2 text-sm text-muted-foreground hover:bg-accent transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ) : (
                  <a
                    key={child.label}
                    href="/#services"
                    className="block pl-10 pr-6 py-2 text-sm text-muted-foreground hover:bg-accent transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </a>
                )
              ))}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
