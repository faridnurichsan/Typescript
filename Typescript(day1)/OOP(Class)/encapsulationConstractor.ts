class Persons{
    private nama:string;
    private umur:number;
    private pekerjaan:string;

    constructor(nama:string,umur:number,pekerjaan:string){
        this.nama = nama;
        this.umur = umur;
        this.pekerjaan = pekerjaan;

    }
    setName(namaAwal : string){
        this.nama = namaAwal;
    }
    setUmur(umurAwal : number){
        this.umur = umurAwal;
    }
    setPekerjaan(pekerjaanAwal : string){
        this.pekerjaan = pekerjaanAwal;
    }

    getNama(){
        return `Nama saya ${this.nama}`;
    }
    getUmur(){
        return `Umur saya ${this.umur}`;
    }
    getPekerjaan(){
        return this.pekerjaan;
    }


}

let emp = new Persons('Dani',20,'Doctor');
// emp.setName('Danu')
// console.log(emp.getNama());
