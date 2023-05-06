
// var numero1 = prompt("intoduce un numero");
// var numero2 = prompt("introduce oro numero");

// var resultado = parseInt(numero1) + parseInt(numero2);
// alert ("El resultado es : " + resultado);

// let numero1 = 5;
// let numero2 = 10;

// let resultado = numero1 + numero2;
// console.log("resultados: " , resultado);

const form = document.querySelector("form")
const input = document.getElementById("btn")

input.addEventListener("click", (e) => {
    e.preventDefault();
      console.log(form.elements[0].value);
      console.log(form.elements[1].value);
     
      const nombre = form.elements[0].value;
      const contraseña = form.elements[1].value;
    
    
      if( nombre === "admin" && contraseña === "1234") {
       return window.open("https://www.instagram.com/")
        return alert("Bienbenido"); 
    
      }else{
     return alert("Datos incorrectos");
    }
    
    });



console.log(input)