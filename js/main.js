/**
 * Portfolio Site - Main JavaScript
 * Handles navigation, animations, and interactive features
 */

// ==========================================
// DOM ELEMENTS
// ==========================================

const themeToggle = document.getElementById("themeToggle");
const profileImg = document.getElementById("profileImg");
const body = document.body;

// ==========================================
// PROFILE IMAGE HOVER EFFECT
// ==========================================

/**
 * Change profile image on hover
 */
if (profileImg) {
  profileImg.addEventListener("mouseenter", function () {
    this.src = "assets/images/ako3.jpg";
  });

  profileImg.addEventListener("mouseleave", function () {
    this.src = "assets/images/ako.jpg";
  });
}

// ==========================================
// THEME TOGGLE (DARK/LIGHT MODE)
// ==========================================

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
  const isDark = body.classList.toggle("dark-theme");
  const icon = themeToggle.querySelector("i");

  if (isDark) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  }
}

/**
 * Load saved theme preference on page load
 */
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  const icon = themeToggle.querySelector("i");

  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
}

// Event listener for theme toggle
themeToggle.addEventListener("click", toggleTheme);

// Load theme on page load
loadTheme();

// ==========================================
// SMOOTH SCROLLING ENHANCEMENT
// ==========================================

/**
 * Smooth scroll with offset for fixed navbar
 */
const navLinks = document.querySelectorAll('a[href^="#"]');

if (navLinks.length > 0) {
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      // Only prevent default for internal links
      if (href.startsWith("#")) {
        e.preventDefault();

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for navbar height
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
    });
  });
}

// ==========================================
// ACTIVE NAV LINK INDICATOR
// ==========================================

/**
 * Update active nav link based on scroll position
 */
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => link.classList.remove("active"));

      const activeLink = document.querySelector(
        `.nav-link[href="#${section.id}"]`
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", updateActiveNavLink);

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================

/**
 * Animate elements as they come into view
 */
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all project cards and cert cards
const cardElements = document.querySelectorAll(
  ".project-card, .cert-card, .experience-item, .membership-card"
);

cardElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  observer.observe(element);
});

// ==========================================
// TECH TAG INTERACTION
// ==========================================

/**
 * Add click animation to tech tags
 */
const techTags = document.querySelectorAll(".tech-tag");

techTags.forEach((tag) => {
  tag.addEventListener("click", () => {
    tag.style.transform = "scale(0.95)";
    setTimeout(() => {
      tag.style.transform = "scale(1)";
    }, 100);
  });
});

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================

/**
 * Reveal content as user scrolls
 */
const revealOnScroll = () => {
  const elements = document.querySelectorAll(".section");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.style.opacity = "1";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ==========================================
// NAVBAR BACKGROUND ON SCROLL
// ==========================================

/**
 * Change navbar appearance on scroll
 */
const navbar = document.querySelector(".navbar");
let lastScrollTop = 0;

if (navbar) {
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
    } else {
      navbar.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

// ==========================================
// PROJECT CARD INTERACTIONS
// ==========================================

/**
 * Add hover effects to project cards
 */
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// ==========================================
// RECOMMENDATION CAROUSEL (Optional Enhancement)
// ==========================================

/**
 * Simple recommendation item rotation
 */
const initRecommendationRotation = () => {
  // This could be expanded with actual carousel functionality
  const recommendationContent = document.querySelector(
    ".recommendations-content"
  );

  if (recommendationContent) {
    // Add initial animation
    recommendationContent.style.animation = "fadeInUp 0.8s ease-out";
  }
};

window.addEventListener("load", initRecommendationRotation);

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Format date for dynamic content
 */
const getCurrentYear = () => new Date().getFullYear();

// Update footer year
const footerElement = document.querySelector(".footer p");
if (footerElement) {
  footerElement.textContent = `© ${getCurrentYear()} Bryl Lim. All rights reserved.`;
}

// ==========================================
// FORM SUBMISSION (If needed in future)
// ==========================================

/**
 * Handle contact form submission
 */
const handleContactSubmit = (e) => {
  e.preventDefault();

  // This would typically send data to a backend
  // For now, just show a success message
  const form = e.target;
  const formData = new FormData(form);

  console.log("Form submitted with data:", Object.fromEntries(formData));

  // Reset form
  form.reset();

  // Show success message (you can replace with toast notification)
  alert("Thank you for reaching out! I'll get back to you soon.");
};

// Attach form submission if form exists
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", handleContactSubmit);
}

// ==========================================
// KEYBOARD NAVIGATION
// ==========================================

/**
 * Close menu on Escape key
 */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

// ==========================================
// ACCESSIBILITY IMPROVEMENTS
// ==========================================

/**
 * Enhance keyboard navigation for interactive elements
 */
const interactiveElements = document.querySelectorAll(
  "a, button, .tech-tag, .project-card, .cert-card"
);

interactiveElements.forEach((element) => {
  element.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && element.tagName !== "A") {
      element.click();
    }
  });
});

