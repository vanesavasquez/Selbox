import styles from './SectionLabel.module.css'

// Eyebrow azul en mayúsculas (SOBRE NOSOTROS, SEGURIDAD, SERVICIOS).
export default function SectionLabel({ children, light = false, className = '' }) {
  return (
    <span className={`${styles.label} ${light ? styles.light : ''} ${className}`}>
      {children}
    </span>
  )
}
