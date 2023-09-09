
const mark= {
    fullName: "Mark Miller",
    mass : "78",
    height: "1.69"
}

const john={
    fullName: "John Smith",
    mass : "92",
    height: "1.95"
}

var calcBMI = (mass,height) =>{
    return mass / height ** 2;
}

var BMI_mark = calcBMI(mark.mass,mark.height);
var BMI_john = calcBMI(john.mass,john.height);

console.log(BMI_mark);
console.log(BMI_john);
var result = (BMI_john > BMI_mark) ? `${john.fullName}'s BMI (${BMI_john}) is higher than ${mark.fullName}'s (${BMI_mark})!`
:  `${mark.fullName}'s BMI (${BMI_mark}) is higher than ${john.fullName}'s (${BMI_john})!`
console.log(result)