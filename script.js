document.getElementById("begin").addEventListener("click", clicked);

var score = 0;
var labeladd;
var testnum = new Number(0);

function clicked()
{
    testnum += 1;
    if(testnum==1){
        document.body.innerHTML="";
   
    
        var headingadd = document.createElement("h3");
        headingadd.textContent = "The concept of inheritance";
        document.body.appendChild(headingadd);
   
        //var labeladd = document.createElement("br");
        //document.body.appendChild(labeladd);
        
        var headingadd = document.createElement("h3");
        headingadd.textContent = "allows an object to";
        document.body.appendChild(headingadd);
    
        var page2b1 = document.createElement("button");
        page2b1.setAttribute("id","p2b1");
        page2b1.textContent = "1) Use other classes's variables";
        page2b1.onclick = wrongAnswer;
        document.body.appendChild(page2b1);
    
        var labeladd = document.createElement("br");
        document.body.appendChild(labeladd);
            
        var page2b1 = document.createElement("button");
        page2b1.setAttribute("id","p2b1");
        page2b1.textContent = "2) Use other classes's methods";
        page2b1.onclick = wrongAnswer;
        document.body.appendChild(page2b1);

       var labeladd = document.createElement("br");
       document.body.appendChild(labeladd);

    var page2b1 = document.createElement("button");
    page2b1.setAttribute("id","p2b1");
    page2b1.textContent = "3) Use other classes's methods and variables";
    page2b1.onclick = rightAnswer;
    document.body.appendChild(page2b1);

    
    
    }
    if(testnum === 2){
        
        document.body.innerHTML="";
        
         
        var headingadd = document.createElement("h3");
        headingadd.textContent = "The increment operator___";
        document.body.appendChild(headingadd);
           
    var page2b1 = document.createElement("button");
    page2b1.setAttribute("id","p2b1");
    page2b1.textContent = "1) subtracts one from a variable";
    page2b1.onclick = wrongAnswer;
    document.body.appendChild(page2b1);

    var labeladd = document.createElement("br");
    document.body.appendChild(labeladd);

    var labeladd = document.createElement("button");
    labeladd.textContent = "2) adds one to a variable";
    labeladd.onclick = rightAnswer;
    document.body.appendChild(labeladd);
    
    var labeladd = document.createElement("br");
    document.body.appendChild(labeladd);
    var labeladd = document.createElement("button");
    labeladd.textContent = "3) adds 10 to a variable";
    labeladd.onclick = wrongAnswer;
    document.body.appendChild(labeladd);
    
        
}
    else if(testnum === 3){
        
        
        document.body.innerHTML="";
        //alert(pagenum);
        
        var headingadd = document.createElement("h3");
        headingadd.textContent = "the THIS keyword ___";
        document.body.appendChild(headingadd);
                
        var labeladd = document.createElement("button");
        labeladd.textContent = "1) refers to the current array";
        labeladd.onclick = wrongAnswer;
        document.body.appendChild(labeladd);
        var labeladd = document.createElement("br");
        document.body.appendChild(labeladd);
        var labeladd = document.createElement("button");
        labeladd.textContent = "2) refers to the current method";
        labeladd.onclick = wrongAnswer;
        document.body.appendChild(labeladd);
        var labeladd = document.createElement("br");
        document.body.appendChild(labeladd);
        var labeladd = document.createElement("button");
        labeladd.textContent = "3) refers to the current object";
        labeladd.onclick = rightAnswer;
        document.body.appendChild(labeladd);
            
    }
    else if(testnum === 4){
        
    
        document.body.innerHTML="";
        //alert(pagenum);
        
        var headingadd = document.createElement("h3");
        headingadd.textContent = "The concept of encapsulation means___";
        document.body.appendChild(headingadd);
                
        var labeladd = document.createElement("button");
        labeladd.textContent = "1) a variable or method can only be private";
        labeladd.onclick = wrongAnswer;
        document.body.appendChild(labeladd);
        var labeladd = document.createElement("br");
        document.body.appendChild(labeladd);
        var labeladd = document.createElement("button");
        labeladd.textContent = "2) a variable or method can be public or protected only";
        labeladd.onclick = wrongAnswer;
        document.body.appendChild(labeladd);
        var labeladd = document.createElement("br");
        document.body.appendChild(labeladd);
        var labeladd = document.createElement("button");
        labeladd.textContent = "3) a variable or method can be private, public, or protected";
        labeladd.onclick = rightAnswer;
        document.body.appendChild(labeladd);
            
    }

    
}

function rightAnswer(){
    alert("right answer");
    var labeladd = document.createElement("h6");
        labeladd.textContent = "right answer!";
        //labeladd.onclick = rightAnswer;
        document.body.appendChild(labeladd);
        
    score+=5;scoreStr=parseInt(score);
    //alert(scoreStr);
//    setTime();
    if(testnum==4){quizResults();return;}
    clicked();
}

function wrongAnswer(){
    alert("wrong answer");
    var labeladd = document.createElement("h6");
        labeladd.textContent = "wrong answer";
        //labeladd.onclick = rightAnswer;
        document.body.appendChild(labeladd);
        
    scoreStr=parseInt(score);
    //alert(scoreStr);
   // setTime();
    if(testnum==4){quizResults();return;}
    clicked();
}

var timeEl = document.querySelector(".time");

// Selects element by id
//var mainEl = document.getElementById("main");

var secondsLeft = 3;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);labeladd.textContent=" ";document.body.appendChild(labeladd);
      alert("time expired");  
      // Calls function to create and append image
      clicked();
    }

  }, 1000);
}

function quizResults(){
    document.body.innerHTML="";
    var labeladd = document.createElement("h2");
    labeladd.textContent = "Well Done! ";
    //labeladd.onclick = rightAnswer;
    document.body.appendChild(labeladd);

    var labeladd = document.createElement("h3");
    labeladd.textContent = "Your Score was " + scoreStr;
    document.body.appendChild(labeladd);
       
    var labeladd = document.createElement("h3");
    labeladd.textContent = "Enter your initials:";
    labeladd.setAttribute("for","initials");
    document.body.appendChild(labeladd);
    
    var labeladd = document.createElement("input");
    //labeladd.textContent = "Enter your initials:";
    labeladd.setAttribute("type","text");
    labeladd.setAttribute("id","initials");
    document.body.appendChild(labeladd);
    
    var labeladd = document.createElement("input");
    //labeladd.textContent = "Your Score was " + scoreStr;
    labeladd.setAttribute("type","submit");
    labeladd.onclick = highScore;
    document.body.appendChild(labeladd);
    
    //   document.body.innerHTML="<input type='text' id='initials'>";
           
}

function highScore() {alert("function called");}