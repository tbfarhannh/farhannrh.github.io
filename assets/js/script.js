/* ========================== 
  Dark Mode & Light Mode 
============================= */
// document.addEventListener("DOMContentLoaded", function () {
//   const lightModeBtn = document.getElementById("light-mode-btn");
//   const darkModeBtn = document.getElementById("dark-mode-btn");
//   const mainStyle = document.getElementById("main-style");
//   const darkModeStyle = document.getElementById("dark-mode-style");

//   // Cek mode yang tersimpan di localStorage
//   const currentMode = localStorage.getItem("theme") || "light";

//   function applyTheme(mode) {
//     if (mode === "dark") {
//       mainStyle.disabled = true;
//       darkModeStyle.disabled = false;
//     } else {
//       mainStyle.disabled = false;
//       darkModeStyle.disabled = true;
//     }
//     localStorage.setItem("theme", mode); // Simpan mode ke localStorage
//   }

//   // Terapkan mode saat halaman dimuat
//   applyTheme(currentMode);

//   // Event Listener untuk tombol Light
//   lightModeBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     applyTheme("light");
//   });

//   // Event Listener untuk tombol Dark
//   darkModeBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     applyTheme("dark");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const lightModeBtn = document.getElementById("light-mode-btn");
  const darkModeBtn = document.getElementById("dark-mode-btn");
  const mainStyle = document.getElementById("main-style");
  const darkModeStyle = document.getElementById("dark-mode-style");

  // Ambil mode saat ini dari localStorage
  const currentMode = localStorage.getItem("theme") || "light";

  function applyTheme(mode) {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      mainStyle.disabled = true;
      darkModeStyle.disabled = false;
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      mainStyle.disabled = false;
      darkModeStyle.disabled = true;
    }

    // Simpan mode ke localStorage
    localStorage.setItem("theme", mode);

    // Update tombol aktif
    updateButtonState();
  }

  function updateButtonState() {
    // Hapus kelas active dari kedua tombol
    lightModeBtn.classList.remove("active");
    darkModeBtn.classList.remove("active");

    // Beri kelas active pada tombol yang dipilih
    if (document.body.classList.contains("light-mode")) {
      lightModeBtn.classList.add("active");
    } else {
      darkModeBtn.classList.add("active");
    }
  }

  // Terapkan mode saat halaman dimuat
  applyTheme(currentMode);

  // Event Listener untuk tombol Light
  lightModeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    applyTheme("light");
  });

  // Event Listener untuk tombol Dark
  darkModeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    applyTheme("dark");
  });
});

/* ========================== 
  Hero Section Running Text
============================= */
const textArray = [
  "Graphic Designer",
  "Web Developer.",
  "UI/UX Designer.",
  "Freelancer.",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const animatedText = document.querySelector(".animated-text");

function typeEffect() {
  const currentText = textArray[textIndex];
  if (isDeleting) {
    animatedText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    animatedText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 50 : 100; // Kecepatan mengetik dan menghapus

  if (!isDeleting && charIndex === currentText.length) {
    typingSpeed = 1500; // Delay sebelum mulai menghapus
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length; // Loop ke teks berikutnya
    typingSpeed = 500; // Delay sebelum mengetik teks baru
  }

  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

/* ========================== 
  Hero Section Spark Effect 
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero");

  hero.addEventListener("mousemove", function (e) {
    const spark = document.createElement("div");
    spark.classList.add("cursor-effect");
    document.body.appendChild(spark);

    spark.style.left = `${e.clientX}px`;
    spark.style.top = `${e.clientY}px`;

    setTimeout(() => {
      spark.remove();
    }, 500);
  });
});

/* ========================== 
  Toggle Menu (Hamburger) 
============================= */

/* ========================== 
  Navigation Active & Hover 
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav .nav-menu ul li a");

  function activateMenu() {
    let current = "home"; // Default ke "home"
    let minDistance = Infinity;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const distance = Math.abs(window.scrollY - sectionTop);

      if (window.scrollY >= sectionTop && distance < minDistance) {
        current = section.getAttribute("id");
        minDistance = distance;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", activateMenu);
  activateMenu(); // Panggil saat halaman pertama kali dimuat
});

/* ========================== 
  Skills Progress 
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress-bar");

  function animateProgressBars() {
    progressBars.forEach((bar) => {
      const progressBarWrap = bar.parentElement.parentElement;
      const rect = progressBarWrap.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.85) {
        // Aktif saat 85% masuk viewport
        const value = bar.getAttribute("aria-valuenow");
        bar.style.width = value + "%";
      }
    });
  }

  window.addEventListener("scroll", animateProgressBars);
  animateProgressBars(); // Jalankan saat halaman pertama kali dimuat
});

/* ================== 
  Gallery Portfolio
===================== */
document.addEventListener("DOMContentLoaded", function () {
  function makeInfiniteScroll(selector) {
    const gallery = document.querySelector(selector);
    if (!gallery) return;

    const images = [...gallery.children];
    const clone = images.map((img) => img.cloneNode(true));

    clone.forEach((img) => gallery.appendChild(img));
  }

  makeInfiniteScroll(".gallery-top");
  makeInfiniteScroll(".gallery-bottom");
});

/* ============== 
  Back to Top  
================= */
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ========================== 
  Contact Form Google Sheet 
============================= */
const scriptURL =
  "https://script.google.com/macros/s/AKfycbw1azL5ljglzjFO50ccbCFU7TLc96NqnHN_qe-hYzjDS9qqOit4ezVeF2uvhlftsDPZ/exec";
const form = document.forms["my-portfolio-contact-form"];
const submitBtn = document.getElementById("submit-btn");
const notification = document.getElementById("notification");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Tambahkan efek loading pada tombol
  submitBtn.textContent = "Sending...";
  submitBtn.classList.add("loading");
  submitBtn.disabled = true;

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);

      // Tampilkan notifikasi
      notification.classList.remove("hidden");
      notification.style.display = "block";

      // Reset form setelah sukses
      form.reset();

      // Kembalikan tombol ke keadaan semula setelah 3 detik
      setTimeout(() => {
        submitBtn.textContent = "Send Message";
        submitBtn.classList.remove("loading");
        submitBtn.disabled = false;
        notification.style.display = "none";
      }, 3000);
    })
    .catch((error) => {
      console.error("Error!", error.message);
      submitBtn.textContent = "Send Message";
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
    });
});


