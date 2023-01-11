let discount: number = 0;
let itemCount = 10;
// try{
//     if(itemCount > 0 && itemCount <= 5){
//         discount = 5;
//     }else if (itemCount > 5 && itemCount <=5){
//         discount = 10;
//     }else if (itemCount >= 10){
//         discount = 15;
//     }else{
//         throw new Error ('The numer of items cannot be negative');
//     }

//     console.log(`You got ${discount}% discount. `);
// }catch(e:any){
//     console.log(e.message);
    
// }

// try{
// switch(true){
//     case itemCount > 0 && itemCount <= 5:
//         discount = 5;
//     break;
//     case itemCount > 5 && itemCount <=5:
//         discount = 10;
//     break;
//     case itemCount >= 10:
//         discount = 15;
//     break;
//     default:
//         new Error ('The numer of items cannot be negative');
// }
//     console.log(`You got ${discount}% discount. `);
// }catch(error){
//     console.log(error);
    
// }
// let add : (x: number, y: number) => number = 
//     // function (x: number, y: number){
//     //     return x+y;
//     // }
//     function(x: any,y:any) {
//         return x+y;
//     }
// console.log(add(3,4));

// function getTotal(...numbers: number[]): number{
//     let total = 0;
//     numbers.forEach((num)=> total += num);
//     return total;
// }
// console.log(getTotal());
// console.log(getTotal(10,20));
// console.log(getTotal(10,20,30));

// let tambah_nilai =  function(x: number,y:number,...numbers:number[]):number{
//     let total= 0;
//     numbers.forEach(e=>total+=e + x + y)
//     return total;
// }
// console.log(tambah_nilai(10,2,3));

// function add_Gen(a:any,b:any):number | string{
//     if(typeof a ==)
// }
function akar(x:any){
    // let i:number;
    let a =Math.pow(x+x,2);
    // i = Math.sqrt(x);
    return (a);
}

console.log(akar(10));