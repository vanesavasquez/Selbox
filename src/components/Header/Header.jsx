import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SelfboxLogo from '../ui/SelfboxLogo.jsx'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import { NAV_LINKS } from '../../data/content.js'
import { useScroll } from '../../hooks/useScroll.js'
import styles from './Header.module.css'

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

export default function Header() {
  const { scrolled, activeId } = useScroll(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)

  // Bloquea el scroll del body cuando el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`${styles.header} ${scrolled || menuOpen ? styles.solid : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logoLink} aria-label="SelfBox - inicio">
          <SelfboxLogo className={styles.logo} />
        </a>

        {/* Nav desktop */}
        <nav className={styles.nav} aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${styles.navLink} ${activeId === link.id ? styles.active : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href="#contacto" size="lg" className={styles.cta}>
          RESERVÁ TU BOX
        </Button>

        {/* Botón hamburguesa (mobile) */}
        <button
          className={styles.burger}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={32} />
        </button>
      </div>

      {/* Menú overlay mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className={styles.mobileMenu}
            aria-label="Principal mobile"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`${styles.mobileLink} ${activeId === link.id ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#contacto"
              className={styles.mobileCta}
              onClick={() => setMenuOpen(false)}
            >
              RESERVÁ TU BOX
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
