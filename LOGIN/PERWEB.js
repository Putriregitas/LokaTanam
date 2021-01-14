function Functionku(){
    var x = document.getElementById("psw");
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

function inputform()
{
    var namapengguna = document.getElementById("namapengguna");
    var email = document.getElementById("email");
    var psw = document.getElementById("psw");

    if (namapengguna.value =="")
        {
            alert("Masukkan Nama Pengguna");
            nama.fokus();
        }

    else if (email.value =="")
        {
            alert("Masukkan Email Anda ");
            email.fokus();
        }

    else if (psw.value =="")
        {
            alert("Masukkan sandi Anda ");
            sandi.fokus();
        }

    else{
        alert (" Data Berhasil Disimpan ");
    }
    
}