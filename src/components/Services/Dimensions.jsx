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
        {/* ancho (6 M) - borde inferior frontal */}
        <line x1="90" y1="606" x2="610" y2="606" />
        {/* profundidad (2,4 M) - diagonal inferior derecha */}
        <line x1="628" y1="600" x2="742" y2="558" />
        {/* alto (2,6 M) - lateral derecho */}
        <line x1="775" y1="150" x2="775" y2="545" />
      </g>
      <g fill="#b85008" fontFamily="var(--font-body)" fontWeight="700">
        <text x="350" y="640" textAnchor="middle" fontSize="26">{dims.width}</text>
        <text x="712" y="595" textAnchor="start" fontSize="26">{dims.depth}</text>
        <text x="788" y="350" textAnchor="start" fontSize="26">{dims.height}</text>
      </g>
    </svg>
  )
}
