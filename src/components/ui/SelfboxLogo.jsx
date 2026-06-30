import logoHorizontal from '../../assets/media/logo-horizontal.png'

// Logo SelfBox (horizontal). Uso principal en header y footer.
export default function SelfboxLogo({ className, style }) {
  return (
    <img
      src={logoHorizontal}
      alt="SelfBox · Módulos de guardado"
      className={className}
      style={style}
      width="2876"
      height="751"
      decoding="async"
    />
  )
}
