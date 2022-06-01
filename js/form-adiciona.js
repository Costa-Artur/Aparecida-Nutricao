botao.addEventListener("click", function (event) {

    event.preventDefault()

   const form = document.querySelector("#form-adiciona")

    const paciente = pacienteForm(form)

    

    let erro = validaPaciente(paciente)

    if(erro.length > 0) {
        mensagemErros(erro)
        return
    }

   
    adicionaPacienteNaTabela(paciente)
    

    form.reset()

    let mensagemErro = document.querySelector(".mensagemErro")
    mensagemErro.innerHTML = ""

})

function adicionaPacienteNaTabela(paciente) {
    let pacienteTr = montaTr(paciente)
    const tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)

}

function mensagemErros (erros) {

    let ul = document.querySelector(".mensagemErro")

    ul.innerHTML = " "

    erros.forEach((erro) => {
        let li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    })

}

function pacienteForm (form) {
    
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente
}

function montaTr (paciente) {

    const pacienteTr = document.createElement("tr")

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso, "indo-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    pacienteTr.classList.add("paciente")

    return pacienteTr
}

function montaTd(dado,classe) {

    const td = document.createElement("td")

    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente (paciente) {
    let erro = []

    if(paciente.nome.length == 0) {
        erro.push("Nome não pode ficar em branco")
    }

    if(paciente.altura.length == 0) {
        erro.push("Altura não pode ficar em branco")
    }

    if(paciente.peso.length == 0) {
        erro.push("Peso não pode ficar em branco")
    }

    if(!validaAltura(paciente.altura)) erro.push("Altura Inválida")

    if(!validaPeso(paciente.peso)) erro.push("Peso Inválido")

    if(paciente.gordura.length == 0) {
        erro.push("Gordura não pode ficar em branco")
    }

    return erro
}