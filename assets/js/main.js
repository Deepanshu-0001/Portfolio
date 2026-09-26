"use strict";


/* =========================================================
   CONFIG
========================================================= */

const SCALLAR_LOGO =
  "assets/images/scallar-logo.webp";

const PROFILE_IMAGE =
  "assets/images/profile.webp";


/* =========================================================
   SHARED HEADER
========================================================= */

const headerRoot =
  document.getElementById(
    "siteHeader"
  );


if (headerRoot) {

  headerRoot.innerHTML = `
    <header
      class="site-header"
      id="mainHeader"
    >

      <div class="container">

        <div class="navbar">

          <a
            href="index.html"
            class="brand"
          >

            <div>
              <img
                src="${SCALLAR_LOGO}"
                alt="Scallar IT Solution"
                class="brand-logo"
                data-fallback="scallar"
              >
            </div>

            <span class="brand-text">

              <strong>
                Deepanshu Kumar Prajapati
              </strong>

              <span>
                Founder & CEO — Scallar IT Solution
              </span>

            </span>

          </a>


          <nav
            class="nav-menu"
            id="navMenu"
            aria-label="Main navigation"
          >

            <a
              href="index.html"
              class="nav-link"
              data-page="index"
            >
              Home
            </a>

            <a
              href="about.html"
              class="nav-link"
              data-page="about"
            >
              About
            </a>

            <a
              href="skills.html"
              class="nav-link"
              data-page="skills"
            >
              Skills
            </a>

            <a
              href="projects.html"
              class="nav-link"
              data-page="projects"
            >
              Projects
            </a>

            <a
              href="services.html"
              class="nav-link"
              data-page="services"
            >
              Services
            </a>

            <a
              href="journey.html"
              class="nav-link"
              data-page="journey"
            >
              Journey
            </a>

            <a
              href="contact.html"
              class="nav-link"
              data-page="contact"
            >
              Contact
            </a>

          </nav>


          <a
            href="contact.html"
            class="btn btn-primary header-btn"
          >
            Let's Work Together →
          </a>


          <button
            class="mobile-toggle"
            id="mobileToggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >

            <span></span>
            <span></span>
            <span></span>

          </button>

        </div>

      </div>

    </header>
  `;

}


/* =========================================================
   SHARED FOOTER
========================================================= */

const footerRoot =
  document.getElementById(
    "siteFooter"
  );


if (footerRoot) {

  footerRoot.innerHTML = `
    <footer class="footer">

      <div class="container">

        <div class="footer-grid">

          <div class="footer-brand">

            <div class="footer-brand-head">

              <div>

                <img
                  src="${SCALLAR_LOGO}"
                  alt="Scallar IT Solution"
                  data-fallback="scallar"
                >

              </div>

              <div>

                <h3>
                  Deepanshu Kumar Prajapati
                </h3>

                <span>
                  Founder & CEO
                </span>

              </div>

            </div>

            <p>
              Founder & CEO of Scallar IT Solution.
              Building websites, marketing systems,
              automation and AI-powered digital solutions.
            </p>

          </div>


          <div class="footer-column">

            <h4>
              Portfolio
            </h4>

            <a href="about.html">
              About
            </a>

            <a href="skills.html">
              Skills
            </a>

            <a href="projects.html">
              Projects
            </a>

            <a href="journey.html">
              Journey
            </a>

          </div>


          <div class="footer-column">

            <h4>
              Services
            </h4>

            <a href="services.html">
              Web Development
            </a>

            <a href="services.html">
              SEO
            </a>

            <a href="services.html">
              Digital Marketing
            </a>

            <a href="services.html">
              AI Automation
            </a>

          </div>


          <div class="footer-column">

            <h4>
              Contact
            </h4>

            <a href="mailto:info@scallar.in">
              info@scallar.in
            </a>

            <a href="tel:+919305048475">
              +91 93050 48475
            </a>

            <a
              href="https://scallar.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              scallar.in
            </a>

            <p>
              India
            </p>

          </div>

        </div>


        <div class="footer-bottom">

          <span>
            ©
            <span id="currentYear"></span>
            Deepanshu Kumar Prajapati.
            All rights reserved.
          </span>

          <span>
            Founder & CEO —
            Scallar IT Solution
          </span>

        </div>

      </div>

    </footer>
  `;

}


/* =========================================================
   PAGE DETECTION
========================================================= */

function getCurrentPage() {

  const filename =
    window.location.pathname
      .split("/")
      .pop() ||
    "index.html";

  const page =
    filename
      .replace(/\(\d+\)/g, "")
      .replace(".html", "");

  return page || "index";

}


