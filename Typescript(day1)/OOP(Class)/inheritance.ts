class PersonsIn{
    private nama: string;
    umur: number;
    protected pekerjaan: string;

    constructor(namaAwal: string, umurSekarang: number, pekerjaan: string){
        this.nama = namaAwal;
        this.umur = umurSekarang;
        this.pekerjaan = pekerjaan;
    }
    setNama(nama:string){
        this.nama = nama;
    }
    GetNama(){
        return `${this.nama}`
    }
    getPersons(){
        return `Nama Saya ${this.nama} pekerjaan saya ${this.pekerjaan}`;
    }
}

class employee extends PersonsIn{
    status: string;
    constructor(nama:string,umur:number,pekerjaan:string,status:string){
        super(nama,umur,pekerjaan);
        this.status = status;
    }
    getNama(nama:string){
        return `Nama saya ${super.GetNama()} status ${this.status}`;
    }
}

let empbaru =  new employee('Megawati',20,'Ketua PKI','Menikah')
console.log(empbaru.getPersons());
// console.log(empbaru.getNama());
empbaru.setNama('Puanjing')
empbaru.GetNama();



