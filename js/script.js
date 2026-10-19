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

const dataAnggota = [
    {
        nama: "Qiqi",
        jabatan: "Ketua Kelas",
        nim: "250202032",
        asal: "Cilacap",
        hobi: "Ngoding, desain",
        instagram: "@qiqi",
        bio: "Tulis deskripsi singkat anggota di sini.",
        foto: "img/anggota/qiqi.jpg"
    },
    {
        nama: "Nama Anggota 2",
        jabatan: "Wakil Ketua",
        nim: "250202xxx",
        asal: "Kota Asal",
        hobi: "Hobi",
        instagram: "@username",
        bio: "Deskripsi singkat.",
        foto: "img/anggota/anggota2.jpg"
    }
];

(function () {
    const daftar = document.getElementById("daftar-anggota");
    if (!daftar) return; // hanya jalan di halaman anggota

    const kosong = document.getElementById("anggota-kosong");
    const cari = document.getElementById("cari-anggota");
    const modal = document.getElementById("modal-anggota");
    const FOTO_CADANGAN =
        "data:image/svg+xml;utf8," +
        encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
            '<rect width="200" height="200" fill="#ccc"/>' +
            '<circle cx="100" cy="80" r="35" fill="#999"/>' +
            '<rect x="45" y="125" width="110" height="60" rx="30" fill="#999"/></svg>'
        );

    function setFoto(img, anggota) {
        img.src = anggota.foto;
        img.alt = "Foto " + anggota.nama;
        img.onerror = function () { img.onerror = null; img.src = FOTO_CADANGAN; };
    }

    function tampilkanDaftar(data) {
        daftar.innerHTML = "";
        kosong.hidden = data.length > 0;
        data.forEach(function (a) {
            const kartu = document.createElement("button");
            kartu.type = "button";
            kartu.className = "kartu-anggota";

            const img = document.createElement("img");
            setFoto(img, a);

            const nama = document.createElement("strong");
            nama.textContent = a.nama;

            const jabatan = document.createElement("span");
            jabatan.textContent = a.jabatan;

            kartu.append(img, nama, jabatan);
            kartu.addEventListener("click", function () { bukaModal(a); });
            daftar.appendChild(kartu);
        });
    }

    function bukaModal(a) {
        setFoto(document.getElementById("modal-foto"), a);
        document.getElementById("modal-nama").textContent = a.nama;
        document.getElementById("modal-jabatan").textContent = a.jabatan;
        document.getElementById("modal-nim").textContent = a.nim;
        document.getElementById("modal-asal").textContent = a.asal;
        document.getElementById("modal-hobi").textContent = a.hobi;
        document.getElementById("modal-ig").textContent = a.instagram;
        document.getElementById("modal-bio").textContent = a.bio;
        modal.hidden = false;
        document.getElementById("modal-tutup").focus();
    }

    function tutupModal() { modal.hidden = true; }

    document.getElementById("modal-tutup").addEventListener("click", tutupModal);
    modal.addEventListener("click", function (e) { if (e.target === modal) tutupModal(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") tutupModal(); });

    cari.addEventListener("input", function () {
        const kata = cari.value.trim().toLowerCase();
        tampilkanDaftar(dataAnggota.filter(function (a) {
            return a.nama.toLowerCase().includes(kata);
        }));
    });

    tampilkanDaftar(dataAnggota);
})();



// ==== Area Kerja Mas Rizky (Kontak) dibwah ini ==== //