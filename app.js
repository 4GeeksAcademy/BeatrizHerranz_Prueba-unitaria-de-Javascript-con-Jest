// Definir las tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87, // libra esterlina
}

// Función para convertir de dólares a yenes
function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD;
    let yenes = euros * oneEuroIs.JPY;
    return yenes;
}
function fromYenToPound(yen) {
    let euros = yen / oneEuroIs.JPY;
    let pounds = euros * oneEuroIs.GBP;
    return pounds;
}

module.exports = { fromDollarToYen, fromYenToPound };