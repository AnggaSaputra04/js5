function hitung(pilihan)
{   

    var validasiAngka = /^[0-9]+$/;
    var bil1=document.getElementById('angka1').value;
    var bil2=document.getElementById('angka2').value;
    bil1 = parseFloat(bil1)
    bil2 = parseFloat(bil2)
    validasiAngka = parseFloat(validasiAngka)

    if (pilihan=='+'){
        document.getElementById('hasil').value = bil1 + bil2;
    }
    else if(pilihan == '-'){
        document.getElementById('hasil').value = bil1 - bil2;
    }
    else if(pilihan == '*'){
        document.getElementById('hasil').value = bil1 * bil2;
    }
    else if(pilihan == '/'){
        document.getElementById('hasil').value = bil1 / bil2;
    }
    else if(pilihan == '**' ) {
            document.getElementById('hasil').value = bil1 ** bil2;
        }
        
     else if(pilihan=="-" && bil1=="angka1" && bil2=="angka2" && hasil=="hasil" && validasiAngka)
     {

        alert(" Maaf yang Anda Input bukan Angka");
        return false;  
     } 
      
    
    document.getElementById('hasil').style.backgroundColor="#";
}
