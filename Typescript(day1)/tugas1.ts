// 1. Luas Lingkaran
function getAreaCircle(x:string|number):string|number|undefined{
    let y = Number(x);
    let result = 0;
    try {
        if (x >= 0){
            result = Math.PI * Math.pow(y,2);
            return result
        }else if(x <= 0){
            return ('Radius ' + x +' <= 0, try higher')    
        }else{
            throw new Error("The input must be a number");
            
        }
    } catch (error) {
        console.log(error);
        
    }
}

// console.log(getAreaCircle('2'));

// 2. Menghitung Jarak

function calculateDistance(a: any, t:any){
    let result = 0;
    try {
        if (a >= 0 && t >= 0){
            result = 1/2 * a * Math.pow(t,2);
            return (`Jarak yang ditempuh adalah ${result} meter/s`);
        }else if (a <= 0 || t <= 0){
            return ("Acceleration or Time must be >= 0");

        }else{
            throw new Error("The input must be a number")
        }
    } catch (error) {
        console.log(error);
    }

}
// console.log(calculateDistance(50,60));

// 3. Konversi Suhu
function fareinheitToKelvin(a:any){
    let Kelvin:number;
    try {
        if(isNaN(a)){
            throw new Error("Fareinheit must be number");
        }else{
            Kelvin = (a + 459.67)/1.8;
            return Math.round(Kelvin)
        }
        
    } catch (error) {
        console.log(error);  
    }  
}
// console.log(fareinheitToKelvin("1"));

// 4. menghitung pajak
function getSalesTax(a: any, b: any){
    let total:number;
    try {
        if(isNaN(a) && isNaN(b)){
            throw new Error("Price & Pajak harus dalam Angka");
        }else if(isNaN(a)){
            throw new Error("Price harus dalam Angka");
        }else if(isNaN(b)){
            throw new Error("Pajak harus dalam Angka");
        }else{
            total = (a*(b/100)) + a;
        }
        console.log(`Total Sales : Rp. ${a}`);
        console.log(`Pajak : ${b/100}`);
        console.log(`Total Dibayar : ${total} `);       
        
    } catch (error) {
        console.log(error);
        
    }
}
// getSalesTax(4500,10)

// 5. total discount pajak dan harga
function getSalesDiscount(a:any, b:any, c:any){
    let total:number;
    let discount:number;
    let pajak:number;
    try {
        if(isNaN(a) &&  isNaN(b) && isNaN(c)){
            throw new Error("Price, Tax, & Discount harus dalam Angka");
        }else if(isNaN(a)){
            throw new Error("Price harus dalam Angka");
        }else if(isNaN(b)){
            throw new Error("Tax harus dalam Angka");
        }else if(isNaN(c)){
            throw new Error("Discount harus dalam Angka");
        }else{
            discount = a*c/100;
            pajak = (a - discount)*b/100;
            total = a - discount + pajak;
            // return total;

        }
        console.log(`Total Sales : Rp. ${a}`);
        console.log(`Discount (${c}) : Rp. ${discount}`);
        console.log(`PriceAfterDiscount : Rp. ${a - discount}`);
        console.log(`Pajak (${b}) : Rp. ${pajak}`);
        console.log('--------------------------------');
        console.log(`Total Payment : Rp. ${total}`);
        
    } catch (error) {
        console.log(error);
    }
}

// console.log(getSalesDiscount(20000,10,20));

// 6. menghitung koordinat kartesius
function getCordinat(x1:any,x2:any,y1:any,y2:any){
    let d:number;
    try {
        if(isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2)){
            throw new Error("Kartesius must be number");
        }else{
            d = Math.sqrt(Math.pow(x1-y1,2) + Math.pow(x2-y2,2));
            return d;
        }
        
    } catch (error) {
      console.log(error);
    }
    
}
// console.log(getCordinat(2,2,-2,-2));

// 7. menghitung jumlah angka yang diinput
function sumDigit(n:any){
    try {
        if(isNaN(n)){
            throw new Error(`${n} is not a number`);
        }else if( n >= 10000){
            throw new Error(`${n} must less than 10000`);
        }else{
            let digit= n.toString().split('');
            let realDigit:number = 0;
            for(let i=0;i<digit.length;i++){
                realDigit += parseInt(digit[i])
            }
            return realDigit;
        }
    } catch (error) {
        console.log(error);
    }   
}
// console.log(sumDigit('1234'));   

// 8. Konversi detik
function elapsedTime(seconds:any){
    try {
        if(isNaN(seconds)){
            throw new Error(`${seconds} is not a number`);
        }else{
            let day:number = Math.floor(seconds / (3600*24));
            let hour:number = Math.floor((seconds % (3600*24)) / 3600);
            let minute:number = Math.floor((seconds % 3600) / 60);
            let second:number = Math.floor(seconds % 60);
            return (`${day} hari ${hour} jam ${minute} menit ${second} detik`);
        }
    } catch (error) {
        console.log(error);
        
    }
}
// console.log(elapsedTime('700005'));

