function Functionku(){
    var x = document.getElementById("sandi");
    var y = document.getElementById("hide");
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
    var nama = document.getElementById("nama");
    var email = document.getElementById("email");
    var sandi = document.getElementById("sandi");

    if (nama.value =="")
        {
            alert("Masukkan Nama Pengguna");
            nama.fokus();
        }

    else if (email.value =="")
        {
            alert("Masukkan Email Anda ");
            email.fokus();
        }

    else if (sandi.value =="")
        {
            alert("Masukkan sandi Anda ");
            sandi.fokus();
        }

    else{
        alert (" Data Berhasil Disimpan ");
    }
    
}