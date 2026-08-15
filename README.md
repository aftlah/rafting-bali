# Wild ATV Bali

Website marketing & booking untuk **Wild ATV Bali** — tur ATV quad bike di Ubud (North/South) dan pantai, plus combo ATV + rafting.

Data paket & kontak disesuaikan dari referensi [baliatvubud.com](https://www.baliatvubud.com/).

## Fitur

- Landing page ATV (hero, trust, why us, packages, experience, gallery, reviews)
- Paket: **North Ubud**, **South Ubud**, **Beach** + combo rafting
- Detail paket, About & safety, FAQ, lokasi, sticky WhatsApp
- Bahasa **EN / ID**
- Analytics opsional via `.env`

## Menjalankan lokal

```bash
npm install
npm run dev
```

## Konfigurasi

| File | Isi |
|------|-----|
| `src/data/site.ts` | Kontak, harga, map, gambar |
| `src/i18n/dictionaries.ts` | Teks EN & ID |
| `.env` | GA / Meta Pixel IDs |

## Tech

React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router
