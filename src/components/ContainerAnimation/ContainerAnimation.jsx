import { useEffect, useRef } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import styles from './ContainerAnimation.module.css'

// Carga los frames del contenedor (vacío -> lleno) procesados como webp.
const frameModules = import.meta.glob('../../assets/media/container/*.webp', {
  eager: true,
  import: 'default',
})
const FRAMES = Object.keys(frameModules)
  .sort()
  .map((k) => frameModules[k])

const FPS = 7
const HOLD_MS = 1400 // pausa con el contenedor lleno antes de reiniciar el loop

export default function ContainerAnimation() {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const inView = useInView(wrapRef, { amount: 0.4 })
  const reduce = useReducedMotion()

  // Precarga de imágenes
  useEffect(() => {
    let cancelled = false
    const imgs = FRAMES.map((src) => {
      const img = new Image()
      img.src = src
      return img
    })
    imagesRef.current = imgs
    Promise.all(
      imgs.map(
        (img) =>
          img.decode?.().catch(() => {}) ??
          new Promise((res) => {
            img.onload = res
            img.onerror = res
          })
      )
    ).then(() => {
      if (cancelled) return
      const c = canvasRef.current
      const first = imgs[0]
      if (c && first.naturalWidth) {
        c.width = first.naturalWidth
        c.height = first.naturalHeight
        draw(reduce ? imgs.length - 1 : 0)
      }
    })
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const draw = (i) => {
    const c = canvasRef.current
    const img = imagesRef.current[i]
    if (!c || !img) return
    const ctx = c.getContext('2d')
    ctx.clearRect(0, 0, c.width, c.height)
    ctx.drawImage(img, 0, 0, c.width, c.height)
  }

  // Bucle de animación cuando está en viewport
  useEffect(() => {
    if (reduce || !inView) return
    let raf
    let frame = 0
    let last = performance.now()
    let holding = false
    let holdStart = 0
    const interval = 1000 / FPS

    const loop = (now) => {
      if (holding) {
        if (now - holdStart >= HOLD_MS) {
          holding = false
          frame = 0
          last = now
          draw(0)
        }
      } else if (now - last >= interval) {
        last = now
        draw(frame)
        if (frame >= FRAMES.length - 1) {
          holding = true
          holdStart = now
        } else {
          frame += 1
        }
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduce])

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <canvas ref={canvasRef} className={styles.canvas} aria-label="Contenedor SelfBox llenándose de objetos" role="img" />
    </div>
  )
}
