import { SERVICES } from '../../data/content.js'
import styles from './Services.module.css'

// Cotas naranjas (6M / 2,4M / 2,6M) superpuestas al contenedor, como en el PDF.
export default function Dimensions() {
  const { dims } = SERVICES
  return (
    <svg className={styles.dims} viewBox="0 0 797 660" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <marker id="ar" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M1 1 L6 4 L1 7" fill="none" stroke="#b85008" strokeWidth="1.4" />
        </marker>
      </defs>
      <g stroke="#b85008" strokeWidth="2" markerStart="url(#ar)" markerEnd="url(#ar)">
        {/* ancho (6 M) - perspectiva frontal */}
        <line x1="90" y1="608" x2="620" y2="608" className={styles.dimLineWidth} />
        {/* profundidad (2,4 M) - diagonal derecha */}
        <line x1="632" y1="602" x2="750" y2="556" className={styles.dimLineDepth} />
        {/* alto (2,6 M) - vertical derecho */}
        <line x1="775" y1="150" x2="775" y2="545" className={styles.dimLineHeight} />
      </g>
      <g fill="#b85008" fontFamily="var(--font-body)" fontWeight="700">
        <text x="350" y="640" textAnchor="middle" fontSize="26" className={styles.dimLabelWidth}>{dims.width}</text>
        <text x="720" y="598" textAnchor="start" fontSize="26" className={styles.dimLabelDepth}>{dims.depth}</text>
        <text x="788" y="350" textAnchor="start" fontSize="26" className={styles.dimLabelHeight}>{dims.height}</text>
      </g>
    </svg>
  )
}
