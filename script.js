// ==========================================================================
// BIOFEST 2026 — USTM PULSE
// Interactive Single-Page App Router, Dynamic Forms, Animations & Effects
// ==========================================================================

const events = {
    cricket: {
        key: "cricket",
        icon: "🏏",
        name: "Gully Cricket",
        description: "High-octane campus cricket showdown with rapid overs and electric energy at USTM PULSE.",
        team: "5 Players",
        teamSize: 5,
        fee: "₹400 / Team",
        prize: "₹10,000",
        type: "Team Registration",
        listPage: "sports",
        googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSd7R860L7cnOY1uDkoHJNLOgW7mBbzZ-9CU1cDth_HR9BKglQ/viewform"
    },

    futsal: {
        key: "futsal",
        icon: "⚽",
        name: "Futsal",
        description: "Intense 5v5 indoor/turf football tournament with rapid skill, tactics, and teamwork.",
        team: "5 Players",
        teamSize: 5,
        fee: "₹500 / Team",
        prize: "₹12,000",
        type: "Team Registration",
        listPage: "sports",
        googleForm: "https://docs.google.com/forms/d/e/1FAIpQLScSIRNnWZpU3_XJrtnYO19B8g9UVNioEcl6VfnQCmdZjmuL9Q/viewform"
    },

    badminton: {
        key: "badminton",
        icon: "🏸",
        name: "Badminton",
        description: "Fast-paced indoor badminton showdown for Men & Women across Singles and Doubles.",
        team: "Singles / Doubles",
        teamSize: 2,
        fee: "₹150 / Singles • ₹250 / Doubles",
        prize: "₹5,000",
        type: "Individual / Doubles",
        listPage: "sports",
        googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSfjZB-JWwO4agVHtBq03iLD6Drzu4XS_3hPPQL0vVim7RsRqQ/viewform"
    },

    volleyball: {
        key: "volleyball",
        icon: "🏐",
        name: "Volleyball",
        description: "Spike, block, and dominate the court in this high-intensity 6-player volleyball championship.",
        team: "6 Players",
        teamSize: 6,
        fee: "₹350 / Team",
        prize: "₹8,000",
        type: "Team Registration",
        listPage: "sports",
        googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSdXF6snaWnAkAJgsOuEJaW-vrZoyUiQ6Vz3QHK1aCfgu51xww/viewform"
    },

    armwrestling: {
        key: "armwrestling",
        icon: "💪",
        name: "Arm Wrestling",
        description: "Pure power, grip, technique, and willpower in the ultimate campus strength showdown.",
        team: "1 Player",
        teamSize: 1,
        fee: "₹100 / Player",
        prize: "₹3,000",
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
        fee: "₹250 / Team",
        prize: "₹6,000",
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
        fee: "₹200 / Squad",
        prize: "₹10,000",
        type: "Squad Registration",
        listPage: "esports",
        googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSd_tLJ0qYVgHwygc0RrUTr4wAha0ayuqb9k-ooH0hqWBrehvg/viewform"
    },

    mlbb: {
        key: "mlbb",
        icon: "⚔️",
        name: "Mobile Legends (MLBB)",
        description: "5v5 MOBA tactical action. Pick your heroes, push lanes, and destroy the enemy base.",
        team: "5 Players",
        teamSize: 5,
        fee: "₹250 / Team",
        prize: "₹8,000",
        type: "Team Registration",
        listPage: "esports",
        googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSeyQTKHCe_KFmryFiWiG7fPnlGAV0yi1tJz16dfOtKylYCIdw/viewform"
    },

    efootball: {
        key: "efootball",
        icon: "⚽",
        name: "eFootball Open",
        description: "Virtual football knockout cup. Precision passing, dribbling, and championship goals.",
        team: "Individual",
        teamSize: 1,
        fee: "₹100 / Player",
        prize: "₹4,000",
        type: "Individual Registration",
        listPage: "esports",
        googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSdV7g9pmT24F8uDN1BG1OwNUJnj3Ki1Kd4j06pO7dXjuWGeJw/viewform"
    },

    arts: {
        key: "arts",
        icon: "🎨",
        name: "Arts & Poster Competition",
        description: "Showcase your artistic expression across painting, sketching, digital art & poster themes.",
        team: "Individual",
        teamSize: 1,
        fee: "₹100 / Entry",
        prize: "₹3,000 + Trophy",
        type: "Individual Registration",
        listPage: "cultural",
        googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSfBpz-ekiHQkRY7Tn4RvEH2lT7GmWAJNAQ95mxa_8w8FqKT8A/viewform"
    },

    dance: {
        key: "dance",
        icon: "💃",
        name: "Dance Showdown",
        description: "Solo, Duo, and Squad dance battle. Rhythm, choreography, synchronization and stage energy.",
        team: "Solo / Duo / Group (5)",
        teamSize: 5,
        fee: "₹150 / Solo • ₹400 / Group",
        prize: "₹8,000 + Trophy",
        type: "Solo / Duo / Group Registration",
        listPage: "cultural",
        googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSckrLPGiyUzCNYEx1NV2AWU3Z7ieTf8AYRkliqd78-Z8u8izw/viewform"
    }
};

