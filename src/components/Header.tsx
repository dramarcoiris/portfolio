import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

type NavLinkItem =
  | { label: string; type: "route"; href: string }
  | { label: string; type: "anchor"; href: string };

const navLinks: NavLinkItem[] = [
  { label: "Trayectoria", type: "route", href: "/trayectoria" },
  { label: "Tecnologías", type: "anchor", href: "/#skills" },
  { label: "Proyectos", type: "anchor", href: "/#projects" },
  { label: "Contacto", type: "anchor", href: "/#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const isLanding = location.pathname === "/";

  // Control del scroll de la página para la visibilidad del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  // Control del scroll
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    closeMenu();

    const targetId = href.replace("/#", "");
    const element = document.getElementById(targetId);

    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const showDesktopHeader = !isLanding || isScrolled;
  const showMobileHeader = true;

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        showDesktopHeader ? "py-4 md:py-5" : "py-4 md:py-5"
      }`}
    >
      <div className="page-container">
        <div
          className={`
            mx-auto max-w-5xl rounded-full px-4 py-3 transition-all duration-300 md:px-6
            ${
              showDesktopHeader
                ? "border border-(--border) bg-white/78 shadow-sm backdrop-blur-md opacity-100"
                : "border border-transparent bg-transparent opacity-100 md:opacity-0 md:pointer-events-none md:shadow-none md:backdrop-blur-none"
            }
          `}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center min-w-30 sm:min-w-24">
              <Link
                to="/"
                className={`
                  inline-flex items-center transition-opacity duration-300 hover:opacity-80
                  ${showDesktopHeader ? "opacity-100" : "opacity-100 md:opacity-0 md:pointer-events-none"}
                `}
                onClick={closeMenu}
                aria-label="Ir a la página de inicio"
                tabIndex={showDesktopHeader ? 0 : -1}
              >
                <img
                  src="/logo.svg"
                  alt="SOYVICKY"
                  className="block h-4.5 w-auto"
                />
              </Link>
            </div>

            <nav
              className={`
                hidden md:block transition-opacity duration-300
                ${showDesktopHeader ? "opacity-100" : "opacity-0 pointer-events-none"}
              `}
              aria-hidden={!showDesktopHeader}
            >
              <ul className="flex items-center gap-6 lg:gap-8">
                {navLinks.map((link) => (
                  <li key={`${link.type}-${link.href}`}>
                    <Link
                      to={link.href}
                      className="nav-link"
                      onClick={(e) => {
                        if (link.type === "anchor") {
                          handleAnchorClick(e, link.href);
                        } else {
                          closeMenu();
                        }
                      }}
                      tabIndex={showDesktopHeader ? 0 : -1}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Botón móvil */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`
                flex h-10 w-10 items-center justify-center rounded-full
                border border-(--border) bg-(--surface) text-(--foreground)
                md:hidden
                ${showMobileHeader ? "opacity-100" : "opacity-0 pointer-events-none"}
              `}
            >
              {isMenuOpen ? (
                <HiOutlineX className="text-xl" />
              ) : (
                <HiOutlineMenuAlt3 className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="mx-auto mt-3 max-w-5xl md:hidden">
            <div className="rounded-3xl border border-(--border) bg-(--surface) p-4 shadow-sm">
              <nav>
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={`${link.type}-${link.href}`}>
                      <Link
                        to={link.href}
                        onClick={(e) => {
                          if (link.type === "anchor") {
                            handleAnchorClick(e, link.href);
                          } else {
                            closeMenu();
                          }
                        }}
                        className="block rounded-2xl px-4 py-3 text-sm text-(--foreground) transition-colors hover:bg-(--accent-soft)"
                      >
                        {link.label}
                      </Link>
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
