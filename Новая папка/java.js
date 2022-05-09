
let a = +prompt('Напишите число')
let method = prompt(' + - * /')
let b = +prompt('Напишите число')


let cal = (a,method,b) => {


    switch (method) {
        case '+':
            alert(a + b)
            break;
        case '-':
            alert(a - b)
            break;
        case '*':
            alert(a * b)
            break;
        case '/':
            alert(a / b)
            break;
    }


}
cal(a, method, b)











