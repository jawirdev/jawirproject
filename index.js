<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Pembayaran</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        .container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            max-width: 400px;
            width: 100%;
            text-align: center;
        }
        .profile {
            margin-bottom: 25px;
        }
        .profile-pic {
            width: 100px;
            height: 100px;
            background-color: #e0e0e0;
            border-radius: 50%;
            margin: 0 auto 15px auto;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            color: #888;
            border: 3px solid #ccc;
        }
        .profile h1 {
            margin: 0;
            font-size: 24px;
        }
        .profile p {
            margin: 5px 0 0 0;
            color: #777;
        }
        .payment-method {
            margin-bottom: 20px;
        }
        .payment-method h2 {
            font-size: 18px;
            margin-bottom: 15px;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
        }
        .qr-code-placeholder {
            width: 200px;
            height: 200px;
            background-color: #f0f0f0;
            margin: 0 auto 15px auto;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #999;
            font-style: italic;
        }
        .wallet-info {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 8px;
            margin-top: 10px;
        }
        .wallet-info strong {
            display: block;
            margin-bottom: 5px;
        }
        .wallet-info span {
            font-size: 16px;
            color: #555;
            word-wrap: break-word;
        }
        footer {
            margin-top: 30px;
            font-size: 12px;
            color: #aaa;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="profile">
            <div class="profile-pic">Foto Anda</div>
            <h1>Nama Anda</h1>
            <p>Silakan lakukan pembayaran melalui metode di bawah ini.</p>
        </div>

        <div class="payment-method">
            <h2>QRIS (All E-Wallet & M-Banking)</h2>
            <div class="qr-code-placeholder">
                Tempat untuk foto QRIS Anda
            </div>
            <p>Scan kode QR di atas</p>
        </div>

        <div class="payment-method">
            <h2>E-Wallet & Bank Transfer</h2>
            <div class="wallet-info">
                <strong>Dana / OVO / GoPay</strong>
                <span>0812-3456-7890</span>
                <p style="font-size:12px; margin-top:5px;">a.n. Nama Anda</p>
            </div>
            <div class="wallet-info">
                <strong>Bank BCA</strong>
                <span>1234567890</span>
                <p style="font-size:12px; margin-top:5px;">a.n. Nama Lengkap Anda</p>
            </div>
        </div>
        
        <footer>
            Terima kasih atas dukungan Anda!
        </footer>
    </div>

</body>
</html>
