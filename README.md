# PESONA INDO — Explore Indonesia

Platform eksplorasi wisata Indonesia: temukan destinasi, lihat paket
perjalanan, dan rencanakan trip. Dibangun dengan **React 19 + Vite 6**,
tanpa backend (data dummy terstruktur + local state).

> **Catatan konversi:** project ini adalah konversi 1:1 dari file HTML hasil
> export (`pesona-indo.html`) — desain, warna, teks, harga, rating, dan
> seluruh logika interaksi dipertahankan dari HTML tersebut, lalu ditulis
> ulang sebagai komponen React. Gambar diekstrak dari gambar Base64 di dalam
> HTML menjadi file terpisah di `public/assets/` (bukan hotlink), jadi situs
> tetap tampil penuh tanpa internet.

## Menjalankan di VS Code

```bash
# 1. Masuk ke folder project
cd "Pesona Indo"

# 2. Install dependencies (sekali saja, butuh internet)
npm install

# 3. Jalankan development server
npm run dev
```

Lalu buka URL yang ditampilkan di terminal (biasanya
http://localhost:5173).

Perintah lain:

```bash
npm run build    # build produksi ke folder dist/
npm run preview  # sajikan hasil build untuk dicek
```

## Struktur project

```
Pesona Indo/
├── public/
│   ├── assets/            # 7 foto lokal (diekstrak dari HTML)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # header sticky, search + saran, menu mobile
│   │   ├── Hero.jsx           # hero "EXPLORE INDONESIA"
│   │   ├── WhyChooseUs.jsx    # kenapa PESONA INDO + statistik
│   │   ├── Destinations.jsx   # carousel Top Destinations + filter wilayah
│   │   ├── Packages.jsx       # Tour Packages bento 2x2 + Browse All + Custom Trip
│   │   ├── BookingSteps.jsx   # How Booking Works (3 langkah)
│   │   ├── Blog.jsx           # Travel Stories (11 artikel, filter + Load More)
│   │   ├── StoryDetail.jsx    # halaman detail cerita editorial (torn-paper, zig-zag)
│   │   ├── About.jsx          # About + form newsletter
│   │   ├── Footer.jsx         # footer 4 kolom + shortcut destinasi
│   │   ├── DestinationModal.jsx  # modal detail destinasi
│   │   └── BookingModal.jsx      # form booking + estimasi + sukses
│   ├── data/
│   │   ├── destinations.js    # 14 destinasi (6 asli + 8 hidden gems, field `area`)
│   │   ├── packages.js        # 11 paket wisata (3 asli + 8 baru)
│   │   └── stories.js         # 11 cerita blog, masing-masing 3 bab + metadata
│   ├── hooks/
│   │   └── useReveal.js       # animasi reveal saat scroll (seperti HTML)
│   ├── styles/
│   │   └── style.css          # CSS dari HTML (variabel :root dipertahankan)
│   ├── App.jsx                # komposisi + state (search, modal, toast)
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Desain

- **Warna (variabel `:root` di `src/styles/style.css`):**
  Navy `#10283f` · Navy 2 `#1b3a57` · Sage `#7d9b8a` · Sage soft `#dce7df` ·
  Paper `#f7f6f1` · Mist `#e9edf0` · Card blue `#c3d0da` · Gold `#e8a33d`
- **Font:** Plus Jakarta Sans (Google Fonts) — satu-satunya font yang
  dipakai, sama seperti HTML asli.
- **Radius:** 22px (kartu) / 30px (hero & panel besar), sesuai HTML.
- Mendukung mode gelap sistem (`prefers-color-scheme: dark`) seperti HTML.

## Fitur (sama seperti di HTML asli)

- **Search + saran:** ketik di navbar (desktop & mobile) → dropdown saran
  dengan thumbnail, nama, provinsi, dan harga mulai. Pencarian mencakup
  nama, provinsi, region, tag, dan wilayah (`area`). Klik saran →
  memfilter carousel ke destinasi itu, scroll ke section, dan membuka
  modal detail. Tekan Enter → memfilter carousel dan scroll ke section.
  Kosongkan input → semua destinasi tampil lagi. Jika tidak ada yang
  cocok, tampil pesan "Tidak ada destinasi yang cocok".
- **Carousel Top Destinations:** tombol next/previous (nonaktif di ujung),
  geser horizontal, 14 kartu. **Filter wilayah** di atas carousel: All,
  Sumatra & Bangka, Java & Bali, Nusa Tenggara, Kalimantan & Sulawesi,
  Maluku & Papua — lengkap dengan jumlah hasil. Filter mereset scroll
  carousel ke awal.
- **Tour Packages (bento):** kartu intro kiri memanjang penuh 2 baris,
  sejajar dengan 4 kartu unggulan 2x2 di kanan — tanpa ruang kosong.
  Ikon bulat tiap kartu memakai latar navy solid dengan border putih agar
  kontras di atas foto. **Browse All Packages** membuka grid semua 11
  paket + kartu **Custom Trip / Request Itinerary** (klik → modal booking
  default Bali + toast penjelasan; bukan paket dengan harga 0). Tombol
  berubah menjadi "Show Fewer Packages" untuk menutupnya.
- **Modal detail destinasi:** klik kartu destinasi → foto, harga mulai,
  lokasi, deskripsi, chips highlights, rating, durasi populer, musim
  terbaik. Tutup via tombol ✕, klik overlay, atau tombol Escape.
- **Booking modal:** satu modal dengan form (nama, tanggal berangkat,
  jumlah peserta). Tanggal minimal hari ini, default H+14. Estimasi total
  = harga per orang × jumlah peserta, berubah langsung saat jumlah
  peserta diubah. Submit yang valid → panel sukses dengan kode permintaan
  (`PI-XXXXXX`) + notifikasi toast.
- **Book Now / Plan Your Trip:** membuka modal Bali (destinasi
  terpopuler), sama seperti HTML.
- **Kartu paket:** klik kartu → modal dengan judul & harga paket
  (Bali Island Escape Rp 3.450.000, Raja Ampat Adventure Rp 8.900.000,
  Bromo Sunrise Experience Rp 1.250.000).
- **Browse All Packages:** lihat di atas (bagian Tour Packages).
- **Blog:** 11 cerita, tampil 6 dulu. **Filter kategori** (All, Culture,
  Island Guide, Beaches, Highlands & Heritage) dan tombol **Load More
  Stories** menampilkan semuanya, berubah menjadi "Show Fewer Stories".
  Klik kartu atau tombol "Read story" → halaman detail cerita
  (`StoryDetail`) dengan hero full-bleed 65vh, torn-paper, judul serif
  uppercase, kutipan script, info bar (Location / Best Time / Read Time /
  Local Guide), 3 bab zig-zag dengan watermark angka dan garis rute
  putus-putus, lalu CTA booking yang membuka `BookingModal` untuk destinasi
  terkait. Tombol "← Back to Stories" kembali ke halaman utama.
- **Newsletter (About):** validasi email bawaan browser, pesan sukses
  + toast.
- **Footer:** shortcut destinasi (Raja Ampat, Bali, Labuan Bajo, Bromo)
  membuka modal destinasi tersebut.
- **Toast:** notifikasi bawah layar, hilang otomatis ±3,4 detik.
- **Reveal on scroll:** IntersectionObserver + fallback scroll + safety
  timer (konten tidak pernah tertahan tak terlihat).
- **Responsive:** menu hamburger + search di mobile, grid menyesuaikan
  tablet/desktop, tanpa overflow horizontal.

## Data

| Destinasi | Provinsi | Rating | Mulai dari |
| --- | --- | --- | --- |
| Raja Ampat | Papua Barat Daya | 4.9 (2.1k) | Rp 2.450.000 |
| Bali | Bali | 4.8 (3.4k) | Rp 1.850.000 |
| Labuan Bajo | Nusa Tenggara Timur | 4.9 (1.8k) | Rp 2.750.000 |
| Gunung Bromo | Jawa Timur | 4.8 (2.6k) | Rp 950.000 |
| Borobudur | Jawa Tengah | 4.7 (1.5k) | Rp 750.000 |
| Lombok | Nusa Tenggara Barat | 4.7 (980) | Rp 1.650.000 |
| Danau Toba & Samosir | Sumatra Utara | 4.8 (1.9k) | Rp 1.750.000 |
| Pulau Belitung | Bangka Belitung | 4.8 (1.2k) | Rp 1.650.000 |
| Tana Toraja | Sulawesi Selatan | 4.9 (1.4k) | Rp 2.150.000 |
| Kepulauan Derawan | Kalimantan Timur | 4.9 (1.1k) | Rp 2.350.000 |
| Desa Adat Wae Rebo | Nusa Tenggara Timur | 4.9 (980) | Rp 1.450.000 |
| Kepulauan Banda Neira | Maluku | 4.8 (760) | Rp 2.450.000 |
| Kawah Ijen | Jawa Timur | 4.8 (2.2k) | Rp 850.000 |
| Bukittinggi & Lembah Harau | Sumatra Barat | 4.7 (1.3k) | Rp 1.350.000 |

Destinasi baru memakai foto Unsplash (terverifikasi `curl -I`: HTTP 200,
`image/jpeg`); 6 destinasi pertama tetap memakai foto lokal di
`public/assets/`.

| Paket | Harga | Durasi |
| --- | --- | --- |
| Bali Island Escape | Rp 3.450.000 | 5 hari · 4 malam |
| Raja Ampat Adventure | Rp 8.900.000 | 6 hari · 5 malam |
| Bromo Sunrise Experience | Rp 1.250.000 | 2 hari · 1 malam |
| Tana Toraja Heritage | Rp 4.850.000 | 4 hari · 3 malam |
| Belitung Granite Islands | Rp 2.950.000 | 3 hari · 2 malam |
| Derawan Jellyfish & Turtles | Rp 3.750.000 | 4 hari · 3 malam |
| Wae Rebo Cloud Village | Rp 2.450.000 | 3 hari · 2 malam |
| Banda Spice Islands | Rp 4.200.000 | 4 hari · 3 malam |
| Toba & Samosir Lakeside | Rp 2.650.000 | 3 hari · 2 malam |
| Ijen Blue Fire Trek | Rp 1.450.000 | 2 hari · 1 malam |
| Harau Valley & Minangkabau Culture | Rp 2.350.000 | 3 hari · 2 malam |

Cerita blog (11): Borobudur at dawn, Padar/Pink Beach/Komodo, Lombok
southern bays, Tana Toraja Rambu Solo, Banda Neira, Belitung, Wae Rebo,
Derawan & Kakaban, Bukittinggi & Lembah Harau, Danau Toba & Samosir,
Kawah Ijen — masing-masing 3 bab di `StoryDetail`.

## Gambar

Semua foto lokal di `public/assets/` (diekstrak dari HTML hasil export,
sudah dicek isinya satu per satu):

| File | Isi |
| --- | --- |
| `hero.jpg` | Panorama Pulau Padar (hero) |
| `raja-ampat.jpg` | Kepulauan karst Raja Ampat |
| `bali.jpg` | Pura & sawah terasering Bali |
| `padar.jpg` | Teluk Pulau Padar + kapal (Labuan Bajo) |
| `bromo.jpg` | Bromo & Semeru saat sunrise |
| `borobudur.jpg` | Patung Buddha Borobudur |
| `lombok.jpg` | Pantai Tanjung Aan, Lombok |

Foto dipakai ulang untuk kartu paket & artikel blog, sama seperti di HTML
(mis. `bali.jpg` dipakai di kartu Bali Island Escape dan di destinasi Bali).
