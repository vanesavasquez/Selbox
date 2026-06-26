# SelfBox — Landing Page

Landing page responsive de **SelfBox** (alquiler de módulos de guardado en
contenedores, Gualeguaychú). Hecha con **React + Vite**, animaciones con
**Framer Motion** y carrusel con **Embla**. Diseño replicado 1:1 desde los
mockups de PC y mobile.

## Requisitos

- Node.js 18+ y npm

## Desarrollo

```bash
npm install      # instalar dependencias
npm run dev      # servidor local (http://localhost:5173)
```

## Build de producción

```bash
npm run build    # genera la carpeta dist/
npm run preview  # previsualiza el build localmente
```

## ⚙️ Datos a completar antes de publicar

Editá **`src/data/config.js`** y reemplazá los placeholders por los datos reales:

| Constante          | Qué es                                              |
| ------------------ | --------------------------------------------------- |
| `WHATSAPP_NUMBER`  | Número de WhatsApp con código de país (solo dígitos)|
| `WHATSAPP_MESSAGE` | Mensaje que se autocompleta al abrir WhatsApp       |
| `INSTAGRAM_URL`    | URL del Instagram                                   |
| `ADDRESS`          | Dirección (también alimenta el link de Google Maps) |

Después de editar, volvé a correr `npm run build`.

> Todos los textos de la web están en `src/data/content.js`.

## 🚀 Deploy en Hostinger

Es un sitio **100% estático**, no necesita backend.

1. Ejecutar `npm run build`.
2. Entrar al **hPanel de Hostinger → Administrador de archivos**.
3. Subir **todo el contenido de la carpeta `dist/`** (no la carpeta, sino lo de
   adentro) a `public_html/`.
   - Incluye el archivo `.htaccess` (compresión + caché ya configurados).
   - Si no ves el `.htaccess`, activá "mostrar archivos ocultos" en el File Manager.
4. Listo. La web queda online en el dominio.

> El proyecto usa rutas relativas (`base: './'` en `vite.config.js`), así que
> también funciona si lo subís a una **subcarpeta** (ej. `public_html/selfbox/`).

### Alternativa por FTP

Subir el contenido de `dist/` a `public_html/` con FileZilla usando las
credenciales FTP del hPanel.

## Estructura

```
src/
  components/   # Header, Hero, About, Security, Services, Contact, Footer + ui/
  data/         # content.js (textos) · config.js (contacto)
  hooks/        # useScroll, useMediaQuery
  styles/       # variables.css (tokens + fuentes) · global.css
  assets/       # fuentes (woff2), imágenes y frames del contenedor
```

## Notas técnicas

- **Fuentes** Raleway y Montserrat auto-alojadas (woff2 subset). Los íconos son
  **Google Material Symbols** (subset de los íconos usados, vía Google Fonts) y
  los logos de marca (WhatsApp/Instagram) son SVG.
- La **animación del contenedor** (sección Servicios) se reproduce por código a
  partir de frames `.webp` dibujados en un `<canvas>`; arranca al entrar en
  pantalla y respeta `prefers-reduced-motion`.
- Los 4 íconos de seguridad son **SVG a medida** recreados del diseño.
```
