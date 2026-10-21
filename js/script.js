// ===== FITUR GLOBAL: Mode Gelap (Dipakai Semua Halaman) =====
const tombolTema = document.getElementById("tombol-tema");
if (tombolTema) {
    tombolTema.addEventListener("click", function () {
        document.body.classList.toggle("gelap");
        if (document.body.classList.contains("gelap")) {
            tombolTema.textContent = "Mode Terang";
        } else {
            tombolTema.textContent = "Mode Gelap";
        }
    });
}

// ==== Area Kerja Mas Igo (Beranda dan Kegiatan) dibawah ini ==== //

// efek ketik jargon
  const elemenJargon = document.querySelector('.jargon p');
  if (elemenJargon) {
    const teksAsli = elemenJargon.textContent;
    elemenJargon.textContent = '';
    let i = 0;

    function ketikTeks() {
      if (i < teksAsli.length) {
        elemenJargon.textContent += teksAsli.charAt(i);
        i++;
        setTimeout(ketikTeks, 40); // Kecepatan ngetik (ms)
      }
    }
    ketikTeks();
  }

  // animasi angka statistik
  const statistikCards = document.querySelectorAll('.statistik-card h3');
  let animated = false;

  function jalankanCounter() {
    statistikCards.forEach(card => {
      const target = parseInt(card.textContent);
      if (isNaN(target)) return;

      let count = 0;
      const increment = Math.ceil(target / 30);
      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          card.textContent = card.textContent.includes('+') ? target + '+' : target;
          clearInterval(timer);
        } else {
          card.textContent = count;
        }
      }, 50);
    });
  }

  // Jalankan animasi statistik saat scroll sampai ke bagian statistik
  window.addEventListener('scroll', () => {
    const sectionStatistik = document.querySelector('.statistik');
    if (sectionStatistik) {
      const posisi = sectionStatistik.getBoundingClientRect().top;
      const tinggiLayar = window.innerHeight;

      if (posisi < tinggiLayar && !animated) {
        jalankanCounter();
        animated = true;
      }
    }
  });



// ==== Area Kerja Mba Qiqi (Anggota) dibawah ini ==== //




// ==== Area Kerja Mas Rizky (Kontak) dibwah ini ==== //
document.addEventListener("DOMContentLoaded", function () {
    const formKontak = document.getElementById("form-kontak");
    const notifikasiForm = document.getElementById("notifikasi-form");

    if (formKontak) {
        formKontak.addEventListener("submit", function (e) {
            e.preventDefault(); // Mencegah reload halaman

            const nama = document.getElementById("nama").value;
            
            // Simulasi pesan sukses
            notifikasiForm.textContent = `Terima kasih, ${nama}! Pesan Anda berhasil dikirim.`;
            notifikasiForm.className = "notifikasi sukses";

            formKontak.reset();

            // Menghapus notifikasi otomatis setelah 5 detik
            setTimeout(() => {
                notifikasiForm.textContent = "";
                notifikasiForm.className = "notifikasi";
            }, 5000);
        });
    }
});