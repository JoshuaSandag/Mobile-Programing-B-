// Asyncronous Java Script

//console.log("satu"); 
//console.log("dua"); 
//console.log("tiga"); 

// Callback
//function greetings(fullName) {
  // console.log (`Hi ${fullName}`);
//}

//function introduction(firstName, lastName, callBack){
//const fullName = `${firstName} ${lastName}`;
  //   callBack(fullName);
 //}

 //introduction("Joshua", "Sandag", (fullName) => {
   //  console.log(`Hi ${fullName}`);
 //} );

 //console.log("Satu");
 //setTimeout (() => {
   //  console.log("Dua");
 //}, 2000 );
 //console.log("Tiga");
 

 // function proses1(){
  //   console.log("Proses 1 Selesai Dijalankan");
// }

 //function proses2(callback){
     //console.log(`Proses 2 Selesai Dijalankan`);
   //  setTimeout (() => {
     //    console.log("Proses 2 Selesai Dijalankan");
       //  callback();
    // }, 2000);
 //}

 //function proses3(){
   //  console.log("Proses 3 Selesai Dijalankan");
 //}

 //proses1();
 //proses2(proses3);
 //proses2();
 //proses3();

 //callback hel
 //setTimeout(()=> {
   //  console.log("Proses1");
     //setTimeout(()=> {
       //  console.log("Proses2");
         //setTimeout(()=>{
           //  console.log("Proses3");
             //setTimeout(()=>{
             //    console.log("Proses4");
            // }, 2000);
        // }, 2000);
    // }, 2000);
 //},2000);
 
 //let condition = true;
 // function newPromise () {
   //  return new Promise((resolve, reject) => {
     //    if (condition) {
       //      resolve ("Berhasil");
         //} 
         //else {
       //      reject("Error");
     //    }
   //  }); 
 //}

 //newPromise()
 //.then((result)=> {
   //  return result;
 //})
//02 .then((result2)=>{
//     console.log (` ${result2} !!!`)
// })
 //.catch((error)=>{
//     console.log(error);
//});

 //function getIdStudent() {
   //  return new Promise((resolve, reject)=>{
     //  resolve("12345");
     //});
 //}

 //function getNameById (id){
 //    return new Promise((resolve, reject)=>{
 //        if (id == "12345") {
 //            resolve("Jay Assan");
 //        }
 //        else {
  //           reject("Unknown ID Student");
   //      }
    // });
// }

 //getIdStudent()
//.then((id)=> {
  //   return getNameById(id);
 //})
 //.then((name)=> {
   //  console.log(name);
 //})

 //.catch((error)=> {
   //  console.log(error);
 //});
 
 //getIdStudent()
 //.then((id)=> {
  //   return getNameById(id)
 //})
//.then((name) => {
  //  console.log(name);
//})
//.catch((error) => {
  //  console.log(error);
//});

//const getNameByIdAsync = async () => {
 //   const id = await getIdStudent();
  //  const name = await getNameById(id);
    //console.log(name);

//};
// const getNameByIdAsync = async () => {
//     try{
  //   const id = await getNameById();
    // const name = await getNameById(id);
    // console.log(name);
    // } catch (error) {
    //     console.log(error);
    // }
    // };
//getNameByIdAsync();

//console.log('proses 1');
//console.log('proses 2');
//console.log('proses 3');

//assyncronous, nonblocking
//Multi-Thread : Parallel
//console.log('proses 1');
//setTimeout(() =>{
//  console.log('proses 2');
//}, 3000);
//console.log('proses 3');

//single thread : concuret
//setTimeout(() =>{
//  console.log("proses 1");
//  setTimeout(() => {
//    console.log("Proses 2");
//    setTimeout(() => {
//      console.log('Proses 3');
//    }, 3000);
//  }, 3000);
//}, 3000);

//const numbers = [1, 2, 3, 4, 5];
//numbers.forEach((item, index) => {
//  setTimeout(() => {
//    console.log(item);
//  }, index * 1000);
//});
let condition = true;
let newPromise = new Promise ((resolve, reject) => {
  if(condition){
    resolve('berhasil');
  } else {
    reject ('Gagal');
  }
});



//newPromise.then((res)=> {
//  console.log(res);
//})
//.catch((error) => {
//  console.log(error);
//})

//const getPromise = async () => {
  //const res = await newPromise();
  //console.log(res);
//};

//const getPromise = async () => {
//  try{
//  const res = await newPromise();
//  console.log(res);
//  } catch (error){
//    console.log(error);
//  }
//};

//getPromise();

//fetch('https://jsonplaceholder.typicode.com/posts')
//.then((res) =>res.json())
//.then((json) => console.log (json)
//.catch ((error) => console.log(error));
const getJSONPlaceholder = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await res.json();
  console.log(json);
}
getJSONPlaceholder();