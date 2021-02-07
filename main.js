const calculator = document.querySelector(".calculadora")
const keys = calculator.querySelector(".calculadora-keys")
const display = document.querySelector(".display")
const calculate = (n1, operator, n2)=>{
    let result = ""
    if(operator === "suma"){
        result = parseFloat(n1) + parseFloat(n2)
    } else if(operator ==="resta"){
        result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === "multiplicacion"){
        result = parseFloat(n1) * parseFloat(n2)
    } else if(operator === "division"){
        result = parseFloat(n1) / parseFloat(n2)
    }
    return result
}
keys.addEventListener("click", e => {
    if(e.target.matches("button")){
        const key = e.target
        const data_action = key.dataset.action
        const keyValue = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType
        if(!data_action){
            if(displayedNum === "0" || previousKeyType === "operator"){
                display.textContent = keyValue
            }else{
                display.textContent = displayedNum + keyValue
            }
        }
        if(data_action === "suma" || data_action === "resta"
        || data_action === "multiplicacion" || data_action === "division"){
            calculator.dataset.previousKeyType = "operator"
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = data_action
        }
        if(data_action === "decimal"){
            display.textContent = displayedNum + "."
        }
        if(data_action === "clear"){
            display.textContent = "0"
        }
        if(data_action ==="equal"){
            const secondValue = displayedNum
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            display.textContent = calculate(firstValue, operator, secondValue)
        }
    }
})