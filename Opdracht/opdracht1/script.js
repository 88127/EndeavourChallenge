// The output object
var anagrams = {};

function sortWord(word) {
    return word.replace(/\s+/g, "").toLowerCase().split('').sort().join('');
}

function addWord() {
    var wordInput = document.getElementById("wordInput");
    var word = wordInput.value.trim();
    console.log(word);
    if (word !== "") {
        var sorted = sortWord(word);
        console.log(sorted);

        if (anagrams[sorted] != null) {
            anagrams[sorted].push(word);
        } else {
            anagrams[sorted] = [word];
        }

        wordInput.value = "";
        displayAnagrams();
    }
}

function displayAnagrams() {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    for (var sorted in anagrams) {
        var words = anagrams[sorted];
        var out = "";

        for (var n in words) {
            out += words[n] + " ";
        }

        outputDiv.innerHTML +=  out + "" + " <br />";
    }
}
