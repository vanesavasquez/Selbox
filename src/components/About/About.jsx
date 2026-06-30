import SectionLabel from '../ui/SectionLabel.jsx'
import Highlight from '../ui/Highlight.jsx'
import CheckList from '../ui/CheckList.jsx'
import Reveal from '../ui/Reveal.jsx'
import { ABOUT } from '../../data/content.js'
import aboutImg from '../../assets/media/sobre-nosotros.webp'
import aboutImgMobile from '../../assets/media/sobre-nosotros-mobile.webp'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="nosotros" className={styles.about}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <Reveal>
            <SectionLabel>{ABOUT.label}</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={styles.title}>
              {ABOUT.titleLines[0]}
              <br />
              <Highlight
                text={ABOUT.titleLines[1]}
                word={ABOUT.highlight}
                className={styles.accent}
              />
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className={styles.lead}>{ABOUT.paragraphs[0]}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className={styles.body}>{ABOUT.paragraphs[1]}</p>
          </Reveal>

          <CheckList items={ABOUT.bullets} variant="blue" />
        </div>

        <Reveal className={styles.media} delay={0.1} y={30}>
          <picture>
            <source media="(max-width: 1219px)" srcSet={aboutImgMobile} />
            <img src={aboutImg} alt="Contenedores SelfBox apilados" className={styles.image} />
          </picture>
        </Reveal>
      </div>
    </section>
  )
}
