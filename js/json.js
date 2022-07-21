'use strict';

const car = {
    name: 'bmw',
    motor: 'power-full' 
};

const objToJSON = JSON.stringify(car);

const jsonToObj = JSON.parse(objToJSON);

console.log(objToJSON);
console.log(jsonToObj);

/* ************************** */

const dog = {
    name: 'Pitty',
    color: 'black'
};

const jsonTojson = JSON.parse(JSON.stringify(dog));

console.log(jsonTojson);