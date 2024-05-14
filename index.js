const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const btn = document.querySelector(".btn")
const resultado = document.querySelector("#resultado")

btn.addEventListener("click", () => {
    const op = document.querySelector("#op").value
    let res = 0
    switch(op){
        case '+': 
            res = parseInt(num1.value)  + parseInt(num2.value)
            break
        case '-': 
            res = parseInt(num1.value)  - parseInt(num2.value)
            break
        case '*': 
            res = parseInt(num1.value)  * parseInt(num2.value)
            break
        case '/': 
            res = parseInt(num1.value)  / parseInt(num2.value)
            break
        default:
            alert("Insira uma operação válida!")

    }

    resultado.classList.remove("esconder")

    resultado.innerHTML = `Resultado: ${res}`
})






