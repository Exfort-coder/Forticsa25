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