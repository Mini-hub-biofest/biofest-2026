// ==========================================================================
// BIOFEST 1.0 — Department of Applied Biology & Bio-Technology, USTM
// Interactive Single-Page App Router, Dynamic Forms, Animations & Effects
// ==========================================================================

const events = {
    futsal: {
        key: "futsal",
        icon: "⚽",
        name: "Futsal",
        description: "Intense 5v5 indoor/turf football tournament with rapid skill, tactics, and teamwork.",
        team: "5 Players",
        teamSize: 5,
        type: "Team Registration",
        listPage: "sports",
        googleForm: "https://docs.google.com/forms/d/e/1FAIpQLScSIRNnWZpU3_XJrtnYO19B8g9UVNioEcl6VfnQCmdZjmuL9Q/viewform"
    },
    badmintondoubles: {
        key: "badmintondoubles",
        icon: "🏸",
        name: "Badminton Doubles",
        description: "Fast-paced doubles badminton showdown focused on skill, teamwork, speed, and precision.",
        team: "2 Players",
        teamSize: 2,
        type: "Doubles Registration",
        listPage: "sports",
        googleForm: "https://forms.gle/bfaososxyqevxmRE6"
    },
    armwrestling: {
        key: "armwrestling",
        icon: "💪",
        name: "Arm Wrestling",
        description: "Pure power, grip, technique, and willpower in the ultimate campus strength showdown.",
        team: "1 Player",
        teamSize: 1,
        type: "Individual Registration",
        listPage: "sports",
        googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSfkGvBADimDK1L2z8WKAmHK6j4o5gf6fHm-K7ThTPYZ5y4gjw/viewform"
    },

    treasurehunt: {
        key: "treasurehunt",
        icon: "🎯",
        name: "Treasure Hunt",
        description: "Crack intricate scientific clues, decode campus riddles, and race against the clock to win.",
        team: "5 Players",
        teamSize: 5,
        type: "Team Registration",
        listPage: "sports",
        googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSfbBmBZZ5NZ2VbTRp9hTCPeeEtSPowa-HEWeiyGZX3ndPKi1Q/viewform"
    },

    bgmi: {
        key: "bgmi",
        icon: "🎯",
        name: "BGMI Championship",
        description: "Intense battle royale survival, gunplay, and squad strategy under esports tournament rules.",
        team: "Squad (4 Players)",
        teamSize: 4,
        type: "Squad Registration",
        listPage: "esports",
        googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSd_tLJ0qYVgHwygc0RrUTr4wAha0ayuqb9k-ooH0hqWBrehvg/viewform"
    },

    efootball: {
        key: "efootball",
        icon: "⚽",
        name: "eFootball Open",
        description: "Virtual football knockout cup. Precision passing, dribbling, and championship goals.",
        team: "Individual",
        teamSize: 1,
        type: "Individual Registration",
        listPage: "esports",
        googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSdV7g9pmT24F8uDN1BG1OwNUJnj3Ki1Kd4j06pO7dXjuWGeJw/viewform"
    },

    quiz: {
        key: "quiz",
        icon: "💡",
        name: "Quiz",
        description: "Test your scientific knowledge, analytical reasoning, and rapid-fire trivia acumen in this university quiz championship.",
        team: "Duo",
        teamSize: 2,
        type: "Duo Registration",
        listPage: "science",
        googleForm: "https://forms.gle/o9QVixTNPk3pU2PP8"
    },

    pitching: {
        key: "pitching",
        icon: "💡",
        name: "Scientific Pitching",
        description: "Pitch your revolutionary scientific concepts, bio-tech startups, and research innovations with stellar presentation skills.",
        team: "Solo",
        teamSize: 1,
        type: "Solo Registration",
        listPage: "science",
        googleForm: "https://forms.gle/y7znAP3EWyPemayJ9"
    },

    foodwaste: {
        key: "foodwaste",
        icon: "♻️",
        name: "Food Waste Innovation & Utilization",
        description: "Present creative, sustainable bio-solutions and technological ideas for food waste management, composting, and valorization.",
        team: "Solo / Duo",
        teamSize: 2,
        type: "Solo / Duo Registration",
        listPage: "science",
        googleForm: "https://forms.gle/yLVDeaNykuK2qCQn7"
    },

    modelmaking: {
        key: "modelmaking",
        icon: "🔬",
        name: "Science Model Making",
        description: "Demonstrate scientific concepts through innovative working or static models and showcase your technical prowess.",
        team: "Solo / Duo",
        teamSize: 2,
        type: "Solo / Duo Registration",
        listPage: "science",
        googleForm: "https://forms.gle/yLVDeaNykuK2qCQn7"
    },

    poster: {
        key: "poster",
        icon: "📊",
        name: "Scientific Poster Presentation",
        description: "Display visual scientific research, bio-innovations, and creative infographics in front of expert judges.",
        team: "Solo / Duo",
        teamSize: 2,
        type: "Solo / Duo Registration",
        listPage: "science",
        googleForm: "https://forms.gle/yLVDeaNykuK2qCQn7"
    },

    dance: {
        key: "dance",
        icon: "💃",
        name: "Dance Showdown",
        description: "Solo, Duo, and Squad dance battle. Rhythm, choreography, synchronization and stage energy.",
        team: "Solo / Duo / Group (5)",
        teamSize: 5,
        type: "Solo / Duo / Group Registration",
        listPage: "cultural",
        googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSckrLPGiyUzCNYEx1NV2AWU3Z7ieTf8AYRkliqd78-Z8u8izw/viewform"
    },

    fashionshow: {
        key: "fashionshow",
        icon: "👠",
        name: "Fashion Show",
        description: "Strut the festival runway with flair, elegance, charisma, and trendsetting ethnic or modern couture.",
        team: "Solo",
        teamSize: 1,
        type: "Solo Registration",
        listPage: "cultural",
        googleForm: "https://forms.gle/esAVRJ4Xn2Ag9bFc9"
    },

    singing: {
        key: "singing",
        icon: "🎤",
        name: "Singing Showdown",
        description: "Showcase your vocal talent across Classical, Western, Bollywood, and Folk in Solo and Group singing categories.",
        team: "Solo / Group",
        teamSize: 5,
        type: "Solo / Group Registration",
        listPage: "cultural",
        googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSckrLPGiyUzCNYEx1NV2AWU3Z7ieTf8AYRkliqd78-Z8u8izw/viewform"
    },

    mun: {
        key: "mun",
        icon: "🏛️",
        name: "Model United Nations (MUN)",
        description: "Engage in diplomatic debate, international relations, crisis resolution, and committee deliberations.",
        team: "Solo / Delegation",
        teamSize: 2,
        type: "Delegate Registration",
        listPage: "cultural",
        googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSckrLPGiyUzCNYEx1NV2AWU3Z7ieTf8AYRkliqd78-Z8u8izw/viewform"
    },

    alumni: {
        key: "alumni",
        icon: "🎓",
        name: "Alumni Registration & Pass",
        description: "Welcome back home to USTM! Reconnect with faculty, departmental colleagues & alumni network, and receive your official BIOFEST 1.0 Alumni Delegate Pass.",
        team: "Individual (Alumni)",
        teamSize: 1,
        type: "Alumni Delegate Pass",
        listPage: "register",
        googleForm: "https://forms.gle/tZvgMBWzz9RehUGi6"
    },

    stalls: {
        key: "stalls",
        icon: "🎪",
        name: "Commercial & Food Stall Booking",
        description: "Book an exclusive kiosk or stall space at USTM Campus during the 3-day festival for food, beverages, student startups, gaming, or merchandise.",
        team: "Vendor / Startup Team",
        teamSize: 1,
        type: "Vendor & Stall Booking",
        listPage: "register",
        googleForm: "https://forms.gle/L4FHENaAKXCnKgkK8"
    }
};

