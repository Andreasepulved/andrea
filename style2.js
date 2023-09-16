
function convertirCelsiusaFahrenheit(celsius) {
    let resultado = celsius * 9/5 +32;

    return resultado;
}

function convertirFahrenheidACelsius(fahrenheit) {
    let resultado = (fahrenheit - 32) * 5/9;

    return resultado;
}

let celsius = 27;
let resultado = convertirCelsiusaFahrenheit(celsius);
    console.log(`${celsius}°C = ${resultado}`);