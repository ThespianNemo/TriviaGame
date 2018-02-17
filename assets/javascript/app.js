var correctAnswer = 0;
var incorrectAnswer = 0;
var unAnswered = 0;
var correct;
var qcounter = 0;

//  Set the timer to 21 seconds
var timer = 21;

//  Variable that will hold the interval ID when executing
//  the "run" function
var intervalId;

//Question and answer array
var questionList = [
     {
        question: "Which war movie won the Academy Award for Best Picture in 2009?",
        answers: [
            "Inglourious Basterds",
            "Defiance",
            "The Hurt Locker",
            "The Messenger",
            "The Hurt Locker"]
        },
     
       {
         question: "In what year was the original 'Jurassic Park' film released?",
         answers: [
             "2006",
             "1993",
             "1967",
             "1999",
             "1993"]
         },
     
      {
         question: "What are the four houses at Hogwarts School of Witchcraft and Wizardry?",
         answers: [
             "Gryffindor, Ravenclaw, Huffinpuff, Slytherin",
             "Gryffindor, Ravenclaw, Hufflepuff, Slytheron",
             "Gryffindel, Ravenclaw, Hufflepuff, Slytherin",
             "Gryffindor, Ravenclaw, Hufflepuff, Slytherin",
             "Gryffindor, Ravenclaw, Hufflepuff, Slytherin"]   
         },
     
       {
         question: "In the movie Mean Girls, where is Caty originally from?",
         answers: [
             "Africa",
             "Europe",
             "Asia",
             "Australia",
             "Africa"]   
         },
     
       {
         question: "In what movie, if you watch a certain video, will you die in 7 days?",
         answers: [
             "The Grudge",
             "The Ring",
             "The Babadook",
             "The Calendar",
             "The Ring"]
         },   
         
       {    
         question: "Bruce Willis played a convict turned time traveler in what 1995 movie?",
         answers: [
              "Time Bandits",
             "12 Monkeys",
             "Total Recall",
             "The Fifth Element",
             "12 Monkeys"]
         },
         
       {
         question: "What popular movie musical, directed by John Hutson, was released in 1982?",
         answers: [
             "Victor/Victoria",
             "Grease 2",
             "Annie",
             "Pink Floyd The Wall",
             "Annie"]
         },   
     
       {
         question: "In which year were the Academy Awards, or 'Oscars', first presented?",
         answers: [
             "1929",
             "1939",
             "1949",
             "1959",
             "1929"]
         },   
           
       {
         question: "What is the name of the kingdom where the 2013 animated movie Frozen is set?",
         answers: [
             "Avalon",
             "Arendelle",
             "Alluria",
             "Aurelia",
             "Arendelle"]
         },   
          
       {
         question: "Which Tom Hanks movie won the Academy Award for Best Picture in 1994?",
         answers: [
             "Forrest Gump",
             "Philadelphia",
             "A League of Their Own",
             "Big",
             "Forrest Gump"]
    }
];

    $("#start-over").hide();

//  The run function sets an interval that runs the decrement function once a second

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

//  Decrease timer by one.
    timer--;

//  Show the time remaining in the #countdown tag.
    $("#countdown").html("<h2>" + "Time Remaining: " + timer + "</h2>");

    //  Once the timer hits zero...
    if (timer === 0) {

        //  ...run the stop function.
        stop();
    }
}

function stop() {

//  Clears the intervalId
    clearInterval(intervalId);

//  Let the user know time's up
    if (timer === 0) {
    $("#countdown").html("<h2>" + "TIME'S UP!" + "</h2>");

    //Add 1 to unanswered questions counter
    unAnswered++;
    };

    

    //show next question and possible answers

    //  Set The timer back to 21 seconds
    timer = 21;

    if (qcounter < 9) {
        //--------------------------------------------------------------------------------------
        //Display correct answer
        $("#countdown").html("<h2>" + "The correct answer is " + correct + "</h2>");
        questionAnswer(qcounter);
    }
    
    //restart counter

    //run();
}


$("#start").on("click", function () {

    $("#start").hide();
    questionAnswer(qcounter);
});

$("#start-over").on("click", function () {
    $("#start-over").hide();
    correctAnswer = 0;
    incorrectAnswer = 0;
    unAnswered = 0;
    correct;
    qcounter = 0;

    $("#right").empty();
    $("#wrong").empty();
    $("#not-known").empty();

    questionAnswer(qcounter);
})

    $(".answer-value").on("click", function () {
        var x = ($(this).attr("attr"));
        
        if (x != screenCorrectAnswer) {
            incorrectAnswer++;
            $("#countdown").html("<h2>" + "NOPE! The correct answer is " + screenCorrectAnswer + "</h2>");
        } else {
            correctAnswer++;
            $("#countdown").html("<h2>" + "CORRECT! EXCELLENT!" + "</h2>");
        }

        stop();
        qcounter++;

        if (qcounter < 10) {
        questionAnswer(qcounter);
        } else {
            wrapItUp();
        }
    });

    function questionAnswer(qcounter) {
    
        correct = questionList[qcounter].answers[4];
        $("#question").text(questionList[qcounter].question);
        $("#answer1").text(questionList[qcounter].answers[0]);
        $("#answer2").text(questionList[qcounter].answers[1]);
        $("#answer3").text(questionList[qcounter].answers[2]);
        $("#answer4").text(questionList[qcounter].answers[3]);

    //  Execute the run function.
        run();
    
    //correct = questionList[qcounter].answers[4];
    
        screenCorrectAnswer = 0;

        if (correct === questionList[qcounter].answers[0]) {
            screenCorrectAnswer = 1;
        } else if (correct === questionList[qcounter].answers[1]) {
            screenCorrectAnswer = 2;
        } else if (correct === questionList[qcounter].answers[2]) {
            screenCorrectAnswer = 3;
        } else {
            screenCorrectAnswer = 4;
        }
    }

    function wrapItUp() {
        $("#right").html("<strong>" + "<p>" + "Total correct answers = " + correctAnswer + "</p>") + "<strong>";
        $("#wrong").html("<strong>" + "<p>" + "Total incorrect answers = " + incorrectAnswer + "</p>" + "<strong>");
        $("#not-known").html("<strong>" + "<p>" + "Total unanswered questions = " + unAnswered + "</p>" + "<strong>");
    
        $("#start-over").show();
    };  