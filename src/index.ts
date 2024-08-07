//  let age: number = 25;
//  let nama: string = 'hardi';
//  let pelajar: boolean = true;

// let siswa: {
//   nama: string;
//   umur: number;
//   ispelajar: boolean;
//   alamat?: string;
// } = {
//   nama: "hardi",
//   umur: 17,
//   ispelajar: false,
//   alamat: "tokyo",
// };
// console.log(siswa);

// siswa = {
//   nama: "anonim",
//   umur: 18,
//   ispelajar: true,
// };

// console.log(siswa);

// interface untuk  mendefinisikan tipe data object

// interface product {
//   id: number;
//   name: string;
//   price: number;
//   note?: string;
//   ispremium: boolean;
// }

// const product1: product = {
//   id: 54321,
//   name: "Phone ROG 8",
//   price: 20000,
//   ispremium: false,
// };

// console.log(product1);

// const product2: product = {
//   id: 12345,
//   name: "IPhone",
//   price: 12000,
//   ispremium: false,
//   note: "bagus",
// };

// console.log(product2);

// Nested object

// interface ProuductDetail {
//   manufacture: string;
//   year: number;
// }

// interface ProductItems {
//   id: number;
//   Productname: string;
//   price: number;
//   detail: ProuductDetail;
// }

// const product3: ProductItems = {
//   id: 654321,
//   Productname: "redsmagis phone",
//   price: 130000,
//   detail: {
//     manufacture: "android",
//     year: 2022,
//   },
// };

// console.log("tahun", product3.detail.year);

// const a = [1, 2, 3, 4, 5];

// squere bracket

// let b: number[];
// b = [1, 2, 3, 4, 5];
// let c: string[];
// c = ["angkasa", "ball", "cat", "day", "funny"];

// let d: (String | Number | Boolean)[];
// d = [1, "satu", 2, true];

// let e: { nama: string; umur: number }[] = [
//     { nama: "akbar", umur: 17 },
//     { nama: "akbar", umur: 17 }
// ];

// interface datadiri   {
//   nama : string;
//   alamat : string;
//   umur : number;
//   status: status
// }[];

// interface status {
//   issekolah: boolean;
// }[];

// let nama:(string | number )[] = ['ihsan', 123]

// nama = [123, 'hardi']

// function rumusluaspp(pangjang: number, lebar:number, ){
//   const luas = pangjang * lebar;
//   return luas;
// };

// const persegi1 = rumusluaspp(10, 20);
// console.log(persegi1);

// function rumusbalok(pangjang: number, lebar: number, tinggi: number) {
//   const luasbalok = pangjang * lebar * tinggi;
//   return luasbalok;
// }

// const balok1 = rumusbalok(10, 20, 10);
// const balok2 = rumusbalok(10, 10, 10);
// const balok3 = rumusbalok(1, 20, 10);

// console.log(balok1);
// console.log(balok2);
// console.log(balok3);




// function penjumlahan(a: number, b: number, c = 0) {
//   const total = a + b + c;
//   return total;
// }

// const total = penjumlahan(1, 2, 3);
// const total2 = penjumlahan(1, 2);

// console.log(total);
// console.log(total2);

// function pembagian({a, b, c = 1}: {
//   a: number;
//   b: number;
//   c: number;
// }){
//   const hasil = (a/b)*c;
//   return hasil;
// };

// const total3 = pembagian({a: 10, b: 2, c: 1});
// const total4 = pembagian({b: 12, a:5, c: 1});

// console.log(total3);

// interface satuinterface {
//   a: number;
//   b: string;
// }

// interface Responseapi {
//   msg : string;
//   status: string;
// }

// //function tanpa retun
// function satu ({a,b}: satuinterface): void{
//   console.log(a,b);
// }

// function dua({a,b}:satuinterface): number{
//   return 100; // sesuai tipe di atas
// }

// function tiga({a,b}: satuinterface): boolean {
//   return true //sesuai tipe di atas di karenakan di sini menggunakan tipe data boolean untuk return
// }

// function empat({a,b}:satuinterface): Responseapi{
//   return {
//     msg: "ok",
//     status: "ok"   
//   }//menggunakan interface responapi agar dapat mengaman kan return(mencegah erorr ketika render)
// }

// function lima (): Responseapi{
//   return {
//     msg: "ok",
//     status: "ok"
//   }
// }

// //contoh penggunaan function

// function number(angka: number[], pertanyaan: number): boolean{
//   return angka.includes(pertanyaan);
// }

// const array = [1,2,3,4,5,6];
// const pertanyaan = 7;

// const hasil = number(array,pertanyaan)
// console.log(hasil);




