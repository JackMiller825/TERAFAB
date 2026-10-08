import { assets } from "../config/assets"
import { SocialButtons } from "./SocialButtons"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={assets.logoMark} alt="TERAFAB" width={72} height={72} />
          </div>
          <SocialButtons />
        </div>
      </div>
    </footer>
  )
}
