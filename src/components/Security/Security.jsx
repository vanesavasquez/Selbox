import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import SecurityIcon from '../ui/SecurityIcons.jsx'
import Icon from '../ui/Icon.jsx'
import { SECURITY } from '../../data/content.js'
import styles from './Security.module.css'

function Card({ item }) {
  return (
    <div className={styles.card}>
      <SecurityIcon type={item.type} className={styles.icon} />
      <p className={styles.caption}>
        {item.lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < item.lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  )
}

export default function Security() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3800, stopOnInteraction: false })]
  )
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <section id="seguridad" className={styles.security}>
      <h2 className={styles.srOnly}>Seguridad</h2>

      <div className={styles.carousel}>
        <button className={styles.arrow} onClick={scrollPrev} aria-label="Anterior">
          <Icon name="chevron_left" size={40} />
        </button>
        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.embla}>
            {SECURITY.items.map((item) => (
              <div className={styles.slide} key={item.type}>
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
        <button className={styles.arrow} onClick={scrollNext} aria-label="Siguiente">
          <Icon name="chevron_right" size={40} />
        </button>
      </div>
    </section>
  )
}
