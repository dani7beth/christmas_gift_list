//Creating an initial gift for array
let gift1 = {item_name: "Teddy Bear", 
             item_price: 6.99, 
             item_for: "Suzie"};

//Create state
let state = {
    headerText: "Gifts",
    gifts: [gift1],
};

// CRUD ACTIONS

//Create
const addGift = () => {
    //add gift
    //log to let us know we made it to the add gift function!
    console.log("add gift here");

    //get user input
    let item_name = prompt("Enter Name of Item: ");
    let price = prompt("What is the price of the item?");
    let gift_for = prompt("Who is this gift for?");
    let newUser = {item_name: item_name,item_price: price, item_for: gift_for};
    state.gifts.push(newUser);
    //call render
    render();
};

//Read
const renderGifts = () => {
    let htmlString = `<div class='list>`;
    //loop over every item
    state.gifts.forEach((gift, index)=> {
        htmlString += `<div class='gift'>
                        <div onclick='updateGift(${index})'>${index+1}) ${gift.item_name} <br/>
                        Price: $${gift.item_price} <br/>
                        Gift For: ${gift.item_for}
                        </div>
                        </div>`;
    });
    htmlString += `</div>`;
    return htmlString;
};

//Update
const updateGift = (index) => {
 
};


//render method
const render = () =>{
    console.log("render called");
    let root = document.getElementById("root");
    let htmlString = `<h1>${state.headerText}</h1>`;
    htmlString += `<button id='add' onclick='addGift()'>add Gift</button>`;

    htmlString += renderGifts();
    root.innerHTML = htmlString;
};


//initial render
render();
console.log("script loaded");