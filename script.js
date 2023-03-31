







var generateBtn = document.querySelector("#generate");
var array = []

function createPassword(){
  var passLen = prompt("Enter a desired password length in a range of 8 to 128")
  console.log(passLen)
  console.log(typeof passLen)
  if ((passLen >= 8) && (passLen < 129)){
 passLen = parseInt(passLen)
  console.log(passLen)
    function chooseTypes(){
      var incLower = confirm("Would you like this password to include lowercase letters?")
      if (incLower=== true){
        array = array.concat(lower)
      }
      console.log(array)
      
      var incUpper = confirm("Would you like this password to include uppercase letters?")
      if (incUpper=== true){
        array = array.concat(upper)
      }
      console.log(array)

      var incNums = confirm("Would you like this password to include numbers?")
      if(incNums===true){
        array = array.concat(nums)
      }
      console.log(array)
      
      var incChars = confirm("Would you like this password to include special characters?")
      if (incChars===true){
        array = array.concat(chars)
      }
      console.log(array)
    
      if ((incLower === false) && (incUpper === false) && (incNums === false) && (incChars === false)){
        chooseTypes()
      }

      return array
    }

  chooseTypes()
  
  var newArray = []

  console.log(array[Math.floor(Math.random()*array.length)])

  for (let i = 0; i < passLen; i++) {
    newArray.push(array[Math.floor(Math.random()*array.length)])
  }
   
  newPass = newArray.join("")
  console.log(newPass)

  return newPass

  } else {createPassword()}
  } 
 
  


function  showPassword(){
  var password = createPassword();
  var display = document.querySelector("#password")
  display.value = password;
}

generateBtn.addEventListener("click", showPassword)



var nums = ["1","2","3","4","5","6","7","8","9","0"]
var chars = ["!","@","#","$","%","^","&","*","(",")",":",";","<",">","+","=","-","_","?","{","}","[","]"]
var lower = 'qwertyuiopasdfghjklzxcvbnm'.split('');
var upper = lower.map(convertToUpper)
function convertToUpper(letter){
  return letter.toUpperCase()
}



