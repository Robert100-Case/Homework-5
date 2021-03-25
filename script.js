alert("js working");

//event.preventDefault();
var reformatDate = moment(/*"11/3/20", "MM-DD-YY"*/).format("dddd, MMMM Do YYYY, h a");
//alert(reformatDate);
var saveDate = moment(/*"11/3/20", "MM-DD-YY"*/).format("MMMM Do YYYY");
//alert(saveDate);
$("#3a").text(reformatDate);
//alert(reformDate);
//var hourString = moment().format("a");
//alert(hourstring);
//var hourNum = parseInt(hourString)


var dayPlanner= $('#dayPlan9AM');
dayPlanner.addClass('present');
$('button').click(function() {
  var saveID = $( this ).attr("id");
  var string1="dayPlan";var spl2 = string1.concat(saveID);
//alert("this is spl2" + spl2);
dayPlan  =document.getElementById (spl2).value;
        
var saveKey = saveDate.concat(saveID);
alert("This is key" + saveKey);

//alert(dayPlan);
localStorage.setItem(saveKey, dayPlan);
alert("this is stored value" + localStorage.getItem(saveKey));
  
  //alert( "Handler for .click() called." );
});

