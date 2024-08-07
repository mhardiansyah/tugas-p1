"use strict";
// let age: number = 25;
// let nama: string = 'hardi';
// let pelajar: boolean = true;
let siswa = {
    nama: "hardi",
    umur: 17,
    ispelajar: false,
    alamat: "tokyo"
};
console.log(siswa);
siswa = {
    nama: "anonim",
    umur: 18,
    ispelajar: true,
};
console.log(siswa);
const product1 = {
    id: 54321,
    name: "Phone ROG 8",
    price: 20000,
    ispremium: false,
};
console.log(product1);
const product2 = {
    id: 12345,
    name: "IPhone",
    price: 12000,
    ispremium: false,
    note: "bagus",
};
console.log(product2);
const product3 = {
    id: 654321,
    Productname: "redsmagis phone",
    price: 130000,
    detail: {
        manufacture: "android",
        year: 2022
    }
};
console.log("tahun", product3.detail.year);

//array
