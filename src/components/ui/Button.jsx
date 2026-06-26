import styles from './Button.module.css'

// Botón / enlace con estilo pill. Si recibe `href` renderiza <a>.
export default function Button({
  children,
  href,
  variant = 'accent', // accent | navy
  size = 'md', // md | lg | sm
  leftIcon,
  rightIcon,
  className = '',
  ...rest
}) {
  const cls = [styles.btn, styles[variant], styles[size], className].filter(Boolean).join(' ')
  const inner = (
    <>
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <span className={styles.label}>{children}</span>
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </>
  )
  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {inner}
      </a>
    )
  }
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  )
}
