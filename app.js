 var name = prompt("Please Enter Your Name: ");
 console.log(`User's Name: ${name.toLowerCase}`);

 var gender = prompt("Please Enter Your Gender (Male or Female): ");
 console.log(`User's gender: ${gender.toLowerCase}`);

 var age = prompt("Please Enter Your Age: ");
 console.log(`User's gender: ${age.toLowerCase}`);

 if(age <= 0){
  alert("You entered age lower than one");
 }

  var skip = confirm("Would you like to skip the Welcoming?")
  console.log(`User's answer: ${skip}`);

  if (skip == false) {

   if (gender.toLocaleLowerCase() == "male")
   {
    alert(`Welcome Mr.${name}!`)
   }

   else if (gender.toLocaleLowerCase() == "female")
   {
    alert(`Welcome Ms.${name}!`)
   }

   else {
    alert(`Welcome ${name}!`)
   }

  }
//-----------------------------------------------------------------
// task 6

function askQuestion(question) {
  let answer = prompt(question);

  if (answer == "yes" || answer == "no") {
    return answer;
  } else if (answer == "") {
    return "invalid";
  }
}

let questionOne = askQuestion("do you like programming?");
let questionTwo = askQuestion("do you like football?");
let questionThree = askQuestion("do you like games?");

var questionsArr = [questionOne, questionTwo, questionThree];
console.log(questionsArr);
