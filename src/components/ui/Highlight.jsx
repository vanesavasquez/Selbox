// Envuelve la(s) palabra(s) `word` dentro de `text` en un <span> con clase
// (para resaltarlas en azul como en el diseño).
export default function Highlight({ text, word, className }) {
  if (!word || !text.includes(word)) return text
  const idx = text.indexOf(word)
  return (
    <>
      {text.slice(0, idx)}
      <span className={className}>{word}</span>
      {text.slice(idx + word.length)}
    </>
  )
}
