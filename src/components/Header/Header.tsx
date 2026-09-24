import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { pageNavItems } from "../../data/navigation";
import { useLocale } from "../../hooks/useLocale";
import { LanguageToggle } from "../LanguageToggle/LanguageToggle";
import styles from "./Header.module.css";

const NAV_BREAKPOINT = 900;

export function Header() {
  const { copy } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    const onResize = () => {
      if (window.innerWidth > NAV_BREAKPOINT) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <button
        ref={menuButtonRef}
        type="button"
        className={styles.menuButton}
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        aria-label={menuOpen ? copy.nav.closeMenu : copy.nav.menu}
        onClick={() => {
          setMenuOpen((open) => !open);
        }}
      >
        {menuOpen ? (
          <X className={styles.menuIcon} aria-hidden="true" />
        ) : (
          <Menu className={styles.menuIcon} aria-hidden="true" />
        )}
      </button>
      <a className={styles.brand} href="#hero" onClick={closeMenu}>
        {copy.brand.mark}
      </a>
      <nav
        id="primary-nav"
        className={styles.nav}
        data-open={menuOpen}
        aria-label={copy.nav.label}
      >
        <p className={styles.menuTitle}>{copy.brand.product}</p>
        {pageNavItems.map((item) => (
          <a
            key={item.key}
            className={styles.link}
            href={item.href}
            onClick={closeMenu}
          >
            {copy.nav[item.key]}
          </a>
        ))}
      </nav>
      <div className={styles.actions}>
        <LanguageToggle />
      </div>
    </header>
  );
}
