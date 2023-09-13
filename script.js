const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");
const INPUT = document.getElementById("peso");
const BOTON = document.getElementById("boton");

BOTON.addEventListener ("click", () => {
    let peso = INPUT.value;
    if(peso > 0) {
        ERROR.style.display = "none";
        let res = holliday (peso);
        console.log(res)   
    } else { 
        console.log("error");
        ERROR.style.display = "block";
    }
});

function holliday(peso) {
    let volumen;
     
    if (peso<=10) {
        volumen = peso * 100;
    } else if (peso > 10 && peso <= 20) {
        volumen = 1000 +(peso - 10)* 50;
    }  else {
        volumen =1500 +(peso - 20)*20;
    }
    return volumen;
}

function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo;
}