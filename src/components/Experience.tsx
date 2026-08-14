import { steps } from '../data/site'

export function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="section-head">
          <h2>How the day flows</h2>
          <p>One clear path from briefing to the final paddle — no guesswork.</p>
        </div>

        <ol className="experience__steps">
          {steps.map((step) => (
            <li key={step.n}>
              <span className="experience__n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
