class makhlukHidup1{
    protected jenisMakhlukHidup:string="";
    namaMakhlukHidup:string="";
    latinMakhlukHidup:string="";
    reproduksi:string="";
    protected habitat:string="";
    protected jenisMakanan:string="";
    
    constructor(jenis:string,nama:string,latin:string,repr:string,habit:string,makan:string){
        this.jenisMakhlukHidup=jenis;
        this.namaMakhlukHidup=nama;
        this.latinMakhlukHidup=latin;
        this.reproduksi=repr;
        this.habitat=habit;
        this.jenisMakanan=makan;

    }
    getJenisMakhlukHidup():string{
        return `Makhluk hidup yang di input adalah ${this.jenisMakhlukHidup}`;
    }
    getNamaMakhlukHidup():string{
        return `${this.jenisMakhlukHidup} ini memiliki nama lokal ${this.namaMakhlukHidup} dan nama latin ${this.latinMakhlukHidup}`
    }
    getReproduksi():string{
        return `${this.jenisMakhlukHidup} ${this.namaMakhlukHidup} termasuk ${this.reproduksi}`;
    }
    getHabitat():string{
        return `${this.jenisMakhlukHidup} ${this.namaMakhlukHidup} memiliki habitat di ${this.habitat}`;

    }
    getJenisMakanan():string{
        return `${this.jenisMakhlukHidup} termasuk ${this.jenisMakanan}`
    }
}

class statusMakhluk extends makhlukHidup1{
    status1:string;
    constructor(jenis:string,nama:string,latin:string,repr:string,habit:string,makan:string,status1:string){
        super(jenis,nama,latin,repr,habit,makan);
        this.status1 = status1;
    }
    getStatus(){
        return `status ${super.getJenisMakhlukHidup()} adalah ${this.status1}`;
    }


}

let makhluk1 = new statusMakhluk('Manusia Purba','Zulkifli','Meganthropus paleojavanicus','Mamalia','Seluruh Dunia','Omnivore','Punah');
// makhluk1.jenisMakhlukHidup = 'Manusia Purba';
// makhluk1.namaMakhlukHidup = 'Zulkifli';
// makhluk1.latinMakhlukHidup = 'Meganthropus paleojavanicus';
// makhluk1.reproduksi = 'Mamalia';
// makhluk1.habitat = 'Seluruh Dunia';
// makhluk1.jenisMakanan = 'Omnivore';

// console.log(makhluk1.getJenisMakhlukHidup());
// console.log(makhluk1.getNamaMakhlukHidup());
// console.log(makhluk1.getReproduksi());
// console.log(makhluk1.getHabitat());
// console.log(makhluk1.getJenisMakanan());
console.log(makhluk1.getStatus());





