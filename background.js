function updatePrice() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://api.coingecko.com/api/v3/simple/price?ids=lbry-credits&vs_currencies=usd");
    request.send();
    request.onload = () => {
        if (request.status == 200) {
            var response = JSON.parse(request.responseText);
        }
    }

    request.onload = () => {
        if (request.status == 200) {
            var response = JSON.parse(request.responseText);
            chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
            chrome.browserAction.setBadgeText({text: response['lbry-credits'].usd.toString()});
        }
    }
}
updatePrice();
setInterval(updatePrice, 60000);