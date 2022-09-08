const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //code here
  let bmi = weight/(height*height)
  return bmi ;
  
}
function getBMIMeaning(weight, height) {
  //code here
  let bmi = calculateBMI(weight,height)
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi > 18.5 && bmi < 24.9) {
    return "Normal weight";
  } else if (bmi > 25.0){
    return "Overweight";
  }
}
module.exports = getBMIMeaning
