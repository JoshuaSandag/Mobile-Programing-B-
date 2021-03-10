 const fullName = "John Doe";

 const person = {
    firstName : "John",
    lastName : "Doe",
    age : 33,
};

 const display = ({firstName, lastName}) => {
    console.log (`Hello ${firstName} ${lastName}`);
};

//export {fullName as namaLengkap, person as orang, display as tampil};
export {fullName , person, display};
