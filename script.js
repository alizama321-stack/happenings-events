const WHATSAPP_NUMBER = "923302894915";
const body = document.body;
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

const services = [
  ["WD", "Wedding Decorations", "Stages, seating, tablescapes and floral entrances.", "assets/happenings-catering-1.webp"],
  ["BR", "Bridal Room Decorations", "Room florals, candles, petals and personalized details.", "assets/flowerart-wedding.jpg"],
  ["MM", "Mehndi & Mayun Decorations", "Colourful canopies, floor seating, props and festive light.", "assets/happenings-before-after.jpg"],
  ["BT", "Barat Decorations", "Grand entrances, couple stages and premium floral panels.", "assets/happenings-catering-3.webp"],
  ["WL", "Walima Decorations", "Elegant reception staging, dining ambience and polished service.", "assets/happenings-catering-4.webp"],
  ["BD", "Birthday Decorations", "Theme corners, dessert tables, balloons and fresh florals.", "assets/flowerart-purple.jpg"],
  ["EN", "Engagement Events", "Baat Pakki and engagement styling for rooftops and homes.", "assets/happenings-baat-pakki.jpg"],
  ["CO", "Corporate Events", "Launch decor, branded flowers and guest seating.", "assets/happenings-catering-2.webp"],
  ["FF", "Fresh Flower Decorations", "Seasonal florals, bridal bouquets and premium upgrades.", "assets/flowerart-daily.jpg"],
  ["CP", "Customized Event Packages", "Decor, flowers, catering and add-ons shaped around your brief.", "assets/happenings-decor.webp"],
];

const packages = [
  {
    id: "signature-wedding",
    name: "Signature Wedding Decor",
    event: "Wedding",
    service: "Wedding Decorations",
    price: 450000,
    image: "assets/happenings-catering-1.webp",
    style: "Soft premium outdoor wedding",
    flowers: "Fresh seasonal mix available",
    capacity: "120 - 300 guests",
    venues: ["Garden Villa", "Luxury Banquet", "Home Rooftop"],
    inclusions: ["Stage backdrop", "Couple seating", "Guest tablescape", "Entrance florals", "Lighting plan"],
    addons: ["Fresh flower upgrade", "Photo corner", "Sound and DJ", "Waiter service"],
    video: true,
  },
  {
    id: "bridal-room-romance",
    name: "Bridal Room Romance",
    event: "Bridal Room",
    service: "Bridal Room Decorations",
    price: 85000,
    image: "assets/flowerart-wedding.jpg",
    style: "Rose-led intimate room styling",
    flowers: "Roses, baby's breath and candles",
    capacity: "Bedroom or suite setup",
    venues: ["Home", "Hotel Suite"],
    inclusions: ["Bed styling", "Petal trail", "Candles", "Fresh bouquet", "Name initials"],
    addons: ["Imported roses", "Mirror sign", "Cake table", "Photography corner"],
    video: true,
  },
  {
    id: "mehndi-color-story",
    name: "Mehndi & Mayun Color Story",
    event: "Mehndi",
    service: "Mehndi & Mayun Decorations",
    price: 275000,
    image: "assets/happenings-before-after.jpg",
    style: "Vibrant canopy and floor seating",
    flowers: "Marigold-inspired fresh and artificial mix",
    capacity: "80 - 250 guests",
    venues: ["Home Rooftop", "Open Lawn", "Community Hall"],
    inclusions: ["Canopy", "Floor seating", "Color props", "Fairy lights", "Dholki corner"],
    addons: ["Live dhol", "Dance floor", "Welcome board", "Chai station"],
    video: true,
  },
  {
    id: "barat-royal-stage",
    name: "Barat Royal Stage",
    event: "Barat",
    service: "Barat Decorations",
    price: 520000,
    image: "assets/happenings-catering-3.webp",
    style: "Formal stage and entrance production",
    flowers: "Premium fresh flower panels available",
    capacity: "150 - 500 guests",
    venues: ["Luxury Banquet", "Wedding Hall", "Hotel Ballroom"],
    inclusions: ["Royal stage", "Entrance tunnel", "Aisle styling", "Lighting", "Family seating"],
    addons: ["Cold pyro", "Premium tunnel", "LED wall", "Valet desk decor"],
    video: false,
  },
  {
    id: "walima-reception",
    name: "Walima Reception Elegance",
    event: "Walima",
    service: "Walima Decorations",
    price: 620000,
    image: "assets/happenings-catering-4.webp",
    style: "Composed reception and dining ambience",
    flowers: "White, blush and green fresh florals",
    capacity: "180 - 550 guests",
    venues: ["Luxury Banquet", "Marquee", "Hotel Ballroom"],
    inclusions: ["Reception stage", "Dining styling", "Centerpieces", "Entrance florals", "Ambient lights"],
    addons: ["Premium tableware", "Live station styling", "Photo wall", "Guest welcome desk"],
    video: false,
  },
  {
    id: "birthday-luxe",
    name: "Birthday Luxe Setup",
    event: "Birthday",
    service: "Birthday Decorations",
    price: 95000,
    image: "assets/flowerart-purple.jpg",
    style: "Floral, balloon and dessert table setup",
    flowers: "Fresh bouquet and theme florals",
    capacity: "20 - 100 guests",
    venues: ["Home", "Cafe", "Private Room"],
    inclusions: ["Backdrop", "Cake table", "Theme props", "Balloon work", "Fresh flowers"],
    addons: ["Dessert table", "Kids seating", "Photobooth", "Return gifts"],
    video: false,
  },
  {
    id: "engagement-rooftop",
    name: "Engagement Rooftop Baat Pakki",
    event: "Engagement",
    service: "Engagement Events",
    price: 180000,
    image: "assets/happenings-baat-pakki.jpg",
    style: "Soft rooftop ceremony styling",
    flowers: "Fresh pastel flowers optional",
    capacity: "40 - 160 guests",
    venues: ["Home Rooftop", "Garden Villa", "Small Hall"],
    inclusions: ["Backdrop", "Couple seating", "Floral arch", "Table styling", "String lights"],
    addons: ["Fresh flower arch", "Welcome board", "Tea table", "Family photo area"],
    video: true,
  },
  {
    id: "corporate-floral-launch",
    name: "Corporate Floral Launch",
    event: "Corporate",
    service: "Corporate Events",
    price: 240000,
    image: "assets/happenings-catering-2.webp",
    style: "Clean floral styling for brand events",
    flowers: "Fresh branded floral installations",
    capacity: "60 - 250 guests",
    venues: ["Hotel Ballroom", "Office Atrium", "Banquet"],
    inclusions: ["Stage styling", "Brand floral desk", "Guest seating", "Entry florals", "Photo wall"],
    addons: ["Backdrop printing", "Podium flowers", "Corporate hampers", "Media wall"],
    video: false,
  },
  {
    id: "fresh-flower-premium",
    name: "Fresh Flower Premium Decor",
    event: "Fresh Flowers",
    service: "Fresh Flower Decorations",
    price: 160000,
    image: "assets/flowerart-daily.jpg",
    style: "FlowerArt-led fresh floral upgrade",
    flowers: "Seasonal, premium roses, orchids or imported mix",
    capacity: "Add-on for any event",
    venues: ["Home", "Banquet", "Rooftop", "Hotel"],
    inclusions: ["Fresh centerpieces", "Bouquets", "Entrance flowers", "Stage flowers", "Gift flowers"],
    addons: ["Bridal bouquet", "Car flowers", "Imported orchids", "Same-day flower delivery"],
    video: true,
  },
];

