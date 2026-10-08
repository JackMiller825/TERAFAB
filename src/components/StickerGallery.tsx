import { stickers } from "../config/assets"

export function StickerGallery() {
  return (
    <div className="sticker-grid">
      {stickers.map((sticker) => (
        <figure key={sticker.src} className="panel sticker" data-cursor="true">
          <img src={sticker.src} alt={`TERAFAB sticker, ${sticker.label}`} width={512} height={320} />
          <figcaption>{sticker.label}</figcaption>
        </figure>
      ))}
    </div>
  )
}
