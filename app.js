const celsiusInput = document.querySelector('#celsius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

// Rounding to 2 decimal function
function roundTwoDecimal(num) {
  return Math.round(num*100)/100;
}


// Celsius conversion function
function celsius() {
  const celsiusTemp = parseFloat(celsiusInput.value);
  const fahrenheitTemp = (celsiusTemp * 9/5) +32;
  const kelvinTemp = celsiusTemp + 273.15 ;
  fahrenheitInput.value = roundTwoDecimal(fahrenheitTemp);
  kelvinInput.value = roundTwoDecimal(kelvinTemp);
}
// Fahrenheit conversion function
function fahrenheit() {
  const fahrenheitTemp = parseFloat(fahrenheitInput.value);
  const celsiusTemp = (fahrenheitTemp - 32) * (5/9);
  const kelvinTemp = celsiusTemp + 273.15 ;
  celsiusInput.value = roundTwoDecimal(celsiusTemp);
  kelvinInput.value = roundTwoDecimal(kelvinTemp);
}
// Kelving conversion function 
function kelvin() {
  const kelvinTemp = parseFloat(kelvinInput.value);
  const celsiusTemp = kelvinTemp - 273.15 ;
  const fahrenheitTemp = (celsiusTemp * 9/5) +32;
  fahrenheitInput.value = roundTwoDecimal(fahrenheitTemp);
  celsiusInput.value = roundTwoDecimal(celsiusTemp);
}
  
function main () {
  celsiusInput.addEventListener('input', celsius);
  fahrenheitInput.addEventListener('input', fahrenheit);
  kelvinInput.addEventListener('input', kelvin );
}
main ();