const venues = [
  {
    id: "garden-villa",
    name: "Garden Villa",
    location: "DHA / Clifton style outdoor homes",
    capacity: 180,
    price: 180000,
    image: "assets/happenings-catering-1.webp",
    packages: ["Signature Wedding Decor", "Engagement Rooftop Baat Pakki", "Fresh Flower Premium Decor"],
  },
  {
    id: "home-rooftop",
    name: "Home Rooftop",
    location: "Bahadurabad, PECHS, North Nazimabad, DHA",
    capacity: 120,
    price: 85000,
    image: "assets/happenings-baat-pakki.jpg",
    packages: ["Engagement Rooftop Baat Pakki", "Mehndi & Mayun Color Story", "Birthday Luxe Setup"],
  },
  {
    id: "luxury-banquet",
    name: "Luxury Banquet",
    location: "Karachi banquet venues",
    capacity: 500,
    price: 300000,
    image: "assets/happenings-catering-4.webp",
    packages: ["Barat Royal Stage", "Walima Reception Elegance", "Signature Wedding Decor"],
  },
  {
    id: "hotel-ballroom",
    name: "Hotel Ballroom",
    location: "Central Karachi and Clifton hotels",
    capacity: 350,
    price: 260000,
    image: "assets/happenings-catering-3.webp",
    packages: ["Walima Reception Elegance", "Corporate Floral Launch", "Barat Royal Stage"],
  },
  {
    id: "intimate-home",
    name: "Intimate Home Event",
    location: "Private family homes",
    capacity: 70,
    price: 65000,
    image: "assets/flowerart-purple.jpg",
    packages: ["Bridal Room Romance", "Birthday Luxe Setup", "Fresh Flower Premium Decor"],
  },
  {
    id: "open-lawn",
    name: "Open Lawn",
    location: "Outdoor lawns and community spaces",
    capacity: 250,
    price: 190000,
    image: "assets/happenings-before-after.jpg",
    packages: ["Mehndi & Mayun Color Story", "Signature Wedding Decor", "Engagement Rooftop Baat Pakki"],
  },
];

