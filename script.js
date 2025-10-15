document.addEventListener('DOMContentLoaded', function() {
    const orderListContainer = document.getElementById('order-list');
    
    // Jika tidak ada pesanan, tampilkan pesan
    if (orders.length === 0) {
        orderListContainer.innerHTML = '<p style="text-align:center;">Belum ada antrian saat ini.</p>';
        return;
    }

    // Loop melalui setiap item di array 'orders' dari file data.js
    orders.forEach((order, index) => {
        // Buat elemen card baru
        const card = document.createElement('div');
        card.className = 'order-card';
        // Tambahkan delay animasi agar muncul satu per satu
        card.style.animationDelay = `${index * 0.1}s`;

        // Dapatkan tanggal dan waktu saat ini dengan format Indonesia
        const now = new Date();
        const timestamp = now.toLocaleString('id-ID', {
            dateStyle: 'medium',
            timeStyle: 'short'
        });

        // Isi konten HTML untuk card
        card.innerHTML = `
            <div class="order-details">
                <h2>${order.namaPesanan}</h2>
                <p>Pemesan: <strong>${order.namaPemesan}</strong></p>
                <div class="meta">
                    <span>ID: ${order.id}</span>
                    <span>Waktu Update: ${timestamp}</span>
                </div>
            </div>
            <div class="status-badge status-${order.status}">
                ${order.status}
            </div>
        `;

        // Tambahkan card yang sudah jadi ke dalam container di HTML
        orderListContainer.appendChild(card);
    });
});
