import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Tecnologías", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "py-4" : "py-5 md:py-6"
      }`}
    >
      <div className="page-container">
        <div
          className={`mx-auto max-w-5xl rounded-full px-4 py-3 transition-all duration-300 md:px-6 ${
            isScrolled
              ? "border border-(--border) bg-white/78 shadow-sm backdrop-blur-md"
              : "border border-transparent bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between">
            <a
              href="#hero"
              className="text-sm font-semibold uppercase tracking-[0.12em] text-(--foreground) transition-colors hover:text-(--accent)"
              onClick={closeMenu}
            >
              Soy Vicky
            </a>

            <nav className="hidden md:block">
              <ul className="flex items-center gap-6 lg:gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              type="button"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-(--border) bg-(--surface) text-(--foreground) md:hidden"
            >
              {isMenuOpen ? (
                <HiOutlineX className="text-xl" />
              ) : (
                <HiOutlineMenuAlt3 className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mx-auto mt-3 max-w-5xl md:hidden">
            <div className="rounded-3xl border border-(--border) bg-(--surface) p-4 shadow-sm">
              <nav>
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className="block rounded-2xl px-4 py-3 text-sm text-(--foreground) transition-colors hover:bg-(--accent-soft)"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