const cateringPackages = [
  {
    id: "tea-snacks",
    name: "Tea & Snacks",
    pricePerHead: 1450,
    description: "Best for Baat Pakki, engagement and intimate home events.",
    menu: ["Tea and coffee", "Mini sandwiches", "Samosa or rolls", "Cake bites", "Soft drinks"],
  },
  {
    id: "classic-dinner",
    name: "Classic Dinner",
    pricePerHead: 2850,
    description: "Balanced dinner package for weddings and family functions.",
    menu: ["Chicken biryani", "Chicken handi", "BBQ item", "Naan", "Dessert"],
  },
  {
    id: "premium-wedding",
    name: "Premium Wedding Menu",
    pricePerHead: 4600,
    description: "Richer buffet selection for Barat, Walima and larger events.",
    menu: ["Mutton or beef dish", "Chicken main", "Rice", "Live station", "Dessert bar"],
  },
  {
    id: "corporate-bites",
    name: "Corporate Bites",
    pricePerHead: 2350,
    description: "Clean service menu for launches, meetings and brand gatherings.",
    menu: ["Canapes", "Mini burgers", "Pasta cups", "Dessert cups", "Beverages"],
  },
];

const gallery = [
  ["Wedding", "Garden wedding dining", "assets/happenings-catering-1.webp", "4 / 5"],
  ["Wedding", "Soft floral tablescape", "assets/happenings-catering-2.webp", "1 / 1"],
  ["Mehndi", "Colorful canopy setup", "assets/happenings-before-after.jpg", "3 / 5"],
  ["Engagement", "Rooftop Baat Pakki", "assets/happenings-baat-pakki.jpg", "3 / 4"],
  ["Fresh Flower Arrangements", "Bridal bouquet", "assets/flowerart-wedding.jpg", "1 / 1"],
  ["Fresh Flower Arrangements", "Daily fresh flowers", "assets/flowerart-daily.jpg", "1 / 1"],
  ["Birthday", "Purple floral birthday mood", "assets/flowerart-purple.jpg", "1 / 1"],
  ["Walima", "Reception dining service", "assets/happenings-catering-4.webp", "4 / 5"],
  ["Corporate Events", "Floral launch tablescape", "assets/happenings-catering-3.webp", "4 / 5"],
];

const reviews = [
  ["Ayesha K.", "Nikkah decor", "The team understood the soft floral mood we wanted and turned the home setup into something premium without making it feel overdone."],
  ["Maham S.", "Baat Pakki", "The quote was clear, the setup looked exactly like the reference, and the WhatsApp coordination was easy for the family."],
  ["Hassan R.", "Walima", "Dining, decor and guest seating were managed smoothly. The best part was seeing options and price ranges before finalizing."],
];

const sampleInquiries = [
  ["#1048", "Nikkah", "Signature Wedding Decor", "Rs. 450,000 - 610,000", "New"],
  ["#1047", "Mehndi", "Mehndi & Mayun Color Story", "Rs. 330,000 - 455,000", "Quoted"],
  ["#1046", "Walima", "Walima Reception Elegance", "Rs. 900,000 - 1,180,000", "Follow-up"],
];

const state = {
  packageId: packages[0].id,
  venueId: venues[0].id,
  cateringId: cateringPackages[1].id,
  eventType: packages[0].service,
  guests: 150,
  flowerCost: 45000,
  packageBudget: "all",
  addons: [],
  estimate: { low: 0, high: 0 },
};

const formatMoney = (value) => `Rs. ${Math.round(value).toLocaleString("en-PK")}`;

const getPackage = (id = state.packageId) => packages.find((item) => item.id === id) || packages[0];
const getVenue = (id = state.venueId) => venues.find((item) => item.id === id) || venues[0];
const getCatering = (id = state.cateringId) => cateringPackages.find((item) => item.id === id) || cateringPackages[0];
const carouselStore = new WeakMap();

const makeWhatsAppUrl = (context = {}) => {
  const selectedPackage = context.package || getPackage();
  const selectedVenue = context.venue || getVenue();
  const selectedCatering = context.catering || (state.cateringId === "none" ? { name: "No catering selected" } : getCatering());
  const eventType = context.eventType || state.eventType || selectedPackage.service;
  const guests = context.guests || state.guests;
  const budget = context.budget || `${formatMoney(state.estimate.low)} - ${formatMoney(state.estimate.high)}`;

  const message = [
    "Hi Happenings, I want an instant quote.",
    "",
    `Event type: ${eventType}`,
    `Selected package: ${selectedPackage.name}`,
    `Venue: ${selectedVenue.name} (${selectedVenue.location})`,
    `Guest count: ${guests}`,
    `Catering: ${selectedCatering.name}`,
    `Budget range: ${budget}`,
    `Add-ons: ${state.addons.length ? state.addons.join(", ") : "Not selected yet"}`,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const trackEvent = (eventName, payload = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...payload });
};

const updateStickyVisibility = () => {
  const sticky = document.querySelector("[data-whatsapp-floating]");
  const finder = document.querySelector("[data-hero-finder]");
  if (!sticky || !finder) return;
  const finderRect = finder.getBoundingClientRect();
  const bottomSafeArea = window.innerHeight - 92;
  const wouldCoverFinder = finderRect.top < window.innerHeight && finderRect.bottom > bottomSafeArea;
  sticky.classList.toggle("is-hidden", wouldCoverFinder);
};

