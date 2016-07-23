walk(document.body);

pikaParty();

function walk(node) {
    // We stole this from Ian fox <3

    // Ian stole this function from here:
    // http://is.gd/mwZp7E

    var child, next;

    switch (node.nodeType) {
    case 1: // Element
    case 9: // Document
    case 11: // Document fragment
        child = node.firstChild;
        while (child) {
            next = child.nextSibling;
            walk(child);
            child = next;
        }
        break;

    case 3: // Text node
        if (node.parentElement.tagName.toLowerCase() != "script") {
            handleText(node);
        }
        break;
    }
}

function handleText(textNode) {
    var v = textNode.nodeValue;
    var arr = v.split(" ");
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        var len = arr[i].length;
        if (!len)
            break;
        if (len <= 2)
            newArr.push("Pi");
        else if (len == 3)
            newArr.push("Chu");
        else if (len <= 5)
            newArr.push("Pika");
        else if (len <= 7)
            newArr.push("Pikachu");
        else {
            var longasspikachu = "Pikachuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu";
            newArr.push(longasspikachu.slice(0, len)); // im just gonna hope thats enough u's
        }
    }
    var retVal = newArr.join(" ");

    var msg = new SpeechSynthesisUtterance(retVal);
    var voices = speechSynthesis.getVoices();
    for (var j = 0; j < voices.length; j++) {
        if (voices[j].lang === "ko-KR") {
            msg.voice = voices[j];
            msg.voiceURI = voices[j].voiceURI;
        }
    }
    window.speechSynthesis.speak(msg);


    textNode.nodeValue = retVal;
}

function pikaParty() {

    while (true) {
        var delay = Math.floor((Math.random() * 5) + 1) * 1000;
        setTimeout(partay(), delay)
    }

    function partay() {
        var pikaPop = document.createElement('img');
        pikaPop.src = chrome.extension.getURL('PikaPop1.png');

        Math.floor((Math.random() * 100) + 1);


        


        function PikaPop1(img) {
            img.setAttribute('id', 'pikalatorPopPeek1');
            document.body.appendChild(pikaPop);
            setTimeout(function(){img.parentNode.removeChild(img);}, 4500)
        }
    }






}