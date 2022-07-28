function chiso() {
let height = +document.getElementById("height").value;
let weight = +document.getElementById("weight").value;
let ketqua = weight/(height*height);
    if (ketqua > 40 ) { 
        ketqua = "Béo độ III";
    } else if (35 <= ketqua && ketqua < 40 ) { 
        ketqua = "Béo độ II";
    } else if (30 <= ketqua && ketqua < 35){
        ketqua = "Béo độ I";
    } else if (25 <= ketqua && ketqua < 30){
        ketqua = "Thừa cân";
    } else if (18.5 <= ketqua && ketqua < 25){
        ketqua = "Bình thường";
    } else if (17 <= ketqua && ketqua < 18.5){
        ketqua = "Gầy độ I";
    } else if (16 <= ketqua && ketqua < 17){
        ketqua = "Gầy độ II";
    } else { 16< ketqua
        ketqua = "Gầy độ III";
    }
document.getElementById("ketqua").innerHTML=ketqua;
}