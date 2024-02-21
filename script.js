const istilahList = [
    { istilah: "Abort", definisi: "Perintah untuk membatalkan jalannya suatu program secara paksa dan mengembalikan ke sistem operasi" },
    { istilah: "Access", definisi: "Kegiatan mengambil atau menyimpan data dari atau ke memori atau ke disk drive" },
    { istilah: "JS", definisi: "JavaScript" },
    // Tambahkan lebih banyak istilah di sini...
];

const istilahListElement = document.getElementById('istilah-list');
const searchInput = document.getElementById('search');

function renderIstilahList(istilahs) {
    istilahListElement.innerHTML = '';
    istilahs.forEach(istilah => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${istilah.istilah}:</strong> ${istilah.definisi}`;
        istilahListElement.appendChild(li);
    });
}

function filterIstilahList(searchTerm) {
    const filteredIstilahs = istilahList.filter(istilah => 
        istilah.istilah.toLowerCase().includes(searchTerm.toLowerCase()) ||
        istilah.definisi.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderIstilahList(filteredIstilahs);
}

searchInput.addEventListener('input', () => {
    filterIstilahList(searchInput.value);
});

// Render semua istilah saat halaman dimuat
renderIstilahList(istilahList);
