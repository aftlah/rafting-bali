import { combo, packages, waLink } from '../data/site'

export function Packages() {
  return (
    <section className="section packages" id="packages">
      <div className="container">
        <div className="section-head">
          <h2>Choose your river day</h2>
          <p>
            Transparent pricing, payment on arrival, and everything you need for
            the water — gear, lunch, insurance included.
          </p>
        </div>

        <div className="packages__grid">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={`package ${pkg.featured ? 'package--featured' : ''}`}
            >
              {pkg.featured ? <span className="package__badge">Most booked</span> : null}
              <p className="package__sub">{pkg.subtitle}</p>
              <h3>{pkg.title}</h3>
              <p className="package__price">
                <span>From</span> IDR {pkg.price}
              </p>
              <p className="package__blurb">{pkg.blurb}</p>
              <ul>
                {pkg.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                className={`btn ${pkg.featured ? 'btn-primary' : 'btn-outline'}`}
                href={waLink(pkg.message)}
                target="_blank"
                rel="noreferrer"
              >
                Book this package
              </a>
            </article>
          ))}
        </div>

        <aside className="combo">
          <div className="combo__copy">
            <p className="combo__label">Special offer</p>
            <h3>{combo.title}</h3>
            <p>{combo.blurb}</p>
            <p className="combo__price">
              From <strong>IDR {combo.price}</strong>
            </p>
            <a
              className="btn btn-dark"
              href={waLink(combo.message)}
              target="_blank"
              rel="noreferrer"
            >
              Ask about the combo
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