const visibleCarouselCards = (carousel) => {
  const track = carousel.querySelector("[data-carousel-track]");
  if (!track) return [];
  return [...track.children].filter((card) => card.classList.contains("carousel-card") && !card.hidden && !card.classList.contains("is-hidden"));
};

const activeCarouselIndex = (carousel) => {
  const track = carousel.querySelector("[data-carousel-track]");
  const cards = visibleCarouselCards(carousel);
  if (!track || cards.length === 0) return 0;
  return cards.reduce((closest, card, index) => {
    const distance = Math.abs(card.offsetLeft - track.scrollLeft);
    return distance < closest.distance ? { index, distance } : closest;
  }, { index: 0, distance: Number.POSITIVE_INFINITY }).index;
};

const updateCarouselDots = (carousel) => {
  const dots = carousel.querySelector("[data-carousel-dots]");
  if (!dots) return;
  const active = activeCarouselIndex(carousel);
  dots.querySelectorAll(".carousel-dot").forEach((dot, index) => {
    const isActive = index === active;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-current", isActive ? "true" : "false");
  });
};

const scrollCarouselTo = (carousel, index, behavior = "smooth") => {
  const track = carousel.querySelector("[data-carousel-track]");
  const cards = visibleCarouselCards(carousel);
  if (!track || cards.length === 0) return;
  const bounded = ((index % cards.length) + cards.length) % cards.length;
  track.scrollTo({ left: cards[bounded].offsetLeft, behavior });
  window.setTimeout(() => updateCarouselDots(carousel), behavior === "smooth" ? 260 : 0);
};

const refreshCarousel = (carousel) => {
  const dots = carousel.querySelector("[data-carousel-dots]");
  const cards = visibleCarouselCards(carousel);
  if (dots) {
    dots.innerHTML = cards
      .map((_, index) => `<button class="carousel-dot" type="button" aria-label="Go to slide ${index + 1}" data-carousel-dot="${index}"></button>`)
      .join("");
  }
  scrollCarouselTo(carousel, 0, "auto");
  updateCarouselDots(carousel);
};

const setupCarousel = (carousel) => {
  if (carouselStore.has(carousel)) {
    refreshCarousel(carousel);
    return;
  }

  const track = carousel.querySelector("[data-carousel-track]");
  const prev = carousel.querySelector("[data-carousel-prev]");
  const next = carousel.querySelector("[data-carousel-next]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let timer = null;
  let isPaused = false;

  const pause = () => {
    isPaused = true;
    if (timer) window.clearInterval(timer);
    timer = null;
  };

  const play = () => {
    if (reduceMotion || carousel.dataset.autoplay !== "true" || isPaused) return;
    if (timer) window.clearInterval(timer);
    timer = window.setInterval(() => {
      scrollCarouselTo(carousel, activeCarouselIndex(carousel) + 1);
    }, 5000);
  };

  prev?.addEventListener("click", () => {
    pause();
    scrollCarouselTo(carousel, activeCarouselIndex(carousel) - 1);
  });

  next?.addEventListener("click", () => {
    pause();
    scrollCarouselTo(carousel, activeCarouselIndex(carousel) + 1);
  });

  carousel.addEventListener("click", (event) => {
    const dot = event.target.closest("[data-carousel-dot]");
    if (!dot) return;
    pause();
    scrollCarouselTo(carousel, Number(dot.getAttribute("data-carousel-dot") || 0));
  });

  carousel.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    pause();
    event.preventDefault();
    scrollCarouselTo(carousel, activeCarouselIndex(carousel) + (event.key === "ArrowRight" ? 1 : -1));
  });

  track?.addEventListener("scroll", () => {
    window.requestAnimationFrame(() => updateCarouselDots(carousel));
  }, { passive: true });

  ["mouseenter", "focusin", "pointerdown", "touchstart"].forEach((eventName) => carousel.addEventListener(eventName, pause, { passive: true }));
  ["mouseleave", "focusout"].forEach((eventName) => carousel.addEventListener(eventName, () => {
    isPaused = false;
    play();
  }));

  carouselStore.set(carousel, { refresh: () => refreshCarousel(carousel) });
  refreshCarousel(carousel);
  play();
};

const setupCarousels = () => {
  document.querySelectorAll("[data-carousel]").forEach(setupCarousel);
};

const refreshNamedCarousel = (name) => {
  const carousel = document.querySelector(`[data-carousel="${name}"]`);
  if (carousel) refreshCarousel(carousel);
};

