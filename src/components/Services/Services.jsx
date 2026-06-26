import SectionLabel from '../ui/SectionLabel.jsx'
import Highlight from '../ui/Highlight.jsx'
import CheckList from '../ui/CheckList.jsx'
import Reveal from '../ui/Reveal.jsx'
import ContainerAnimation from '../ContainerAnimation/ContainerAnimation.jsx'
import Dimensions from './Dimensions.jsx'
import { SERVICES } from '../../data/content.js'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="servicios" className={styles.services}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <Reveal>
            <SectionLabel>{SERVICES.label}</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={styles.title}>
              <Highlight
                text={SERVICES.titleLines[0]}
                word={SERVICES.highlight}
                className={styles.accent}
              />
              <br />
              {SERVICES.titleLines[1]}
            </h2>
          </Reveal>

          <CheckList items={SERVICES.bullets} />

          <Reveal delay={0.1} className={styles.measures}>
            <strong className={styles.measuresTitle}>{SERVICES.measures.title}</strong>
            <ul className={styles.measuresList}>
              {SERVICES.measures.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className={styles.media} delay={0.1} y={30}>
          <div className={styles.mediaInner}>
            <ContainerAnimation />
            <Dimensions />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
