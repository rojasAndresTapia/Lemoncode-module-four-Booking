'use strict';

//global bars

const inputRoomElement = document.getElementById("room");
const resultInputElement = document.getElementById('calculation');
const resultButtonElement = document.getElementById('calculate');
const inputOcupationElement = document.getElementById('doubleOrSingle');
const inputParkingElement = document.getElementById('parking');
const inputNightsElement = document.getElementById('nights');
const checkboxSpaElement = document.getElementById('spa');

let resultValue = resultInputElement.value;


if (resultValue = "NaN") {
    resultValue = parseInt(0);
  } else {
    resultValue = parseInt(document.getElementById('calculation').value);
  }

//Define handle functions

const handleRoomInput = () => {
    const room = inputRoomElement.value;
 
    return room;
};

const handleDoubleOrSingleInput = () => {
    const beds = inputOcupationElement.value;
 
    return beds;
};

const handleSpaCheckbox = () => {
    const spa = checkboxSpaElement;
    if (spa.checked == true) {
        spa.value = parseInt(20);
    } else {
        spa.value = parseInt(0);
    }
    const spaIncluded = spa.value
  
    return spaIncluded;
};

const handleNightsInput = () => {
    let nights = parseInt(inputNightsElement.value);
    if (nights == "Undefined" || nights == "NaN") {
        nights = parseInt(0);
      } else {
        nights = parseInt(document.getElementById('nights').value);
      }
  
    return nights;
};

const handleParkingInput = () => {
    let parkingNights = parseInt(inputParkingElement.value);
    if (parkingNights == "Undefined" || parkingNights == "NaN") {
        parkingNights = parseInt(0);
      } else {
        parkingNights = parseInt(document.getElementById('parking').value);
      }

    return parkingNights;
};

const handleButton = () => {
   
    resultValue = parseInt(handleRoomInput()) + parseInt(handleDoubleOrSingleInput()) + parseInt(handleParkingInput()) + parseInt(handleNightsInput()) + parseInt(handleSpaCheckbox());
    resultInputElement.value= resultValue;
};



// Add events
resultButtonElement.addEventListener("click", handleButton);

const calculate = (response) => alert("El resultado de la operación es: " + resultValue);
