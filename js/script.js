function closeLoader() {
  console.log("Mulai loading..."); 
  
  setTimeout(() => {
    const loader = document.querySelector(".loader");
    if (loader) {
      console.log("Menutup loader setelah 2 detik"); 
      
      loader.classList.add("hidden");
      
      setTimeout(() => {
        loader.style.display = "none";
        console.log("Loader disembunyikan sepenuhnya");
      }, 800);
    } else {
      console.error("Loader tidak ditemukan!"); 
    }
  }, 2000); 
}

closeLoader();

const sections = document.querySelectorAll("section");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2 
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target); 
    }
  });
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});

// Validasi Form Manual
const form = document.getElementById("form");
if (form) {
  form.addEventListener("submit", function (e) {
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    if (!nama || !email || !pesan) {
      alert("Harap isi semua kolom!");
      e.preventDefault();
    } else {
      alert("Terima kasih, " + nama + "!");
      localStorage.setItem("pengunjung", nama);
      form.reset(); 
    }
  });
}

// Ambil Nama dari Local Storage
const pengunjung = localStorage.getItem("pengunjung");
const haloElement = document.getElementById("halo");
if (pengunjung && haloElement) {
  haloElement.textContent = "Halo, " + pengunjung + "!";
}

console.log("Website Natasya loaded ✅");

// Efek parallax sederhana pada Hero Section
window.addEventListener('scroll', function() {
  const heroSection = document.getElementById('Hero');
  if (heroSection) {
    let scrollPosition = window.pageYOffset;
    heroSection.style.backgroundPositionY = -scrollPosition * 0.2 + 'px';
  }
});
