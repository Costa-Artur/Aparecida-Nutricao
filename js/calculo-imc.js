const pacientes = document.querySelectorAll(".paciente")
const botao = document.querySelector("#adicionar-paciente")

for (let i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i]

    let tdPeso = paciente.querySelector(".info-peso");
    
    const peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    const altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");

    let pesoValido = validaPeso(peso)

    let alturaValida = validaAltura(altura)

        if(!pesoValido) {
            tdPeso.innerHTML = "Peso Inválido"
    
            pesoValido = false
    
            paciente.classList.add("pacienteInvalido")
        }
    
        if(!alturaValida) {
            tdAltura.innerHTML = "Altura Inválida"
    
            alturaValida = false
    
            paciente.classList.add("pacienteInvalido")
        }
    
        if(pesoValido && alturaValida) {
    
            let imc = calculaIMC(peso, altura);
    
            tdImc.textContent = imc
    
        } else {

            tdImc.textContent = "Inválido"
            
        }

   
}

function validaAltura (altura) {

    if(altura >= 0 && altura < 3.0) {
        return true
    } else {
        return false
    }

}

function validaPeso (peso) {

    if(peso >= 0 && peso < 1000) {
        return true
    } else {
        return false
    }

}

function calculaIMC(peso,altura) {
    let imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}
