# agents.md — SelfBox Landing Page

Guía de referencia completa para agentes que trabajen en este proyecto.
Cubre stack, estructura, decisiones de diseño, y convenciones de código.

---

## 1. ¿Qué es esto?

Landing page **100% estática** de **SelfBox** (alquiler de módulos de guardado en contenedores,
Gualeguaychú, Entre Ríos, Argentina). Una sola página con scroll vertical. El diseño fue
replicado píxel a píxel desde mockups en PDF (PC 1366×2943, mobile 360×2655).

Deploy → Hostinger (Apache). Sin backend. Todos los CTAs van a WhatsApp (`wa.me`).

---

## 2. Stack

| Herramienta | Versión | Rol |
|---|---|---|
| Vite | 5 | Build tool (`base: './'` para rutas relativas) |
| React | 18 | UI |
| CSS Modules | — | Estilos escopados por componente |
| Framer Motion | 11 | Reveal al scroll, AnimatePresence (menú mobile) |
| Embla Carousel | 8 | Carrusel de seguridad en mobile (swipe + flechas) |
| embla-carousel-autoplay | 8 | Plugin de autoplay para Embla |

Sin TypeScript. Sin Tailwind. Sin CSS-in-JS. Sin router (una sola página).

```
npm install
npm run dev      # localhost:5173
npm run build    # → dist/
npm run preview  # sirve dist/ localmente
```

---

## 3. Estructura de archivos

```
selfbox-landing/
├── index.html                  # lang="es", meta SEO, favicon, Material Symbols
├── vite.config.js              # base: './', assetsInlineLimit: 0
├── package.json
├── public/
│   ├── favicon.png             # copia de logo-cuadrado.png
│   └── .htaccess               # gzip + caché 1 año para assets, no-cache para HTML
├── src/
│   ├── main.jsx
│   ├── App.jsx                 # Header + Hero + About + Security + Services + Contact + Footer
│   ├── styles/
│   │   ├── variables.css       # tokens CSS (paleta, tipografía, layout, animación)
│   │   └── global.css          # reset, scroll-behavior, .container, prefers-reduced-motion
│   ├── data/
│   │   ├── config.js           # ← PLACEHOLDERS de contacto (WhatsApp, Instagram)
│   │   └── content.js          # todos los textos del sitio
│   ├── hooks/
│   │   ├── useScroll.js        # scrolled (header sticky) + activeId (scrollspy)
│   │   └── useMediaQuery.js    # matchMedia reactivo
│   ├── components/
│   │   ├── Header/             # Header.jsx + .module.css
│   │   ├── Hero/               # Hero.jsx + .module.css
│   │   ├── About/              # About.jsx + .module.css
│   │   ├── Security/           # Security.jsx + .module.css
│   │   ├── Services/           # Services.jsx + .module.css + Dimensions.jsx
│   │   ├── Contact/            # Contact.jsx + .module.css
│   │   ├── Footer/             # Footer.jsx + .module.css
│   │   ├── ContainerAnimation/ # ContainerAnimation.jsx + .module.css
│   │   └── ui/
│   │       ├── Button.jsx/.module.css
│   │       ├── CheckList.jsx/.module.css
│   │       ├── Reveal.jsx
│   │       ├── Icon.jsx
│   │       ├── SectionLabel.jsx/.module.css
│   │       ├── SecurityIcons.jsx  # SVG custom (ver sección 8)
│   │       ├── SelfboxLogo.jsx
│   │       ├── Highlight.jsx
│   │       └── BrandIcons.jsx     # WhatsAppIcon, InstagramIcon (SVG oficiales)
│   └── assets/
│       ├── fonts/
│       │   ├── Raleway.woff2      # variable font (100-900), 75.5KB subsetted
│       │   └── Montserrat.woff2   # 17.3KB subsetted (solo glyphs usados en el sitio)
│       └── media/
│           ├── foto-home.webp           # 34KB (PC)
│           ├── foto-home-mobile.webp    # (mobile)
│           ├── sobre-nosotros.webp      # (PC)
│           ├── sobre-nosotros-mobile.webp
│           ├── foto-contacto.webp       # (PC)
│           ├── foto-contacto-mobile.webp
│           ├── logo-white.png           # logo recoloreado para fondos oscuros
│           ├── logo-color.png           # logo original para fondos claros
│           └── container/
│               └── frame_00.webp … frame_23.webp  # 24 frames RGBA, 797×590px
```