const setupHeroParallax = () => {
  const hero = document.querySelector("[data-couture-hero]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!hero || reduceMotion) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let raf = null;

  const animate = () => {
    currentX += (targetX - currentX) * 0.12;
    currentY += (targetY - currentY) * 0.12;
    hero.style.setProperty("--parallax-x", `${currentX.toFixed(2)}px`);
    hero.style.setProperty("--parallax-y", `${currentY.toFixed(2)}px`);
    hero.style.setProperty("--chip-x", `${(currentX * 1.18).toFixed(2)}px`);
    hero.style.setProperty("--chip-y", `${(currentY * 1.18).toFixed(2)}px`);

    if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
      raf = window.requestAnimationFrame(animate);
    } else {
      raf = null;
    }
  };

  const start = () => {
    if (!raf) raf = window.requestAnimationFrame(animate);
  };

  hero.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    targetX = Math.max(-24, Math.min(24, x * 48));
    targetY = Math.max(-18, Math.min(18, y * 36));
    start();
  }, { passive: true });

  hero.addEventListener("pointerleave", () => {
    targetX = 0;
    targetY = 0;
    start();
  });
};

const setupScrollReveals = () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealTargets = document.querySelectorAll([
    ".quote-band",
    ".visual-intro",
    ".section",
    ".estimator-section",
    ".service-card",
    ".package-card",
    ".venue-card",
    ".catering-card",
    ".gallery-item",
    ".review-card",
  ].join(","));

  revealTargets.forEach((target) => target.setAttribute("data-reveal", ""));

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((target) => target.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-revealed");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });

  revealTargets.forEach((target) => observer.observe(target));
};

const serviceBadge = (code) => `
  <span class="service-badge" aria-hidden="true">
    <svg viewBox="0 0 64 64" focusable="false">
      <path d="M32 6c13 8 20 17 20 27 0 15-10 25-20 25S12 48 12 33C12 23 19 14 32 6Z" />
      <path d="M20 36c9-3 15-10 17-21 6 9 6 19 0 30" />
      <text x="32" y="39">${code}</text>
    </svg>
  </span>
`;

const renderServices = () => {
  const grid = document.querySelector("[data-service-grid]");
  if (!grid) return;
  grid.innerHTML = services
    .map(([code, name, description, image]) => `
      <article class="service-card">
        <img src="${image}" alt="${name}" loading="lazy">
        ${serviceBadge(code)}
        <div>
          <h3>${name}</h3>
          <p>${description}</p>
        </div>
      </article>
    `)
    .join("");
};

const packageCard = (item) => `
  <article class="package-card carousel-card" data-package-card data-name="${item.name.toLowerCase()}" data-event="${item.event}" data-price="${item.price}">
    <div class="package-media">
      <img src="${item.image}" alt="${item.name} setup photo" loading="lazy">
      <span class="media-tag">${item.event}</span>
      <span class="price-tag">From ${formatMoney(item.price)}</span>
      ${item.video ? '<span class="video-tag">Photo + video setup</span>' : ""}
    </div>
    <div class="package-body">
      <div class="card-meta">
        <span>${item.style}</span>
        <span>${item.capacity}</span>
      </div>
      <h3>${item.name}</h3>
      <p>${item.flowers}</p>
      <div class="inclusion-list" aria-label="Package inclusions">
        ${item.inclusions.slice(0, 4).map((value) => `<span>${value}</span>`).join("")}
      </div>
      <div class="addon-list" aria-label="Custom add-ons">
        ${item.addons.slice(0, 3).map((value) => `<span>${value}</span>`).join("")}
      </div>
      <div class="package-actions">
        <button class="small-button" type="button" data-view-package="${item.id}">View package</button>
        <a class="small-button primary" href="${makeWhatsAppUrl({ package: item, eventType: item.service })}" data-package-whatsapp="${item.id}">Inquire on WhatsApp</a>
      </div>
    </div>
  </article>
`;

const renderPackages = () => {
  const grid = document.querySelector("[data-package-grid]");
  if (!grid) return;
  grid.innerHTML = packages.map(packageCard).join("");
  refreshNamedCarousel("packages");
};

const renderVenues = () => {
  const grid = document.querySelector("[data-venue-grid]");
  if (!grid) return;
  grid.innerHTML = venues
    .map((venue) => `
      <article class="venue-card carousel-card" data-venue-card data-capacity="${venue.capacity}">
        <div class="venue-media">
          <img src="${venue.image}" alt="${venue.name} venue decoration option" loading="lazy">
          <span class="media-tag">${venue.capacity} guests</span>
          <span class="price-tag">Est. ${formatMoney(venue.price)}</span>
        </div>
        <div class="venue-body">
          <div class="venue-meta">
            <span>${venue.location}</span>
            <span>${venue.packages.length} compatible packages</span>
          </div>
          <h3>${venue.name}</h3>
          <p>Available decoration packages: ${venue.packages.join(", ")}.</p>
          <div class="venue-actions">
            <button class="small-button" type="button" data-use-venue="${venue.id}">Use in estimator</button>
            <a class="small-button primary" href="${makeWhatsAppUrl({ venue })}" data-venue-whatsapp="${venue.id}">Request Venue Quote</a>
          </div>
        </div>
      </article>
    `)
    .join("");
  refreshNamedCarousel("venues");
};

