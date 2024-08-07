type pengguna = {
    username: String;
    password: String;
  }
  
  type responlogin = {
    status: String;
    msg: String;
  }
  
  class Profile {
    user: pengguna[];
  
    constructor() {
      this.user = [
        { username: "hardi", password: "123"},
        { username: "dafiz", password: "123"},
        { username: "radis", password: "123"},
        { username: "fawwaz", password: "123"},
        { username: "rapa", password: "4321"},
      ]
    }
  
    login(username: string, password: string) : responlogin {
      const konfirm = this.user.some(u => u.username === username && u.password === password);
      if (konfirm) {
        return {
          status: "berhasil",
          msg: "login beres"
        };
      }else {
        return {
          status: "gagal",
          msg: "username dan password salah"
        }
      }
    }
  }
  
  const respon = new Profile()
  const respon1 = respon.login("hardi", "123")
  console.log("hardi",respon1);
  
  
  const profile = new Profile()
  const response1 = profile.login("dafiz", "4351")
  console.log("dafiz",response1);
  


  //sub class
//sub class merupakan turunan dari class baik itu property maupun method 


class Smartphone {
    color: string;
    brand: string;
    model: string;
    isTKDN: boolean
  
    constructor(color:string,brand:string,model:string){
      this.color = color
      this.brand = brand
      this.model = model
      this.isTKDN = true
    }
  
    charging(): void {
      console.log(`smartphone ${this.model} lagi di cas` );
    }
  }


  const nokia = new Smartphone("blue", "nokia", "s23", );
  console.log('nokia',nokia);
  //sub class
  //sub class akan menurunkan sifat  dan prilaku dari class
  //dalam membuat class dalam menamakan nya harus huruf besar
  // kata kunci adalah extends


//  class Android extends Smartphone {
//     Splitscreen(){
//         console.log('Splitscreen berhasil');
//     }
//  }

//  const samsung = new Android("black", "samsung", "S21", true)
// console.log("samsung",samsung);
// samsung.charging()
// samsung.Splitscreen()
 class Ios extends Smartphone {
    Airdrop(){
        console.log("Airdrop berhasil");
    }
 }

 const IPhone = new Ios("green", "IPhone", "12promax", )
 console.log("Iphone", IPhone);
 IPhone.charging()
 IPhone.Airdrop()
 

 //polymorphism
 //merupakan suatu keadaan dimana sub class ingin mengubah sifat atau prilaku dari class


 class Android extends Smartphone {
    layar: number
    constructor(color:string,brand:string,model:string,layar: number){
        super(color,brand,model,)
        this.layar = layar
    }
    Splitscreen(){
        console.log('Splitscreen berhasil');
    }

    showbrand (){
        console.log(`brand handpone ini adalah ${this.brand} dan ukuran layar ini ${this.layar}`);
    }

    charging(): void {
        super.charging()
        console.log(`smartphone ${this.model} lagi di cas dengan  fast charging` );
    }
 }

 const samsung = new Android("black", "samsung", "S21", 23)
console.log("samsung",samsung);
samsung.charging()
samsung.Splitscreen()

const ROG = new Android("black", "ROG", "ROG 8", 25)
console.log("ROG", ROG);
ROG.Splitscreen()
ROG.charging()
ROG.showbrand()


