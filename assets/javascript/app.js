

var correctAnswer = 0;
var incorrectAnswer = 0;
var unAnswered = 0;
var correct;

//Initialize screen answer assignments
var one = 1;
var two = 2;
var three = 3;
var four = 4;

//  Set The number counter to 21.
var number = 21;

//  Variable that will hold the interval ID when executing
//  the "run" function
var intervalId;

//Question and answer array
var questionList = {
    film1: {
        question: "Which war movie won the Academy Award for Best Picture in 2009?",
        answers: [
            "Inglourious Basterds",
            "Defiance",
            "The Hurt Locker",
            "The Messenger",
            "The Hurt Locker"]
         },
     
      film2: {
         question: "In what year was the original 'Jurassic Park' film released?",
         answers: [
             "2006",
             "1993",
             "1967",
             "1999",
             "1993"]
         },
     
      film3:{
         question: "What are the four houses at Hogwarts School of Witchcraft and Wizardry?",
         answers: [
             "Gryffindor, Ravenclaw, Huffinpuff, Slytherin",
             "Gryffindor, Ravenclaw, Hufflepuff, Slytheron",
             "Gryffindel, Ravenclaw, Hufflepuff, Slytherin",
             "Gryffindor, Ravenclaw, Hufflepuff, Slytherin",
             "Gryffindor, Ravenclaw, Hufflepuff, Slytherin"]   
         },
     
      film4: {
         question: "In the movie Mean Girls, where is Caty originally from?",
         answers: [
             "Africa",
             "Europe",
             "Asia",
             "Australia",
             "Africa"]   
         },
     
      film5: {
         question: "In what movie, if you watch a certain video, will you die in 7 days?",
         answers: [
             "The Grudge",
             "The Ring",
             "The Babadook",
             "The Calendar",
             "The Ring"]
         },   
         
      film6: {    
         question: "Bruce Willis played a convict turned time traveler in what 1995 movie?",
         answers: [
              "Time Bandits",
             "12 Monkeys",
             "Total Recall",
             "The Fifth Element",
             "12 Monkeys"]
         },
         
      film7: {
         question: "What popular movie musical, directed by John Hutson, was released in 1982?",
         answers: [
             "Victor/Victoria",
             "Grease 2",
             "Annie",
             "Pink Floyd The Wall",
             "Annie"]
         },   
     
      film8: {
         question: "In which year were the Academy Awards, or 'Oscars', first presented?",
         answers: [
             "1929",
             "1939",
             "1949",
             "1959",
             "1929"]
         },   
           
      film9: {
         question: "What is the name of the kingdom where the 2013 animated movie Frozen is set?",
         answers: [
             "Avalon",
             "Arendelle",
             "Alluria",
             "Aurelia",
             "Arendelle"]
         },   
          
      film10: {
         question: "Which Tom Hanks movie won the Academy Award for Best Picture in 1994?",
         answers: [
             "Forrest Gump",
             "Philadelphia",
             "A League of Their Own",
             "Big",
             "Forrest Gump"]
    }
};

    $("#start-over").hide();

//  The run function sets an interval that runs the decrement function once a second

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

//  Decrease number by one.
    number--;

//  Show the number in the #countdown tag.
    $("#countdown").html("<h2>" + "Time Remaining: " + number + "</h2>");

    //  Once number hits zero...
    if (number === 0) {

        //  ...run the stop function.
        stop();
    }
}

//  The stop function
function stop() {

//  Clears the intervalId
    clearInterval(intervalId);

//  Let the user know time's up
    if (number === 0) {
    $("#countdown").html("<h2>" + "TIME'S UP!" + "</h2>");
    };

    //Display correct answer

    //show next question and possible answers

    //  Set The number counter back to 21.
    number = 21;

    //Add 1 to unanswered questions counter
    unAnswered++;
    
    //restart counter

    //run();
}

$("#start").on("click", function () {

    $("#start").hide();

    $("#question").text(questionList.film1.question);
    $("#answer1").text(questionList.film1.answers[0]);
    $("#answer1").show();
    $("#answer2").text(questionList.film1.answers[1]);
    $("#answer2").show();
    $("#answer3").text(questionList.film1.answers[2]);
    $("#answer3").show();
    $("#answer4").text(questionList.film1.answers[3]);
    $("#answer4").show();

    //  Execute the run function.
    run();

    correct = questionList.film1.answers[4];
    
    screenCorrectAnswer = 0;

    if (correct === questionList.film1.answers[0]) {
        screenCorrectAnswer = 1;
        } else if (correct === questionList.film1.answers[1]) {
        screenCorrectAnswer = 2;
        } else if (correct === questionList.film1.answers[2]) {
            screenCorrectAnswer = 3;
        } else {
            screenCorrectAnswer = 4;
        }
});

    $(".answer-value").on("click", function () {
        var x = ($(this).attr("attr"));
        
        if (x != screenCorrectAnswer) {
            incorrectAnswer++;
            $("#countdown").html("<h2>" + "INCORRECT!" + "</h2>");
        } else {
            correctAnswer++;
            $("#countdown").html("<h2>" + "CORRECT!" + "</h2>");
        }

        stop();
    })
