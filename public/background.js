// window.addEventListener('load', () => {
//     chrome.tabs.executeScript(null, {
//         file: 'content.js', }, () => {
//             connect()
//         });
//     });


//setTimeout(() => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {request: "addButton"}, function(){
        });
    });
//}, 2000);

// function connect() {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         console.log("HERE")
//         chrome.tabs.sendMessage(tabs[0].id, {request: "addButton"}, function(){
//             console.log("HERE AGAIN")
//         });
//     });
// }