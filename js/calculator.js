function calculate() {
    var real1 = parseFloat(document.getElementById('real1').value);
    var imaginary1 = parseFloat(document.getElementById('imaginary1').value);
    var real2 = parseFloat(document.getElementById('real2').value);
    var imaginary2 = parseFloat(document.getElementById('imaginary2').value);
    var operator = document.getElementById('operator').value;

    if (isNaN(real1) || isNaN(imaginary1) || isNaN(real2) || isNaN(imaginary2)) {
        alert("Kolom tidak boleh kosong");
        return;
    }

    var result;
    var explanation;
    switch (operator) {
        case 'add':
            result = complexAddition(real1, imaginary1, real2, imaginary2);
            explanation =   '(' + real1 + ' + j' + imaginary1 + ') + (' + real2 + ' + j' + imaginary2 + ') = ' + 
                            '(' + real1 + ' + ' + real2 + ') + j(' + imaginary1 + ' + ' + imaginary2 + ') = ' + result;
            break;
        case 'subtract':
            result = complexSubtraction(real1, imaginary1, real2, imaginary2);
            explanation =   '(' + real1 + ' + j' + imaginary1 + ') - (' + real2 + ' + j' + imaginary2 + ') = ' + 
                            '(' + real1 + ' - ' + real2 + ') + j(' + imaginary1 + ' - ' + imaginary2 + ') = ' + result;
            break;
        case 'multiply':
            result = complexMultiplication(real1, imaginary1, real2, imaginary2);
            explanation =   '(' + real1 + ' + j' + imaginary1 + ') x (' + real2 + ' + j' + imaginary2 + ') = ' + 
                            '(' + real1 + ' x ' + real2 + ' - ' + imaginary1 + ' x ' + imaginary2 + ') + j(' +
                            real1 + ' x ' + imaginary2 + ' + ' + real2 + ' x ' + imaginary1 + ') = ' + result;
            break;
        case 'divide':
            result = complexDivision(real1, imaginary1, real2, imaginary2);
            explanation =   '(' + real1 + ' + j' + imaginary1 + ') / (' + real2 + ' + j' + imaginary2 + ') = ' + 
                            '((' + real1 + ' x ' + real2 + ' + ' + imaginary1 + ' x ' + imaginary2 + ') / (' +
                            real2 + '^2 + ' + imaginary2 + '^2)) + j((' + imaginary1 + ' x ' + real2 + ' - ' +
                            real1 + ' x ' + imaginary2 + ') / (' + real2 + '^2 + ' + imaginary2 + '^2)) = ' + result;
            break;
        default:
            result = 'Invalid operator';
            explanation = '';
            break;
    }

    document.getElementById('result').value = result;
    document.getElementById('explanation').innerText = explanation;
}

function complexAddition(real1, imaginary1, real2, imaginary2) {
    var realResult = real1 + real2;
    var imaginaryResult = imaginary1 + imaginary2;
    return realResult + ' + j' + imaginaryResult;
}

function complexSubtraction(real1, imaginary1, real2, imaginary2) {
    var realResult = real1 - real2;
    var imaginaryResult = imaginary1 - imaginary2;
    return realResult + ' + j' + imaginaryResult;
}

function complexMultiplication(real1, imaginary1, real2, imaginary2) {
    var realResult = real1 * real2 - imaginary1 * imaginary2;
    var imaginaryResult = real1 * imaginary2 + real2 * imaginary1;
    return realResult + ' + j' + imaginaryResult;
}

function complexDivision(real1, imaginary1, real2, imaginary2) {
    var denominator = real2 * real2 + imaginary2 * imaginary2;
    var realResult = (real1 * real2 + imaginary1 * imaginary2) / denominator;
    var imaginaryResult = (imaginary1 * real2 - real1 * imaginary2) / denominator;
    return realResult + ' + j' + imaginaryResult;
}

function reset() {
    document.getElementById('real1').value = '';
    document.getElementById('imaginary1').value = '';
    document.getElementById('real2').value = '';
    document.getElementById('imaginary2').value = '';
    document.getElementById('result').value = '';
    document.getElementById('explanation').innerText = '';
}