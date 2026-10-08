type CommunityCardProps = {
  src: string
  alt: string
  title: string
  caption: string
  className?: string
}

export function CommunityCard({ src, alt, title, caption, className = "" }: CommunityCardProps) {
  return (
    <article className={`panel community-frame ${className}`.trim()}>
      <img src={src} alt={alt} width={1200} height={900} loading="lazy" />
      <h2>{title}</h2>
      <p className="frame-caption">{caption}</p>
    </article>
  )
}
