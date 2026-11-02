// Data disusun dari COMPANY HOTEL RIJAN.docx.
// Nomor kamar sengaja tidak ditampilkan karena terdapat perbedaan antarbagian dokumen.
// Nilai yang tidak jelas diberi catatan konfirmasi, bukan ditebak.
window.HOTEL_DATA = {
  rooms: [
    {
      id: "standard", name: "Standard Room", price: 100000, priceLabel: "Rp100.000",
      capacity: "2 orang", bed: "1 tempat tidur ukuran king (2 m × 2 m)", floor: "Lantai 2",
      description: "Standard Room menawarkan ukuran ruangan yang lebih minimalis dari Superior Room. Dengan desain yang bersahaja, kamar ini dirancang untuk memberikan kenyamanan saat bermalam.",
      view: "Gunung Welirang dan Penanggungan",
      features: ["Akses lounge eksekutif", "Lemari penyimpanan laptop", "Lemari penyimpan pakaian", "Jaringan internet", "AC dengan pengontrol suhu", "Kasur tambahan", "Perlengkapan mandi standar", "Air panas dan normal", "Soft shower", "Snack dan teh pagi", "Fasilitas membuat kopi dan teh", "Kursi lengan dan sandaran", "Balkon pribadi", "Air mineral"],
      image: "assets/images/room-standard.svg", priceNote: "Harga tercantum pada tabel Room Rate dokumen. Konfirmasi kembali sebelum reservasi."
    },
    {
      id: "superior", name: "Superior Room", price: 110000, priceLabel: "Rp110.000",
      capacity: "2 orang", bed: "1 tempat tidur ukuran king (2 m × 2 m)", floor: "Lantai 3",
      description: "Superior Room menawarkan ukuran ruangan yang lebih luas dari Standard Room. Dengan desain yang bersahaja, kamar ini dirancang untuk memberikan kenyamanan saat bermalam.",
      view: "Gunung Welirang dan Penanggungan",
      features: ["Akses lounge eksekutif", "Lemari penyimpanan laptop", "Lemari penyimpan pakaian", "Jaringan internet", "AC dengan pengontrol suhu", "Kasur tambahan", "Perlengkapan mandi standar", "Air panas dan normal", "Soft shower", "Snack dan teh pagi", "Fasilitas membuat kopi dan teh", "Kursi lengan dan sandaran", "Balkon pribadi", "Air mineral"],
      image: "assets/images/room-superior.svg", priceNote: "Harga tercantum pada tabel Room Rate dokumen. Konfirmasi kembali sebelum reservasi."
    },
    {
      id: "vip-suite", name: "VIP Suite Room", price: 150000, priceLabel: "Rp150.000",
      capacity: "2 orang", bed: "1 tempat tidur ukuran king (2 m × 2 m)", floor: "Lantai 3",
      description: "Kamar eksklusif dengan sentuhan desain rustic, interior tradisional yang dipadukan dengan gaya modern, warna cream netral, lantai kayu agatis, serta balkon pribadi untuk menikmati pemandangan Pacet. Dokumen menyebut akses connecting room.",
      view: "Sawah terasering Pacet",
      features: ["Akses lounge eksekutif", "Lemari penyimpan pakaian", "Lemari penyimpanan laptop", "Jaringan internet", "Lemari pendingin", "Dapur kecil", "Pemanas air", "AC dengan pengontrol suhu", "LED TV 32 inci multisystem", "Set sofa", "Kasur tambahan", "Perlengkapan mandi standar", "Jubah mandi dan sandal", "Air panas dan normal", "Soft shower", "Snack dan teh pagi", "Fasilitas membuat kopi dan teh", "Kursi lengan dan sandaran", "Balkon pribadi", "Air mineral"],
      image: "assets/images/room-vip.svg", priceNote: "Tabel tarif menyebut VIP Suite Room 1. Tarif ditampilkan sebagai informasi awal dan perlu konfirmasi."
    },
    {
      id: "connecting", name: "Connecting Room", price: 80000, priceLabel: "Rp80.000",
      capacity: "Kapasitas tidak dicantumkan", bed: "Konfigurasi tempat tidur tidak dijelaskan", floor: "Tidak dicantumkan",
      description: "Dua kamar yang bersebelahan dan memiliki pintu penghubung. Fasilitas ini memungkinkan tamu yang bepergian bersama tetap mudah berhubungan tanpa menghilangkan privasi.",
      view: "Tidak dicantumkan",
      features: ["Pintu penghubung antarkamar", "Akses lounge eksekutif", "Lemari penyimpan pakaian", "Lemari penyimpanan laptop", "Jaringan internet", "AC dengan pengontrol suhu", "Kasur tambahan", "Perlengkapan mandi standar", "Air panas dan normal", "Soft shower", "Snack dan teh pagi", "Fasilitas membuat kopi dan teh", "Kursi lengan dan sandaran", "Air mineral"],
      image: "assets/images/room-connecting.svg", priceNote: "Harga tercantum pada tabel Room Rate dokumen. Satuan tarif dan kapasitas perlu dikonfirmasi."
    },
    {
      id: "deluxe", name: "Deluxe Room", price: 125000, priceLabel: "Rp125.000",
      capacity: "2 orang", bed: "1 tempat tidur ukuran king (2 m × 2 m)", floor: "Tidak dicantumkan",
      description: "Kamar dengan desain interior yang terkesan lebih mewah.",
      view: "Gunung Welirang dan Penanggungan",
      features: ["Akses lounge (dokumen menulis 'lounge interior')", "Lemari penyimpan pakaian", "Lemari penyimpanan laptop", "Jaringan internet", "AC dengan pengontrol suhu", "Set sofa", "Kasur tambahan", "Perlengkapan mandi standar", "Air panas dan normal", "Soft shower", "Snack dan teh pagi", "Fasilitas membuat kopi dan teh", "Kursi lengan dan sandaran", "Air mineral"],
      image: "assets/images/room-deluxe.svg", priceNote: "Harga tercantum pada tabel Room Rate dokumen. Konfirmasi kembali sebelum reservasi."
    },
    {
      id: "twin-bed", name: "Twin Bed Room", price: 80000, priceLabel: "Rp80.000",
      capacity: "2 orang", bed: "Dokumen menyebut 1 tempat tidur ukuran king (2 m × 2 m)", floor: "Tidak dicantumkan",
      description: "Dokumen mencantumkan nama Twin Bed Room, tetapi rincian tempat tidurnya tertulis satu tempat tidur ukuran king. Konfigurasi tempat tidur perlu dikonfirmasi kepada hotel.",
      view: "Gunung Welirang dan Penanggungan",
      features: ["Akses lounge eksekutif", "Lemari penyimpan pakaian", "Lemari penyimpanan laptop", "Jaringan internet", "AC dengan pengontrol suhu", "Kasur tambahan", "Perlengkapan mandi standar", "Air panas dan normal", "Soft shower", "Snack dan teh pagi", "Fasilitas membuat kopi dan teh", "Kursi lengan dan sandaran", "Air mineral"],
      image: "assets/images/room-twin.svg", priceNote: "Harga tercantum pada tabel Room Rate dokumen. Konfigurasi tempat tidur perlu dikonfirmasi."
    },
    {
      id: "without-large-beds", name: "Rooms Without Large Beds", price: 60000, priceLabel: "Rp60.000",
      capacity: "8 orang", bed: "8 kasur; ukuran masing-masing tertulis 2 m × 2 m", floor: "Tidak dicantumkan",
      description: "Pilihan kamar untuk kebutuhan menginap bersama rombongan. Dokumen mencantumkan delapan kasur dan kapasitas delapan orang.",
      view: "Tidak dicantumkan",
      features: ["Lemari penyimpan pakaian", "Lemari penyimpanan laptop", "Jaringan internet", "Kasur tambahan", "Perlengkapan mandi standar", "Air panas dan normal", "Soft shower", "Snack dan teh pagi", "Fasilitas membuat kopi dan teh", "Kursi lengan dan sandaran", "Air mineral"],
      image: "assets/images/room-group.svg", priceNote: "Tabel tarif mencantumkan 'Room without bed' Rp60.000. Hubungan tarif dengan kategori ini perlu dikonfirmasi."
    },
    {
      id: "without-beds-small", name: "Rooms Without Beds Are Small", price: null, priceLabel: "Hubungi hotel",
      capacity: "6 orang", bed: "6 kasur; ukuran masing-masing tertulis 2 m × 2 m", floor: "Tidak dicantumkan",
      description: "Dokumen mencantumkan enam kasur, kapasitas enam orang, dan pemandangan Gunung Welirang serta Penanggungan.",
      view: "Gunung Welirang dan Penanggungan",
      features: ["Lemari penyimpan pakaian", "Lemari penyimpanan laptop", "Jaringan internet", "Kasur tambahan", "Perlengkapan mandi standar", "Air panas dan normal", "Soft shower", "Snack dan teh pagi", "Fasilitas membuat kopi dan teh", "Kursi lengan dan sandaran", "Air mineral"],
      image: "assets/images/room-group.svg", priceNote: "Harga khusus kategori ini tidak tercantum secara terpisah dalam tabel tarif."
    }
  ],
  facilities: [
    { icon: "⌂", name: "Lobby dan Kantor Depan", description: "Area lobby dan layanan kantor depan hotel." },
    { icon: "▣", name: "Auditorium", description: "Auditorium dengan kapasitas yang disebutkan sekitar 200 orang." },
    { icon: "◈", name: "Ballroom", description: "Ballroom skala besar untuk kegiatan dan acara." },
    { icon: "▤", name: "Ruang Santai", description: "Ruang santai bagi tamu." },
    { icon: "◌", name: "Laundry", description: "Fasilitas/layanan laundry." },
    { icon: "P", name: "Area Parkir Pribadi", description: "Area parkir pribadi." },
    { icon: "▥", name: "Tempat Makan Besar", description: "Tempat makan berukuran besar." },
    { icon: "▦", name: "Tempat Makan Kecil", description: "Tempat makan berukuran kecil." },
    { icon: "▦", name: "Meeting Room Besar", description: "Ruang pertemuan ukuran besar." },
    { icon: "▦", name: "Meeting Room Kecil", description: "Ruang pertemuan ukuran kecil/mini." }
  ],
  serviceRates: [
    ["Ballroom tanpa meja", "Rp2.000.000"],
    ["Ballroom dengan alas dan meja", "Rp3.000.000"],
    ["Soundsystem", "Rp1.000.000"],
    ["Auditorium", "Rp1.000.000"],
    ["Soundsystem (tarif kedua pada dokumen)", "Rp700.000"],
    ["Laundry", "Rp10.000/kg"],
    ["Meeting Room Besar", "Rp500.000"],
    ["Meeting Room Mini", "Rp300.000"],
    ["Eat Buffet", "Rp20.000/orang"],
    ["Aet boxet (ejaan pada dokumen)", "Rp15.000/orang"],
    ["Coffee break", "Rp10.000/orang"],
    ["Sewa seluruh hotel", "Rp3.000.000"]
  ],
  advantages: [
    "Lokasi strategis di kawasan wisata Pacet.",
    "Kesempatan mendapatkan ilmu agama.",
    "Dekat dengan tempat wisata seperti pemandian air panas, air terjun, pemancingan, terapi pijat, dan kolam renang.",
    "Tempat menginap yang nyaman dengan fasilitas memadai dan harga kompetitif.",
    "Makanan dengan menu Indonesia.",
    "Free Wi-Fi 24 jam."
  ],
  rules: [
    "Dilarang membuang sampah sembarangan.",
    "Dilarang mengadakan kegiatan yang dilarang agama.",
    "Dilarang merokok di area pesantren.",
    "Dilarang masuk area asrama santri putra maupun putri.",
    "Dilarang membawa binatang kesayangan, minuman keras, benda-benda tajam, serta obat-obatan terlarang.",
    "Dilarang merusak atau mengubah fasilitas milik hotel dan pesantren.",
    "Dilarang bersuara atau menyalakan audio speaker dengan keras.",
    "Apabila tamu menghilangkan atau merusak fasilitas hotel, tamu wajib mempertanggungjawabkannya kepada pengelola hotel.",
    "Tamu diharapkan menjaga barang miliknya sendiri.",
    "Tidak keluar area pesantren setelah pukul 24.00.",
    "Wajib menaati aturan hotel dan pesantren."
  ],
  gallery: [
    { title: "Kamar Standard", image: "assets/images/room-standard.svg" },
    { title: "Kamar VIP Suite", image: "assets/images/room-vip.svg" },
    { title: "Ruang Pertemuan", image: "assets/images/facility-meeting.svg" },
    { title: "Ilustrasi Area Hotel", image: "assets/images/hotel-exterior.svg" }
  ]
};
