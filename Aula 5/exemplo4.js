function treco(){
    let numero1 = parseInt(document.getElementById("numero1").value)
    let numero2 = parseInt(document.getElementById("numero2").value)

    let resultado = 0
    if(numero1 < 0 || numero2 < 0){
     resultado = numero1 + numero2;

    }
    else{
      resultado = numero1 * numero2;
    }
    
   document.getElementById("fim ").innerHTML = resultado

}