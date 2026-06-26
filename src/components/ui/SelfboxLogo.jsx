import logoWhite from '../../assets/media/logo-white.png'
import logoColor from '../../assets/media/logo-color.png'

// Logo SelfBox. variant="white" (sobre fondos oscuros, uso principal del diseño)
// o "color" (sobre fondos claros).
export default function SelfboxLogo({ variant = 'white', className, style }) {
  return (
    <img
      src={variant === 'white' ? logoWhite : logoColor}
      alt="SelfBox · Módulos de guardado"
      className={className}
      style={style}
      width="362"
      height="95"
      decoding="async"
    />
  )
}
