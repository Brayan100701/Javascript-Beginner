function main(){
    let num = 4;
    let facto = 1;
    for(let i=1; i<=num; i++)
        facto *= i;
    console.log('El factorial de ', num, 'es: ',facto);
}

main()