// ///class typescript

// class user {
//   id : number;
//   firstname : string;
//   lastname : string;

//   constructor(id: number, firstname: string, lastname: string){
//     this.id = id,
//     this.firstname = firstname,
//     this.lastname = lastname
//   }//ini parameter/agrument untuk class

//   login(): boolean{
//     if (this.id === 1) {
//       return true;
//     }else{
//       return false;
//     }
//   }
//   //ini adalah method untuk class



//   relogin() :  boolean {
//     return this.login();
//   }


// }


// const hardi = new user(1,"hardi", "ansyah");
// console.log(hardi.login());

// const dafiz = new user(2, "daffa", "hafiz")
// console.log(dafiz.relogin());

//ini contoh pemakaian method class



// type User = {
//     username: string;
//     password: string;
// };

// type LoginResponse = {
//     status: string;
//     msg: string;
// };

// class Profile {
//     user: User[];

//     constructor() {
//         this.user = [
//             { username: "hardi", password: "123" },
//             { username: "hardi", password: "123" },
//             { username: "hardi", password: "123" },
//             { username: "hardi", password: "123" },
//             { username: "hardi", password: "123" },
//             { username: "hardi", password: "123" }
//         ];
//     }

//     login(username: string, password: string): LoginResponse {
//         const konfimasi = this.user.some(u => u.username === username && u.password === password);
//         if (konfimasi) {
//             return {
//                 status: "berhasil",
//                 msg: "login berhasil"
//             };
//         } else {
//             return {
//                 status: "gagal",
//                 msg: "username dan password salah"
//             };
//         }
//     }
// }

// // Contoh penggunaan
// const profile = new Profile();
// const response1 = profile.login("hardi", "123");
// console.log(response1); // { status: "berhasil", msg: "login berhasil" }

// const response2 = profile.login("salah", "456");
// console.log(response2); // { status: "gagal", msg: "username dan password salah" }






// type User = {
//   username: string;
//   password: string;
// };

// type LoginResponse = {
//   status: string;
//   msg: string;
// };

// class Profile {
//   user: User[];

//   constructor() {
//       this.user = [
//           { username: "hardi", password: "123" },
//           { username: "hardi", password: "123" },
//           { username: "hardi", password: "123" },
//           { username: "hardi", password: "123" },
//           { username: "hardi", password: "123" },
//           { username: "hardi", password: "123" }
//       ];
//   }

//   login(username: string, password: string): LoginResponse {
//       const konfimasi = this.user.some(u => u.username === username && u.password === password);
//       if (konfimasi) {
//           return {
//               status: "berhasil",
//               msg: "login berhasil"
//           };
//       } else {
//           return {
//               status: "gagal",
//               msg: "username dan password salah"
//           };
//       }
//   }
// }

// // Contoh penggunaan
// const profile = new Profile();
// const response1 = profile.login("hardi", "123");
// console.log(response1); // { status: "berhasil", msg: "login berhasil" }

// const response2 = profile.login("salah", "456");
// console.log(response2); // { status: "gagal", msg: "username dan password salah" }


// type pengguna = {
//   username: String;
//   password: String;
// }

// type responlogin = {
//   status: String;
//   msg: String;
// }

// class Profile {
//   user: pengguna[];

//   constructor() {
//     this.user = [
//       { username: "hardi", password: "123"},
//       { username: "dafiz", password: "123"},
//       { username: "radis", password: "123"},
//       { username: "fawwaz", password: "123"},
//       { username: "rapa", password: "4321"},
//     ]
//   }

//   login(username: string, password: string) : responlogin {
//     const konfirm = this.user.some(u => u.username === username && u.password === password);
//     if (konfirm) {
//       return {
//         status: "berhasil",
//         msg: "login beres"
//       };
//     }else {
//       return {
//         status: "gagal",
//         msg: "username dan password salah"
//       }
//     }
//   }
// }

// const respon = new Profile()
// const respon1 = respon.login("hardi", "123")
// console.log("hardi",respon1);


// const profile = new Profile()
// const response1 = profile.login("dafiz", "4351")
// console.log("dafiz",response1);







//sub class
//sub class merupakan turunan dari class baik itu property maupun method 


// class smartphone {
//   color: string;
//   brand: string;
//   model: string;
//   isTKDN: boolean

//   constructor(color:string,brand:string,model:string,isTKDN:boolean){
//     this.color = color
//     this.brand = brand
//     this.model = model
//     this.isTKDN = isTKDN
//   }

//   charging(): void {
//     console.log('smartphone ${this.model} lagi di cas ');
//   }
// }