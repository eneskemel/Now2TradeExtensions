
const button = document.createElement('button');
button.innerText = "Takipcileri tara";
document.querySelector('.segmented.segmented-strong.triger').appendChild(button);
button.addEventListener('click', () => {
    islemSayfasinaGec();
    bakiyeSec();
    farkCek();
})
async function farkCek() {
    a = document.querySelectorAll('.farq2')[0].childNodes[0].data;
    var sonuc1 = a.split(" ");
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(sonuc1[0] + "  " + time);
    if (sonuc1[0] > 460) {
        islemBaslat();
    }
    else {
        await sleep(350);
        farkCek();
    }
}
async function bakiyeSec() {
    document.querySelector("#exchanges > div:nth-child(1) > div > ul > li.item-content.item-input > div:nth-child(3) > button").click();
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function islemBaslat() {
    document.querySelector("#exchanges > div:nth-child(2) > div.row.PRICELESS > table > tbody > tr:nth-child(7) > td.startButtons > button").click();
    await sleep(10000);
    sayfaYenile();
    await sleep(1000);
    console.log("logggg");
    girisYap();
}

async function girisYap() {
    await sleep(1000);
    document.querySelector("#app > div.view.view-main.view-init.safe-areas > div.page.page-signin.page-current > div.page-content > div.block.bottom-button-container.HIDEONINPUTFOCUS > div > div > button").click();
    await sleep(2000);
    document.querySelector("#app > div.view.view-main.view-init.safe-areas > div.page.page-homepage.light.page-current > div.toolbar.tabbar.toolbar-bottom.o-visible.o-hidden.BOTTOM_MENUS > div > a.BOTTOMTABS.tab-link.exCh > i").click();
    await sleep(2000);
    bakiyeSec();
    farkCek();
}

document.forms[0].onsubmit = function (e) {
    sayfaYenile();
}

async function sayfaYenile() {
    chrome.tabs.executeScript(null, { code: "window.location.href = '" + "/arbitrage/en/" + "';" });
}

async function islemSayfasinaGec() {
    document.querySelector("#app > div.view.view-main.view-init.safe-areas > div.page.page-homepage.light.page-current > div.toolbar.tabbar.toolbar-bottom.o-visible.o-hidden.BOTTOM_MENUS > div > a.BOTTOMTABS.tab-link.exCh > i").click();
    await sleep("1000");
}
