// Good Luck! You got this 💪🏾
// Write your code here.
function calculateBMI(weight,height){
    return weight / (height * height)
}

const weightAli = 75; 
const heightAli = 1.8;
const bmiAli = calculateBMI(weightAli, heightAli);

const weightMohamed = 80; 
const heightMohamed = 1.8;
const bmiMohamed = calculateBMI(weightMohamed, heightMohamed);

if(bmiMohamed > bmiAli){
    console.log("Mohamed is BMI higher than ali");
}else if (bmiMohamed < bmiAli){
    console.log("ali is BMI higher than mohamed ");
}
else{
    console.log("same BMI");
}