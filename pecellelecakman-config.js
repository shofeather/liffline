// Menu
var jumlahPecelLele = document.getElementById("pecellelejumlah");
var jumlahAyamPenyet = document.getElementById("ayampenyetjumlah");
var jumlahEsJeruk = document.getElementById("esjerukjumlah");
var jumlahEsTeh = document.getElementById("estehjumlah");

// Total Belanja
var totalHargaMakanan = document.getElementById("makanantotal");
var totalHargaMinuman = document.getElementById("minumantotal");
var totalPecelLele = document.getElementById("pecelleletotal");
var totalAyamPenyet = document.getElementById("ayampenyettotal");
var totalEsJeruk = document.getElementById("jeruktotal");
var totalEsTeh = document.getElementById("tehtotal");

var totalPecelLeleHarga;
var totalAyamPenyetHarga;
var totalEsJerukHarga;
var totalEsTehHarga;

function NambahMakanan(jenisMakanan) {
    switch (jenisMakanan) {
        case "iniPecelLele":
            var currentTotal = jumlahPecelLele.innerHTML;
            currentTotal = parseInt(currentTotal);
            currentTotal++;
            jumlahPecelLele.innerHTML = currentTotal;
            totalPecelLele.innerHTML = currentTotal;
            break;
        case "iniAyamPenyet":
            var currentTotal = jumlahAyamPenyet.innerHTML;
            currentTotal = parseInt(currentTotal);
            currentTotal++;
            jumlahAyamPenyet.innerHTML = currentTotal;
            totalAyamPenyet.innerHTML = currentTotal;
            break;
        default:
            break;
    }
    hitungTotalBelanja();
}

function PenguranganMakanan(jenisMakanan) {
    switch (jenisMakanan) {
        case "iniPecelLele":
            var currentTotal = jumlahPecelLele.innerHTML;
            currentTotal = parseInt(currentTotal);

            if (currentTotal == 0) {
                currentTotal = 0;
            } else {
                currentTotal--;
            }

            jumlahPecelLele.innerHTML = currentTotal;
            totalPecelLele.innerHTML = currentTotal;
            break;
        case "iniAyamPenyet":
            var currentTotal = jumlahAyamPenyet.innerHTML;
            currentTotal = parseInt(currentTotal);

            if (currentTotal == 0) {
                currentTotal = 0;
            } else {
                currentTotal--;
            }

            jumlahAyamPenyet.innerHTML = currentTotal;
            totalAyamPenyet.innerHTML = currentTotal;
            break;
        default:
            break;
    }
    hitungTotalBelanja();
}

function NambahMinuman(jenisMinuman) {
    switch (jenisMinuman) {
        case "iniEsJeruk":
            var currentTotal = jumlahEsJeruk.innerHTML;
            currentTotal = parseInt(currentTotal);
            currentTotal++;
            jumlahEsJeruk.innerHTML = currentTotal;
            totalEsJeruk.innerHTML = currentTotal;
            break;
        case "iniEsTeh":
            var currentTotal = jumlahEsTeh.innerHTML;
            currentTotal = parseInt(currentTotal);
            currentTotal++;
            jumlahEsTeh.innerHTML = currentTotal;
            totalEsTeh.innerHTML = currentTotal;
            break;
        default:
            break;
    }
    hitungTotalBelanja();
}

function PenguranganMinuman(jenisMinuman) {
    switch (jenisMinuman) {
        case "iniEsJeruk":
            var currentTotal = jumlahEsJeruk.innerHTML;
            currentTotal = parseInt(currentTotal);

            if (currentTotal == 0) {
                currentTotal = 0;
            } else {
                currentTotal--;
            }

            jumlahEsJeruk.innerHTML = currentTotal;
            totalEsJeruk.innerHTML = currentTotal;
            break;
        case "iniEsTeh":
            var currentTotal = jumlahEsTeh.innerHTML;
            currentTotal = parseInt(currentTotal);

            if (currentTotal == 0) {
                currentTotal = 0;
            } else {
                currentTotal--;
            }

            jumlahEsTeh.innerHTML = currentTotal;
            totalEsTeh.innerHTML = currentTotal;
            break;
        default:
            break;
    }
    hitungTotalBelanja();
}

function hitungTotalBelanja() {
    totalPecelLeleHarga = parseInt(totalPecelLele.innerHTML) * 15000;
    totalAyamPenyetHarga = parseInt(totalAyamPenyet.innerHTML) * 20000;
    totalEsJerukHarga = parseInt(totalEsJeruk.innerHTML) * 5000;
    totalEsTehHarga = parseInt(totalEsTeh.innerHTML) * 4000;

    totalHargaMakanan.innerHTML = totalPecelLeleHarga + totalAyamPenyetHarga;
    totalHargaMinuman.innerHTML = totalEsJerukHarga + totalEsTehHarga;

    statusButtonCM();
}

function checkoutCO() {
    var namaUser = document.getElementById("card_nama_user");
    var strukBelanja = "Hai, " + namaUser.innerHTML + "\n\n" +
        "Terimakasih telah memesan makanan dan minuman di PECEL LELE CAK MAN \n" +
        "Berikut adalah rincian pesanan anda: \n\n" +
        totalPecelLele.innerHTML + " item Pecel Lele: Rp. " + totalPecelLeleHarga + "\n" +
        totalAyamPenyet.innerHTML + " item Ayam Penyet: Rp. " + totalAyamPenyetHarga + "\n" +
        totalEsJeruk.innerHTML + " item Es Jeruk: Rp. " + totalEsJerukHarga + "\n" +
        totalEsTeh.innerHTML + " item Es Teh: Rp. " + totalEsTehHarga + "\n\n" +
        "Maka,\n" +
        "Total harga makanan: Rp. " + totalHargaMakanan.innerHTML + "\n" +
        "Total harga minuman: Rp. " + totalHargaMinuman.innerHTML + "\n\n" +
        "Silahkan lakukan proses pembayaran di kasir ya :D";

    return strukBelanja;
}

function statusButtonCM() {
    if (
        totalPecelLeleHarga == 0 &&
        totalAyamPenyetHarga == 0 &&
        totalEsJerukHarga == 0 &&
        totalEsTehHarga == 0
    ) {
        document.getElementById("button_CO").disabled = true;
    } else {
        document.getElementById("button_CO").disabled = false;
    }
}
