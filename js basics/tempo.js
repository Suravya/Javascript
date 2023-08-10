const kelvin=293;
/* This is today's weather forcast*/
console.log(kelvin);
const celsius= kelvin-273;
/* This is today's weather in Celsius*/
let farenheit= celsius*(9/5)+32;
/* This is Today's Temp in Farenheit.*/
farenheit= Math.floor(farenheit);
/* This is farenheit rounded down.*/
console.log(farenheit);
console.log(`The temperature is ${farenheit} degree fareneheit`);