// =========================
// VIEW ROUTER & NAVIGATION
// =========================

function updateActiveNav(routeName) {
    const navLinks = document.querySelectorAll(".nav-link, .nav-cta, .mobile-nav-link");
    navLinks.forEach(link => {
        const linkNav = link.dataset.nav;
        const isMatch = (linkNav === routeName) ||
            ((routeName === "cultural" || routeName === "science") && (linkNav === "cultural" || linkNav === "science"));
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
            ((name === "cultural" || name === "science") && (v === "cultural" || v === "science")) ||
            ((name === "esports" || name === "esport") && (v === "esports" || v === "esport")) ||
            ((name === "sports" || name === "sport") && (v === "sports" || v === "sport"));

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
    const feeEl = document.getElementById("event-fee");
    const prizeEl = document.getElementById("event-prize");
    const backBtn = document.getElementById("event-back-button");
    const registerBtn = document.getElementById("register-button");
    const googleFormBtn = document.getElementById("google-form-button");

    if (iconEl) iconEl.textContent = event.icon;
    if (nameEl) nameEl.textContent = event.name;
    if (descEl) descEl.textContent = event.description;
    if (teamEl) teamEl.textContent = event.team;
    if (feeEl) feeEl.textContent = event.fee;
    if (prizeEl) prizeEl.textContent = event.prize;

    if (backBtn) {
        backBtn.href = "#/" + event.listPage;
        backBtn.innerHTML = `<span class="back-arrow">←</span><span>Back to ${event.listPage.toUpperCase()}</span>`;
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
    const selectedFee = document.getElementById("selected-event-fee");
    const selectedPrize = document.getElementById("selected-event-prize");
    const selectedDesc = document.getElementById("selected-event-desc");
    const mainGoogleFormBtn = document.getElementById("main-google-form-btn");

    if (event) {
        if (registrationEventName) registrationEventName.textContent = event.name;
        if (registrationType) registrationType.textContent = event.type + " • " + event.fee;
        if (eventSelect) eventSelect.value = event.key;

        if (selectedIcon) selectedIcon.textContent = event.icon;
        if (selectedTitle) selectedTitle.textContent = event.name;
        if (selectedArena) {
            const arenaLabel = event.listPage.charAt(0).toUpperCase() + event.listPage.slice(1);
            selectedArena.textContent = arenaLabel + " Arena";
        }
        if (selectedTeam) selectedTeam.textContent = event.team;
        if (selectedFee) selectedFee.textContent = event.fee;
        if (selectedPrize) selectedPrize.textContent = event.prize;
        if (selectedDesc) {
            selectedDesc.textContent = `${event.description} Official registration & payment verification for ${event.name} is handled via Google Forms. Click the button below to register your entry.`;
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
            backButton.href = "#/" + event.listPage;
            backButton.innerHTML = `<span class="back-arrow">←</span><span>Back to ${event.listPage.toUpperCase()}</span>`;
        }
    } else {
        if (registrationEventName) registrationEventName.textContent = "Festival Registration";
        if (registrationType) registrationType.textContent = "Select an event to proceed to the Google Form";
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
    if (section === "cultural" || section === "culture" || section === "science") {
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
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("DOMContentLoaded", () => {
    handleRoute();
    initParticleCanvas();
    setupSmoothExplore();
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
// INTERACTIVE PARTICLES CANVAS (CYBER & BIO ENERGY DUST)
// ==========================================================================

let canvas, ctx;
let particles = [];
let mouse = { x: null, y: null, radius: 130 };

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
    const particleCount = isMobile ? 28 : 55;
    particles = [];

    const colors = ["#00e5ff", "#8b5cf6", "#ff2bd6", "#38bdf8", "#10b981"];

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.65,
            vy: (Math.random() - 0.5) * 0.65,
            radius: Math.random() * 2 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            baseAlpha: Math.random() * 0.35 + 0.2
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

        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse interaction (gentle repel & glow)
        let alpha = p.baseAlpha;
        if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.hypot(dx, dy);

            if (dist < mouse.radius) {
                const angle = Math.atan2(dy, dx);
                const force = (mouse.radius - dist) / mouse.radius;
                p.x -= Math.cos(angle) * force * 1.6;
                p.y -= Math.sin(angle) * force * 1.6;
                alpha = Math.min(1, p.baseAlpha + force * 0.6);
            }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();

        // Connect nearby particles with subtle glowing lines
        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

            if (dist < 115) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = p.color;
                ctx.globalAlpha = (1 - dist / 115) * 0.16;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        }
    }

    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
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
