"use strict";

let rooms =
    [{ roomType: "QUEEN", maxCapacity: 5, seasonRate: 250, price: 150 },
    { roomType: "KING", maxCapacity: 2, seasonRate: 250, price: 150 },
    { roomType: "KINGSUITE", maxCapacity: 4, seasonRate: 310, price: 190 },
    { roomType: "TWOBED", maxCapacity: 6, seasonRate: 350, price: 210 },
    ]
let roomPrice = 0;

function canRoomHoldCustomer(selectedRoomType, numOfAdults, numOfKids) {

    //Check if there are any adults if not return false
    if (numOfAdults < 1) {
        return false;
    }
    // Check Room Selected by the User
    let selectedRoom;
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].roomType == selectedRoomType) {
            selectedRoom = rooms[i]
        }
    }
    //Max capacity depending on room selected

    if (numOfAdults + numOfKids > selectedRoom.maxCapacity) {
        return false;
    }
    return true;
}

function getRoomCost(selectedRoomType, checkinDate, numOfNights) {

    let selectedRoom;
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].roomType == selectedRoomType) {
            selectedRoom = rooms[i]
        }
    }
    let priceOfRoomSelected = selectedRoom.price
    let cost = priceOfRoomSelected * numOfNights;
    return cost;
}

function getBreakfastCost(numOfAdults, numOfKids, numOfNights, discountCode) {
    let adultBreakfast;
    let childBreakfast;

    adultBreakfast = numOfAdults * 6.96 * numOfNights;
    childBreakfast = numOfKids * 3.95 * numOfNights;
    let totalBreakfastCost = adultBreakfast + childBreakfast;
    if (discountCode == "Senior") {
        return 0;
    }
    else {
        return totalBreakfastCost;
    }

}

function getDiscount ( roomCostBeforeDiscount,discountCode)
{
   if (discountCode=="AAA")
   {
    return roomCostBeforeDiscount*0.1;
   }

   else if (discountCode=="Senior")
   {
    return roomCostBeforeDiscount*0.1;
   }

   else if (discountCode=="Military")
   {
    return roomCostBeforeDiscount*0.2;
   }
// If any other code don't apply any discount
   else {
   return 0;
   }
}
function  getEstimate()
{
 
   let roomType=document.getElementById("roomType").value
   roomType=parseFloat(roomType);
   let numOfNights=document.getElementById("numOfNights").value
   numOfNights=parseFloat(numOfNights);
   let numOfAdults=document.getElementById("numOfAdults").value
   numOfAdults=parseFloat(numOfAdults);
   let numOfKids=document.getElementById("numOfKids").value
   numOfKids=parseFloat(numOfKids);


   let roomCharge=getRoomCost(roomType,0,numOfNights)
  
   //if breakfast inluded apply price 
   let breakfastIncluded; 
   if(breakfastIncluded==true)
   {
       roomCharge=roomCharge+getBreakfastCost(numOfAdults, numOfKids, numOfNights, discounts)
   }
    // Put the result back in the UI


   }

}


/*

   let discountTotal=getDiscount ( roomCharge,discount);
   poner en input 

  tax function
   pone en el input

  let total=roomCharge-discountTotal
  let tax= total*0.12
  total=roomCharge-discountTotal+tax

  */







