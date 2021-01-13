function Functionku(){
    var x = document.getElementById("input");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");
    
    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}

function ValidateForm(){
    var firstname = document.forms["Pendaftaran"]["firstname"].value;
    var lastname = document.forms["Pendaftaran"]["lastname"].value;
    var inputan = document.forms["Pendaftaran"]["inputan"].value;
    var input = document.forms["Pendaftaran"]["input"].value;

    if (!firstname || !lastname || !inputan || !input) {
        alert("Mohon melengkapi form data yang kosong !");
        return ;
      }

    if (firstname && lastname && inputan && input) {
        alert("Data berhasil dimasukkan !")
        return;
    }