const renderCatering = () => {
  const grid = document.querySelector("[data-catering-grid]");
  const select = document.querySelector("[data-catering-select]");
  if (grid) {
    grid.innerHTML = cateringPackages
      .map((item) => `
        <article class="catering-card">
          <div class="card-meta">
            <span>${formatMoney(item.pricePerHead)} per head</span>
            <span>Add to package</span>
          </div>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <ul class="menu-list">
            ${item.menu.map((line) => `<li>${line}</li>`).join("")}
          </ul>
          <div class="catering-actions">
            <button class="small-button" type="button" data-use-catering="${item.id}">Select menu</button>
            <a class="small-button primary" href="${makeWhatsAppUrl({ catering: item })}" data-catering-whatsapp="${item.id}">Ask Menu Quote</a>
          </div>
        </article>
      `)
      .join("");
  }

  if (select) {
    select.innerHTML = cateringPackages.map((item) => `<option value="${item.id}">${item.name}</option>`).join("");
    select.value = state.cateringId;
  }
};

const renderEstimatorOptions = () => {
  const eventSelect = document.querySelector("[data-estimator-event]");
  const venueSelect = document.querySelector("[data-estimator-venue]");
  const packageSelect = document.querySelector("[data-estimator-package]");
  const cateringSelect = document.querySelector("[data-estimator-catering]");

  if (eventSelect) {
    eventSelect.innerHTML = services.map(([, name]) => `<option>${name}</option>`).join("");
    eventSelect.value = state.eventType;
  }

  if (venueSelect) {
    venueSelect.innerHTML = venues.map((item) => `<option value="${item.id}">${item.name} - ${item.capacity} guests</option>`).join("");
    venueSelect.value = state.venueId;
  }

  if (packageSelect) {
    packageSelect.innerHTML = packages.map((item) => `<option value="${item.id}">${item.name} - from ${formatMoney(item.price)}</option>`).join("");
    packageSelect.value = state.packageId;
  }

  if (cateringSelect) {
    cateringSelect.innerHTML = ['<option value="none">No catering</option>']
      .concat(cateringPackages.map((item) => `<option value="${item.id}">${item.name} - ${formatMoney(item.pricePerHead)}/head</option>`))
      .join("");
    cateringSelect.value = state.cateringId;
  }
};

const renderGallery = () => {
  const filterWrap = document.querySelector("[data-gallery-filters]");
  const grid = document.querySelector("[data-gallery-grid]");
  if (!filterWrap || !grid) return;

  const categories = ["All"].concat([...new Set(gallery.map(([category]) => category))]);
  filterWrap.innerHTML = categories
    .map((category, index) => `<button class="filter-button${index === 0 ? " is-active" : ""}" type="button" data-gallery-filter="${category}">${category}</button>`)
    .join("");

  grid.innerHTML = gallery
    .map(([category, title, image, ratio]) => `
      <article class="gallery-item carousel-card gallery-card" data-gallery-item data-category="${category}" style="--ratio: ${ratio}">
        <img src="${image}" alt="${title}" loading="lazy">
        <div>
          <span>${category}</span>
          <strong>${title}</strong>
        </div>
      </article>
    `)
    .join("");
  refreshNamedCarousel("gallery");
};

const renderReviews = () => {
  const grid = document.querySelector("[data-review-grid]");
  if (!grid) return;
  grid.innerHTML = reviews
    .map(([name, event, quote]) => `
      <article class="review-card">
        <div class="stars">5.0 / 5.0</div>
        <h3>${name}</h3>
        <p><strong>${event}</strong></p>
        <p>${quote}</p>
      </article>
    `)
    .join("");
};

const renderAdmin = () => {
  const counters = {
    packages: packages.length,
    venues: venues.length,
    pricing: packages.length + cateringPackages.length,
    inquiries: sampleInquiries.length,
  };

  Object.entries(counters).forEach(([key, value]) => {
    const target = document.querySelector(`[data-admin-count="${key}"]`);
    if (target) target.textContent = value;
  });

  const bodyTarget = document.querySelector("[data-admin-inquiries]");
  if (!bodyTarget) return;
  bodyTarget.innerHTML = sampleInquiries
    .map(([id, event, pkg, budget, status]) => `
      <tr>
        <td>${id}</td>
        <td>${event}</td>
        <td>${pkg}</td>
        <td>${budget}</td>
        <td>${status}</td>
      </tr>
    `)
    .join("");
};

const calculateEstimate = () => {
  const selectedPackage = getPackage();
  const selectedVenue = getVenue();
  const selectedCatering = getCatering();
  const guests = Number(state.guests) || 0;
  const cateringCost = state.cateringId === "none" ? 0 : selectedCatering.pricePerHead * guests;
  const addonCost = state.addons.reduce((sum, label) => {
    const input = [...document.querySelectorAll("[name='addon']")].find((item) => item.dataset.addonLabel === label);
    return sum + Number(input?.value || 0);
  }, 0);
  const base = selectedPackage.price + selectedVenue.price + Number(state.flowerCost || 0) + cateringCost + addonCost;
  state.estimate = {
    low: base * 0.92,
    high: base * 1.18,
  };

  const total = document.querySelector("[data-estimate-total]");
  const notes = document.querySelector("[data-estimate-notes]");
  if (total) total.textContent = `${formatMoney(state.estimate.low)} - ${formatMoney(state.estimate.high)}`;
  if (notes) {
    notes.textContent = `${selectedPackage.name}, ${selectedVenue.name}, ${guests} guests${state.cateringId === "none" ? ", no catering" : `, ${selectedCatering.name}`}.`;
  }

  const sticky = document.querySelector("[data-whatsapp-floating]");
  if (sticky) sticky.href = makeWhatsAppUrl();
};

