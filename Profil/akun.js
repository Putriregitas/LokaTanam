
function inputform()
{
    var nama = document.getElementById("nama");
    var email2 = document.getElementById("email2");

    if (nama.value =="")
    {
        alert("Masukkan Nama Anda");
        nama.fokus();
    }

    else if (email2.value =="")
    {
        alert("Masukkan Email Anda ");
        email2.fokus();
    }

    else{
        alert (" Data Berhasil Disimpan ");
    }
    
    // var tanggal = document.forms["formMasuk"]["tanggal"].value;
    // var kegiatan = document.forms["formMasuk"]["kegiatan"].value;
    
    // let input = document.getElementById("input");
    // var baris = input.insertRow(-1);
    // var cell1 = baris.insertCell (0);
    // var cell2 = baris.insertCell (1);

    // cell1.innerHTML = tanggal;
    // cell2.innerHTML = kegiatan;
}