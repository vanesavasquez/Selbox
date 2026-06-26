// Iconos de seguridad recreados como SVG a medida (line-art) dentro de un
// hexágono "pointy-top", replicando el diseño del PDF.
// viewBox 120x132 · hexágono en gris claro · glifo en blanco (currentColor).

const HEX = 'M60 6 L112 36 L112 96 L60 126 L8 96 L8 36 Z'

function Trolley() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* manija curva */}
      <path d="M41 84 L41 55 Q41 51 37 51 L30 51" />
      {/* plataforma del carro */}
      <rect x="38" y="83" width="50" height="5" rx="1.5" />
      {/* caja izquierda (con etiqueta) */}
      <rect x="44" y="60" width="21" height="23" />
      <rect x="49" y="73" width="9" height="5" />
      {/* caja alta detrás */}
      <rect x="50" y="46" width="17" height="16" />
      {/* caja derecha */}
      <rect x="65" y="57" width="18" height="26" />
      <path d="M69 67 L75 67" />
      {/* ruedas con cubo en X */}
      <circle cx="51" cy="97" r="6" />
      <path d="M48.5 94.5 L53.5 99.5 M53.5 94.5 L48.5 99.5" />
      <circle cx="76" cy="97" r="6" />
      <path d="M73.5 94.5 L78.5 99.5 M78.5 94.5 L73.5 99.5" />
    </g>
  )
}

function Camera() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <g transform="rotate(-15 60 64)">
        {/* cuerpo */}
        <rect x="40" y="48" width="36" height="17" rx="8.5" />
        {/* visera */}
        <path d="M46 48 Q44 44 49 43 L72 43" />
        {/* lente */}
        <circle cx="46" cy="56.5" r="6.2" />
        <circle cx="46" cy="56.5" r="2.4" />
        {/* brazo + rótula + soporte de pared */}
        <path d="M72 65 L80 71" />
        <circle cx="76.5" cy="68" r="2" />
        <rect x="80" y="60" width="5" height="16" rx="2" />
      </g>
    </g>
  )
}

function Alarm() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* piso */}
      <path d="M36 90 L84 90" />
      {/* base */}
      <rect x="49" y="79" width="22" height="11" />
      {/* domo */}
      <path d="M52 79 L52 71 A8 8 0 0 1 68 71 L68 79" />
      {/* rayos */}
      <path d="M60 52 L60 44" />
      <path d="M47 58 L41 52" />
      <path d="M73 58 L79 52" />
      <path d="M43 71 L35 71" />
      <path d="M77 71 L85 71" />
    </g>
  )
}

function Panel() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* panel */}
      <rect x="40" y="50" width="44" height="40" rx="2" />
      {/* señal wifi */}
      <path d="M55 47 Q62 40 69 47" />
      <path d="M58 49.5 Q62 45 66 49.5" />
      <circle cx="62" cy="50.5" r="1.4" />
      {/* casa enmarcada */}
      <rect x="44" y="56" width="20" height="20" />
      <path d="M48 67 L54 61 L60 67" />
      <path d="M50.5 65 L50.5 72 L57.5 72 L57.5 65" />
      {/* display + teclado */}
      <rect x="68" y="55" width="13" height="5" />
      <circle cx="69.5" cy="66" r="1.8" />
      <circle cx="74.5" cy="66" r="1.8" />
      <circle cx="79.5" cy="66" r="1.8" />
      <circle cx="69.5" cy="72" r="1.8" />
      <circle cx="74.5" cy="72" r="1.8" />
      <circle cx="79.5" cy="72" r="1.8" />
      {/* botones inferiores */}
      <rect x="44" y="81" width="5" height="5" />
      <rect x="51" y="81" width="5" height="5" />
      <rect x="58" y="81" width="5" height="5" />
      {/* ojo (esquina inferior derecha) */}
      <path d="M67 84 Q76 75 85 84 Q76 93 67 84 Z" />
      <circle cx="76" cy="84" r="4" />
      <circle cx="76" cy="84" r="1.3" />
    </g>
  )
}

const GLYPHS = { trolley: Trolley, camera: Camera, alarm: Alarm, panel: Panel }

export default function SecurityIcon({ type, className }) {
  const Glyph = GLYPHS[type] || Trolley
  return (
    <svg viewBox="0 0 120 132" className={className} role="img" aria-hidden="true">
      <path d={HEX} fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" />
      <Glyph />
    </svg>
  )
}
