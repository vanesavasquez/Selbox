import { motion } from 'framer-motion'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import Highlight from '../ui/Highlight.jsx'
import { HERO } from '../../data/content.js'
import { WHATSAPP_URL } from '../../data/config.js'
import heroDesktop from '../../assets/media/foto-home.png'
import heroMobile from '../../assets/media/foto-home.png'
import styles from './Hero.module.css'

const EASE = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div
        className={styles.bgDesktop}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%), url(${heroDesktop})`
        }}
        aria-hidden="true"
      />
      <div
        className={styles.bgMobile}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0) 100%), url(${heroMobile})`
        }}
        aria-hidden="true"
      />
      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.content}
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.h1
            className={styles.title}
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {HERO.titleLines[0]}
            <br />
            <Highlight
              text={HERO.titleLines[1]}
              word={HERO.highlight}
              className={styles.accent}
            />
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <Button
              href={WHATSAPP_URL}
              size="lg"
              rightIcon={<Icon name="arrow_forward" weight={500} />}
            >
              {HERO.cta}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
