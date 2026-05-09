import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// 1. Hero entrance animation
export function animarHero() {
  const tl = gsap.timeline();
  tl.from(".hero-titulo", { y: 80, opacity: 0, duration: 1, ease: "power3.out" })
    .from(".hero-subtitulo", { y: 40, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
    .from(".hero-botones", { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
    .from(".hero-badge", { scale: 0.8, opacity: 0, duration: 0.5, ease: "back.out(2)" }, "-=0.3");
}

// 2. Generic scroll reveal (reusable)
export function scrollReveal(selector, opciones = {}) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;
  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: "top 85%",
    },
    opacity: 0,
    y: opciones.y ?? 50,
    duration: opciones.duration ?? 0.7,
    stagger: opciones.stagger ?? 0.15,
    ease: "power2.out",
  });
}

// 3. Parallax in Nosotros section
export function parallaxNosotros() {
  if (!document.querySelector(".nosotros-img")) return;
  gsap.to(".nosotros-img", {
    scrollTrigger: {
      trigger: "#nosotros",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
    y: -80,
    ease: "none",
  });
}

// 4. Animated counters
export function contadorAnimado() {
  document.querySelectorAll(".contador").forEach((el) => {
    const valor = parseInt(el.dataset.valor);
    const sufijo = el.dataset.sufijo || "";
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        gsap.to(
          { val: 0 },
          {
            val: valor,
            duration: 2,
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

// 5. WhatsApp button entrance with bounce
export function animarWhatsApp() {
  gsap.from(".whatsapp-btn", {
    y: 120,
    opacity: 0,
    duration: 1,
    delay: 2,
    ease: "bounce.out",
  });
}

// 6. Service cards stagger
export function animarServicios() {
  if (!document.querySelector(".servicio-card")) return;
  gsap.from(".servicio-card", {
    scrollTrigger: {
      trigger: "#servicios",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
    immediateRender: false,
  });
}

// 7. Quick data bar
export function animarDataBar() {
  if (!document.querySelector(".dato-rapido")) return;
  gsap.from(".dato-rapido", {
    scrollTrigger: {
      trigger: "#data-bar",
      start: "top 90%",
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out",
  });
}

// 8. Catalog cards
export function animarCatalogo() {
  if (!document.querySelector(".producto-card")) return;
  gsap.from(".producto-card", {
    scrollTrigger: {
      trigger: "#catalogo",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 0.6,
    stagger: 0.12,
    ease: "power2.out",
    immediateRender: false,
  });
}

// 9. Contact form
export function animarContacto() {
  if (!document.querySelector("#contacto-form")) return;
  gsap.from("#contacto-form", {
    scrollTrigger: {
      trigger: "#contacto",
      start: "top 80%",
    },
    opacity: 0,
    x: 60,
    duration: 0.8,
    ease: "power2.out",
  });
  gsap.from(".contacto-info", {
    scrollTrigger: {
      trigger: "#contacto",
      start: "top 80%",
    },
    opacity: 0,
    x: -60,
    duration: 0.8,
    ease: "power2.out",
  });
}

// 10. Gallery cards
export function animarGaleria() {
  if (!document.querySelector(".galeria-item")) return;
  gsap.from(".galeria-item", {
    scrollTrigger: {
      trigger: "#galeria",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 0.7,
    stagger: 0.15,
    ease: "power2.out",
    immediateRender: false,
  });
}

// 11. Init all
export function initAll() {
  animarHero();
  animarWhatsApp();
  animarServicios();
  animarDataBar();
  animarCatalogo();
  animarGaleria();
  parallaxNosotros();
  contadorAnimado();
  animarContacto();
  scrollReveal(".nosotros-punto", { y: 30, stagger: 0.2 });
}
