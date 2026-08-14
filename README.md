# Ubud Ayung Rafting

Website marketing & booking untuk operator **white water rafting di Sungai Ayung, Ubud, Bali**.

Situs ini menampilkan paket tur rafting, promo combo ATV, galeri aktivitas, testimoni, FAQ, peta lokasi, dan booking via **WhatsApp**. Tampilan modern dengan bahasa **EN / ID**.

## Fitur

- Landing page lengkap (hero, why us, packages, experience, gallery, reviews)
- **Halaman detail paket** (`/packages/:id`) — itinerary, included/not included, usia, tangga, tingkat jeram
- **FAQ** accordion
- **Peta lokasi** Google Maps + petunjuk own transport
- **Bahasa EN / ID** (toggle di navbar, tersimpan di localStorage)
- **Analytics opsional** — Google Analytics 4 & Meta Pixel via `.env`

## Menjalankan lokal

```bash
npm install
npm run dev
```

```bash
npm run build    # → dist/
```

## Konfigurasi

| File | Isi |
|------|-----|
| `src/data/site.ts` | Kontak, harga, map URL, gambar |
| `src/i18n/dictionaries.ts` | Semua teks EN & ID |
| `.env` (dari `.env.example`) | `VITE_GA_MEASUREMENT_ID`, `VITE_META_PIXEL_ID` |

## Tech

React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router
