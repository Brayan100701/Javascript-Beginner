const factorial = (num) => {
    if(num > 1)
        num *= factorial(num-1)
    return num
}

function main(){
    let num = 5;
    let facto;
    facto = factorial(num);
    console.log('El factorial de ', num,' es: ', facto);
}

main()