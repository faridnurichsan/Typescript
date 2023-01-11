abstract class makhlukHidup2{
    constructor(protected jenis:string,protected nama:string,latin:string,repr:string,private habit:string,makan:string){
    }
    abstract getPopulasi(): string;
    abstract getNama(): string;
    getNamaJenis():string{
        return `${this.jenis} diberi nama ${this.nama}`;
    }
    getHabitat():string{
        return `${this.nama} memiliki habitat ${this.habit}`;
    }
}
class fullMakhluk extends makhlukHidup2{
    constructor(jenis :string,nama :string, latin :string,repr :string, habit :string,makan :string, protected populasi : number){
        super (jenis,nama,latin,repr,habit,makan)
    }
    getNama(){
        return this.nama;
    }
    getPopulasi(): string {
        return `${this.jenis} memiliki total populasi ${this.populasi}`
    }
}
let mh = new fullMakhluk('Manusia Purba','Zulkifli','Meganthropus paleojavanicus','Mamalia','Seluruh Dunia','Omnivore',10000);
console.log(mh.getPopulasi());
console.log(mh.getNama());
console.log(mh.getNamaJenis());
console.log(mh.getHabitat());


