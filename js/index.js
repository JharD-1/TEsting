// Display to div element
var submitButton = document.getElementById("submit-button");
var textInput = document.getElementById("text-area");
var output = document.getElementById("display");
var solvedSpan = document.getElementById("solved-span");
var inputError = document.getElementById("input-error");
var copyButton = document.getElementById("copy-button");



submitButton.addEventListener("click", function(event){
    event.preventDefault();
    var data = textInput.value;
    var words = data.split(" ");
    if (words.length < 20) {
        inputError.style.display = "block";
        return;
    }
    inputError.style.display = "none";
    var numberOfWordsToRemove = Math.floor(words.length / 2);
    for(var i = 0; i < numberOfWordsToRemove; i++) {
        var randomIndex = Math.floor(Math.random() * words.length);
        words.splice(randomIndex, 1, "<span class='blank-line'>.....</span>");
    }
    output.style.display = "block";
    output.innerHTML = "<span id='solved-span'>Cloze test</span>" + words.join(" ");
    console.log(words);
});


// Copy Button
// copyButton.addEventListener("click", function() {
//   textInput.select();
//   document.execCommand("copy");
// });
