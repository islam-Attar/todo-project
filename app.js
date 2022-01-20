 
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




    


   


 













//  var userAnswer = confirm("are you excited ?");
// console.log("user answered with" + userAnswer);


// // asking for input
// var yourAge = prompt("what is your age?");
// console.log("user answered with" + yourAge);

// //using variables within string
// var yourName = prompt("what is your name?");
// console.log(`user answered with" + ${yourName}`);

// alert(`welcome ${yourName}`);
// console.log("user answered with" + yourName);
