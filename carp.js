
function tikla(){
    var inputlar = document.getElementById("input").value;

    var yazi =document.getElementById("input");

    var yazdir = document.getElementById("yazdir");

    var temiz =document.getElementById("clear");


    if(inputlar <= 0 || inputlar>= 1000){
        alert("lütfen 1-1000 sayı giriniz");
    }
    else{
        yazdir.innerHTML =" ";

        yazdir.style.display="block";
        for( var i = 0; i<=10 ; i++){
            var result = `${inputlar} * ${i} = ${inputlar*i} <hr>`;
            yazdir.innerHTML += result;

        }

        yazi.value = " ";
        temiz.style.display= "block";
    }

    

}
function temizleme(){
    var temiz =document.getElementById("clear");
    var yazdir = document.getElementById("yazdir");
    temiz.style.display ="none";
    yazdir.style.display = "none";
}