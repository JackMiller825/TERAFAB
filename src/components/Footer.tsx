import { assets } from "../config/assets"
import { SocialButtons } from "./SocialButtons"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-cta">
          <h2>
            THE FACTORY
            <br />
            IS JUST GETTING STARTED.
          </h2>
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={assets.logoMark} alt="TERAFAB" width={72} height={72} />
          </div>
          <SocialButtons />
        </div>
        <p className="disclaimer">
          TERAFAB is an independent community-driven crypto project. It is not affiliated with or endorsed by Elon
          Musk, Tesla, SpaceX, Nvidia, TSMC, Ethereum Foundation, or any other referenced company or individual.
          Cryptocurrency involves significant risk. Always do your own research.
        </p>
      </div>
    </footer>
  )
}
