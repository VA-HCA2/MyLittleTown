//Rental Cost Estimator
/* This function calculates the price per of the total rental including any addional options added.
* @param numOfDays - The Number of day for the rental.
* @param electronicToll, gps,roadside - Any additional option that the User adds for the rental. 
* @param carType - Has the dropwdon menu for the different cars prices. 
* @param price- The price of the car before any addional option is added.
* @param optionsPrice- The total price for gps,roadside and electronicToll if added.
* @paramsurcharge- The total price if the user selcted under 25 option. 
* @param totalCst- Total Cost of the rental
*/
"use strict";

function rentalPrice() {
    let totalDue = 0;

    let numberofDays = document.getElementById("numOfDays").value;

    let rentalCost = 29.99 * numberofDays;

    //Options Charges

    let optionsCharges = 0

    let electronicToll = document.getElementById("electronicToll").checked;
    let tollCharge = 3.95 * numberofDays;

    if (electronicToll) {
        optionsCharges += tollCharge
    }

    let gps = document.getElementById("gps").checked;
    let gpsCharge = 2.95 * numberofDays;

    if (gps) {
        optionsCharges += gpsCharge;
    }

    let roadSide = document.getElementById("roadSide").checked;
    let roadSideCharge = 5.95 * numberofDays;

    if (roadSide) {
        optionsCharges += roadSideCharge;
    }

    //Under 25 Charges

    let surcharge = 0;
    if (document.getElementById("Yes").checked) {
        surcharge = rentalCost * 0.30;
    }
    else {
        surcharge = 0;
    }

    // Car Options Charge

    let carType = document.getElementById("carType").value;
    let carCost = 0;

    if (carType == "ECO") {
        carCost += 20.99

    }
    else if (carType == "COMP") {
        carCost += 30.99

    }
    else if (carType == "INTER") {
        carCost += 40.99

    }
    else {
        carCost += 50.99
    }



    //Total cost in the Car Rental box

    const totalCst = document.getElementById("price");
    totalCst.value = rentalCost.toFixed(2);

    //*Option pricing
    const totalOptionCharges = document.getElementById("optionsPrice");
    totalOptionCharges.value = optionsCharges.toFixed(2);


    //*Surcharge
    const totalSubCharges = document.getElementById("surcharge");
    totalSubCharges.value = surcharge.toFixed(2);


    //Total Due:
    totalDue = rentalCost + optionsCharges + surcharge + carCost
    const total = document.getElementById("totalCost");
    total.value = totalDue.toFixed(2);


}

// This function calls the rental price function  when the user clicks on the Total price button

window.onload = function () {

    const btn = document.getElementById("totalPrice");
    btn.onclick = rentalPrice;

}



