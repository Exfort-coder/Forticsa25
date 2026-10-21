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
        nama: "MUHAMMAD YAHYA LU'LU'IL MAKNUN",
        jabatan: "Ketua Kelas",
        nim: "250202022",
        asal: "Adipala",
        foto: "image/yahya.JPG"
    },
    {
        nama: "ABDUL ROSYID AL KHOERUM",
        jabatan: "Wakil Ketua",
        nim: "250302002",
        asal: "Menganti, Cilacap",
        foto: "image/ocid.JPG"
    },
    {
        nama: "RAIHAN AFDHAL ATHALLAH",
        jabatan: "PJ Prodi",
        nim: "250202027",
        asal: "Kuningan",
        foto: "image/raihan.JPG"
    },
    {
        nama: "DIAN ROKHANI",
        jabatan: "Sekretaris 1",
        nim: "250102009",
        asal: "-",
        foto: "image/oca.JPG"
    },
    {
        nama: "IFFAH ZULFA SUMMAYYAH",
        jabatan: "Sekretaris 2",
        nim: "250302015",
        asal: "-",
        foto: "image/iffah.JPG"
    },
    {
        nama: "NUNKY ZULAIKHA WIDODO",
        jabatan: "Bendahara 1",
        nim: "250102025",
        asal: "-",
        foto: "image/nunky.JPG"
    },
    {
        nama: "YULIA ARZAKI AHMAD",
        jabatan: "Bendahara 2",
        nim: "250202032",
        asal: "Cilacap",
        foto: "image/kiki.JPG"
    },
    {
        nama: "ARYA PRIMA NUGRAHA",
        jabatan: "Anggota",
        nim: "250302003",
        asal: "-",
        foto: "image/arya.JPG"
    },
    {
        nama: "IGO ILHAM RAMADHAN",
        jabatan: "Anggota",
        nim: "250102016",
        asal: "Cilacap",
        foto: "image/igo.JPG"
    },
    {
        nama: "RIZQI NOOR BAROKAH",
        jabatan: "Anggota",
        nim: "250202028",
        asal: "-",
        foto: "image/rizqi.JPG"
    },
    {
        nama: "AMANDA LISA ASRININGSIH",
        jabatan: "Anggota",
        nim: "250202001",
        asal: "Sampang",
        foto: "image/manda.JPG"
    },
    {
        nama: "ASMORO NUR HUSEIN",
        jabatan: "Anggota",
        nim: "250302004",
        asal: "-",
        foto: "image/husein.JPG"
    },
    {
        nama: "ASSYIFA SAISARITA",
        jabatan: "Anggota",
        nim: "250302005",
        asal: "-",
        foto: "image/syifa.JPG"
    },
    {
        nama: "AURELLIA CAHYA NOVELIZA",
        jabatan: "Anggota",
        nim: "250102006",
        asal: "-",
        foto: "image/aurell.JPG"
    },
    {
        nama: "AZESA KAYSARAYA TRISNADI",
        jabatan: "Anggota",
        nim: "250102007",
        asal: "-",
        foto: "image/zeze.JPG"
    },
    {
        nama: "DAFFA RADHITYA PUTRA PRATAMA",
        jabatan: "Anggota",
        nim: "250302008",
        asal: "-",
        foto: "image/daffa.JPG"
    },
    {
        nama: "FAATHIMAH ANNAAFI'AH",
        jabatan: "Anggota",
        nim: "250202011",
        asal: "-",
        foto: "image/anna.JPG"
    },
    {
        nama: "FAUZY OKTAVIAN ETSA FERNANDA",
        jabatan: "Anggota",
        nim: "250102012",
        asal: "-",
        foto: "image/fauzy.JPG"
    },
    {
        nama: "GALIH HERDIAWAN",
        jabatan: "Anggota",
        nim: "250102013",
        asal: "-",
        foto: "image/galih.JPG"
    },
    {
        nama: "GENDHIS YUWITA SARI",
        jabatan: "Anggota",
        nim: "250202014",
        asal: "Cilacap",
        foto: "image/gendhis.JPG"
    },
    {
        nama: "IVANA WYNNE ANASTASIA",
        jabatan: "Anggota",
        nim: "250102017",
        asal: "-",
        foto: "image/wynne.JPG"
    },
    {
        nama: "",
        jabatan: "",
        nim: "",
        asal: "",
        foto: ""
    },
    {
        nama: "",
        jabatan: "",
        nim: "",
        asal: "",
        foto: ""
    },
    {
        nama: "",
        jabatan: "",
        nim: "",
        asal: "",
        foto: ""
    },
    {
        nama: "",
        jabatan: "",
        nim: "",
        asal: "",
        foto: ""
    },
    {
        nama: "",
        jabatan: "",
        nim: "",
        asal: "",
        foto: ""
    },
    {
        nama: "",
        jabatan: "",
        nim: "",
        asal: "",
        foto: ""
    },
    {
        nama: "",
        jabatan: "",
        nim: "",
        asal: "",
        foto: ""
    },
    {
        nama: "",
        jabatan: "",
        nim: "",
        asal: "",
        foto: ""
    },
    {
        nama: "",
        jabatan: "",
        nim: "",
        asal: "",
        foto: ""
    },
    {
        nama: "",
        jabatan: "",
        nim: "",
        asal: "",
        foto: ""
    },
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