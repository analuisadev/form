const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const button = document.querySelector('button')
const fieldRequired = document.querySelectorAll('p')

function hideErrorMessage() {
    fieldRequired.forEach(field => {
        field.style.display = 'none'
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    inputs.forEach(input => {
        if (input.value === '') {
            fieldRequired.forEach(field => {
                field.style.display = 'block'
            })
        } 
        input.addEventListener("input", () => {
            hideErrorMessage()
        })
    })
})

button.addEventListener("click", () => {
    function submit() {
        form.submit()
    }

    const allFilled = Array.from(inputs).every(input => input.value.trim() !== '')

    if (allFilled) {
        alert("Formulário Enviado!")
        submit()
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.")
    }
})