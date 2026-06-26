import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

// Wrapper de aparición al hacer scroll (fade + leve desplazamiento).
// Respeta prefers-reduced-motion.
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 26,
  duration = 0.6,
  once = true,
  className,
  style,
  ...rest
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: reduce ? 0 : duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
