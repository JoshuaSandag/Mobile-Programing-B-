// VARIABEL DAN TIPE DATA

console.log("Hello World");         
console.log("welcome to Mobile Programming");
let namaDepan = "Joshua";
let namaBelakang = "Sandag";
const usia = 33;
let umur = 33;
umur = "tiga puluh tiga tahun";
let alamat = "Manado";
let apakahSudahMenikah = true;

console.log(namaDepan);
console.log(namaBelakang);
console.log(namaDepan + " " + namaBelakang + " " + usia);
console.log(usia);
console.log(umur);
console.log(alamat);
console.log(apakahSudahMenikah);
console.log(" ");

//OPERATOR

console.log(10==10);
console.log(10=="10"); // loose equality
console.log(10!=="10"); // true
console.log(10!==10); // false
console.log(10===9); // false
console.log(" ");

//TEMPORARY OPERATOR

const x = 12
let jawaban = x % 2 === 0 ? "Genap" : "Ganjil";
console.log(jawaban);

let z = 10
if(z%2==0)
{
    console.log("Genap");
}
else
{
    console.log("Ganjil");
}
console.log(" ");

//FUNCTION
//function declaration
function status()
{
    console.log("pakai fungsi deklarasi");
}
jay();
function test()
{
    return "pakai fungsi deklarasi dengan return";
}
console.log(test());
//function expression
const ekspresi = function()
{
    console.log("pakai fungsi expresi");
}
ekspresi();
const kamu = function()
{
    return "pakai fungsi expresi dengan return";
}
console.log(kamu());
console.log(" ");

// PARAMETER DAN ARGUMEN

const persegiPanjang =  function(panjang, lebar) //parameter
{
    return panjang * lebar;
}
console.log(persegiPanjang(4,5)); // argumen

//ISENG

console.log(" ");
console.log("Hanya mencoba");
console.log("pangkat");
let i;
let a = 2;
let b = 3;
let hasil = 1;
for(i=0;i<b;i++)
{
    hasil = hasil * a;
}
console.log(hasil);
console.log("faktorial");
let f = 4;
let j;
let result = 1;
for(i=f;i>=1;i--)
{
    result = result * i;
}
console.log(result);
console.log("++n");
let g = 3;
let o = 0;
for(i=1;i<=10;i++)
{
    o = o + g;
    if(o<=10)
    {
        console.log(o);
    }
}