walk(document.body);

pikaParty();

var music = new Audio(chrome.extension.getURL("theme.mp3"));
music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
music.play();

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
            var longasspikachu = "PikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachuPikachu";
            newArr.push(longasspikachu.slice(0, len)); // im just gonna hope thats enough
        }
    }
    var text = newArr.join(" ");

    var msg = new SpeechSynthesisUtterance(text);
    msg.lang = "ko-KR";
    window.speechSynthesis.speak(msg);

    textNode.nodeValue = text;
}

function pikaParty() {
    var pikaPop = document.createElement('img');
    pikaPop.src = chrome.extension.getURL('PikaPop1.png');
    pikaPop.setAttribute('id', 'pikalatorPop');



    document.body.appendChild(pikaPop);
}
