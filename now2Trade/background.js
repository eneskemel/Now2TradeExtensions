chrome.tabs.onActivated.addListener(tab => {

    chrome.tabs.get(tab.tabId, current_tab_info => {
        if ("https://now2trade.com/arbitrage/en/" == current_tab_info.url) {
            chrome.tabs.executeScript(null, { file: './foreground.js' });
            chrome.tabs.insertCSS(null, { file: './mystyles.css' });
            chrome.tabs.insertCSS(null, { file: './skeleton.css' });
        }
    })
})
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        if (tab.url.indexOf("https://now2trade.com/arbitrage/en/") != -1) {
            islemBaslat();
        }

    }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function islemBaslat() {

    setTimeout(girisYap, 4000);

}
var aaa = "";
function girisYap() {
    chrome.tabs.executeScript(null, {
        code: 'document.querySelector("#app > div.view.view-main.view-init.safe-areas > div.page.page-signin.page-current > div.page-content > div.row.mx-0 > div > form > div.list.no-margin.bg-none > ul > li:nth-child(1) > div > div.item-input-wrap > input").click'
    });
    /*
   chrome.tabs.executeScript(null, {
         code: 'document.querySelector("#app > div.view.view-main.view-init.safe-areas > div.page.page-signin.page-current > div.page-content > div.block.bottom-button-container.HIDEONINPUTFOCUS > div > div > button").click()'
     });
    
   var aaaa = "$('userId').click()";
   chrome.tabs.executeScript(null, {
       code: aaaa
   });
   alert(aaaa);*/
}


// DOM 2 Events
var dispatchMouseEvent = function (target, var_args) {
    var e = document.createEvent("MouseEvents");
    // If you need clientX, clientY, etc., you can call
    // initMouseEvent instead of initEvent
    e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
    target.dispatchEvent(e);
};




















