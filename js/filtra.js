let filtro = document.querySelector("#filtrar-tabela")

filtro.addEventListener("input", () => {
    this.value

    let pacientes = document.querySelectorAll(".paciente")

    if(filtro.value.length > 0){

        for(let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i]
            const tdNome = paciente.querySelector(".info-nome")
            let nome = tdNome.textContent
            const expressao = new RegExp(filtro.value, "i")
    
            if(!expressao.test(nome)) {
                paciente.classList.add("invisivel")
            } else {
                paciente.classList.remove("invisivel")
            }
        }

    } else {
        for(let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i]

            paciente.classList.remove("invisivel")
        }
    }


   
   
})