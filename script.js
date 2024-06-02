function kirimData() {
    // Get form values
    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const peminatan = document.querySelector('input[name="peminatan"]:checked');
    const angkatan = document.getElementById('angkatan').value;
    const tanggal = document.getElementById('tanggal').value;
    const alamat = document.getElementById('alamat').value;
    const alasan = document.getElementById('alasan').value;

    // Validation
    if (!nama || !nim || !peminatan || !angkatan || !tanggal || !alamat || !alasan) {
        alert("SELURUH FORM WAJIB DIISI SEBELUM MENGIRIM, HARAP CEK KEMBALI!!!");
        return;
    }

    // Set result values
    document.getElementById('result-nama').innerText = nama;
    document.getElementById('result-nim').innerText = nim;
    document.getElementById('result-peminatan').innerText = peminatan.value;
    document.getElementById('result-angkatan').innerText = angkatan;
    document.getElementById('result-tanggal').innerText = tanggal;
    document.getElementById('result-alamat').innerText = alamat;
    document.getElementById('result-alasan').innerText = alasan;

    // Show result wrapper
    document.querySelector('.result-wrapper').style.display = 'block';

    // Scroll to bottom
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

function validateBeforeBack() {
    // Get form values
    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const peminatan = document.querySelector('input[name="peminatan"]:checked');
    const angkatan = document.getElementById('angkatan').value;
    const tanggal = document.getElementById('tanggal').value;
    const alamat = document.getElementById('alamat').value;
    const alasan = document.getElementById('alasan').value;

    // Validation
    if (!nama || !nim || !peminatan || !angkatan || !tanggal || !alamat || !alasan) {
        alert("HARAP ISI SELURUH FORM TERLEBIH DAHULU JIKA INGIN KEMBALI!!!");
        return;
    }

    // Redirect to the index.html page
    window.location.href = 'index.html';
}
