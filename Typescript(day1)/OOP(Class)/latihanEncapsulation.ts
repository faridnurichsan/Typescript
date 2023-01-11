class makhlukHidup{
    jenisMakhlukHidup:string="";
    namaMakhlukHidup:string="";
    latinMakhlukHidup:string="";
    reproduksi:string="";
    habitat:string="";
    jenisMakanan:string="";
    
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

let makhluk = new makhlukHidup();
makhluk.jenisMakhlukHidup = 'Manusia Purba';
makhluk.namaMakhlukHidup = 'Zulkifli';
makhluk.latinMakhlukHidup = 'Meganthropus paleojavanicus';
makhluk.reproduksi = 'Mamalia';
makhluk.habitat = 'Seluruh Dunia';
makhluk.jenisMakanan = 'Omnivore';

console.log(makhluk.getJenisMakhlukHidup());
console.log(makhluk.getNamaMakhlukHidup());
console.log(makhluk.getReproduksi());
console.log(makhluk.getHabitat());
console.log(makhluk.getJenisMakanan());




