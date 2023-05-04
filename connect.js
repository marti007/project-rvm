const txtName = document.getElementById("txtName");
const idNumber = document.getElementById("idNumber");
const txtAge = document.getElementById("txtAge");
const selCountry = document.getElementById("selCountry");
const msg = document.getElementById("msg");


const addData = document.getElementById("addData");

const database = firebase.database();

addData.addEventListener('click', (e) =>{
  e.preventDefault();

  database.ref('/users' + idNumber.value).set({

    full_name: txtName.value,
    age: txtAge.value,
    country: selCountry.value,
    message: msg.value


  });

});