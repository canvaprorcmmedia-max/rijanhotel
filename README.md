# Website Hotel Rijan — Versi 2

Website katalog Hotel Rijan dengan gaya luxury modern, dibuat berdasarkan dokumen `COMPANY HOTEL RIJAN.docx` yang diberikan. Versi ini memperbaiki data kamar, fasilitas, tarif layanan, visi-misi, keunggulan, tata tertib, dan kontak.

## Menjalankan di komputer

Persyaratan: Node.js 20 atau lebih baru dan Visual Studio Code.

1. Ekstrak ZIP.
2. Buka folder `hotel-rijan-website` di VS Code.
3. Buka Terminal → New Terminal.
4. Jalankan:

   ```bash
   npm install
   npm start
   ```

5. Buka `http://localhost:3000`.
6. Kerangka admin dapat dilihat di `http://localhost:3000/admin`.

## Perubahan utama versi 2

- Memuat seluruh 8 kategori kamar yang disebut dalam dokumen.
- Tidak menampilkan nomor kamar karena nomor di bagian deskripsi dan tabel tarif saling bertentangan. Ini mengikuti pilihan **keep**.
- Menambahkan kapasitas, rincian tempat tidur, lantai, pemandangan, dan daftar fasilitas kamar sesuai informasi yang tersedia.
- Menambahkan kategori `Rooms Without Beds Are Small`; tarifnya tidak ditampilkan karena tidak ada tarif terpisah yang jelas.
- Menampilkan harga kamar dari tabel Room Rate sebagai informasi awal, bukan jaminan harga aktif.
- Menambahkan 10 fasilitas umum, daftar tarif layanan/ruang, visi dan seluruh pokok misi, keunggulan, dan 11 tata tertib tamu.
- Memperbaiki alamat sesuai teks dokumen: `Jl. Ko. Hayam Wuruk No. 22, Kecamatan Pacet, Mojokerto`.
- Menggunakan WhatsApp `081259180347` (format tautan internasional `6281259180347`) dan email `rijanhotel123@gmail.com`.

## Catatan akurasi yang wajib diperhatikan

Website ini menyalin informasi yang tersedia di company profile, tetapi beberapa bagian sumber tidak konsisten atau kurang lengkap. Agar tidak mengarang, bagian berikut diberi catatan dan perlu konfirmasi manajemen:

1. **Nomor kamar:** beberapa nomor kamar berbeda antara deskripsi tipe dan tabel Room Rate. Nomor kamar disembunyikan di seluruh halaman publik.
2. **Luas kamar:** dokumen menulis angka seperti `100 m` dan `120 m` tanpa satuan luas yang jelas. Angka luas tidak ditampilkan.
3. **Twin Bed Room:** nama tipe menyebut twin bed, tetapi detail sumber justru menyebut satu tempat tidur king ukuran 2 m × 2 m. Website menandai konfigurasi ini untuk dikonfirmasi.
4. **Connecting Room:** kapasitas, konfigurasi tempat tidur, dan dasar satuan tarif tidak dijelaskan dengan jelas.
5. **Room without bed:** tabel tarif menulis `Room without bed` Rp60.000 dan mengaitkannya dengan dua nomor kamar. Karena nomor kamar bertabrakan dengan kategori lain, tarif Rp60.000 hanya ditampilkan sebagai tarif awal pada `Rooms Without Large Beds`; kategori `Rooms Without Beds Are Small` meminta tamu menghubungi hotel.
6. **Tarif layanan:** sumber memiliki dua baris Soundsystem dengan tarif berbeda, istilah `Aet boxet`, dan tidak menjelaskan periode penggunaan. Ejaan dan nominal dipertahankan apa adanya dengan catatan konfirmasi.
7. **Jumlah karyawan:** pengantar menyebut 29 orang, tetapi rincian jabatan berjumlah 27 orang. Jumlah ini tidak dipajang sebagai angka pasti.
8. **Kanal pemesanan online:** dokumen menyebut Oyohotel, Traveloka, Tiket.com, Pegi-pegi, dan Agoda. Daftar tersebut tidak ditampilkan sebagai kanal aktif karena status kerja sama/ketersediaannya belum diverifikasi.
9. **Website lama:** dokumen mencantumkan `www.hotelrijanpacet.com`; status domain dan kepemilikannya belum diverifikasi, sehingga tidak dipasang sebagai tautan aktif.

**Penting:** harga, ketersediaan, ketentuan kamar, layanan, dan kontak harus dikonfirmasi pengelola sebelum website dipublikasikan. Data di dokumen bukan bukti bahwa tarif masih berlaku.

## Foto dan logo

Folder `public/assets/images` masih menggunakan ilustrasi SVG placeholder, bukan foto asli Hotel Rijan. Ganti aset tersebut dengan foto hotel yang benar dan logo resmi sebelum publikasi. Halaman galeri juga diberi keterangan bahwa visualnya sementara.

## WhatsApp dan alamat

Edit `public/js/config.js` jika nomor WhatsApp, alamat, atau email resmi berubah. Nomor WhatsApp menggunakan format kode negara tanpa tanda `+`, spasi, atau strip.

## Status Admin Dashboard

Halaman `/admin` masih berupa **kerangka antarmuka**. Autentikasi admin, penyimpanan data, upload foto, dan koneksi Supabase belum diimplementasikan. Jangan gunakan halaman admin ini untuk operasional atau memasukkan kata sandi penting. File `supabase/schema.sql` adalah rancangan awal, bukan integrasi aktif.

## Publikasi

Sebelum deploy ke hosting/Vercel, pastikan foto dan logo resmi telah dipasang, data yang ditandai sudah dikonfirmasi manajemen, serta fitur admin dan database telah dibangun dan diuji secara terpisah.
