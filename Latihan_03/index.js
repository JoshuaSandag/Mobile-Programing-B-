// Class
//Nama : Sandag, Joshua
/*
class Orang {
    constructor(nama, umur){ //memebuat properti di dlm class menggunakan constructor
        this.nama = nama;
        this.umur = umur;
    }

    bekerja=()=>{ // menambah method dalam class
        console.log(`${this.nama} sedang bekerja seperti biasa `);
    }
}

const user1 = new Orang ('joshua','20'); // buat objek instance dari class orng 
console.log(user1)
user1.bekerja();
*/

//Inheritance
/*
class Orang {
    constructor(nama, umur){ 
        this.nama = nama;
        this.umur = umur;
    }
    tidur =()=> {
        console.log (`${this.nama} sedang tidur`);
    }
    makan =()=>{
        console.log (`${this.nama} sedang makan`);
    }
}

class Pelajar extends Orang {
    constructor (nama,umur,namaSekolah){
        super(nama,umur)
        this.namaSekolah = namaSekolah;
    }
    belajar =()=>{
        console.log(`${this.nama} belajar di ${this.namaSekolah}`);
    }
}
const user = new Pelajar ('john','17','unklab'); 
console.log(user);
user.belajar();
*/