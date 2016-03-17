console.log('looking for questions');
var elements = document.getElementsByClassName("question_title");
console.log('found ' + elements.length + ' question elements');
for (var i = 0; i < elements.length; i++) {
    console.log('changing question ' + (i+1));
    var element = elements[i];
    var existingHTML = element.innerHTML;
    var questionNumber = existingHTML.substr(0, existingHTML.indexOf('</b>') + 4);
    element.innerHTML = questionNumber + "Should you use Lightning?";
}

var answerElements = document.getElementsByClassName("question_answer");
for (var i = 0; i < answerElements.length; i++) {
    var answerElement = answerElements[i];
    var isLast = answerElement.childNodes[1].innerHTML.indexOf('D') > -1;
    var question = answerElement.childNodes[9];
    question.innerHTML = isLast ? "All of the above" : "Yes";
}
