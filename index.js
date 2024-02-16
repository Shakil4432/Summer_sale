let priceUpdate = 0;
let itemsCount = 1;
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        const cardInnerText = card.querySelector("h2").innerText;
        const addedItems = document.getElementById("added_items");
        const createElement = document.createElement("p");
    
        createElement.innerText = itemsCount + '. '+cardInnerText;
        addedItems.appendChild(createElement);

        const price = card.querySelector("p").innerText.split(' ')[1];
        const makeInt = parseInt(price);
        priceUpdate += makeInt;

        const totalPrice = document.querySelector(".total_price #total_price span");
        totalPrice.innerText = priceUpdate;

        let discount =parseInt (totalPrice.innerText) * (20/100);

        const discountPrice =document.querySelector("#discount span");
        discountPrice.innerText = discount.toFixed(2);

        const finalPrice = parseFloat(totalPrice.innerText) - discount;

        const finalPriceSpan = document.querySelector("#final_price span");
        finalPriceSpan.innerText = finalPrice.toFixed(2);
        
        
    })
})