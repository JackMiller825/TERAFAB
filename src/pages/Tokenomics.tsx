import { project } from "../config/project"
import { ConfigLink } from "../components/SocialButtons"
import { TokenInfo } from "../components/TokenInfo"
import { usePageMeta } from "../hooks/usePageMeta"

export function Tokenomics() {
  usePageMeta("Tokenomics | TERAFAB")

  return (
    <article className="page">
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow">ETHEREUM</p>
          <h1>{project.ticker}</h1>
          <p className="lede">THE TOKEN OF THE FACTORY</p>
        </div>
      </header>
      <div className="wrap">
        <TokenInfo />
        <div className="link-row">
          <ConfigLink href={project.links.dexscreener}>DEXSCREENER</ConfigLink>
          <ConfigLink href={project.links.dextools}>DEXTOOLS</ConfigLink>
        </div>
      </div>
    </article>
  )
}
