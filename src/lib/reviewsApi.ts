export type LiveReview = {
  name: string
  place: string
  text: string
  rating?: number
}

export type SubmitReviewInput = {
  name: string
  place: string
  text: string
  rating: number
  lang: string
}

const scriptUrl = (import.meta.env.VITE_REVIEWS_SCRIPT_URL as string | undefined)?.trim()

export function isReviewsApiConfigured() {
  return Boolean(scriptUrl)
}

export async function fetchApprovedReviews(): Promise<LiveReview[]> {
  if (!scriptUrl) return []

  const res = await fetch(scriptUrl, {
    method: 'GET',
    redirect: 'follow',
  })
  if (!res.ok) throw new Error(`Reviews fetch failed (${res.status})`)

  const data = (await res.json()) as {
    ok?: boolean
    reviews?: LiveReview[]
  }
  if (!data.ok || !Array.isArray(data.reviews)) return []

  return data.reviews.filter(
    (r) => r && typeof r.name === 'string' && typeof r.text === 'string',
  )
}

/**
 * Apps Script web apps work best with text/plain POST (avoids CORS preflight).
 * Response may be empty after redirects — treat network success as submitted.
 */
export async function submitReview(input: SubmitReviewInput): Promise<void> {
  if (!scriptUrl) {
    throw new Error('Reviews API is not configured')
  }

  const payload = JSON.stringify({
    name: input.name.trim(),
    place: input.place.trim(),
    text: input.text.trim(),
    rating: input.rating,
    lang: input.lang,
  })

  await fetch(scriptUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: payload,
    redirect: 'follow',
  })
}
