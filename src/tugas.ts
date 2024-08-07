// no 1

function minimal (a: number,b: number){
    if (a < b){
        return a
    }if(a > b){
        return b
    }else{
        return a
    }
}

const nilai = minimal(7,7)
console.log(nilai) // 7
const nilai2 = minimal(8,9)
console.log(nilai2); //8

// no 2

function power (a: number, b: number){
    let hasil = Math.pow(a,b)
    return hasil;
}


const angka = power(4,4)
console.log(angka);

const angka2 = power(3,7)
console.log(angka2);





// no 3

function penjumlahanbilangan (a : number[], b: string){

}


//no 4

class Animal {
    name: string;
    age: number;
    isanimal: boolean;

    constructor(name: string, age: number,){
        this.name = name
        this.age = age
        this.isanimal = true
    }
    
}




//no 5

class rabbit extends Animal {
    eat(){
        console.log(`${this.name} yang berumur ${this.age} sedang makan!`);
    }
}

const hewan = new rabbit("kelinci", 12,);
console.log(hewan);

hewan.eat()

// no6
class Eagle extends Animal {
isanimal: boolean;
    constructor(name:string, age:number){
        super(name,age)
        this.isanimal = false
    }

    run(speed: number){
        console.log(`${this.name} yang berumur ${this.age} sedang berlari dengan kecepatan ${speed}`);
    }
    fly(){
        console.log(`${this.name} yang berumur ${this.age} sedang terbang!`);
    }
}

const burung = new Eagle("phoniex",3)
console.log(burung);

burung.fly()

burung.run(100)

//no7 

class Eaglerun extends Eagle {
    fly(): void {
        super.fly
        console.log(`${this.name} yang berumur ${this.age} sedang terbang!`);
    }
}



