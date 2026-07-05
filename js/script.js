import { heroTechData, techStack, testimonialsData } from "./data.js";
function renderHeroTechStrip() {
  const strip = document.getElementById("heroTechStrip");
  strip.innerHTML = heroTechData
    .map(
      (tech) => `
         <div class="hero-tech-item">
             <i class="${tech.icon}"></i>
             <span>${tech.name}</span>
        </div>
      `,
    )
    .join("");
}

//  tech strip data
function renderTechStrip() {
  const track = document.getElementById("stripTrack");
  const items = techStack
    .map(
      (tech) => `
       <div class="strip-item">
           <i class="${tech.icon} strip-item-icon"></i>
          <span class="strip-item-name">${tech.name}</span>
       </div>
                `,
    )
    .join("");
  track.innerHTML = items + items + items;
}

// testimonials data
function renderTestimonials() {
  const grid = document.getElementById("testimonialsGrid");
  grid.innerHTML = testimonialsData
    .map(
      (testimonial) => `
  <div class="testimonial-card">
      <p class="testimonial-card-text">"${testimonial.text}"</p>
      <div class="testimonial-card-author">
          <div class="testimonial-card-avatar">${testimonial.avatar}</div>
          <div>
              <div class="testimonial-card-name">${testimonial.name}</div>
              <div class="testimonial-card-role">${testimonial.role}</div>
          </div>
      </div>
  </div>
   `,
    )
    .join("");
}

// counter animation
function animateCounter() {
  const el = document.getElementById("statCount");
  const target = 42;
  let current = 0;
  const increment = Math.ceil(target / 60);
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = current;
  }, 30);
}

// mobile menu
const menuBtn = document.getElementById("toggleMenu");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    mobileMenu.classList.remove("active");
  }
});

// theme toggling
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// glowing cursor
const glow = document.getElementById("cursorGlow");
let glowX = 0,
  glowY = 0;
let targetX = 0,
  targetY = 0;

document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animateGlow() {
  glowX += (targetX - glowX) * 0.08;
  glowY += (targetY - glowY) * 0.08;
  glow.style.transform = `translate(${glowX - 200}px, ${glowY - 200}px)`;
  requestAnimationFrame(animateGlow);
}
animateGlow();

//  Active nav bar links
const sections = document.querySelectorAll(".section-snap");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("nav-link--active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("nav-link--active");
    }
  });
});

// scroll nav bar links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        mobileMenu.classList.remove("active");
      }
    }
  });
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  renderHeroTechStrip();
  renderTechStrip();
  renderTestimonials();
  animateCounter();
});

let search = document.getElementById("searchInput");
let searchResultsList = document.getElementById("searchResultsList");
let searchResultsArea = document.getElementById("searchResults");

search.addEventListener("input", (e) => {
    let value = e.target.value.toLowerCase().trim();
    
    if (value === '') {
       
        searchResultsArea.style.display = "block";
        let html = '';
        techStack.forEach((tech) => {
            html += `<li><a href="courses.html?course=${tech.id}">${tech.name}</a></li>`;
        });
        searchResultsList.innerHTML = html;
        return;
    }
    
    let matches = techStack.filter((tech) =>
        tech.name.toLowerCase().includes(value)
    );
    
    searchResultsArea.style.display = "block";
    
    if (matches.length === 0) {
        searchResultsList.innerHTML = `<li class="no-result">No Result Found for: <strong>${value}</strong></li>`;
    } else {
        let html = '';
        matches.forEach((tech) => {
            html += `<li><a href="courses.html?course=${tech.id}">${tech.name}</a></li>`;
        });
        searchResultsList.innerHTML = html;
    }
});
search.addEventListener("click", (e) => {
    e.stopPropagation(); 
    searchResultsArea.style.display = "block";
    let html = '';
    techStack.forEach((tech) => {
        html += `<li><a href="courses.html?course=${tech.id}">${tech.name}</a></li>`;
    });
    searchResultsList.innerHTML = html;
    console.log('All results shown:', techStack.length);
});

document.addEventListener("click", (e) => {
    const container = document.querySelector('.search-container-wrapper');
    if (container && !container.contains(e.target)) {
        searchResultsArea.style.display = "none";
    }
});
searchResultsArea.addEventListener("click", (e) => {
    e.stopPropagation();
});
