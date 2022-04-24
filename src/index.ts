let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");
let btnEnviar2 = <HTMLButtonElement>document.getElementById("btnEnviar2");
let btnEnviar3 = <HTMLButtonElement>document.getElementById("btnEnviar3");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");
let rotulo3 = <HTMLParagraphElement>document.getElementById("rotulo3");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");


rotulo1.innerHTML = "Ingrese la base";
rotulo2.innerHTML = "Ingrese el Exponente";
rotulo3.innerHTML = "Click para ver el resultado por consola";
btnEnviar1.addEventListener("click", () => {
  let base = Number(dato1.value);

btnEnviar2.addEventListener("click", () => {
  let exponente = Number(dato2.value);
  

 btnEnviar3.addEventListener("Click", () => {
   if(exponente===0){
      console.log("El resultado es:1"); 
      }else{ 
          let resultado = Number(potenciar(base,exponente));
          console.log("El resultado es:" + resultado);  
  function potenciar (base: number,exponente: number): number {
    return Math.pow(base,exponente);
  };
  };
  });
};
});
});
