var submitButton = $("button");
var aSection = $('.affSec');

submitButton.on("click", affirmation);

function affirmation(){
  event.preventDefault();
  var name = $('.nameInput').val();
  var num = $('.numberInput').val();
  var a = "affirmation";
  if(num === "one"){
    a = "you are an amazing person! Go you!";
  } else if (num === "two"){
    a = "you are enough. Don't force yourself to be someone you're not."
  } else if (num === "three"){
    a = "don't forget to go easy on yourself. You work hard and deserve a break!"
  } else if (num === "four"){
    a = "today is a new day! Focus on the present, not on the past or future."
  } else if (num === "five"){
    a = "tou are smart, beautiful, and kind. Don't forget it!"
  } else{
    a = "did you type in something like '1' instead of 'one', or maybe a number greater than five? It's ok, but go back and re-read the instructions!"
  }
  
  aSection.append(`<p class = "ap">Hi ${name}, ${a} Times are hard right now, I hope this made your day a little brighter!</p>`);
}