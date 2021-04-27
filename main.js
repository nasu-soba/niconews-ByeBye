'use strict';
window.onload = function(){
    let div = document.querySelectorAll('img')
    for (let n in div) {
        print(div[n])
        // div[n].src = "hide-eye.png";
        div[n].src = chrome.extension.getURL("hide-eye.png")
        div[n].style.visibility = "hidden";
    }
}