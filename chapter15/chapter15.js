let todayDate = document.getElementById("todaysdate");
let todoButton = document.getElementById("whattodo");
// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);
// create a new Date object
let d = new Date();
// call the displayDate() function
displayDate();
function displayDate() {
 todayDate.innerHTML = d.toDateString();
}
function displayActivity() {
 // find out the day of the week
 let dayOfWeek = d.getDay();
/* set a variable, called youShould, with a different 
string based on what day of the week it is */
let youShould;
switch (dayOfWeek) {
case 0:
youShould = "it is Church Day.";
break;
case 1:
youShould = "Get your things in order.";
break;
case 2:
youShould = "you got to work.";
break;
case 3:
youShould = "pay your weekly subcription.";
break;
case 4:
youShould = "go eat yoour favourite meal.";
break;
case 5:
youShould = "prepare yourself for Saturday";
break;
case 6:
youShould = "you know what to do";
break;
default:
youShould = "oops! try that again!";
break;
}
// output the value of youShould into the thingToDo div
document.getElementById("thingToDo").innerHTML = 
youShould;
}
