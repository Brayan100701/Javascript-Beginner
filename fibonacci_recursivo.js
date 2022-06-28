const fibonacci = (num) => {
    if(num>1)
        num = fibonacci(num-1) + fibonacci(num-2);
    return num
}

function main(){
    const num = 6;
    let fibo = fibonacci(num);
    console.log('Fibonacci de ', num,': ', fibo);
}

main()