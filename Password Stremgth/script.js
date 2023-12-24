function Strength(password){
    let i = 0;
    if(password.length > 6){
        i++;
    }
    if(password.lenght > 10){
        i++;
    }

    if(/[0-9]/.test(password)){
        i++;
    }

    if(/[A-Za-zo-8]/.test(password)){
        i++;
    }

    return i;
}