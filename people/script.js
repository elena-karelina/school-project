const politkovskaya=document.getElementById('politkovskaya');
const litvinenko=document.getElementById('litvinenko');
const nemtsov=document.getElementById('nemtsov');
const estemirova=document.getElementById('estemirova');

const politkovskayaAudio = new Audio('../content/audio/политковская.mp3');
const litvinenkoAudio = new Audio('../content/audio/литвиненко.mp3');
const nemtsovAudio = new Audio('../content/audio/немцов1.mp3');
const nemtsovAudio1 = new Audio('../content/audio/немцов.mp3');
const estemirovaAudio = new Audio('../content/audio/эстемирова.mp3');

let lastClickTime = 0;

function trackDoubleClick(element, singleClickCallback, doubleClickCallback, interval = 500) {
    let clickCount = 0;
    element.addEventListener("click", function() {
        clickCount++;
        if (clickCount === 1) {
            setTimeout(function() {
                if (clickCount === 1) {
                    singleClickCallback();
                } else {
                    doubleClickCallback();
                }
                clickCount = 0;
            }, interval);
        }
    });
}

trackDoubleClick(nemtsov, function() {
    if (nemtsovAudio.paused) {
        nemtsovAudio1.pause();
        nemtsovAudio.play();
    } else {
        nemtsovAudio.pause();
    }
}, function() {
    if (nemtsovAudio1.paused) {
        nemtsovAudio.pause();
        nemtsovAudio1.play();
    } else {
        nemtsovAudio1.pause();
    }
});

politkovskaya.onclick=function(){
    if (politkovskayaAudio.paused) {
        politkovskayaAudio.play();
    } else {
        politkovskayaAudio.pause();
    }
}
estemirova.onclick=function(){
    if (estemirovaAudio.paused) {
        estemirovaAudio.play();
    } else {
        estemirovaAudio.pause();
    }
}

litvinenko.onclick=function(){
    if (litvinenkoAudio.paused) {
        litvinenkoAudio.play();
    } else {
        litvinenkoAudio.pause();
    }
}