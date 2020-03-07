function hitungKembalian(totalBelanja, uang) {
    let uangKembalian = []
    let kembalian
    // jumlah uang kembalian
    kembalian = uang - totalBelanja
    // kondisi 
    while (kembalian > 0) {
        if (kembalian >= 50000) {
            kembalian -= 50000
            uangKembalian.push(50000)
        } else if (kembalian < 50000 && kembalian >= 20000) {
            kembalian -= 20000
            uangKembalian.push(20000)
        } else if (kembalian < 20000 && kembalian >= 10000) {
            kembalian -= 10000
            uangKembalian.push(10000)
        } else if (kembalian < 10000 && kembalian >= 5000) {
            kembalian -= 5000
            uangKembalian.push(5000)
        } else if (kembalian < 5000 && kembalian >= 2000) {
            kembalian -= 2000
            uangKembalian.push(2000)
        } else if (kembalian < 2000 && kembalian >= 1000) {
            kembalian -= 1000
            uangKembalian.push(1000)
        } else if (kembalian < 1000 && kembalian >= 500) {
            kembalian -= 500
            uangKembalian.push(500)
        }
    }
    return uangKembalian
}