
  // *** begin Javascript *** 
// begin program with variable declarations 
// questions and answers for two rounds
var trivia = [
  [{question: "Who was the lead singer of Led Zeppelin?",
    answers: ["Eric Clapton", "Jimmy Page", "Roger Daltry", "Robert Plant"],
    rightAnswer: "Robert Plant",
    clip: "assets/images/RB_resized_200_200.gif"},
  
   {question: "Who released the album 'Dark side of the Moon?'",
    answers: ["The Yardbirds", "The Rolling Stones", "Pink Floyd", "Black Sabbath"],
    rightAnswer: "Pink Floyd",
    clip: "assets/images/Pink_Floyd_resized_200_200.gif"},
      
   {question: 'What song includes the line "teenage wasteland?"', 
    answers: ["They're all wasted", "Smells like teen spirit", 
                "Wasted days and wasted nights","Baba O'Riley"],
    rightAnswer: "Baba O'Riley",
    clip: "assets/images/The_Who_resized_200_200.gif"},
    
   {question: "Which person is NOT a memeber of Pearl Jam?",
    answers:  ["Mike McCready","Eddie Vedder","Chris Cornell","Stone Gossard"], 
    rightAnswer: "Chris Cornell",
    clip: "assets/images/Pearl_Jam_resized_200_200.gif"}, 
      
   {question:  "Which of these was NOT a Beatles song?",
    answers:   ["Ticket to Ride","Hello Goodbye","Sargent Peppers","Lady Madonna"],
    rightAnswer:"Sargent Peppers",
    clip: "assets/images/Beatles_resized_200_200.gif"},
     
   {question:  "Which album has more copies sold?",
    answers:   ['"Their Greatest Hits" by the Eagles','"Thriller" by Michael Jackson', 
                 '"Zeppelin IV" by Led Zeppelin','"The Wall" by Pink Floyd'],
    rightAnswer:'"Their Greatest Hits" by the Eagles',
    clip: "assets/images/Eagles_resized_200_200.gif"},
    
   {question:  "Who was NOT a member of the Jackson 5?",
    answers:   ["Michael Jackson","Jackie Jackson","Jauan Jackson", "Tito Jackson"],
    rightAnswer:"Jauan Jackson",
    clip: "assets/images/Jackson_Five_resized_200_200.gif"}],
    
  [{question: "Which of the following did Mario creator Shigeru Miyamoto NOT design?",
    answers: ["Donkey Kong","Kid Icarus","Excitebike","Legend of Zelda"],
    rightAnswer: "Kid Icarus",
    clip: "assets/images/Kid_Icarus_200_200.gif"},
  
   {question: "What is the best-selling Nintendo handheld of all time?'",
    answers: ["Nintendo Game Boy","Nintendo DS","Nintnedo Game Boy Advance","Nintendo 3DS"],
    rightAnswer: "Nintendo DS",
    clip: "assets/images/Nintendo_DS_200_200.gif"},
      
   {question: 'What is the first Nintendo game to feature Mario in it?"', 
    answers: ["Mario Bros.","Tennis","Donkey Kong","Wrecking Crew"],
    rightAnswer: "Donkey Kong",
    clip: "assets/images/Donkey_Kong_200_200.gif"},
    
   {question: "What was Mario's original name?", 
    answers:  ["Big Red","Jumpman","Luigi","Squatt' Sam"],
    rightAnswer: "Jumpman",
    clip: "assets/images/Jumpman_200_200.gif"}, 
      
   {question:  'What was the first Nintendo game to have a "save game" feature?',
    answers:   ["Dragon Warrior","Final Fantasy","Metroid","Legend of Zelda"],
    rightAnswer:"Legend of Zelda",
    clip: "assets/images/Zelda_200_200.gif"},
      
   {question:  "Which Video Game Console has the most units sold All Time",
    answers:   ["Xbox 360","Nintendo Game Boy","PlayStation 2","Nintendo DS"],
    rightAnswer: "PlayStation 2",
    clip: "assets/images/PS2_200_200.gif"},
    
   {question:  "What is the best selling (by $$$) video game of All Time?",
    answers:   ["Wii Sports","Grand Theft Auto V","Tetris","Minecraft"],
    rightAnswer:"Minecraft",
    clip: "assets/images/Minecraft_200_200.gif"}]
];
var started = true;
var intervalId;
var setDelayRestart;
var totalCorrect = 0;
var totalIncorrect = 0;
var totalUnanswered = 0;
var correctGuess = 0;
var incorrectGuess = 0;
var noGuess = 0;
var timeLimit = 11;
var playCount = 0;
var questionCount = 0;
  
  // ***** Begin program **********************************
  // Start with hiding all fields except h1 and start button
  // On click, hide start button & display features of game  
  $("#playAgain-btn").hide();
  //Wrap in .click event function to start btn
  $("#start-btn").click(function(){
     // hide start btn after click
     // display timer, question, answer divs
    $("#start-btn").hide();
    $("#timer").css("visibility", "visible");
    $("#question").css("visibility","visible");
    $("#answer-block").css("visibility","visible");

    // triviaGame function
    // start timers, then wait for clicks
    triviaGame();

      // code for specific button (answer) clicked on the dom
    $("#choice1").on("click", function() {
      var temp = ($("h3").data("pick-data", trivia[playCount][questionCount].answers[0])); //temp holds choice displayed
      var pickValue = ($(this).data("pick-data"));  // pickValue is the data value of choice   
        // check if pick matches .answer in array
      if (pickValue === trivia[playCount][questionCount].rightAnswer) { // check if pickValue = "right answer"      
        correctGuess++;   
        $("#timer").html("<h2>"+"Time remaining: "+timeLimit+" Seconds"+"<h2>");
        $("#timer").append("<h2>"+"You got it. Nice job!"+"<h2>");          
        stop(); // go to stop function
        if (questionCount < trivia[playCount].length) {
          clearInterval(intervalId);
          setDelayRestart = setTimeout(displayPage, 5000);
        }
      }
        // if not correct pick, increment incorrectGuess and display msg
      else {
        incorrectGuess++;
        $("#timer").html("<h2>"+"Time remaining: "+timeLimit+" Seconds"+"<h2>");
        $("#timer").append("<h4>"+"Nope, the correct answer is "+trivia[playCount][questionCount].rightAnswer+"<h4>");         
        stop();
          // check for any questions still left in array, if so displayPage
          // this allows for the last gif to be played before going to final stats 
        if (questionCount < trivia[playCount].length) {
          clearInterval(intervalId);
          setDelayRestart = setTimeout(displayPage, 5000);
        }
      } 
    });  // Close 'choice 1' block
  
    $("#choice2").click(function(){
      var temp = ($("h3").data("pick-data", trivia[playCount][questionCount].answers[1]));  // var temp holds the choice displayed
      var pickValue = ($(this).data("pick-data"));   // pickValue is the data value of choice
      
      if (pickValue == trivia[playCount][questionCount].rightAnswer) { // check if pickValue = "right answer"
        $("#timer").html("<h2>"+"Time remaining: "+timeLimit+" Seconds"+"<h2>");
        $("#timer").append("<h2>"+"You got it. Nice job!"+"<h2>");   
        correctGuess++;
        stop();  // go to stop function
        if (questionCount < trivia[playCount].length) {
          clearInterval(intervalId);
          setDelayRestart = setTimeout(displayPage, 5000);
        }
      }
      else {
        incorrectGuess++;
        $("#timer").html("<h2>"+"Time remaining: "+timeLimit+" Seconds"+"<h2>");    
        $("#timer").append("<h4>"+"Nope, the correct answer is "+trivia[playCount][questionCount].rightAnswer+"<h4>");     
        stop();
        if (questionCount < trivia[playCount].length) {
          clearInterval(intervalId);
          setDelayRestart = setTimeout(displayPage, 5000);
        }
      }
    });  // Close 'choice 2' block
  
    $("#choice3").click(function(){
      var temp = ($("h3").data("pick-data", trivia[playCount][questionCount].answers[2])); // var temp holds the choice displayed
      var pickValue = ($(this).data("pick-data")); // pickValue is the data value of choice
      
      if (pickValue == trivia[playCount][questionCount].rightAnswer) {
        $("#timer").html("<h2>"+"Time remaining: "+timeLimit+" Seconds"+"<h2>"); 
        $("#timer").append("<h2>"+"You got it. Nice job!"+"<h2>"); 
        correctGuess++;
        stop();  // go to stop funtion
        if (questionCount < trivia[playCount].length) {
          clearInterval(intervalId);
          setDelayRestart = setTimeout(displayPage, 5000);
        }
      }
      else {
        incorrectGuess++;   
        $("#timer").html("<h2>"+"Time remaining: "+timeLimit+" Seconds"+"<h2>");
        $("#timer").append("<h4>"+"Nope, the correct answer is "+trivia[playCount][questionCount].rightAnswer+"<h4>");    
        stop();
        if (questionCount < trivia[playCount].length) {
          clearInterval(intervalId);
          setDelayRestart = setTimeout(displayPage, 5000);
        }
      } 
    });  // Close 'choice 3' block
  
    $("#choice4").click(function(){
      var temp = ($("h3").data("pick-data", trivia[playCount][questionCount].answers[3]));
      var pickValue = ($(this).data("pick-data"));
      
      if (pickValue == trivia[playCount][questionCount].rightAnswer) {
        $("#timer").html("<h2>"+"Time remaining: "+timeLimit+" Seconds"+"<h2>"); 
        $("#timer").append("<h2>"+"You got it. Nice job!"+"<h2>");      
        correctGuess++;
        stop();  // go to stop function
        if (questionCount < trivia[playCount].length) {
          clearInterval(intervalId);
          setDelayRestart = setTimeout(displayPage, 5000);
        }   
      }
      else {
        incorrectGuess++;
        $("#timer").html("<h2>"+"Time remaining: "+timeLimit+" Seconds"+"<h2>");    
        $("#timer").append("<h4>"+"Nope, the correct answer is "+trivia[playCount][questionCount].rightAnswer+"<h4>");
        stop();
        if (questionCount < trivia[playCount].length) {
          clearInterval(intervalId);
          setDelayRestart = setTimeout(displayPage, 5000);
        }
        else {  // makes time for the last video to playout before displaying page
          clearInterval(intervalId);
          setDelayRestart = setTimeout(displayPage,5000);
        }
      }
    });  // Close 'choice 4' block
  
    // ****** BEGIN FUNCTIONS BELOW ******

    function displayPage(){  
        if (questionCount === trivia[playCount].length) { 
          console.log("Showed the last video"); 
          clearInterval(intervalId);  // Stop Timer 
          $("#image-block").empty();  // clear out image div
            //
          $("#answer-block").css("visibility","visible");
          $("#question").css("color","green");
          $("#question").html("<b>All done, here's how you did!<b>");
            // Re-use choice-id's to display final stats; only 3 lines needed 
            // Hide choice4 and empty 1-3
          $("#timer").hide();
          $("#choice4").css("visibility","hidden");
          $("#choice1").empty();
          $("#choice2").empty();
          $("#choice3").empty();
            // Display on dom, final stats of trivia game
          $("#choice1").prepend("Correct Answers: "+correctGuess);
          $("#choice2").html("Incorrect Answers: "+incorrectGuess);
          $("#choice3").html("Unanswered: "+noGuess);
          $("#playAgain-btn").show();
          totalCorrect = totalCorrect + correctGuess;
          totalIncorrect = totalIncorrect + incorrectGuess;
          totalUnanswered = totalUnanswered + noGuess;
         
            // display playAgain? btn after round complete, displayed results above
          $("#playAgain").click(function(){        
            // check play counter to see if reached end of questions in array
          if (playCount == trivia.length-1){
              // end game (put up a sign, no more questions)
            $("#question").html("<b>Sorry that's the end. Thanks for playing!<b>");
            $("#bye").html("BYE BYE");
              // display grand total of results (from two rounds played)
            $("#choice1").html("   Total Correct: "+totalCorrect);
            $("#choice2").html(" Total Incorrect: "+totalIncorrect);
            $("#choice3").html("Total Unanswered: "+totalUnanswered);    
            }
            // else if not the end, increase play counter and goto resetPage for next round
          else {
           playCount ++;
           resetPage() 
          }
          
          });
        }
        else {  
          // set up the first question and choices //
        $("#image-block").empty();
        $("#answer-block").show();
        $("#answer-block").css("visibility","visible");
        document.getElementById("question").innerHTML = trivia[playCount][questionCount].question;
        document.getElementById("choice1").innerHTML = trivia[playCount][questionCount].answers[0];
        document.getElementById("choice2").innerHTML = trivia[playCount][questionCount].answers[1];
        document.getElementById("choice3").innerHTML = trivia[playCount][questionCount].answers[2];
        document.getElementById("choice4").innerHTML = trivia[playCount][questionCount].answers[3];
        }
      } // end displayPage function **************************   
  
    function triviaGame(){  // sets the timer clock 'timeLimit'
      if (started===true) {       
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        displayPage();
      } // end if Loop
    } // end triviaGame function ******************************
  
    function decrement() {
      timeLimit --;
      $("#timer").html("<h2>"+"Time remaining: " + timeLimit + " Seconds"+"<h2>"); 
        if (timeLimit==0) {
          noGuess ++;
          stop();
          $("#timer").html("<h2>"+"Time remaining: 0 Seconds"+"<h2>");    
          $("#timer").append("<h4>"+"Time's up. The answer is "+trivia[playCount][(questionCount-1)].rightAnswer+"<h4>");
       
          if (started === true){
            // displayPage();
            setDelayRestart = setTimeout(displayPage, 5000);
          }
        }       
    }  // end function decrement ******************************
  
    function stop() {
    //  Clears intervalId
    //  pass the name of the interval to the clearInterval function.  
      timeLimit = 11;
      questionCount ++;
      console.log("var questionCount = "+questionCount);
      console.log("trivia length = "+trivia[playCount].length);
  
      if (questionCount === trivia[playCount].length) {  // we've reached the end of the questions
          // Display last video then after Timeout display final results
          // Change question text to "All done ..."   
        started = false;
        console.log("Line 315 started = "+started);
        clearInterval(intervalId);  
        showVideo();
        setDelayRestart = setTimeout(displayPage, 5000);
      } 
      else {
        setDelayRestart = setTimeout(triviaGame, 5000); 
        clearInterval(intervalId);    
        showVideo();
      }   
    } // end function stop **************************
  
    function showVideo() {
      $("#answer-block").css("visibility","hidden");
      $("#image-block").css("visibility", "visible");
      imageDiv = $("<div id='image-block'>");
      image = $("<img>"); 
      image.attr("src", trivia[playCount][questionCount-1].clip);
      image.attr("image-block", trivia[playCount][questionCount-1].clip);
      imageDiv.append(image);
      $("#image-block").prepend(image);
    }  // end showVideo function *********************************
  
    function resetPage(){
      console.log ("Inside resetPage");
        $("#timer").show();
        $("#timer").empty();
        $("#playAgain-btn").hide();
          // $("#choice4").css("visibility","visible");
        $("#question").css("color","red"); 
        $("#question").empty();
          // $("#answer-block").show();
        $("#answer-block").css("visibility","hidden");
        $("#choice4").css("visibility","visible");
        questionCount = 0;
        correctGuess = 0;
        incorrectGuess = 0;
        noGuess = 0;
        timeLimit = 11;
        started = true;
        triviaGame();
    }  // end function resetPage ***************************
  });  // end main 'start' on click function ***************