const updateStateFromEstimator = () => {
  const form = document.querySelector("[data-estimator-form]");
  if (!form) return;
  const data = new FormData(form);
  state.eventType = String(data.get("eventType") || state.eventType);
  state.venueId = String(data.get("venue") || state.venueId);
  state.packageId = String(data.get("package") || state.packageId);
  state.flowerCost = Number(data.get("flowers") || 0);
  state.guests = Number(data.get("guests") || state.guests);
  state.cateringId = String(data.get("catering") || "none");
  state.addons = [...form.querySelectorAll("[name='addon']:checked")].map((item) => item.dataset.addonLabel || "Add-on");
  calculateEstimate();
};

const updateCateringCost = () => {
  const guests = Number(document.querySelector("[data-catering-guests]")?.value || 0);
  const id = document.querySelector("[data-catering-select]")?.value || cateringPackages[0].id;
  const menu = getCatering(id);
  const target = document.querySelector("[data-catering-cost]");
  if (target) target.textContent = formatMoney(guests * menu.pricePerHead);
};

const openPackageDialog = (id) => {
  const item = getPackage(id);
  const detail = document.querySelector("[data-package-detail]");
  const dialog = document.querySelector("[data-package-dialog]");
  if (!detail || !dialog) return;

  detail.innerHTML = `
    <div class="dialog-hero">
      <img src="${item.image}" alt="${item.name} detail photo">
      <div class="dialog-body">
        <p class="section-kicker">${item.service}</p>
        <h2>${item.name}</h2>
        <div class="card-meta">
          <span>Starting price: ${formatMoney(item.price)}</span>
          <span>${item.capacity}</span>
          <span>${item.video ? "Photos and videos available" : "Setup photos available"}</span>
        </div>
        <p>${item.style}. ${item.flowers}.</p>
        <h3>Package inclusions</h3>
        <ul class="dialog-list">
          ${item.inclusions.map((value) => `<li>${value}</li>`).join("")}
        </ul>
        <h3>Venue compatibility</h3>
        <p>${item.venues.join(", ")}</p>
        <h3>Custom add-ons</h3>
        <div class="addon-list">
          ${item.addons.map((value) => `<span>${value}</span>`).join("")}
        </div>
        <div class="package-actions">
          <button class="small-button" type="button" data-choose-package="${item.id}">Use in estimator</button>
          <a class="small-button primary" href="${makeWhatsAppUrl({ package: item, eventType: item.service })}">Inquire on WhatsApp</a>
        </div>
      </div>
    </div>
  `;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
};

const applyPackageFilters = () => {
  const search = (document.querySelector("[data-package-search]")?.value || "").toLowerCase().trim();
  const filter = document.querySelector("[data-package-filter]")?.value || "all";
  const cards = [...document.querySelectorAll("[data-package-card]")];
  let shown = 0;

  cards.forEach((card) => {
    const matchesSearch = !search || card.dataset.name.includes(search);
    const matchesFilter = filter === "all" || card.dataset.event === filter;
    const matchesBudget = state.packageBudget === "all" || Number(card.dataset.price || 0) <= Number(state.packageBudget);
    const show = matchesSearch && matchesFilter && matchesBudget;
    card.hidden = !show;
    if (show) shown += 1;
  });

  const grid = document.querySelector("[data-package-grid]");
  const oldEmpty = document.querySelector("[data-package-empty]");
  if (oldEmpty) oldEmpty.remove();
  if (shown === 0 && grid) {
    grid.insertAdjacentHTML("beforeend", '<p class="empty-state" data-package-empty>No matching packages found. Try another event type or budget.</p>');
  }
  refreshNamedCarousel("packages");
};

