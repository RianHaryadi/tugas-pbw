// Fungsi untuk memeriksa apakah elemen terlihat di viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Fungsi untuk menambahkan kelas animasi saat elemen muncul di viewport
  function revealOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('visible');  // Menambahkan kelas 'visible' untuk memulai animasi
      }
    });
  }
  
  // Mengatur event listener untuk scroll
  window.addEventListener('scroll', revealOnScroll);
  
  // Inisialisasi animasi pada scroll pertama kali
  document.addEventListener('DOMContentLoaded', revealOnScroll);
  