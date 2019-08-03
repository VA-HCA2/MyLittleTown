//Hotel Coast Estimator 
/* Calculates the price of the hotel depending on any additional option that the customer selects. 
* @param selectedRoomType- The room the user selects in the dropdown Menu. 
* @param numOfAfults-The number of adults in the input field. 
* @param numOfKids-The number of kids in the input field.
* @param numOfNights- The number of nights from the input field.
* @param discountCode- If the customer selects any discrount then apply "AAA" "Military" "Senior"
* @param roomCostBeforeDiscount- Cost of the room before any applied discount. 

*/
"use strict";

let rooms =
    [{ roomType: "QUEEN", maxCapacity: 5, seasonRate: 250, price: 150 },
    { roomType: "KING", maxCapacity: 2, seasonRate: 250, price: 150 },
    { roomType: "KINGSUITE", maxCapacity: 4, seasonRate: 310, price: 190 },
    { roomType: "TWOBED", maxCapacity: 6, seasonRate: 350, price: 210 },
    ]
let roomPrice = 0;

// This function calculates the Max capacity per Room. 
function canRoomHoldCustomer(selectedRoomType, numOfAdults, numOfKids) {

    //Check if there are any adults if not return false
    if (numOfAdults < 1) {
        return false;
    }
    // Check Room Selected by the User. let selectedRoom variable so we can use 
    //that to put the info that we are getting from the array. 
    let selectedRoom;
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].roomType == selectedRoomType) {
            selectedRoom = rooms[i]
        }
    }
    //Max capacity depending on room selected. If the max capacity is under the
    // number the user enter then take the selectedRoom variable and the maxCapacity object.
    // If not return . 

    if (numOfAdults + numOfKids > selectedRoom.maxCapacity) {
        return false;
    }
    return true;
}

//This Function Calculates the Cost of the Room. 

function getRoomCost(selectedRoomType, checkinDate, numOfNights) {
    //Select the Room 
    let selectedRoom;
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].roomType == selectedRoomType) {
            selectedRoom = rooms[i]
        }
    }
    // Get Price depending the Room Selected.    
    let priceOfRoomSelected = selectedRoom.price
    let cost = priceOfRoomSelected * numOfNights;
    //Return Cost of Room Selected
    return cost;
}

//This Function Calculates the price per Adult and Kids if breakfast is selected. Also if it is
// Senior then don't charge any. 

function getBreakfastCost(numOfAdults, numOfKids, numOfNights, discountCode) {
    let adultBreakfast;
    let childBreakfast;

    adultBreakfast = numOfAdults * 6.96 * numOfNights;
    childBreakfast = numOfKids * 3.95 * numOfNights;
    // total breakfast cost for Adults and Kids.  
    let totalBreakfastCost = adultBreakfast + childBreakfast;
    //Apply discount if Senior 
    if (discountCode == "Senior") {
        return 0;
    }
    //If not then return the breakfast Cost. 
    else {
        return totalBreakfastCost;
    }

}

//This Function calculates if any discount option is selected. 

function getDiscount(roomCostBeforeDiscount, discountCode) {
    if (discountCode == "AAA") {
        return roomCostBeforeDiscount * 0.1;
    }

    else if (discountCode == "Senior") {
        return roomCostBeforeDiscount * 0.1;
    }

    else if (discountCode == "Military") {
        return roomCostBeforeDiscount * 0.2;
    }
    // If any other code don't apply any discount
    else {
        return 0;
    }
}
function getEstimate() {

    let roomType = document.getElementById("roomType").value

    let numOfNights = document.getElementById("numOfNights").value
    numOfNights = parseFloat(numOfNights);
    let numOfAdults = document.getElementById("numOfAdults").value
    numOfAdults = parseFloat(numOfAdults);
    let numOfKids = document.getElementById("numOfKids").value
    numOfKids = parseFloat(numOfKids);

    let breakfastIncluded = false;
    if (document.getElementById("breakfastIncluded").checked) {
        breakfastIncluded=true;
    }
        
    let discounts = "None";

    if (document.getElementById("aaaDiscount").checked)
    {
        discounts = "AAA";
    }
    else if (document.getElementById("seniorDiscount").checked)
    {
        discounts = "Senior";
    }
    else if (document.getElementById("militaryDiscount").checked)
    {
        discounts = "Military";
    }
    
    let roomCharge = getRoomCost(roomType, 0, numOfNights)
    //if breakfast inluded apply price 

    let breakfastCost = 0;
    if (breakfastIncluded == true) {
        breakfastCost = getBreakfastCost(numOfAdults, numOfKids, numOfNights, discounts)
    }


    //Discounts if any

    let discountTotal = getDiscount(roomCharge, discounts);
    if (discounts == "Senior")
    {
        breakfastCost = 0;
    }

    const firstCharge = document.getElementById("roomTotal");
    let subtotal = roomCharge + breakfastCost
    firstCharge.value = subtotal.toFixed(2);

    const discountsOutput = document.getElementById("discountTotal");
    discountsOutput.value = discountTotal.toFixed(2);    
    
    let total = subtotal - discountTotal
    //Tax 

    let tax = total * 0.12
    const taxes = document.getElementById("taxTotal");
    taxes.value = tax.toFixed(2);

    //Total 

    total = subtotal + tax
    const totalprice = document.getElementById("finalTotal");
    totalprice.value = total.toFixed(2);

}
window.onload = function () {

    const btn= document.getElementById("totalPrice");
    btn.onclick = getEstimate;

}









