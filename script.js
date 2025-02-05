function order(packageName, price) {
    const receiptDetails = `Anda telah memesan: ${packageName}\nHarga: Rp${price}`;
    document.getElementById('receipt-details').innerText = receiptDetails;
    document.getElementById('receipt').classList.remove('hidden');
}

function downloadReceipt() {
    const receiptText = document.getElementById('receipt-details').innerText;
    const blob = new Blob([receiptText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'struk_pembelian.txt';
    link.click();
}
function order(packageName, price) {
    if (!packageName || price <= 0) {
        alert("Silakan pilih paket yang valid.");
        return;
    }
    const receiptDetails = `Anda telah memesan: ${packageName}\nHarga: Rp${price}`;
    document.getElementById('receipt-details').innerText = receiptDetails;
    document.getElementById('receipt').classList.remove('hidden');
    document.getElementById('payment').classList.remove('hidden');
}

function pay(method) {
    alert(`Pembayaran melalui ${method} berhasil!`);
    // Di sini Anda bisa menambahkan logika untuk menghubungkan ke API pembayaran
}