import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { liveContract, project, tokenConfig } from "../config/project"

const contract = liveContract(project.contractAddress)

function fallbackCopy(text: string) {
  const area = document.createElement("textarea")
  area.value = text
  area.setAttribute("readonly", "")
  area.style.position = "fixed"
  area.style.top = "0"
  area.style.left = "0"
  area.style.opacity = "0"
  document.body.appendChild(area)
  area.focus()
  area.select()
  const ok = document.execCommand("copy")
  area.remove()
  if (!ok) throw new Error("copy failed")
}

export function TokenInfo() {
  const [copied, setCopied] = useState(false)
  const address = contract ?? "Coming Soon"

  function onCopy() {
    let synced = false
    try {
      fallbackCopy(address)
      synced = true
    } catch {
      synced = false
    }

    const finish = () => {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    }

    if (synced) finish()

    if (!navigator.clipboard?.writeText) return
    void navigator.clipboard.writeText(address).then(finish).catch(() => {
      if (!synced) setCopied(false)
    })
  }

  return (
    <div className="token-cards">
      <article className="panel token-card">
        <span>CONTRACT</span>
        <div className="token-contract">
          <strong>{address}</strong>
          <button type="button" className="btn btn-primary" onClick={onCopy} aria-label={copied ? "Copied" : "Copy contract address"}>
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
