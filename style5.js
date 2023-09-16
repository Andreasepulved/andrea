let numeroprimo = 10;

let esnumeroprimo = true;

for (let i = 2; i < numeroprimo / 2; i++){
    if (numeroprimo % i === 0){
        esnumeroprimo = false
    }
}

if (esnumeroprimo) {
    console.log("si es numero primo");
}
else{
    console.log("no es numero primo");
}