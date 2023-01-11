interface person{
    fullname() : string;
    age() : number;
    salary() : number; 
}

class employees implements person {
    firstName : string;
    lastName : string;
    umur : number;
    gaji : number;

    fulname() : string {
        return this.firstName + " " + this.lastName;
    }

}   