// =========================
// VIEW ROUTER & NAVIGATION
// =========================

function updateActiveNav(routeName) {
    const navLinks = document.querySelectorAll(".nav-link, .nav-cta, .mobile-nav-link");
    navLinks.forEach(link => {
        const linkNav = link.dataset.nav;
        const isMatch = (linkNav === routeName);
        if (isMatch) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

function showView(name) {
    const views = document.querySelectorAll(".view");
    let foundTarget = false;

    views.forEach(view => {
        const v = view.dataset.view;
        const isTarget = (v === name) ||
            ((name === "cultural" || name === "culture") && (v === "cultural")) ||
            ((name === "science") && (v === "science")) ||
            ((name === "esports" || name === "esport") && (v === "esports")) ||
            ((name === "sports" || name === "sport") && (v === "sports"));

        if (isTarget) {
            view.classList.add("active");
            foundTarget = true;
        } else {
            view.classList.remove("active");
        }
    });

    if (!foundTarget) {
        // Fallback to home if target view isn't found
        const homeView = document.getElementById("view-home");
        if (homeView) homeView.classList.add("active");
        updateActiveNav("home");
    } else {
        updateActiveNav(name);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    // Close mobile menu if open
    closeMobileMenu();

    // Re-initialize 3D spotlight card effects for newly visible view
    setupCardSpotlights();
}

// =========================
// MOBILE MENU TOGGLE
// =========================

const mobileToggle = document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");

function toggleMobileMenu() {
    if (!mobileMenu || !mobileToggle) return;
    const isOpen = mobileMenu.classList.toggle("open");
    mobileToggle.classList.toggle("active", isOpen);
    mobileToggle.setAttribute("aria-expanded", String(isOpen));
}

function closeMobileMenu() {
    if (!mobileMenu || !mobileToggle) return;
    mobileMenu.classList.remove("open");
    mobileToggle.classList.remove("active");
    mobileToggle.setAttribute("aria-expanded", "false");
}

if (mobileToggle) {
    mobileToggle.addEventListener("click", toggleMobileMenu);
}

// =========================
// EVENT DETAILS RENDERING
// =========================

function renderEventDetails(eventKey) {
    const event = events[eventKey];

    if (!event) {
        window.location.hash = "#/";
        return;
    }

    const iconEl = document.getElementById("event-icon");
    const nameEl = document.getElementById("event-name");
    const descEl = document.getElementById("event-description");
    const teamEl = document.getElementById("event-team");
    const backBtn = document.getElementById("event-back-button");
    const registerBtn = document.getElementById("register-button");
    const googleFormBtn = document.getElementById("google-form-button");

    if (iconEl) iconEl.textContent = event.icon;
    if (nameEl) nameEl.textContent = event.name;
    if (descEl) descEl.textContent = event.description;
    if (teamEl) teamEl.textContent = event.team;

    if (backBtn) {
        backBtn.href = event.listPage === "register" ? "#/" : "#/" + event.listPage;
        backBtn.innerHTML = `<span class="back-arrow">←</span><span>Back to ${event.listPage === "register" ? "HOME" : event.listPage.toUpperCase()}</span>`;
    }

    // Direct redirection to the event's Google Form
    if (registerBtn) {
        registerBtn.href = event.googleForm;
        registerBtn.target = "_blank";
        registerBtn.rel = "noopener noreferrer";
        registerBtn.onclick = () => {
            launchConfetti();
        };
    }

    if (googleFormBtn) {
        if (event.googleForm) {
            googleFormBtn.href = event.googleForm;
            googleFormBtn.target = "_blank";
            googleFormBtn.rel = "noopener noreferrer";
            googleFormBtn.style.display = "inline-flex";
        } else {
            googleFormBtn.style.display = "none";
        }
    }
}

// =========================
// REGISTRATION VIEW & GOOGLE FORM REDIRECTION
// =========================

let currentRegisteredEventKey = null;

function renderRegistrationForm(eventKey) {
    currentRegisteredEventKey = eventKey || null;
    const event = eventKey ? events[eventKey] : null;

    const registrationEventName = document.getElementById("registration-event-name");
    const registrationType = document.getElementById("registration-type");
    const eventSelect = document.getElementById("event-select");
    const eventRedirectContainer = document.getElementById("event-redirect-container");
    const noEventPrompt = document.getElementById("no-event-prompt");
    const backButton = document.getElementById("back-button");

    const selectedIcon = document.getElementById("selected-event-icon");
    const selectedTitle = document.getElementById("selected-event-title");
    const selectedArena = document.getElementById("selected-event-arena");
    const selectedTeam = document.getElementById("selected-event-team");
    const selectedStatus = document.getElementById("selected-event-status");
    const selectedDesc = document.getElementById("selected-event-desc");
    const mainGoogleFormBtn = document.getElementById("main-google-form-btn");

    if (event) {
        if (registrationEventName) registrationEventName.textContent = event.name;
        if (registrationType) registrationType.textContent = event.type;
        if (eventSelect) eventSelect.value = event.key;

        if (selectedIcon) selectedIcon.textContent = event.icon;
        if (selectedTitle) selectedTitle.textContent = event.name;
        if (selectedArena) {
            let label = "Registration Portal";
            if (event.listPage === "sports") label = "Sports Arena";
            else if (event.listPage === "esports") label = "Esports Arena";
            else if (event.listPage === "science") label = "Science Arena";
            else if (event.listPage === "cultural") label = "Cultural Arena";
            else if (event.key === "alumni") label = "Alumni Network";
            else if (event.key === "stalls") label = "Stalls & Expo";

            selectedArena.textContent = label;
            const badgeClass = (event.key === "alumni" || event.key === "stalls") ? `badge-${event.key}` : `badge-${event.listPage}`;
            selectedArena.className = `selected-event-badge ${badgeClass}`;
        }
        if (selectedTeam) selectedTeam.textContent = event.team;
        const selectedStatus = document.getElementById("selected-event-status");
        if (selectedStatus) selectedStatus.textContent = "Open for Registration";
        if (selectedDesc) {
            selectedDesc.textContent = `${event.description} Official registration & verification for ${event.name} is handled directly via Google Forms. Click the button below to register your entry.`;
        }

        if (mainGoogleFormBtn) {
            mainGoogleFormBtn.href = event.googleForm;
            mainGoogleFormBtn.target = "_blank";
            mainGoogleFormBtn.rel = "noopener noreferrer";
            mainGoogleFormBtn.onclick = () => {
                launchConfetti();
            };
        }

        if (eventRedirectContainer) eventRedirectContainer.style.display = "block";
        if (noEventPrompt) noEventPrompt.style.display = "none";

        if (backButton) {
            backButton.href = event.listPage === "register" ? "#/" : "#/" + event.listPage;
            backButton.innerHTML = `<span class="back-arrow">←</span><span>Back to ${event.listPage === "register" ? "Home" : event.listPage.toUpperCase()}</span>`;
        }
    } else {
        if (registrationEventName) registrationEventName.textContent = "Festival Registration";
        if (registrationType) registrationType.textContent = "Select an event or portal to proceed to the Google Form";
        if (eventSelect) eventSelect.value = "";

        if (eventRedirectContainer) eventRedirectContainer.style.display = "none";
        if (noEventPrompt) noEventPrompt.style.display = "block";

        if (backButton) {
            backButton.href = "#/";
            backButton.innerHTML = `<span class="back-arrow">←</span><span>Back to Home</span>`;
        }
    }
}

// Handle event select change in registration view
const eventSelectElement = document.getElementById("event-select");
if (eventSelectElement) {
    eventSelectElement.addEventListener("change", (e) => {
        const val = e.target.value;
        if (val && events[val]) {
            renderRegistrationForm(val);
            // Update hash without triggering a harsh full reload
            if (window.location.hash !== "#/register/" + val) {
                history.replaceState(null, "", "#/register/" + val);
            }
            // Auto focus or smooth scroll to the redirect CTA
            const redirectContainer = document.getElementById("event-redirect-container");
            if (redirectContainer) {
                redirectContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
        } else {
            renderRegistrationForm(null);
            if (window.location.hash !== "#/register") {
                history.replaceState(null, "", "#/register");
            }
        }
    });
}

// =========================
// ROUTER DISPATCHER
// =========================

function handleRoute() {
    const rawHash = window.location.hash.replace(/^#\/?/, "");
    const parts = rawHash.split("/").filter(Boolean);

    if (parts.length === 0) {
        showView("home");
        return;
    }

    let [section, key] = parts;

    // Normalize section names & aliases
    if (section === "science") {
        showView("science");
        return;
    }

    if (section === "cultural" || section === "culture") {
        showView("cultural");
        return;
    }

    if (section === "esports" || section === "esport") {
        showView("esports");
        return;
    }

    if (section === "sports" || section === "sport") {
        showView("sports");
        return;
    }

    if (section === "event" && key) {
        renderEventDetails(key);
        showView("event");
        return;
    }

    if (section === "register") {
        renderRegistrationForm(key);
        showView("register");
        return;
    }

    // Default fallback
    showView("home");
    enforceTargetBlankOnGoogleForms();
}

// Ensure every Google Form link automatically opens in a new tab with security attributes
function enforceTargetBlankOnGoogleForms() {
    const googleFormLinks = document.querySelectorAll('a[href*="docs.google.com/forms"], a[href*="forms.gle"]');
    googleFormLinks.forEach(link => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
    });
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("DOMContentLoaded", () => {
    handleRoute();
    initParticleCanvas();
    setupSmoothExplore();
    initCountdownTimer();
    enforceTargetBlankOnGoogleForms();
});

// Smooth scroll for "Explore Arenas"
function setupSmoothExplore() {
    const exploreBtn = document.getElementById("btn-explore-events");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", (e) => {
            const target = document.getElementById("events");
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
}

// ==========================================================================
// LIVE FESTIVAL COUNTDOWN TIMER (STARTS 13 OCT 2026, 9:00 AM IST)
// ==========================================================================

function initCountdownTimer() {
    // Official Event Start: 13th October 2026 at 09:00:00 AM IST (UTC+05:30)
    const targetDate = new Date("2026-10-13T09:00:00+05:30").getTime();

    function update() {
        const now = new Date().getTime();
        const diff = targetDate - now;

        const daysEl = document.getElementById("cd-days");
        const hoursEl = document.getElementById("cd-hours");
        const minsEl = document.getElementById("cd-mins");
        const secsEl = document.getElementById("cd-secs");
        const statusEl = document.getElementById("countdown-status");
        const countdownCard = document.getElementById("festival-countdown");

        if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

        if (diff <= 0) {
            daysEl.textContent = "00";
            hoursEl.textContent = "00";
            minsEl.textContent = "00";
            secsEl.textContent = "00";
            if (statusEl) {
                statusEl.textContent = "🎉 BIOFEST 1.0 IS LIVE NOW!";
                statusEl.classList.add("live-active");
            }
            if (countdownCard) {
                countdownCard.classList.add("event-live");
            }
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, "0");
        hoursEl.textContent = String(hours).padStart(2, "0");
        minsEl.textContent = String(mins).padStart(2, "0");
        secsEl.textContent = String(secs).padStart(2, "0");

        if (statusEl && !statusEl.classList.contains("live-active")) {
            statusEl.textContent = "BIOFEST 1.0 STARTS IN • 13 OCT, 9:00 AM IST";
        }
    }

    update();
    setInterval(update, 1000);
}

// ==========================================================================
// ORGANIC AMBIENT NEBULA & GLOWING STARDUST (HUMAN-CRAFTED AESTHETIC)
// ==========================================================================

let canvas, ctx;
let particles = [];
let mouse = { x: null, y: null, radius: 160 };

function initParticleCanvas() {
    canvas = document.getElementById("bg-canvas");
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener("mouseout", () => {
        mouse.x = null;
        mouse.y = null;
    });

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 32 : 65;
    particles = [];

    // Curated Bioluminescent Biotech cellular palette: GFP Green, Electric Bio-Cyan, Emerald Mint, Molecular Aqua
    const palette = [
        { r: 0, g: 255, b: 135 },    // Fluorescent GFP Green
        { r: 0, g: 242, b: 254 },    // Electric Bio-Cyan
        { r: 16, g: 185, b: 129 },   // Deep Emerald Mint
        { r: 52, g: 211, b: 153 },   // Bioluminescent Mint
        { r: 56, g: 189, b: 248 }    // Molecular Blue
    ];

    for (let i = 0; i < particleCount; i++) {
        const colorObj = palette[Math.floor(Math.random() * palette.length)];
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            baseX: Math.random() * canvas.width,
            baseY: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 2.4 + 1.0,
            color: colorObj,
            alpha: Math.random() * 0.45 + 0.18,
            pulseSpeed: Math.random() * 0.02 + 0.008,
            pulsePhase: Math.random() * Math.PI * 2
        });
    }

    requestAnimationFrame(animateParticles);
}

function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function animateParticles() {
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.pulsePhase += p.pulseSpeed;
        const currentAlpha = p.alpha + Math.sin(p.pulsePhase) * 0.12;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries smoothly
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        // Soft fluid mouse deflection
        if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.hypot(dx, dy);

            if (dist < mouse.radius) {
                const angle = Math.atan2(dy, dx);
                const force = (mouse.radius - dist) / mouse.radius;
                p.x -= Math.cos(angle) * force * 2.2;
                p.y -= Math.sin(angle) * force * 2.2;
            }
        }

        // Draw soft glowing bioluminescent cell halo
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3.8);
        grad.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${Math.max(0, currentAlpha)})`);
        grad.addColorStop(0.5, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${Math.max(0, currentAlpha * 0.35)})`);
        grad.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3.8, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Sharp glowing nucleus
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, currentAlpha + 0.25)})`;
        ctx.fill();

        // Draw delicate bioluminescent molecular filaments between nearby bio-cells
        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 80) {
                const lineAlpha = (1 - dist / 80) * 0.12;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(0, 255, 135, ${lineAlpha})`;
                ctx.lineWidth = 0.6;
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animateParticles);
}

