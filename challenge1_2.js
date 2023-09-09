//Coding Challenge #1
//1. Store Mark's and John's mass and height in variables
var mass_mark = 78,height_mark = 1.69;
var mass_john = 78,height_john = 1.96;

var BMI_1 = (mass, height) => {
    return mass / height ** 2;
}

var BMI_2 = (mass, height) => {
    return mass / (height * height);
}
//2. Calculate both their BMIs using the formula (you can even implement both versions)

console.log('BMI cua Mark lan 1 :' + BMI_1(mass_mark, height_mark));
console.log('BMI cua John lan 1 :' + BMI_1(mass_john,  height_john));
console.log('BMI cua Mark lan 2 :' + BMI_2(95, 1.88));
console.log('BMI cua John lan 2 :' + BMI_2(85, 1.76));
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
var BMI_mark = BMI_1(mass_mark, height_mark); //27.309968138370508
var BMI_john = BMI_1(mass_john,  height_john); //20.304039983340278

var  markHigherBMI = ( BMI_mark > BMI_john) ? true : false;
console.log("Mark higher BMI ? " + markHigherBMI)
//Coding Challenge #2
//1. Print a nice output to the console, saying who has the higher BMI. The message
//is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
var result = markHigherBMI ? "Mark's BMI is higher than John's!": "John's BMI is higher than Mark's!";
console.log(result);
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
var result2 = markHigherBMI ? `Mark's BMI (${BMI_mark}) is higher than John's (${BMI_john})!`: `John's BMI(${BMI_john}) is higher than Mark's(${BMI_mark})!`;
console.log(result2);


 
