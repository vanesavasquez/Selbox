import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import { WhatsAppIcon } from '../ui/BrandIcons.jsx'
import { CONTACT } from '../../data/content.js'
import { WHATSAPP_URL } from '../../data/config.js'
import bgDesktop from '../../assets/media/foto-contacto.webp'
import bgMobile from '../../assets/media/foto-contacto-mobile.webp'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contacto" className={styles.contact}>
      <picture className={styles.bg}>
        <source media="(max-width: 1023px)" srcSet={bgMobile} />
        <img src={bgDesktop} alt="" aria-hidden="true" />
      </picture>
      <span className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.copy}>
          <h2 className={styles.title}>{CONTACT.title}</h2>
          <p className={styles.subtitle}>{CONTACT.subtitle}</p>
        </Reveal>

        <Reveal delay={0.12}>
          <Button
            href={WHATSAPP_URL}
            size="lg"
            className={styles.cta}
            leftIcon={<WhatsAppIcon size={22} />}
          >
            <span className={styles.ctaFull}>{CONTACT.cta}</span>
            <span className={styles.ctaShort}>{CONTACT.ctaShort}</span>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
