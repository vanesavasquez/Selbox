// ============================================================
//  CONFIGURACIÓN DE CONTACTO
//  Reemplazá estos valores por los datos reales de SelfBox.
//  (son los únicos datos que hay que tocar para enlazar todo)
// ============================================================

// Número de WhatsApp con código de país, SOLO dígitos.
// Ej: Argentina + Gualeguaychú => 5493446XXXXXXX
export const WHATSAPP_NUMBER = '5493446000000' // TODO: número real

// Mensaje que se autocompleta al abrir WhatsApp
export const WHATSAPP_MESSAGE =
  '¡Hola SelfBox! Quiero reservar un box / consultar disponibilidad.'

// Instagram (usuario o URL completa)
export const INSTAGRAM_URL = 'https://instagram.com/selfbox' // TODO: usuario real

// Dirección física
export const ADDRESS = 'Boulevard Montana 1050, Gualeguaychú, Entre Ríos'

// Link a Google Maps generado desde la dirección
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`

// Link de WhatsApp listo para usar en los CTA
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`
