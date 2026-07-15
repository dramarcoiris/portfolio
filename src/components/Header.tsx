import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

type NavLinkItem =
  | { label: string; type: "route"; href: string }
  | { label: string; type: "anchor"; href: string };

const navLinks: NavLinkItem[] = [
  { label: "Trayectoria", type: "route", href: "/trayectoria" },
  { label: "Proyectos", type: "route", href: "/proyectos" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const isLanding = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const getLinkHref = (link: NavLinkItem) => {
    if (link.type === "route") return link.href;
    return isLanding ? link.href : `/${link.href}`;
  };

  // En desktop:
  // - landing arriba del todo => header oculto
  // - landing con scroll => header visible
  // - páginas internas => header visible siempre
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
            <div className="flex items-center min-w-19.5 sm:min-w-24">
              <Link
                to="/"
                className={`
                  hidden md:inline-flex items-center transition-opacity duration-300 hover:opacity-80
                  ${showDesktopHeader ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
                onClick={closeMenu}
                aria-label="Ir a la página de inicio"
                tabIndex={showDesktopHeader ? 0 : -1}
              >
                <img
                  src="/logo.svg"
                  alt="SOYVICKY"
                  className="block h-4 w-auto sm:h-5"
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
                      to={getLinkHref(link)}
                      className="nav-link"
                      onClick={closeMenu}
                      tabIndex={showDesktopHeader ? 0 : -1}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Botón móvil: visible siempre */}
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

        {isMenuOpen && (
          <div className="mx-auto mt-3 max-w-5xl md:hidden">
            <div className="rounded-3xl border border-(--border) bg-(--surface) p-4 shadow-sm">
              <nav>
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={`${link.type}-${link.href}`}>
                      <Link
                        to={getLinkHref(link)}
                        onClick={closeMenu}
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
