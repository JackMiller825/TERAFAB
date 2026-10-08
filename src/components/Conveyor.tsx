const stations = ["SILICON", "CHIPS", "COMPUTE", "MODELS", "AGENTS", "SUPER INTELLIGENCE"]

export function Conveyor() {
  const loop = [...stations, ...stations]

  return (
    <section className="section" id="conveyor" aria-labelledby="conveyor-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">LINE 01</p>
          <h2 id="conveyor-title">THE FACTORY IS ONLINE</h2>
          <p>Raw compute goes in. Super Intelligence comes out.</p>
        </div>
        <div className="line-scene">
          <div className="rail">
            <div className="rail-track">
              {loop.map((label, index) => (
                <article className="station" key={`${label}-${index}`} aria-hidden={index >= stations.length}>
                  <span>0{(index % stations.length) + 1}</span>
                  <strong>{label}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
