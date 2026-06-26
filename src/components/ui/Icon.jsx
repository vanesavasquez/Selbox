// Wrapper de Google Material Symbols (Rounded).
// La hoja de estilo se carga en index.html.
export default function Icon({
  name,
  filled = false,
  weight = 400,
  size,
  className = '',
  style,
  ...rest
}) {
  const fontVariationSettings = `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}`
  return (
    <span
      className={`material-symbols-rounded ${className}`}
      aria-hidden="true"
      style={{
        fontSize: size ? `${size}px` : undefined,
        fontVariationSettings,
        ...style,
      }}
      {...rest}
    >
      {name}
    </span>
  )
}
