//Brian Bellanger
//Homework 3 - Password Generator
// 3-25-2021

var password = "";
var selections = [0,"N","N","N","N"];
// selections Array definitions:
// 0= #chrs  1=Use Special?  2=Use Num?  3=Use lower?  4=Use UPPER?

function generatePassword(){

      // Gather Selections from user
        
        // Password length:
        selections[0]=window.prompt("How many characters for the password? \n (Note: minimum of 8 and maximum of 128)");
        if (selections[0] < 8){
        window.alert("Password length must be at least 8 characters");
        generatePassword();
        } else if (selections[0] > 128){
        window.alert("Password length must be at less than 128 characters");
        generatePassword();};

        // Special characters:
        Special = window.confirm("Click OK to confirm including special characters");
        if (Special){selections[1] = "Y";}
        else {selections[1] = "N"};

        // Numeric characters:
        Numeric = window.confirm("Click OK to confirm including numeric characters");
        if (Numeric){selections[2] = "Y";}
        else {selections[2] = "N"};
        
        // Lower case letters:
        Lower = window.confirm("Click OK to confirm including lower case letters");
        if (Special){selections[3] = "Y"}
        else {selections[3] = "N"};

        // Upper case letters:
        Upper = window.confirm("Click OK to confirm including upper case letters");
        if (Special){selections[4] = "Y"}
        else {selections[4] = "N"};


      //Generate Password
      for (i=0;i<selections[0];i=i){
        
        if (selections[1]="Y"){
          var choices = "@%+\/'!#$^?:,(){}[]`-_.";
          spcl = choices[Math.floor(Math.random() * choices.length)];
          password=password + spcl;
          i++;} 
          
        if (selections[2]="Y"){
          var choices = "0123456789";
          num = choices[Math.floor(Math.random() * choices.length)];
          password=password + num;
          i++}

        if (selections[3]="Y"){
            var choices = "abcdefghijklmnopqrstuvwxyz";
            low = choices[Math.floor(Math.random() * choices.length)];
            password=password + low;
            i++}

        if (selections[4]="Y"){
              var choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
              UP = choices[Math.floor(Math.random() * choices.length)];
              password=password + UP;
              i++}
            }

            return password;
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password="";
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
