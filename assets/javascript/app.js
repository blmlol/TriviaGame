//For the trivia questions, we will want to use an array of objects that have a question and ABCD answers
// This way we can loop through the array and display the question and all of the answers at once
//The theme of questions will come from history
var qn = 0;
var wrong = 0;
var right = 0;
var qanda = [
    {
        question: "Which US president served the shortest term in office?",
        A: "William Henry Harrison",
        B: "James A. Garfield",
        C: "Zachary Taylor",
        D: "Gerald Ford",
        answer: "A"
    },
    {
        question: "In what year was the Louisiana Purchase made?",
        A: "1784",
        B: "1909",
        C: "1803",
        D: "1850",
        answer: "C"
    },
    {
        question: "What treaty ended the French and Indian War (1754-1763)?",
        A: "Treaty of Versailles",
        B: "Franco-Indian Treaty",
        C: "Treaty of Alliance",
        D: "Treaty of Paris",
        answer: "D"
    },
    {
        question: "The undeclared war between the Unisted States and France fought on sea during John Adams's presidency was called the:",
        A: "Franco-American Naval War",
        B: "Atlantic Front War",
        C: "Quasi War",
        D: "American Anti-Alliance War",
        answer: "C"
    },
    {
        question: "The formal abolishment of slavery was provided for with this important official document:",
        A: "13th Amendment",
        B: "Emancipation Proclamation",
        C: "Freedom For Slaves Act",
        D: "Civil War Treaty",
        answer: "A"
    },
    {
        question: "In which court case was the desecration of the American flag prohibited in at least 48 of the 50 states?",
        A: "Roe v. Wade",
        B: "Texas v. Johnson",
        C: "Citizens United v. Federal Election Commission",
        D: "Doe v. The Patriots",
        answer: "B"
    },
    {
        question: "The first American colony was settled in this city and state:",
        A: "Jamestown, Virginia",
        B: "Plymouth, Massachusetts",
        C: "Yorktown, Virginia",
        D: "Chesapeake, Virgina",
        answer: "A"
    },
    {
        question: "In which battle was 'the shot heard round the world' fired?",
        A: "Battle of the Highlands",
        B: "Battle of Concord",
        C: "Battle of Virginia Hills",
        D: "The American Revolutionary Battle",
        answer: "B"
    },
    {
        question: "In what year did the Balitmore & Ohio Railroad become America's first charter company",
        A: "1851",
        B: "1816",
        C: "1803",
        D: "1827",
        answer: "D"
    },
    {
        question: "The international alliance NATO (North Atlantic Treaty Organization) currently consists of how many allies including the United States?",
        A: "50",
        B: "10",
        C: "29",
        D: "35"
    },
]

// Next we will want a function that displays the the question and answers onto our page
function displayToPage(number) {
    resetTime();
    qn = number;
    $('#question').html("Question " + (number + 1) + ": " + qanda[number].question)
    $('#a').html("<button id='answer' class='A'>" + "A" + "</button>" + " " + qanda[number].A)
    $('#b').html("<button id='answer' class='B'>" + "B" + "</button>" + " " + qanda[number].B)
    $('#c').html("<button id='answer' class='C'>" + "C" + "</button>" + " " + qanda[number].C)
    $('#d').html("<button id='answer' class='D'>" + "D" + "</button>" + " " + qanda[number].D)
    //We will also add our displayed time here
    dispTime();



}
// Make sure the document is ready, then we can click away!
$(document).ready(function () {
    //We will have an event listener that listens for clicks on the buttons and then checks the answer based on the button clicked 
    $(".buttons").on("click", '#answer', function (event) {
        event.preventDefault(); //make sure the page doesn't reload when a button is pushed
        //Store the actual answer and the given answer as variables
        var anslet = qanda[qn].answer;
        var ans = $(this).attr('class');
        // console.log(ans);
        // console.log(anslet);
        if (ans === anslet) {//If the variables are equal, then they answered correctly
            alert("You got it right!");
            qn++; //We will only use this if we're wrapping the whole trivia into a loop
            right++;
            clearInterval(intervalId);//We will be resetting the time and interval anyway
            // console.log(qn);
        }
        else if (ans !== anslet) {//If not, then they answered incorrectly
            // console.log("clicked");

            alert("You got it wrong! The answer was: " + qanda[qn][anslet]);
            qn++; //We will only use this if we're wrapping the whole trivia into a loop
            wrong++;
            clearInterval(intervalId);
            // console.log(qn);
            //
        }

    })
})
// All code below here is dealing with the timer and the timing aspect of displaying the questions
var time = 60;
function dispTime() {

    setTimeout(oneMin, 60000);
    intervalId = setInterval(count, 1000);

}


displayToPage(0);
function count() {
    time--;
    var converted = timeConverter(time);
    // console.log(converted);
    $("#display").text(converted);
}
function resetTime() {
    time = 60
    $("#display").text("01:00");
}

function oneMin() {
    alert("You ran out of time!");
    clearInterval(intervalId);


}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}
//We will need a timeOut function to space in between the questions
setTimeout(fiveSeconds, 0);

