type MetaAttr = 'name' | 'property'

export function setDocumentTitle(title: string) {
  document.title = title
}

export function setMeta(
  key: string,
  content: string,
  attr: MetaAttr = 'name',
) {
  if (!content) return
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

export function setLink(rel: string, href: string) {
  if (!href) return
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

export function setJsonLd(id: string, data: object | object[]) {
  const json = JSON.stringify(data)
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = json
}

export function removeJsonLd(id: string) {
  document.getElementById(id)?.remove()
}
