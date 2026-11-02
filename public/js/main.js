document.addEventListener("DOMContentLoaded", () => {
  const cfg = window.HOTEL_CONFIG;
  const data = window.HOTEL_DATA;
  const money = value => new Intl.NumberFormat("id-ID", {
    style: "currency", currency: "IDR", maximumFractionDigits: 0
  }).format(value);

  document.querySelectorAll("[data-hotel-name]").forEach(el => el.textContent = cfg.name);
  document.querySelectorAll("[data-whatsapp-link]").forEach(el => {
    el.href = `https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent("Assalamu'alaikum, saya ingin bertanya tentang Hotel Rijan.")}`;
    el.target = "_blank";
    el.rel = "noopener";
  });

  const roomGrid = document.querySelector("#roomGrid");
  if (roomGrid) {
    roomGrid.innerHTML = data.rooms.map(room => `
      <article class="room-card">
        <a class="room-image" href="room-detail.html?id=${encodeURIComponent(room.id)}">
          <img src="${room.image}" alt="${room.name}" loading="lazy">
          <span class="image-tag">Hotel Rijan</span>
        </a>
        <div class="room-card-body">
          <div class="room-card-top">
            <h3>${room.name}</h3>
            <span class="room-capacity">${room.capacity}</span>
          </div>
          <p>${room.description}</p>
          <div class="room-card-bottom">
            <div><small>${room.price ? "Tarif pada dokumen" : "Tarif"}</small><strong>${room.price ? money(room.price) : "Hubungi hotel"}</strong></div>
            <a class="text-link" href="room-detail.html?id=${encodeURIComponent(room.id)}">Lihat detail <span>↗</span></a>
          </div>
        </div>
      </article>`).join("");
  }

  const facilityGrid = document.querySelector("#facilityGrid");
  if (facilityGrid) {
    facilityGrid.innerHTML = data.facilities.map(item => `
      <article class="facility-card">
        <span class="facility-icon">${item.icon}</span>
        <h3>${item.name}</h3><p>${item.description}</p>
      </article>`).join("");
  }

  const serviceRateBody = document.querySelector("#serviceRateBody");
  if (serviceRateBody) serviceRateBody.innerHTML = data.serviceRates.map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("");

  const advantageList = document.querySelector("#advantageList");
  if (advantageList) advantageList.innerHTML = data.advantages.map(item => `<li>${item}</li>`).join("");

  const rulesList = document.querySelector("#rulesList");
  if (rulesList) rulesList.innerHTML = data.rules.map(item => `<li>${item}</li>`).join("");

  const galleryGrid = document.querySelector("#galleryGrid");
  if (galleryGrid) {
    galleryGrid.innerHTML = data.gallery.map(item => `
      <figure class="gallery-item"><img src="${item.image}" alt="${item.title}" loading="lazy">
      <figcaption>${item.title}</figcaption></figure>`).join("");
  }

  const detail = document.querySelector("#roomDetail");
  if (detail) {
    const id = new URLSearchParams(location.search).get("id");
    const room = data.rooms.find(item => item.id === id) || data.rooms[0];
    document.title = `${room.name} | Hotel Rijan`;
    detail.innerHTML = `
      <div class="detail-image"><img src="${room.image}" alt="${room.name}"></div>
      <div class="detail-copy">
        <span class="eyebrow">PILIHAN KAMAR HOTEL RIJAN</span>
        <h1>${room.name}</h1>
        <p class="detail-description">${room.description}</p>
        <div class="detail-price">${room.price ? money(room.price) : "Hubungi hotel"} <small>— tarif pada company profile, wajib dikonfirmasi kepada hotel</small></div>
        <div class="detail-facts"><span>♙ ${room.capacity}</span><span>▣ ${room.bed}</span><span>⌖ ${room.view}</span><span>⌂ ${room.floor}</span></div>
        <h3>Fasilitas kamar</h3>
        <ul class="feature-list">${room.features.map(f => `<li>${f}</li>`).join("")}</ul>
        <p class="notice">${room.priceNote}</p>
        <a class="button button-gold" href="https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent("Assalamu'alaikum, saya ingin menanyakan ketersediaan " + room.name + " di Hotel Rijan.")}" target="_blank" rel="noopener">Tanyakan kamar via WhatsApp ↗</a>
      </div>`;
  }

  const bookingForm = document.querySelector("#bookingForm");
  if (bookingForm) {
    const select = bookingForm.querySelector('[name="room"]');
    select.innerHTML = data.rooms.map(r => `<option value="${r.name}">${r.name}</option>`).join("");
    bookingForm.addEventListener("submit", event => {
      event.preventDefault();
      const form = new FormData(bookingForm);
      const message = [
        "Assalamu'alaikum, saya ingin mengajukan permintaan reservasi Hotel Rijan.",
        `Nama: ${form.get("name")}`,
        `Nomor telepon: ${form.get("phone")}`,
        `Tipe kamar: ${form.get("room")}`,
        `Check-in: ${form.get("checkin")}`,
        `Check-out: ${form.get("checkout")}`,
        `Jumlah tamu: ${form.get("guests")}`,
        `Catatan: ${form.get("note") || "-"}`
      ].join("\n");
      window.open(`https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    });
  }

  const year = document.querySelector("#currentYear");
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
  }
});
