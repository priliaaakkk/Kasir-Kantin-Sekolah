function hitungtotal() {
    const harga = {
        nasi: 15000,
        dimsum: 12000,
        ayam: 12000,
        jus: 10000,
        mie: 8000
    };

    const total = Object.entries(harga).reduce((jumlah, [menu, harga]) => {
        const banyak = Number(document.getElementById(menu).value) || 0;
        return jumlah + banyak * harga;
    }, 0);

    const nama = document.getElementById("nama").value.trim();
    const rupiah = total.toLocaleString("id-ID");

    document.getElementById("hasil").textContent =
        `Total${nama ? ` ${nama}` : ""}: Rp${rupiah}`;
}