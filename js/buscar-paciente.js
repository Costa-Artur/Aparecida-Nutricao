let botaoBuscar = document.querySelector("#buscar-paciente")

botaoBuscar.addEventListener("click", () => {
    
    let xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener("load", () => {

        if(xhr.status == 200) {
            let pacientes = JSON.parse(xhr.responseText)

            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente)
            })
        } else {
            console.log(xhr.status)
            console.log(xhr.responseText)
            let mensagemErro2 = document.querySelector("#Erro-ajax")

            mensagemErro2.classList.remove("invisivel")
        }

       
    } )

    xhr.send()
})