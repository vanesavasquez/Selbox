import SelfboxLogo from '../ui/SelfboxLogo.jsx'
import Icon from '../ui/Icon.jsx'
import { WhatsAppIcon, InstagramIcon } from '../ui/BrandIcons.jsx'
import { FOOTER } from '../../data/content.js'
import { ADDRESS, MAPS_URL, WHATSAPP_URL, INSTAGRAM_URL } from '../../data/config.js'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <SelfboxLogo className={styles.logo} />

        <a className={styles.where} href={MAPS_URL} target="_blank" rel="noopener noreferrer">
          <span className={styles.pin}>
            <Icon name="location_on" filled size={22} />
          </span>
          <span className={styles.whereText}>
            <strong>{FOOTER.whereTitle}</strong>
            <span className={styles.address}>{ADDRESS}</span>
          </span>
        </a>

        <div className={styles.social}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <WhatsAppIcon size={26} />
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon size={26} />
          </a>
        </div>
      </div>
    </footer>
  )
}
