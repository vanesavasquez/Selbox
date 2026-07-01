import logoWhite from '../../assets/media/logo-white.png'

// Logo SelfBox (horizontal, versión blanca para fondos oscuros).
// Se usa en Header (sobre hero oscuro / solid) y Footer (navy).
export default function SelfboxLogo({ className, style }) {
  return (
    <img
      src={logoWhite}
      alt="SelfBox · Módulos de guardado"
      className={className}
      style={style}
      width="9413"
      height="3106"
      decoding="async"
    />
  )
}
