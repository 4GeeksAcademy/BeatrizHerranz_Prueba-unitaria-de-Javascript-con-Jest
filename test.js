const { fromDollarToYen, fromYenToPound } = require('./app.js');

test('Convierte 1 dólar a yenes', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26); // Ajusta el valor esperado según la tasa de conversión
});

test('Convierte 1000 yenes a libras', () => {
    expect(fromYenToPound(1000)).toBeCloseTo(5.56); // Ajusta el valor esperado según la tasa de conversión
});