---

## 4. Tokens de diseño (`src/styles/variables.css`)

```css
/* Paleta */
--c-blue: #0054a9;         /* primario: labels, highlights de título */
--c-blue-accent: #1a62d0;  /* acento: botones, checks, recuadro medidas */
--c-blue-dark: #003f80;    /* hover de botones */
--c-navy: #0e141f;         /* fondos oscuros (hero overlay, seguridad, footer) */
--c-ink: #262626;          /* texto sobre blanco */
--c-gray: #6c7480;         /* texto secundario */
--c-gray-soft: #b2b3b2;    /* gris claro (subtítulos sobre oscuro) */
--c-white: #ffffff;
--c-bg: #ffffff;

/* Tipografía */
--font-body: 'Raleway', system-ui, sans-serif;        /* todo el sitio */
--font-alt: 'Montserrat', var(--font-body);           /* botón WhatsApp + dirección footer */

/* Layout */
--maxw: 100vw;              /* sin límite de px; el .container usa width: 90% */
--pad-x: 5vw;               /* usado solo en el mobile menu overlay */
--header-h: 5.5rem;         /* ≈ 88px */
--radius: 0.875rem;
--radius-pill: 999px;
--radius-rect: 0.5rem;      /* botones semi-rectangulares */

/* Animación */
--ease: cubic-bezier(0.22, 1, 0.36, 1);
--shadow-btn: 0 8px 22px rgba(26, 98, 208, 0.35);
```

Breakpoint principal: `1024px` (mobile-first). Las secciones tienen `id` para el scrollspy.

El `.container` usa `width: 90%; max-width: 100%; margin-inline: auto;` — el contenido ocupa siempre el 90 % del viewport sin padding lateral fijo.

---

## 5. Datos de contacto (`src/data/config.js`)

**Contiene placeholders — la propietaria debe reemplazarlos antes del deploy.**

| Constante | Placeholder actual | Qué es |
|---|---|---|
| `WHATSAPP_NUMBER` | `'5493446000000'` | Número con código de país, solo dígitos |
| `WHATSAPP_MESSAGE` | mensaje de reserva | Se autocompleta al abrir WhatsApp |
| `INSTAGRAM_URL` | `'https://instagram.com/selfbox'` | URL del perfil real |
| `ADDRESS` | `'Boulevard Montana 1050, Gualeguaychú, Entre Ríos'` | Dirección física |
| `MAPS_URL` | generado desde ADDRESS | Link a Google Maps |
| `WHATSAPP_URL` | generado desde NUMBER + MESSAGE | CTA completo `wa.me/...` |

Todos los CTAs del sitio importan `WHATSAPP_URL` desde aquí.

---

## 6. Textos (`src/data/content.js`)

Exporta: `NAV_LINKS`, `HERO`, `ABOUT`, `SECURITY`, `SERVICES`, `CONTACT`, `FOOTER`.

Los textos tienen acentos correctos en español (ó, é, ú, ñ, etc.). No editar el HTML
directamente — siempre editar `content.js`.

---

## 7. Secciones y layout

### Header
- `position: fixed`, `z-index: 100`, `height: var(--header-h)` (5.5rem ≈ 88px).
- **Desktop:** transparente → `rgba(14,20,31,0.96)` con `backdrop-filter: blur(8px)` cuando `scrolled`.
- Scrollspy vía `useScroll()`: compara `activeId` con cada `NAV_LINKS[i].id` para el underline activo.
- Logo: `height: auto; max-height: 3.5rem` (tamaño natural sin recorte).
- Nav links: `font-size: 1.5rem`.
- CTA "RESERVÁ TU BOX" → `<Button size="lg">` (semi-rectangular).
- **Mobile:** hamburguesa (`menu`/`close` icon) + overlay animado con `AnimatePresence`.
  Bloquea el scroll del body cuando está abierto (`document.body.style.overflow`).

