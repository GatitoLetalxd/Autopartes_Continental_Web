import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Guard: respect prefers-reduced-motion (UI/UX Pro Max priority 7)
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ── 1. Hero entrance ─────────────────────────────────────────────────────────
export function animarHero() {
  if (reducedMotion) return;
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.from(".hero-badge",    { scale: 0.8, opacity: 0, duration: 0.5, ease: "back.out(2)" })
    .from(".hero-titulo",   { y: 70, opacity: 0, duration: 1 }, "-=0.2")
    .from(".hero-subtitulo",{ y: 35, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.55")
    .from(".hero-botones",  { y: 25, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.45");
}

// ── 2. Generic scroll reveal ──────────────────────────────────────────────────
export function scrollReveal(selector, opciones = {}) {
  if (reducedMotion) return;
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;
  gsap.from(selector, {
    scrollTrigger: { trigger: selector, start: "top 88%" },
    opacity: 0,
    y:        opciones.y        ?? 40,
    duration: opciones.duration ?? 0.65,
    stagger:  opciones.stagger  ?? 0.12,
    ease: "power2.out",
  });
}

// ── 3. Parallax Nosotros ──────────────────────────────────────────────────────
export function parallaxNosotros() {
  if (reducedMotion) return;
  if (!document.querySelector(".nosotros-img")) return;
  gsap.to(".nosotros-img", {
    scrollTrigger: {
      trigger: "#nosotros",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
    y: -60,
    ease: "none",
  });
}

// ── 4. Animated counters ──────────────────────────────────────────────────────
export function contadorAnimado() {
  document.querySelectorAll(".contador").forEach((el) => {
    const valor  = parseInt(el.dataset.valor);
    const sufijo = el.dataset.sufijo || "";
    ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      onEnter: () => {
        gsap.to(
          { val: 0 },
          {
            val: valor,
            duration: 2.2,
            ease: "power1.out",
            onUpdate: function () {
              el.textContent = Math.floor(this.targets()[0].val) + sufijo;
            },
          }
        );
      },
    });
  });
}

// ── 5. WhatsApp button entrance ───────────────────────────────────────────────
export function animarWhatsApp() {
  if (reducedMotion) return;
  gsap.from(".whatsapp-btn", {
    y: 120, opacity: 0, duration: 1, delay: 2, ease: "bounce.out",
  });
}

// ── 6. Service cards — UI/UX Pro Max stagger: back.out(1.4), 300-450ms ────────
export function animarServicios() {
  if (reducedMotion) return;
  if (!document.querySelector(".servicio-card")) return;
  gsap.from(".servicio-card", {
    scrollTrigger: {
      trigger: "#servicios",
      start: "top 82%",
    },
    opacity: 0,
    scale:   0.92,
    y:       16,
    duration: 0.4,
    stagger: { each: 0.08, from: "start", grid: "auto" },
    ease: "back.out(1.4)",
    immediateRender: false,
  });
}

// ── 7. Quick data bar ─────────────────────────────────────────────────────────
export function animarDataBar() {
  if (reducedMotion) return;
  if (!document.querySelector(".dato-rapido")) return;
  gsap.from(".dato-rapido", {
    scrollTrigger: { trigger: "#data-bar", start: "top 92%" },
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.15,
    ease: "power2.out",
  });
}

// ── 8. Catalog cards — same stagger as services ───────────────────────────────
export function animarCatalogo() {
  if (reducedMotion) return;
  if (!document.querySelector(".producto-card")) return;
  gsap.from(".producto-card", {
    scrollTrigger: { trigger: "#catalogo", start: "top 82%" },
    opacity: 0,
    scale:   0.92,
    y:       16,
    duration: 0.4,
    stagger: { each: 0.07, from: "start", grid: "auto" },
    ease: "back.out(1.4)",
    immediateRender: false,
  });
}

// ── 9. Contact form ────────────────────────────────────────────────────────────
export function animarContacto() {
  if (reducedMotion) return;
  if (!document.querySelector("#contacto-form")) return;
  gsap.from("#contacto-form", {
    scrollTrigger: { trigger: "#contacto", start: "top 82%" },
    opacity: 0, x: 50, duration: 0.75, ease: "power2.out",
  });
  gsap.from(".contacto-info", {
    scrollTrigger: { trigger: "#contacto", start: "top 82%" },
    opacity: 0, x: -50, duration: 0.75, ease: "power2.out",
  });
}

// ── 10. Gallery cards ─────────────────────────────────────────────────────────
export function animarGaleria() {
  if (reducedMotion) return;
  if (!document.querySelector(".galeria-item")) return;
  gsap.from(".galeria-item", {
    scrollTrigger: { trigger: "#galeria", start: "top 82%" },
    opacity: 0,
    scale:   0.94,
    y:       20,
    duration: 0.5,
    stagger: { each: 0.08, from: "start" },
    ease: "back.out(1.4)",
    immediateRender: false,
  });
}

// ── 11. Testimonials ──────────────────────────────────────────────────────────
export function animarTestimonios() {
  if (reducedMotion) return;
  if (!document.querySelector(".testimonio-card")) return;
  gsap.from(".testimonio-card", {
    scrollTrigger: { trigger: "#testimonios", start: "top 82%" },
    opacity: 0,
    y: 30,
    scale: 0.95,
    duration: 0.55,
    stagger: 0.12,
    ease: "back.out(1.4)",
    immediateRender: false,
  });
}

// ── 12. FAQ items ─────────────────────────────────────────────────────────────
export function animarFAQ() {
  if (reducedMotion) return;
  if (!document.querySelector(".faq-item")) return;
  gsap.from(".faq-item", {
    scrollTrigger: { trigger: "#faq", start: "top 84%" },
    opacity: 0,
    y: 28,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out",
    immediateRender: false,
  });
}

// ── 13. Section headers — eyebrow + title + divider ───────────────────────────
export function animarSectionHeaders() {
  if (reducedMotion) return;
  const headers = document.querySelectorAll(".section-header");
  headers.forEach((header) => {
    gsap.from(header.children, {
      scrollTrigger: { trigger: header, start: "top 88%" },
      opacity: 0,
      y: 20,
      duration: 0.55,
      stagger: 0.1,
      ease: "power2.out",
    });
  });
}

// ── 14. Navbar active link highlighting ───────────────────────────────────────
export function initNavHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${entry.target.id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => observer.observe(s));
}

// ── 15. Init all ──────────────────────────────────────────────────────────────
export function initAll() {
  animarHero();
  animarWhatsApp();
  animarServicios();
  animarDataBar();
  animarCatalogo();
  animarGaleria();
  parallaxNosotros();
  contadorAnimado();
  animarTestimonios();
  animarFAQ();
  animarContacto();
  animarSectionHeaders();
  initNavHighlight();
  scrollReveal(".nosotros-punto", { y: 24, stagger: 0.15 });
}
