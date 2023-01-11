function konversiRupiah(x: number, y: string): string {
    // Menetapkan nilai tukar mata uang
    const nilaiTukar: {[key: string]: number} = {
        "USD": 14000,  // 1 USD sama dengan 14000 IDR
        "YEN": 128,  // 1 YEN sama dengan 128 IDR
        "EURO": 16000  // 1 EURO sama dengan 16000 IDR
    };
  
    // Mengkonversi x dari tipe data number ke tipe data string
    let nominal = x.toString();
  
    // Memisahkan setiap 3 digit dari belakang dengan tanda titik (.)
    let rupiah = "";
    for (let i = nominal.length - 1; i >= 0; i--) {
        rupiah = nominal[i] + rupiah;
        if ((nominal.length - i) % 3 === 0 && i !== 0) {
            rupiah = "." + rupiah;
        }
    }
  
    // Mengubah y menjadi huruf besar semua
    y = y.toUpperCase();
  
    // Menentukan mata uang yang akan dikonversi
    if (y in nilaiTukar) {
        let hasilKonversi = (x * nilaiTukar[y]).toFixed(2);  // Menentukan hasil konversi dengan 2 digit di belakang koma
        return `${hasilKonversi} ${y} (1 ${y} sama dengan ${nilaiTukar[y]} IDR)`;
    } else {
        return "Mata uang yang dimasukkan tidak valid!";
    }
  }
  console.log(konversiRupiah(1, "USD"));