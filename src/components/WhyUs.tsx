import { reasons } from '../data/site'

const icons = {
  price: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M18 14h16l4 8v14H14V22l4-8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M18 14V10h12v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="28" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  payment: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect
        x="8"
        y="14"
        width="32"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M8 20h32" stroke="currentColor" strokeWidth="2" />
      <path
        d="M14 30h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  booking: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect
        x="12"
        y="8"
        width="24"
        height="32"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M18 18h12M18 24h12M18 30h7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
} as const

export function WhyUs() {
  return (
    <section className="section why" id="why-us" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-head section-head--center">
          <h2 id="why-heading">Why choose us</h2>
          <p>A few good reasons to book direct</p>
        </div>

        <ul className="why__grid">
          {reasons.map((reason) => (
            <li key={reason.id}>
              <span className="why__icon">{icons[reason.id]}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
