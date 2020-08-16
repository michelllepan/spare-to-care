//the user's accumulated donations
let accumulated = 0;

function main() {
    chrome.storage.local.get(["accumulated"], result => {
        accumulated = result.accumulated || 0;

        // console.log('TEST FOR ACCUMULATED VALUE: ');
    })
    
}

//initiate accumulated in chrome local storage
main();

//check if the person is on the checkout page AMAZON
let element_ama = document.getElementsByClassName("a-normal a-align-bottom a-spacing-none a-size-small")
//check if the person is on the checkout page TARGET
let element_tar = document.getElementsByClassName("Row-uds8za-0 OrderSummary__StyledRow-sc-1rgy0o0-0 hICeKz h-padding-a-tight")
//check if the person is on the checkout page EBAY
let element_ebay = document.getElementsByClassName("summary-item")
//check if the person is on the checkout page ETSY
let element_etsy = document.getElementsByClassName('multi-shop-cart-payment payment-container-shadow wt-rounded-03 wt-p-md-3')

if (element_ama.length !== 0){
    //add the button to make a donation and update the accumulated amount
    //get the order total (AMAZON ONLY)
    let total = document.getElementsByClassName("a-color-price a-size-medium a-text-right grand-total-price aok-nowrap a-text-bold a-nowrap")[0].textContent
    addButton(element_ama, total)
} else if (element_tar.length !== 0){
    //get the order total (TARGET ONLY)
    let total = document.getElementsByClassName("h-text-lg h-text-bold")[1].textContent
    addButton(element_tar, total)
} else if (element_ebay.length !== 0){
    //get the order total (EBAY ONLY)
    let total = document.getElementsByClassName("text-display")[1].textContent
    addButton(element_ebay, total)
} else if (element_etsy.length !== 0){
    //get the order total (ETSY ONLY)
    let total = document.getElementsByClassName("wt-p-xs-0 wt-b-xs-none wt-text-right-xs wt-text-body-01 wt-text-black wt-no-wrap")[0].textContent
    addButton(element_etsy, total)
}

let buttonAgain = document.getElementById("stc-button");
buttonAgain.onclick=clickHandle;

function clickHandle(){
    let amount = parseFloat(buttonAgain.innerText.split("$")[2])
    buttonAgain.style.cssText = "background-color:rgb(94, 158, 72);font-size:11px;border:0px;color:white;float:right;border-radius: 5px;z-index: 999; margin-top: 5px;"
    updateTotalAccum(amount)
    return false;
}

function addButton(element, total){
    //let element0 = document.getElementsByClassName("a-normal a-align-bottom a-spacing-none a-size-small")
    let button = document.createElement('button')
    button.type = "button"
    button.id = "stc-button"
    button.onload = "onLoad()"
    let info = calculateRounding(total)
    
    const string = "round up to $" + info[0] + " and donate $" + info[1]
    const buttonText = document.createTextNode(string);
    button.appendChild(buttonText);
    
    button.style.cssText = "background-color:rgb(210, 88, 88);font-size:11px;border:0px;color:white;float:right;border-radius: 5px;z-index: 999; margin-top: 5px;"
    
    element[element.length-1].insertAdjacentHTML('beforeend', button.outerHTML);


}

/**
 * Calculates the donation amount and rounding
 * @param {String} total the purchase total
 * @return {Array} the donation amount and rounding
 * SAMPLE: total = "$26.11" return = [30, 3.89]
 */
function calculateRounding(total){
    //parse the float
    let amount = parseFloat(total.replace('$', ''))

    let rounding
    let donation
    //determine number to round to
    if (amount%10 >= 5){
        //round to the next greatest tens place
        let tens = Math.floor(amount / 10) //determine tens place
        rounding = (tens + 1) * 10
        donation = (rounding - amount).toFixed(2)
    } else {
        //round ones place to five
        let tens = Math.floor(amount / 10) //determine tens place
        rounding = (tens*10) + 5
        donation = (rounding - amount).toFixed(2)
    }

    return [rounding, donation]
}


/**
 * Called by front end to update cache
 * @param {Number} amount amount to update by
 */
function updateTotalAccum(amount){
    if (amount == 0){
        //reset the accumulated donations
        chrome.storage.local.set({'accumulated': 0}, function(){
            accumulated = 0
            //console.log("TEST2: " + accumulated)
        });
    } else {
        //add the given amount to the accumulated donations
        chrome.storage.local.set({'accumulated': accumulated + amount}, function(){
            accumulated = (accumulated + amount).toFixed(2)
            // chrome.storage.local.get('accumulated', function(fetchData){
            //     console.log("data: " + fetchData.accumulated)});
            console.log("TEST1: " + accumulated)
        })
    }
}