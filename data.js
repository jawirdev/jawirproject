// INI ADALAH "PANEL KONTROL" ANDA
// Untuk menambah antrian, cukup salin satu blok {...}, paste di bawahnya,
// dan ganti isinya. Pastikan ada koma di antara setiap blok.

const orders = [
    {
        id: "SKTCH-003",
        namaPesanan: "Desain Logo untuk 'Kopi Senja'",
        namaPemesan: "Budi Santoso",
        status: "Done" // Pilihan: "Done", "Process", "Pending", "Refund"
    },
    {
        id: "VCTR-002",
        namaPesanan: "Vector Art Wajah (2 Orang)",
        namaPemesan: "Citra Lestari",
        status: "Process"
    },
    {
        id: "PSTR-001",
        namaPesanan: "Poster Event Musik 'Indie Fest'",
        namaPemesan: "Andi Wijaya",
        status: "Pending"
    }
];

// Biarkan bagian di bawah ini, tidak perlu diubah.
// Kode ini untuk mengurutkan data agar yang "Process" selalu di atas.
const statusOrder = { "Process": 1, "Pending": 2, "Done": 3, "Refund": 4 };
orders.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
