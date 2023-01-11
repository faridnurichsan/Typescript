class Car{
    brand: string = '';
    speed: number = 0;
    price: number = 0;//ini adalah object

    //Assign method.
    getBrand(): string{
        return `Merek mobil ini ${this.brand}`;//this.brand refers to the brand in class Car
    }
    getPrice(): string{
        return `harga mobil ini ${this.price}`;//this.price refers to the price in class Car
    }    
    getSpeed(): string{
            return `Kecepatannya mobil merek ${this.brand} adalah ${this.speed}km/s`;//this.speed refers to the speed in class Car
        }
    
}

let mobilBaru = new Car();// untuk mengdeklarasi class agar bisa dipanggil.
mobilBaru.brand = 'Toyota';// dimana mobilBaru mengakses brand pada class Car.
mobilBaru.price = 150000000; //dimana MobilBaru mengakses price pada class Car.
mobilBaru.speed = 1000;// dimana MobilBaru mengakses speed pada class Car.

console.log(mobilBaru.getBrand());
console.log(mobilBaru.getPrice());
console.log(mobilBaru.getSpeed());

