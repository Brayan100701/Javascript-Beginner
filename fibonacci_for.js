function main(){
    const num = 5;
    let fibo;
    if(num<1)
        console.log('A partir de 1 por favor')
    else{
        if(num===1)
            fibo = 1
        else{
            let aux1 = 1, aux2 = 0;
            for(let i=1;i<num;i++){
                fibo = aux1 + aux2;
                aux2 = aux1;
                aux1 = fibo;
            }
        }
        console.log('Fibonacci de ', num,': ', fibo)
    }
}

main()