// ==========================================
// PERFORMANCE: LAZY LOAD IMAGES
// ==========================================

/**
 * Implement lazy loading for images if needed
 */
if ("IntersectionObserver" in window) {
  const images = document.querySelectorAll("img");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// ==========================================
// INITIALIZATION
// ==========================================

/**
 * Run on page load
 */
window.addEventListener("load", () => {
  // Remove loading state if exists
  body.classList.remove("loading");

  // Initialize any animations
  updateActiveNavLink();
  revealOnScroll();

  console.log("Portfolio site loaded successfully!");
});

// ==========================================
// RESPONSIVE HELPER
// ==========================================

/**
 * Detect if user prefers reduced motion
 */
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
  document.documentElement.style.scrollBehavior = "auto";
  // Could disable other animations here if needed
}

// ==========================================
// SCHEDULE A CALL - CALENDLY INTEGRATION
// ==========================================

const scheduleCallBtn = document.getElementById("scheduleCallBtn");
const calendlyModal = document.getElementById("calendlyModal");
const calendlyClose = document.getElementById("calendlyClose");
const calendlyEmbed = document.getElementById("calendlyEmbed");

// Your Calendly link
const CALENDLY_LINK = "https://calendly.com/aninonjomar745";

if (scheduleCallBtn) {
  scheduleCallBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Open modal
    calendlyModal.classList.add("active");

    // Initialize Calendly widget
    if (typeof Calendly !== "undefined") {
      Calendly.initInlineWidget({
        url: CALENDLY_LINK,
        parentElement: calendlyEmbed,
        prefill: {},
        utm: {},
      });
    }
  });
}

// Also trigger Calendly from "Let's Talk" section
const scheduleCallLinks = document.querySelectorAll(".schedule-call-link");
scheduleCallLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Open modal
    calendlyModal.classList.add("active");

    // Initialize Calendly widget
    if (typeof Calendly !== "undefined") {
      Calendly.initInlineWidget({
        url: CALENDLY_LINK,
        parentElement: calendlyEmbed,
        prefill: {},
        utm: {},
      });
    }
  });
});

// Close Calendly modal
if (calendlyClose) {
  calendlyClose.addEventListener("click", () => {
    calendlyModal.classList.remove("active");
    calendlyEmbed.innerHTML = ""; // Clear embed
  });
}

// Close on outside click
if (calendlyModal) {
  calendlyModal.addEventListener("click", (e) => {
    if (e.target === calendlyModal) {
      calendlyModal.classList.remove("active");
      calendlyEmbed.innerHTML = "";
    }
  });
}

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && calendlyModal?.classList.contains("active")) {
    calendlyModal.classList.remove("active");
    calendlyEmbed.innerHTML = "";
  }
});

// ==========================================
// CHAT FUNCTIONALITY
// ==========================================

const chatButton = document.getElementById("chatButton");
const chatModal = document.getElementById("chatModal");
const chatClose = document.getElementById("chatClose");
const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");
const chatMessages = document.getElementById("chatMessages");

const GEMINI_API_KEY = "AIzaSyBekSeNsmxcoBLWsaz3jlUsQNiPrDK6Wqw";
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