### Hero (`id="home"`)
- `min-height: 100vh` en **ambos** viewports.
- **Desktop:** `background-image` + gradiente overlay oscuro. Entrada escalonada Framer Motion.
- **Mobile:** foto enmarcada (border-radius 1rem, aspect-ratio 16/12) sobre fondo navy, luego texto.
- Título: `font-size: 2.5rem`. Subtítulo: `font-size: 1.8rem` (mobile: 1.3rem).
- Usa `<picture>` con `srcSet` para `foto-home-mobile.webp` en mobile.

### About (`id="nosotros"`)
- `min-height: 100vh`. CSS Grid: **`0.4fr / 0.6fr`** en desktop (imagen ocupa el 60 %).
- Título: `clamp(1.9rem, 2.8vw, 2.6rem)`. Párrafos: `clamp(1.1rem, 1.4vw, 1.3rem)`.

### Security (`id="seguridad"`)
- Fondo navy. `min-height: 50vh`.
- **Embla carousel en todos los viewports** (sin bifurcación desktop/mobile).
  Desktop: `flex: 0 0 25%` → 4 ítems visibles. Mobile: `flex: 0 0 100%` → 1 ítem.
- Autoplay 3800ms, loop, flechas `chevron_left`/`chevron_right` a ambos lados.
- Íconos SVG: `width: clamp(9rem, 14vw, 12rem)`. Caption: `font-size: 1.3rem`.

### Services (`id="servicios"`)
- `min-height: 100vh`. Grid desktop: **`0.3fr / 0.7fr`** (animación ocupa el 70 %).
- Columna texto: `<CheckList>` de 5 ítems + recuadro azul con medidas.
- Columna media: `<ContainerAnimation>` (canvas) + `<Dimensions>` (SVG overlay absoluto).

### Contact (`id="contacto"`)
- `min-height: 63vh` (= 70 % de 90 vh). `<picture>` como fondo + overlay de gradiente.
- Título: `clamp(1.9rem, 3vw, 2.8rem)`. Subtítulo: `clamp(1.2rem, 1.8vw, 1.7rem)`.
- Botón: "ESCRIBINOS POR WHATSAPP" desktop / "ESCRIBINOS" mobile, `font-family: var(--font-alt)`.

### Footer
- `min-height: 27vh` (= 30 % de 90 vh). Contact + Footer juntos = 90 vh.
- Logo: `height: 4rem`. Dirección (Montserrat): `font-size: 1.2rem`. Título ubicación: `1.4rem`.
- Íconos sociales SVG: `width: 2.5rem; height: 2.5rem` (≈ 40px). Hover: `translateY(-3px)`.

---

## 8. Componentes UI

### `<Reveal>` (`ui/Reveal.jsx`)
Wrapper Framer Motion con `whileInView` (fade + translateY). Respeta `prefers-reduced-motion`
(muestra instantáneo sin animación). Parámetros: `delay`, `y` (desplazamiento inicial).

### `<Button>` (`ui/Button.jsx`)
Botón/enlace **semi-rectangular** (`border-radius: var(--radius-rect)` = 0.5rem). Props:
- `href` → renderiza `<a>`, sin `href` → `<button>`.
- `variant`: `'accent'` (azul, default) | `'navy'`.
- `size`: `'sm'` (0.9rem) | `'md'` (1rem) | `'lg'` (1.15rem, padding 1.1rem 2.6rem).
- Hover: `translateY(-2px)` + `var(--shadow-btn)`.

### `<Icon>` (`ui/Icon.jsx`)
Wrapper para Google Material Symbols. Aplica `fontVariationSettings` para FILL y weight.

### `<SecurityIcon>` (`ui/SecurityIcons.jsx`)
SVG a medida (viewBox 120×132). Hexágono "pointy-top" (`HEX = 'M60 6 L112 36 ...'`) con
glifo blanco (`stroke="currentColor"`). Tipos disponibles: `trolley`, `camera`, `alarm`, `panel`.

### `<SelfboxLogo>` (`ui/SelfboxLogo.jsx`)
`<img>` que alterna entre `logo-white.png` (sobre oscuro) y `logo-color.png` (sobre claro).

### `<BrandIcons>` (`ui/BrandIcons.jsx`)
`WhatsAppIcon` e `InstagramIcon` como SVG inline con los paths oficiales de Simple Icons.

