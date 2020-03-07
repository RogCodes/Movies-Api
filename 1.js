function hari(hari) {
    let jmlAwal = 2169
    let i = jmlAwal
    let hasil = jmlAwal
    // berapa kali melahirkan
    let perulangan = hari / 92
    for (let j = 0; j < Math.floor(perulangan); j++) {
        // pengurangan dari jumlah yang mati
        i = Math.floor(i - 11.1/100*i)
        hasil += i
    }
    return hasil
}