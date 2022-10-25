function Chutar() {
    let numerosecreto = 5
   let chute = document.getElementById("valor").value 
   
   if(chute == numerosecreto){
   //verdadeiro
   document.getElementById("resultado").innerHTML = "Acertou"
   }
   else{
    //falso
document.getElementById("resultado").innerHTML = "Errou"
   }
}