// Context about Jomar for the AI
const jomarContext = `
You are an AI assistant representing Jomar Aniñon, a Machine Learning and Backend Developer from Metro Manila, Philippines.

Key Information:
- Current Role: Machine Learning/Backend Developer and Java Instructor at Altsys Academy
- Skills: Java, Python, JavaScript, TypeScript, React, Tailwind CSS, Spring Boot, MySQL, MongoDB, Docker, GitHub Actions, Machine Learning
- Experience:
  * Machine Learning/Backend Developer (2025)
  * Java Instructor at Altsys Academy (2024)
  * Started coding journey in 2022 with "Hello World"

Notable Projects:
1. EduLift Pathway - Career assessment program powered by machine learning
2. Alpha bot - Thesis project
3. Mood Flix - Entertainment application
4. Fraud Detection using Machine Learning
5. Tweet Scraper Script
6. Tweet Sentiment Analysis

Certifications:
- Spring Boot (Code by Mosh)
- Java TESDA NC III (TESDA Philippines)
- IoT Conference 2025
- Networking Fundamentals
- JavaScript Control Flow Webinar

Recognition:
- DICT Symposium 2025 Candidate

Teaching:
Available for teaching Java, Python, and modern backend development at Altsys Academy.
Contact: https://www.facebook.com/altsysacademy

Personal:
- Focuses on gym when not coding
- Shares knowledge through teaching
- Passionate about machine learning and AI-driven solutions

Contact:
- Email: aninonjomar745@gmail.com
- LinkedIn: https://www.linkedin.com/in/jomar-aniñon-237330356/
- GitHub: https://github.com/Near111111
- Instagram: https://www.instagram.com/itsyaboy.near/

Answer questions naturally and professionally. Be helpful, friendly, and informative about Jomar's skills, experience, and projects. Keep responses concise and engaging.
`;

// Toggle chat modal
if (chatButton) {
  chatButton.addEventListener("click", () => {
    chatModal.classList.add("active");
    chatInput.focus();
  });
}

if (chatClose) {
  chatClose.addEventListener("click", () => {
    chatModal.classList.remove("active");
  });
}

// Send message function
async function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  // Disable input while processing
  chatInput.disabled = true;
  chatSend.disabled = true;

  // Add user message to chat
  addMessage(message, "user");
  chatInput.value = "";

  // Show typing indicator
  const typingIndicator = addTypingIndicator();

  try {
    // Call Gemini API (using gemini-2.5-flash model)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${jomarContext}\n\nUser question: ${message}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log("API Response:", data); // Debug log

    // Remove typing indicator
    typingIndicator.remove();

    // Check for errors
    if (data.error) {
      if (data.error.code === 429) {
        addMessage(
          "I'm getting too many requests right now. Please wait a few seconds and try again! 😊",
          "bot"
        );
      } else {
        addMessage(
          `Error: ${
            data.error.message || "Something went wrong. Please try again!"
          }`,
          "bot"
        );
      }
    } else if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
      const aiResponse = data.candidates[0].content.parts[0].text;
      addMessage(aiResponse, "bot");
    } else {
      addMessage(
        "I'm sorry, I couldn't process that request. Please try again!",
        "bot"
      );
    }
  } catch (error) {
    console.error("Error:", error);
    typingIndicator.remove();
    addMessage(
      "I'm having trouble connecting right now. Please try again later!",
      "bot"
    );
  }

  // Re-enable input
  chatInput.disabled = false;
  chatSend.disabled = false;
  chatInput.focus();

  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add message to chat
function addMessage(text, type) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${type}-message`;

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";

  // Convert markdown-style formatting to HTML
  const formattedText = text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br>");

  contentDiv.innerHTML = `<p>${formattedText}</p>`;

  messageDiv.appendChild(contentDiv);
  chatMessages.appendChild(messageDiv);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add typing indicator
function addTypingIndicator() {
  const typingDiv = document.createElement("div");
  typingDiv.className = "message bot-message";
  typingDiv.innerHTML = `
    <div class="typing-indicator">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return typingDiv;
}

// Event listeners for sending messages
if (chatSend) {
  chatSend.addEventListener("click", sendMessage);
}

if (chatInput) {
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
}

// Close chat when clicking outside
document.addEventListener("click", (e) => {
  if (
    chatModal &&
    !chatModal.contains(e.target) &&
    !chatButton.contains(e.target)
  ) {
    chatModal.classList.remove("active");
  }
});
