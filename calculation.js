function myFunction() {
    var x = document.getElementById("Gred").value;
    var y = document.getElementById("Length").value;

    var cubicm =((x*x*y)/16000000);
    var cubicf =(cubicm*(35.315));



    document.getElementById("answerRate").innerHTML = cubicm;
    document.getElementById("answerRate1").innerHTML = cubicf;
}

function myFunction2(){
    var x = document.getElementById("Gred").value = 0;
    var y = document.getElementById("Length").value = 0;


    document.getElementById("answerRate").innerHTML = "Value are reset . Plaese enter value again"
    document.getElementById("answerRate1").innerHTML = "Value are reset . Plaese enter value again"
}
