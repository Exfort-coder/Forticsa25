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




// ==== Area Kerja Mba Qiqi (Anggota) dibawah ini ==== //




// ==== Area Kerja Mas Rizky (Kontak) dibwah ini ==== //