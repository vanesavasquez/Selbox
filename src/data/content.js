// Todos los textos de la landing (tomados del diseño / PDF).

export const NAV_LINKS = [
  { id: 'home', label: 'HOME' },
  { id: 'nosotros', label: 'SOBRE NOSOTROS' },
  { id: 'seguridad', label: 'SEGURIDAD' },
  { id: 'servicios', label: 'SERVICIOS' },
  { id: 'contacto', label: 'CONTACTO' },
]

export const HERO = {
  titleLines: ['MÁS ESPACIO.', 'MÁS TRANQUILIDAD.'],
  highlight: 'TRANQUILIDAD.',
  subtitle:
    'Alquiler de módulos de guardado seguros, accesibles y flexibles en Gualeguaychú.',
  cta: 'RESERVÁ TU ESPACIO',
}

export const ABOUT = {
  label: 'SOBRE NOSOTROS',
  titleLines: ['La nueva forma de', 'guardar en Gualeguaychú.'],
  highlight: 'Gualeguaychú.',
  paragraphs: [
    'En SelfBox ofrecemos la primera solución de módulos de guardado en contenedores de la ciudad.',
    'Pensados para personas, emprendedores y empresas que necesitan más espacio para guardar sus cosas.',
  ],
  bullets: [
    'Espacios privados y seguros',
    'Contratos flexibles',
    'Atención personalizada',
  ],
}

// type => clave del icono SVG custom (ver components/ui/SecurityIcons)
export const SECURITY = {
  label: 'SEGURIDAD',
  items: [
    { type: 'trolley', lines: ['Carros y zorras', 'hidráulicas'] },
    { type: 'camera', lines: ['Cámaras de', 'seguridad 24 HS'] },
    { type: 'alarm', lines: ['Sistema de', 'alarmas'] },
    { type: 'panel', lines: ['Alarma individual', 'Opcional'] },
  ],
}

export const SERVICES = {
  label: 'SERVICIOS',
  titleLines: ['Tu espacio para', 'lo que necesites.'],
  highlight: 'espacio',
  bullets: [
    'Muebles y electrodomésticos',
    'Mercadería y stock',
    'Herramientas y maquinarias',
    'Archivos y documentos',
    'Mudanzas y viajes',
  ],
  measures: {
    title: 'Medidas de los Box:',
    lines: ['2,4 m de ancho', '2,6 m de alto', '6 m de profundidad'],
  },
  dims: { width: '6M', depth: '2,4M', height: '2,6M' },
}

export const CONTACT = {
  title: '¿Necesitás más espacio?',
  subtitle: 'Nosotros tenemos la solución.',
  cta: 'ESCRIBINOS POR WHATSAPP',
  ctaShort: 'ESCRIBINOS',
}

export const FOOTER = {
  whereTitle: '¿DÓNDE ESTAMOS?',
}