const currentPage =
  getCurrentPage();


document
  .querySelectorAll(
    ".nav-link"
  )
  .forEach((link) => {

    if (
      link.dataset.page ===
      currentPage
    ) {

      link.classList.add(
        "active"
      );

      link.setAttribute(
        "aria-current",
        "page"
      );

    }

  });


/* =========================================================
   IMAGE FALLBACKS
========================================================= */

function initialiseImageFallbacks() {

  document
    .querySelectorAll(
      '[data-fallback="scallar"]'
    )
    .forEach((image) => {

      const applyFallback =
        () => {

          const parent =
            image.parentElement;

          if (!parent) {
            return;
          }

          parent.classList.add(
            "logo-fallback"
          );

        };


      image.addEventListener(
        "error",
        applyFallback
      );


      if (
        image.complete &&
        image.naturalWidth === 0
      ) {

        applyFallback();

      }

    });


  document
    .querySelectorAll(
      "[data-profile-image]"
    )
    .forEach((image) => {

      const applyProfileFallback =
        () => {

          image.style.display =
            "none";

          const parent =
            image.parentElement;

          if (parent) {

            parent.classList.add(
              "profile-missing"
            );

          }

        };


      image.addEventListener(
        "error",
        applyProfileFallback
      );


      if (
        image.complete &&
        image.naturalWidth === 0
      ) {

        applyProfileFallback();

      }

    });

}


initialiseImageFallbacks();


/* =========================================================
   HEADER SCROLL
========================================================= */

const mainHeader =
  document.getElementById(
    "mainHeader"
  );


function updateHeader() {

  if (!mainHeader) {
    return;
  }

  mainHeader.classList.toggle(
    "scrolled",
    window.scrollY > 30
  );

}


window.addEventListener(
  "scroll",
  updateHeader,
  {
    passive: true
  }
);


updateHeader();


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileToggle =
  document.getElementById(
    "mobileToggle"
  );

const navMenu =
  document.getElementById(
    "navMenu"
  );


function closeMenu() {

  if (
    !mobileToggle ||
    !navMenu
  ) {
    return;
  }

  navMenu.classList.remove(
    "open"
  );

  document.body.classList.remove(
    "menu-open"
  );

  mobileToggle.setAttribute(
    "aria-expanded",
    "false"
  );

}


if (
  mobileToggle &&
  navMenu
) {

  mobileToggle.addEventListener(
    "click",
    () => {

      const open =
        navMenu.classList.toggle(
          "open"
        );

      document.body.classList.toggle(
        "menu-open",
        open
      );

      mobileToggle.setAttribute(
        "aria-expanded",
        String(open)
      );

    }
  );


  navMenu
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        closeMenu
      );

    });


  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape"
      ) {

        closeMenu();

      }

    }
  );


  document.addEventListener(
    "click",
    (event) => {

      if (
        !navMenu.classList.contains(
          "open"
        )
      ) {
        return;
      }

      const insideMenu =
        navMenu.contains(
          event.target
        );

      const insideButton =
        mobileToggle.contains(
          event.target
        );

      if (
        !insideMenu &&
        !insideButton
      ) {

        closeMenu();

      }

    }
  );

}


/* =========================================================
   HERO SLIDER
========================================================= */

const heroSlider =
  document.getElementById(
    "heroSlider"
  );

const heroSlides =
  Array.from(
    document.querySelectorAll(
      ".hero-slide"
    )
  );

const heroDots =
  Array.from(
    document.querySelectorAll(
      "[data-hero-dot]"
    )
  );

const heroPrev =
  document.getElementById(
    "heroPrev"
  );

const heroNext =
  document.getElementById(
    "heroNext"
  );


let heroIndex = 0;

let heroTimer = null;


const reducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


function showHeroSlide(
  index
) {

  if (!heroSlides.length) {
    return;
  }

  heroIndex =
    (
      index +
      heroSlides.length
    ) %
    heroSlides.length;


  heroSlides.forEach(
    (slide, indexValue) => {

      const active =
        indexValue === heroIndex;

      slide.classList.toggle(
        "active",
        active
      );

      slide.setAttribute(
        "aria-hidden",
        String(!active)
      );

    }
  );


  heroDots.forEach(
    (dot, indexValue) => {

      dot.classList.toggle(
        "active",
        indexValue === heroIndex
      );

    }
  );

}


function nextHeroSlide() {

  showHeroSlide(
    heroIndex + 1
  );

}


