import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { liveContract, project, tokenConfig } from "../config/project"

const contract = liveContract(project.contractAddress)

export function TokenInfo() {
  const [copied, setCopied] = useState(false)

  async function onCopy() {
    if (!contract) return
    try {
      await navigator.clipboard.writeText(contract)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="token-cards">
      <article className="panel token-card">
        <span>CONTRACT</span>
        <div className="token-contract">
          <strong>{contract ?? "Coming Soon"}</strong>
          <button type="button" className="btn btn-primary" onClick={onCopy} disabled={!contract}>
            {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            {copied ? "COPIED" : "COPY"}
          </button>
        </div>
      </article>
      <article className="panel token-card">
        <span>SUPPLY</span>
        <strong>{tokenConfig.totalSupply}</strong>
      </article>
      <article className="panel token-card">
        <span>LP STATUS</span>
        <strong>{tokenConfig.lpStatus}</strong>
      </article>
      <article className="panel token-card">
        <span>OWNERSHIP</span>
        <strong>{tokenConfig.ownership}</strong>
      </article>
    </div>
  )
}
