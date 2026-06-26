import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import styles from './CheckList.module.css'

// Lista con check_circle azul (Google Material Symbols) + texto.
export default function CheckList({ items, size = 'md', stagger = true }) {
  return (
    <ul className={`${styles.list} ${styles[size]}`}>
      {items.map((text, i) => (
        <Reveal as="li" key={text} className={styles.item} delay={stagger ? i * 0.08 : 0}>
          <Icon name="check_circle" filled className={styles.check} />
          <span>{text}</span>
        </Reveal>
      ))}
    </ul>
  )
}