const bindEvents = () => {
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const packageId = target.closest("[data-view-package]")?.getAttribute("data-view-package");
    if (packageId) openPackageDialog(packageId);

    const choosePackage = target.closest("[data-choose-package]")?.getAttribute("data-choose-package");
    if (choosePackage) {
      state.packageId = choosePackage;
      const packageSelect = document.querySelector("[data-estimator-package]");
      if (packageSelect) packageSelect.value = choosePackage;
      calculateEstimate();
      document.querySelector("[data-package-dialog]")?.close?.();
      document.querySelector("#estimator")?.scrollIntoView({ behavior: "smooth" });
    }

    const venueId = target.closest("[data-use-venue]")?.getAttribute("data-use-venue");
    if (venueId) {
      state.venueId = venueId;
      const venueSelect = document.querySelector("[data-estimator-venue]");
      if (venueSelect) venueSelect.value = venueId;
      calculateEstimate();
      document.querySelector("#estimator")?.scrollIntoView({ behavior: "smooth" });
    }

    const cateringId = target.closest("[data-use-catering]")?.getAttribute("data-use-catering");
    if (cateringId) {
      state.cateringId = cateringId;
      const cateringSelect = document.querySelector("[data-estimator-catering]");
      const quickSelect = document.querySelector("[data-catering-select]");
      if (cateringSelect) cateringSelect.value = cateringId;
      if (quickSelect) quickSelect.value = cateringId;
      calculateEstimate();
      updateCateringCost();
      document.querySelector("#estimator")?.scrollIntoView({ behavior: "smooth" });
    }

    const closeDialog = target.closest("[data-dialog-close]");
    if (closeDialog) {
      const dialog = document.querySelector("[data-package-dialog]");
      if (dialog?.close) dialog.close();
      else dialog?.removeAttribute("open");
    }
  });

  document.querySelector("[data-hero-finder]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const search = String(form.get("search") || "");
    const eventType = String(form.get("eventType") || "all");
    const budget = String(form.get("budget") || "all");
    const searchInput = document.querySelector("[data-package-search]");
    const filterInput = document.querySelector("[data-package-filter]");

    if (searchInput) searchInput.value = search;
    if (filterInput && eventType !== "all") {
      const found = packages.find((item) => item.service === eventType);
      filterInput.value = found?.event || "all";
    }
    state.packageBudget = budget;

    applyPackageFilters();
    trackEvent("hero_finder_submit", { eventType, budget });
    document.querySelector("#packages")?.scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector("[data-package-search]")?.addEventListener("input", applyPackageFilters);
  document.querySelector("[data-package-filter]")?.addEventListener("change", applyPackageFilters);

  document.querySelector("[data-venue-filter]")?.addEventListener("change", (event) => {
    const max = event.target.value;
    document.querySelectorAll("[data-venue-card]").forEach((card) => {
      card.hidden = max !== "all" && Number(card.dataset.capacity || 0) > Number(max);
    });
    refreshNamedCarousel("venues");
  });

  document.querySelector("[data-gallery-filters]")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-gallery-filter]");
    if (!button) return;
    const category = button.getAttribute("data-gallery-filter");
    document.querySelectorAll("[data-gallery-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
    document.querySelectorAll("[data-gallery-item]").forEach((item) => {
      item.classList.toggle("is-hidden", category !== "All" && item.dataset.category !== category);
    });
    refreshNamedCarousel("gallery");
    trackEvent("gallery_filter", { category });
  });

  document.querySelector("[data-estimator-form]")?.addEventListener("input", updateStateFromEstimator);
  document.querySelector("[data-estimator-form]")?.addEventListener("change", updateStateFromEstimator);
  document.querySelector("[data-estimator-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    updateStateFromEstimator();
    trackEvent("instant_quote_submit", { eventType: state.eventType, budget: `${state.estimate.low}-${state.estimate.high}` });
    window.open(makeWhatsAppUrl(), "_blank", "noopener,noreferrer");
  });

  document.querySelector("[data-save-estimate]")?.addEventListener("click", () => {
    updateStateFromEstimator();
    const nextId = `#${1049 + sampleInquiries.length}`;
    sampleInquiries.unshift([
      nextId,
      state.eventType.replace(" Decorations", ""),
      getPackage().name,
      `${formatMoney(state.estimate.low)} - ${formatMoney(state.estimate.high)}`,
      "Saved",
    ]);
    renderAdmin();
    trackEvent("estimate_saved", { inquiry: nextId });
    document.querySelector("#admin")?.scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector("[data-catering-guests]")?.addEventListener("input", updateCateringCost);
  document.querySelector("[data-catering-select]")?.addEventListener("change", updateCateringCost);
  document.querySelector("[data-add-catering]")?.addEventListener("click", () => {
    const quickSelect = document.querySelector("[data-catering-select]");
    const quickGuests = document.querySelector("[data-catering-guests]");
    state.cateringId = quickSelect?.value || state.cateringId;
    state.guests = Number(quickGuests?.value || state.guests);
    const cateringSelect = document.querySelector("[data-estimator-catering]");
    const guestsInput = document.querySelector("[data-estimator-guests]");
    if (cateringSelect) cateringSelect.value = state.cateringId;
    if (guestsInput) guestsInput.value = state.guests;
    calculateEstimate();
    document.querySelector("#estimator")?.scrollIntoView({ behavior: "smooth" });
  });

  window.addEventListener("scroll", updateStickyVisibility, { passive: true });
  window.addEventListener("resize", updateStickyVisibility);
};

renderServices();
renderPackages();
renderVenues();
renderCatering();
renderEstimatorOptions();
renderGallery();
renderReviews();
renderAdmin();
setupHeroParallax();
setupScrollReveals();
setupCarousels();
bindEvents();
updateCateringCost();
updateStateFromEstimator();
updateStickyVisibility();
