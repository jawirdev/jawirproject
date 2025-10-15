document.addEventListener('DOMContentLoaded', function() {
    // Kredensial Admin (Ini tidak aman, hanya untuk kenyamanan)
    const ADMIN_USER = "jawirdev";
    const ADMIN_PASS = "jawir123";

    // Ambil semua elemen dari HTML
    const loginScreen = document.getElementById('login-screen');
    const mainContent = document.getElementById('main-content');
    const loginButton = document.getElementById('login-button');
    const guestButton = document.getElementById('guest-button');
    const logoutButton = document.getElementById('logout-button');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const orderListContainer = document.getElementById('order-list');
    
    // Elemen khusus Admin
    const adminOnlyElements = document.querySelectorAll('.admin-only');
    const addOrderButton = document.getElementById('add-order-button');

    let currentOrders = [];

    // Fungsi untuk merender daftar antrian
    function renderOrders() {
        orderListContainer.innerHTML = ''; // Kosongkan daftar sebelum render ulang

        const statusOrder = { "Process": 1, "Pending": 2, "Done": 3, "Refund": 4 };
        currentOrders.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);

        if (currentOrders.length === 0) {
            orderListContainer.innerHTML = '<p style="text-align:center;">Belum ada antrian saat ini.</p>';
            return;
        }

        currentOrders.forEach((order, index) => {
            const card = document.createElement('div');
            card.className = 'order-card';
            card.style.animationDelay = `${index * 0.1}s`;
            
            const now = new Date();
            const timestamp = now.toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' });

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
            orderListContainer.appendChild(card);
        });
    }

    // Fungsi untuk menampilkan konten utama
    function showMainContent(isAdmin = false) {
        loginScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');

        if (isAdmin) {
            adminOnlyElements.forEach(el => el.classList.remove('hidden'));
        } else {
            adminOnlyElements.forEach(el => el.classList.add('hidden'));
        }
        renderOrders();
    }

    // Fungsi untuk menyimpan data ke Local Storage
    function saveOrdersToLocal() {
        localStorage.setItem('designOrders', JSON.stringify(currentOrders));
    }
    
    // Fungsi untuk memuat data
    function loadOrders() {
        const savedOrders = localStorage.getItem('designOrders');
        if (savedOrders) {
            // Jika ada data di local storage, pakai itu
            currentOrders = JSON.parse(savedOrders);
        } else {
            // Jika tidak, pakai data awal dari data.js
            currentOrders = [...orders]; // 'orders' berasal dari file data.js
        }
    }

    // Event Listener untuk tombol login
    loginButton.addEventListener('click', () => {
        const user = usernameInput.value;
        const pass = passwordInput.value;

        if (user === ADMIN_USER && pass === ADMIN_PASS) {
            sessionStorage.setItem('isAdmin', 'true'); // Tandai sesi ini sebagai admin
            showMainContent(true);
        } else {
            errorMessage.style.visibility = 'visible';
        }
    });

    // Event Listener untuk tombol tamu
    guestButton.addEventListener('click', () => {
        showMainContent(false);
    });
    
    // Event Listener untuk tombol logout
    logoutButton.addEventListener('click', () => {
        sessionStorage.removeItem('isAdmin');
        location.reload(); // Muat ulang halaman
    });

    // Event Listener untuk tombol Tambah Antrian
    addOrderButton.addEventListener('click', () => {
        const newOrder = {
            id: document.getElementById('order-id').value,
            namaPesanan: document.getElementById('order-name').value,
            namaPemesan: document.getElementById('customer-name').value,
            status: document.getElementById('order-status').value
        };

        if(!newOrder.id || !newOrder.namaPesanan || !newOrder.namaPemesan) {
            alert('Harap isi semua kolom!');
            return;
        }

        currentOrders.unshift(newOrder); // Tambah ke paling atas array
        saveOrdersToLocal();
        renderOrders();

        // Kosongkan input form
        document.getElementById('order-id').value = '';
        document.getElementById('order-name').value = '';
        document.getElementById('customer-name').value = '';
    });
    
    // Inisialisasi
    loadOrders();
    // Cek jika user sudah login sebelumnya di sesi ini
    if (sessionStorage.getItem('isAdmin') === 'true') {
        showMainContent(true);
    }
});