function previousHeroSlide() {

  showHeroSlide(
    heroIndex - 1
  );

}


function stopHeroAutoplay() {

  if (heroTimer) {

    clearInterval(
      heroTimer
    );

    heroTimer = null;

  }

}


function startHeroAutoplay() {

  stopHeroAutoplay();


  if (
    reducedMotion ||
    heroSlides.length <= 1
  ) {

    return;

  }


  heroTimer =
    window.setInterval(
      nextHeroSlide,
      6000
    );

}


if (heroSlides.length) {

  showHeroSlide(0);

  startHeroAutoplay();


  heroNext?.addEventListener(
    "click",
    () => {

      nextHeroSlide();

      startHeroAutoplay();

    }
  );


  heroPrev?.addEventListener(
    "click",
    () => {

      previousHeroSlide();

      startHeroAutoplay();

    }
  );


  heroDots.forEach(
    (dot, index) => {

      dot.addEventListener(
        "click",
        () => {

          showHeroSlide(
            index
          );

          startHeroAutoplay();

        }
      );

    }
  );


  heroSlider?.addEventListener(
    "mouseenter",
    stopHeroAutoplay
  );


  heroSlider?.addEventListener(
    "mouseleave",
    startHeroAutoplay
  );


  document.addEventListener(
    "visibilitychange",
    () => {

      if (document.hidden) {

        stopHeroAutoplay();

      } else {

        startHeroAutoplay();

      }

    }
  );

}


/* =========================================================
   PROJECT SLIDER
========================================================= */

const projectSlider =
  document.getElementById(
    "projectSlider"
  );

const projectPrev =
  document.getElementById(
    "projectPrev"
  );

const projectNext =
  document.getElementById(
    "projectNext"
  );


function projectScrollAmount() {

  if (!projectSlider) {
    return 0;
  }


  const card =
    projectSlider.querySelector(
      ".project-slide"
    );


  if (!card) {
    return 0;
  }


  const width =
    card.getBoundingClientRect()
      .width;


  const styles =
    window.getComputedStyle(
      projectSlider
    );


  const gap =
    Number.parseFloat(
      styles.columnGap ||
      styles.gap ||
      "18"
    );


  return width + gap;

}


projectNext?.addEventListener(
  "click",
  () => {

    if (!projectSlider) {
      return;
    }


    const maxScroll =
      projectSlider.scrollWidth -
      projectSlider.clientWidth;


    const nearEnd =
      projectSlider.scrollLeft >=
      maxScroll - 8;


    if (nearEnd) {

      projectSlider.scrollTo({
        left: 0,
        behavior: "smooth"
      });

      return;

    }


    projectSlider.scrollBy({
      left:
        projectScrollAmount(),

      behavior: "smooth"
    });

  }
);


projectPrev?.addEventListener(
  "click",
  () => {

    if (!projectSlider) {
      return;
    }


    if (
      projectSlider.scrollLeft <=
      8
    ) {

      projectSlider.scrollTo({
        left:
          projectSlider.scrollWidth,

        behavior:
          "smooth"
      });

      return;

    }


    projectSlider.scrollBy({
      left:
        -projectScrollAmount(),

      behavior:
        "smooth"
    });

  }
);


/* =========================================================
   DUPLICATE TECHNOLOGY MARQUEE
========================================================= */

document
  .querySelectorAll(
    ".tech-track"
  )
  .forEach((track) => {

    if (
      track.dataset.duplicated ===
      "true"
    ) {
      return;
    }


    const originalItems =
      Array.from(
        track.children
      );


    originalItems.forEach(
      (item) => {

        const clone =
          item.cloneNode(true);

        clone.setAttribute(
          "aria-hidden",
          "true"
        );

        track.appendChild(
          clone
        );

      }
    );


    track.dataset.duplicated =
      "true";

  });


/* =========================================================
   PROJECT FILTER
========================================================= */

const filterButtons =
  document.querySelectorAll(
    ".filter-btn"
  );

const filterCards =
  document.querySelectorAll(
    ".project-slide[data-category]"
  );


filterButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        const filter =
          button.dataset.filter;


        filterButtons.forEach(
          (item) => {

            item.classList.remove(
              "active"
            );

          }
        );


        button.classList.add(
          "active"
        );


        filterCards.forEach(
          (card) => {

            const categories =
              String(
                card.dataset.category ||
                ""
              )
                .split(" ")
                .filter(Boolean);


            const visible =
              filter === "all" ||
              categories.includes(
                filter
              );


            card.classList.toggle(
              "hidden",
              !visible
            );

          }
        );

      }
    );

  }
);


