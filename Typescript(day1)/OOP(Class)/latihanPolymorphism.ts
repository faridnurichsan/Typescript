class sum{
    operation(a: number, b:number): number {
        return a + b;
    }
}

class multiply extends sum{
    operation(a: number, b: number): number {
        return a * b;
    }
}

// let multi =  new multiply();
// let result = multi.operation(10,20);
// console.log("result after performing calling the operation method is " + result);

class employee1{
    about():void{
        console.log("Inside the employee1 class.");
    }
}
class men extends employee1{
    gender: string = "male";
    about():void{
        
        super.about();
        console.log("The gender of the Employee is " + this.gender);
    }
}

let newMen = new men();
newMen.about();