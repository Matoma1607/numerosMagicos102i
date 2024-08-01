
document.addEventListener("DOMContentLoaded", () => {
    let numeroMagico;

    document.querySelector(".game").addEventListener("click", () => {
        numeroMagico = Math.floor(Math.random() * 100) + 1;
        console.log("Numero mágico generado:", numeroMagico);

        document.querySelector(".adivinanza").classList.remove("d-none");
    });

    document.querySelector(".adivinanza").addEventListener("submit", (e) =>{
        e.preventDefault();
        const usuario = parseInt(document.querySelector(".entrada-adivinanza").value);

        if (usuario === numeroMagico){
            alert("¡Felicidades! adivinaste el numero magico");
        }else if (usuario > numeroMagico){
            alert("El numero ingresado es mayor que el numero magico");
        }else{
            alert("El numero ingresado es menor que el numero magico")
        }
    });
});