// 9. Generate password
function getRandomPassword(s:string){
    let password = "";  
    const characters = 
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";//menyimpan set char.
    try {
        if (!/^[a-zA-Z]+$/.test(s)) {//reguler expression (regex) untuk memeriksa string sesuai dengan alphabet, dan .test(n) menguji apakah regex cocok dengan input
            throw new Error("Value must be a character");
          }else if(s.length < 6){
            throw new Error("length must be greater than 6");
          }else{
            for (let i = 0; i < s.length; i++) {
                password += characters.charAt(Math.floor(Math.random() * characters.length));
            }   
            return password;
          }
    } catch (error) {
        console.log(error);   
    }
}
// console.log(getRandomPassword('codeid'));

// 10. convert rupiah
function convertToRupiah(value: number, currencyType: string): number|string|undefined {
    let currency = currencyType.toUpperCase();
    let nilaiRupiah: number;
    try {
      if (currency === 'USD') {
        nilaiRupiah = value * 14382.5;
      } else if (currency === 'YEN') {
        nilaiRupiah = value * 130.12;
      } else if (currency === 'EURO') {
        nilaiRupiah = value * 16000;
      } else {
        throw new Error('Mata uang tidak dikenal');
      }
      return (`${value} ${currencyType} = Rp. ${nilaiRupiah.toLocaleString('id-ID')}`);
    } catch (error) {
      console.log(error);
    }
  }
// console.log(convertToRupiah(100,'usd'));

// 11. mencara angka terbesar
function getHeavier(w1:number,w2:number,w3:number){
    let heaviest = w1;
    try {
        if (isNaN(w1) || isNaN(w2) || isNaN(w3)){
            throw new Error('w1 and w2 and w3 must be a number');
        }
        
        if (w2 > heaviest){
            heaviest = w2;
        }
        
        if (w3 > heaviest) {
            heaviest = w3;
        }
        return heaviest;
    } catch (error) {
        console.log(error);
        
    }
      
}
// console.log(getHeavier(10,40,70));

// 12. tampilkan hari sesuai bulang
function getDays(month:number,year:number):number|undefined {
    let kabisat = year%4 === 0;
    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    try {
        if (isNaN(month)){
            throw new Error("Month must be a number");
            
        }else if (isNaN(year)){
            throw new Error("Year must be a number");
        }else if(isNaN(month) && isNaN(year)){
            throw new Error("Month & Year must be a number")
        }

        if(month >12){
            throw new Error("month must be less than 12");
        }
        if (kabisat){
            days[1] = 29
        }
        return days[month - 1];

    } catch (error) {
        console.log(error);
        
    }
}
// console.log(getDays(12,2020));

// 13.isPalindrom
function isPalindrom(angka:any){
    if(isNaN(angka)){
        return (`${angka} is not a number`);
    }
    try {
        let num = angka.toString();
        let pal = num.split('').reverse().join('');
        if (num === pal){
            return (` ${num} is a palindrom number`);
        }else{
            throw new Error(`${num} is not a palindrom number`); 
        }

    } catch (error) {
        console.log(error);
        
    }
}
// console.log(isPalindrom(12121));

// 14. persentase kenaikan income
function getProsentase(income1:number,income2:number){
    let incomePercent = (income2 - income1)/income1 * 100;
    try {
        if (isNaN(income1) || isNaN(income2)){
            throw new Error(`${income1} and ${income2} must be a number`);
        }else{
            return (`Total kenaikan income ${incomePercent}%`)
        }    
    } catch (error) {
        console.log(error);
    }
}
// console.log(getProsentase(600000.00,750000.00));

// 15. menghitung total Gaji
function totalGaji(gaji1 : any, gaji2 : any, gaji3 : any){
    let pajak1 = gaji1 * 0.02 + gaji1;
    let pajak2 = gaji2 * 0.05 + gaji2;
    let pajak3 = gaji3 * 0.1 + gaji3;
    let total:number = 0;
    try {
        if(isNaN(gaji1) || isNaN(gaji2) || isNaN(gaji3)){
            throw new Error(`${gaji1}, ${gaji2}, and ${gaji3} must be a number`);
        }else{
            
            total = pajak1 + pajak2 + pajak3;
        }
        console.log(`Emp1 :Rp. ${gaji1} + pajak 2% = Rp. ${pajak1}`);
        console.log(`Emp1 :Rp. ${gaji2} + pajak 5% = Rp. ${ pajak2}`);
        console.log(`Emp1 :Rp. ${gaji3} + pajak 10% = Rp. ${pajak3}`);
        return (`total : Rp. ${total}`)
        
    } catch (error) {
        console.log(error);
        
    }
}
// console.log(totalGaji(500,2000,12000));