// ==========================================================================
// 3D CARD SPOTLIGHT & TILT EFFECT (Hover only on desktops)
// ==========================================================================

function setupCardSpotlights() {
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cards = document.querySelectorAll(".spotlight-card");

    cards.forEach(card => {
        if (card.dataset.spotlightInit) return;
        card.dataset.spotlightInit = "true";

        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);

            if (supportsHover) {
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -4;
                const rotateY = ((x - centerX) / centerX) * 4;
                card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-5px)`;
            }
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
        });
    });
}

// ==========================================================================
// CONFETTI CELEBRATION EFFECT
// ==========================================================================

function launchConfetti() {
    const confettiCanvas = document.getElementById("confetti-canvas");
    if (!confettiCanvas) return;

    const cCtx = confettiCanvas.getContext("2d");
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const pieces = [];
    const colors = ["#00e5ff", "#8b5cf6", "#ff2bd6", "#10b981", "#facc15", "#ffffff", "#38bdf8"];

    for (let i = 0; i < 95; i++) {
        pieces.push({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2 + 30,
            vx: (Math.random() - 0.5) * 18,
            vy: (Math.random() - 0.7) * 20,
            size: Math.random() * 8 + 6,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 14,
            opacity: 1,
            decay: Math.random() * 0.012 + 0.008
        });
    }

    function renderConfetti() {
        cCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        let alive = false;

        for (let i = 0; i < pieces.length; i++) {
            const p = pieces[i];
            if (p.opacity <= 0) continue;

            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.48; // Gravity
            p.vx *= 0.98; // Air friction
            p.rotation += p.rotSpeed;
            p.opacity -= p.decay;

            if (p.opacity > 0) {
                alive = true;
                cCtx.save();
                cCtx.translate(p.x, p.y);
                cCtx.rotate((p.rotation * Math.PI) / 180);
                cCtx.fillStyle = p.color;
                cCtx.globalAlpha = Math.max(0, p.opacity);
                cCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
                cCtx.restore();
            }
        }

        if (alive) {
            requestAnimationFrame(renderConfetti);
        } else {
            cCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        }
    }

    requestAnimationFrame(renderConfetti);
}