/* =========================================================
   COUNTERS
========================================================= */

const counters =
  document.querySelectorAll(
    "[data-counter]"
  );


function animateCounter(
  element
) {

  const target =
    Number(
      element.dataset.counter
    );


  if (
    !Number.isFinite(target)
  ) {

    return;

  }


  if (reducedMotion) {

    element.textContent =
      String(target);

    return;

  }


  const duration = 1050;

  const startedAt =
    performance.now();


  function update(time) {

    const elapsed =
      time - startedAt;


    const progress =
      Math.min(
        elapsed / duration,
        1
      );


    const eased =
      1 -
      Math.pow(
        1 - progress,
        3
      );


    element.textContent =
      String(
        Math.round(
          target * eased
        )
      );


    if (progress < 1) {

      requestAnimationFrame(
        update
      );

    }

  }


  requestAnimationFrame(
    update
  );

}


if (counters.length) {

  if (
    "IntersectionObserver"
    in window
  ) {

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                !entry.isIntersecting
              ) {
                return;
              }


              animateCounter(
                entry.target
              );


              observer.unobserve(
                entry.target
              );

            }
          );

        },
        {
          threshold: 0.6
        }
      );


    counters.forEach(
      (counter) => {

        observer.observe(
          counter
        );

      }
    );

  } else {

    counters.forEach(
      animateCounter
    );

  }

}


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

const revealElements =
  document.querySelectorAll(
    "[data-reveal]"
  );


if (
  reducedMotion ||
  !(
    "IntersectionObserver"
    in window
  )
) {

  revealElements.forEach(
    (element) => {

      element.classList.add(
        "visible"
      );

    }
  );

} else {

  const revealObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              !entry.isIntersecting
            ) {
              return;
            }


            entry.target.classList.add(
              "visible"
            );


            revealObserver.unobserve(
              entry.target
            );

          }
        );

      },
      {
        threshold: 0.10,

        rootMargin:
          "0px 0px -40px 0px"
      }
    );


  revealElements.forEach(
    (element) => {

      revealObserver.observe(
        element
      );

    }
  );

}


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
  document.getElementById(
    "contactForm"
  );

const formMessage =
  document.getElementById(
    "formMessage"
  );


function showFormMessage(
  message,
  type
) {

  if (!formMessage) {
    return;
  }


  formMessage.textContent =
    message;


  formMessage.className =
    `form-message show ${type}`;

}


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      const data =
        new FormData(
          contactForm
        );


      const name =
        String(
          data.get("name") ||
          ""
        ).trim();


      const email =
        String(
          data.get("email") ||
          ""
        ).trim();


      const phone =
        String(
          data.get("phone") ||
          ""
        ).trim();


      const service =
        String(
          data.get("service") ||
          ""
        ).trim();


      const message =
        String(
          data.get("message") ||
          ""
        ).trim();


      if (
        !name ||
        !email ||
        !message
      ) {

        showFormMessage(
          "Please required details fill karein.",
          "error"
        );

        return;
      }


      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      if (
        !emailPattern.test(
          email
        )
      ) {

        showFormMessage(
          "Please valid email address enter karein.",
          "error"
        );

        return;
      }


      const whatsappMessage =
`Hi Deepanshu,

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Service: ${service || "General enquiry"}

Project Details:
${message}`;


      const whatsappURL =
        "https://wa.me/919305048475?text=" +
        encodeURIComponent(
          whatsappMessage
        );


      showFormMessage(
        "WhatsApp open ho raha hai...",
        "success"
      );


      window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
      );

    }
  );

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
  document.getElementById(
    "currentYear"
  );


if (currentYear) {

  currentYear.textContent =
    String(
      new Date()
        .getFullYear()
    );

}


/* =========================================================
   BACK TO TOP
========================================================= */

const backTop =
  document.createElement(
    "button"
  );


backTop.className =
  "back-top";


backTop.type =
  "button";


backTop.innerHTML =
  "↑";


backTop.setAttribute(
  "aria-label",
  "Back to top"
);


document.body.appendChild(
  backTop
);


function updateBackTop() {

  backTop.classList.toggle(
    "show",
    window.scrollY > 550
  );

}


window.addEventListener(
  "scroll",
  updateBackTop,
  {
    passive: true
  }
);


backTop.addEventListener(
  "click",
  () => {

    window.scrollTo({
      top: 0,

      behavior:
        reducedMotion
          ? "auto"
          : "smooth"
    });

  }
);


updateBackTop();