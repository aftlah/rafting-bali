import { reviews } from '../data/site'

export function Reviews() {
  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <div className="section-head">
          <h2>Guests keep coming back</h2>
          <p>Real notes from travelers who booked direct.</p>
        </div>

        <div className="reviews__grid">
          {reviews.map((review) => (
            <blockquote key={review.name}>
              <p>“{review.text}”</p>
              <footer>
                <strong>{review.name}</strong>
                <span>{review.place}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