### `<CheckList>` (`ui/CheckList.jsx`)
`<ul>` de items con ícono `check_circle` filled en `--c-blue-accent`. Cada item está dentro de `<Reveal>`.

### `<Highlight>` (`ui/Highlight.jsx`)
Divide `text` en la palabra de índice `word` y envuelve esa palabra en un `<span>` para colorearla.

### `<SectionLabel>` (`ui/SectionLabel.jsx`)
Eyebrow label azul, uppercase, tracking ancho. Prop `light` para sobre fondos oscuros.

---

## 9. Animación del contenedor (`ContainerAnimation`)

**Sin `<video>`.** 24 frames `.webp` (RGBA, 797×590px) dibujados en `<canvas>` por RAF.

- **Carga:** `import.meta.glob('...container/*.webp', { eager: true })` → array ordenado de URLs.
- **Preload:** un `Image()` por frame, espera `img.decode()` antes de empezar.
- **Loop:** 7fps (≈143ms/frame, animación lenta). Al llegar al frame 23, pausa 1400ms (`HOLD_MS`), luego vuelve a 0.
- **Trigger:** `useInView(wrapRef, { amount: 0.4 })` — arranca cuando el 40% del contenedor está visible.
- **`prefers-reduced-motion`:** si está activo, muestra directamente el último frame (contenedor lleno) sin animación.
- Los frames se generaron extrayendo cada 10° frame del `Conteiner animado.mp4` (24fps, 240 frames total),
  removiendo el fondo gris con flood-fill desde los bordes, y parcheando la marca de agua `✦`.

---

## 10. Dimensiones del contenedor (`Services/Dimensions.jsx`)

SVG overlay (`viewBox="0 0 797 660"`) posicionado `position: absolute; inset: 0` sobre el canvas.
Dibuja las cotas en naranja `#B85008`:
- `6M` en la línea horizontal inferior.
- `2,4M` diagonal derecha (ancho).
- `2,6M` vertical derecha (alto).
Con marcadores de flechas (`<marker>` SVG).

---

## 11. Fuentes

Ambas auto-alojadas como woff2 subsetted (sin depender del CDN de Google Fonts).

| Fuente | Uso | Tamaño |
|---|---|---|
| Raleway (variable 100–900) | Todo el sitio | 75.5KB |
| Montserrat (variable 100–900) | Botón WhatsApp CTA + dirección footer | 17.3KB |

`@font-face` en `src/styles/variables.css`. Las clases que usan Montserrat aplican
`font-family: var(--font-alt)`.

---

## 12. Íconos UI (Material Symbols)

Subset cargado desde Google Fonts (7 íconos) declarado en `index.html`:

```
icon_names=arrow_forward,check_circle,chevron_left,chevron_right,close,location_on,menu
```

Estilo: **Rounded**, variable (`opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200`), `display=block`.

---

## 13. Deploy a Hostinger

1. Reemplazar placeholders en `src/data/config.js`.
2. `npm run build` → genera `dist/`.
3. Subir **el contenido de `dist/`** (no la carpeta, lo de adentro) a `public_html/` vía
   hPanel File Manager o FTP. Incluir el `.htaccess` (activar "mostrar archivos ocultos").
4. El `.htaccess` en `public/` ya tiene:
   - gzip vía `mod_deflate`
   - caché 1 año para assets con hash
   - no-cache para HTML
   - Redireccionamiento HTTPS comentado (descomentar cuando el SSL esté activo).

`base: './'` en `vite.config.js` → funciona en la raíz o en una subcarpeta (ej. `public_html/selfbox/`).

---

## 14. Lo que NO hay en el proyecto

- No hay router. Es una sola página.
- No hay backend ni formularios. Todo es `wa.me` links.
- No hay TypeScript.
- No hay tests.
- No hay elemento `<video>` — la animación del contenedor es canvas + RAF.
- No hay dependencias de CDN excepto Material Symbols (Google Fonts).
- No hay imágenes en `public/media/` — todas están en `src/assets/media/` (procesadas por Vite con hash).

---

## 15. Pendiente de la propietaria

- Reemplazar `WHATSAPP_NUMBER` con el número real (formato: `5493446XXXXXXX`).
- Reemplazar `INSTAGRAM_URL` con la URL real del perfil.
- Correr `npm run build` y hacer el deploy.
