/*
for input: https://github.com/hyperskill/sync-input#usage
in terminal type in npm install https://github.com/hyperskill/sync-input/archive/v1.tar.gz
 */

const input = require('sync-input');



let tickets = 0;



function buyGift() {
    if (gifts.size === 0) {
        console.log(`Wow! There are no gifts to buy.
            `);
    }
    let giftNumber = parseInt(input('Enter the number of the gift you want to get: '));
    if (isNaN(giftNumber)) {
        console.log('Please enter a valid number!');
        return;
    }
    if (!gifts.has(giftNumber)) {
        console.log('There is no gift with that number!');
        return;
    }
    if (tickets - gifts.get(giftNumber).cost < 0) {
        console.log(`You don't have enough tickets to buy this gift.
Total tickets: ${tickets}`);
        return;
    }
    tickets -= gifts.get(giftNumber).cost;
    gifts.delete(giftNumber);
}

function addTickets() {
    let addTickets = input('Enter the ticket amount: ');
    if (isNaN(addTickets) || addTickets < 0 || addTickets > 1000) {
        console.log('Please enter a valid number between 0 and 1000');
        return;
    }
    tickets += parseInt(addTickets);
    console.log(`Total tickets: ${tickets}`);
}

function showGifts() {
    console.log(`Here's the list of gifts:
    `);

    if (gifts.size === 0) {
        console.log(`Wow! There are no gifts to buy.
        `);
        return;
    }

    gifts.forEach(gift => console.log(`${gift.number}- ${gift.name}, Cost: ${gift.cost} tickets`));
}


class toy {
    constructor(number, name, cost) {
        this.number = number;
        this.name = name;
        this.cost = cost;
    }
}

let gifts = new Map();
gifts.set(1, new toy(1, 'Teddy Bear', 10));
gifts.set(2, new toy(2,'Big Red Ball', 5));
gifts.set(3, new toy(3,'Huge Bear', 50));
gifts.set(4, new toy(4,'Candy', 8));
gifts.set(5, new toy(5,'Stuffed Tiger', 15));
gifts.set(6, new toy(6,'Stuffed Dragon', 30));
gifts.set(7, new toy(7,'Skateboard', 100));
gifts.set(8, new toy(8,'Toy Car', 25));
gifts.set(9, new toy(9,'Basketball', 20));
gifts.set(10, new toy(10,'Scary Mask', 75));

console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`);

showGifts();


console.log();
let on = true;
while (on) {
    console.log(`What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop`);
    let option = parseInt(input());
    switch (option) {
        case 1:
            buyGift();
            break;
        case 2:
            addTickets();
            break;
        case 3:
            console.log(`Total tickets: ${tickets}`);
            break;
        case 4:
            showGifts();
            break;
        case 5:
            console.log('Have a nice day!');
            on = false;
            break;
        default:
            console.log('Please enter a valid number!');
    }
    console.log();
}