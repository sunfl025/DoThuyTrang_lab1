//1. Create an array 'bills' containing all 10 test bill values
var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
var tips = [];
var totals = [];

var calcTip = ()=>{
    for(let i = 0; i < 10; i++){

        (bills[i] >=50) && (bills[i] <=300) ? tip=bills[i] * (15/100) : tip=bills[i] * (20/100);
        tips.push(tip);

 // return tip;
    }
    return tips;
}

var calcTotal = () => {
    tips = calcTip();
    for(let i = 0; i < 10; i++){
        total =bills[i] + tips[i];
        totals.push(total);
    }
    return totals;
    
}

console.log(calcTotal());
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;

}
console.log('calcAverageBills', calcAverage(bills));
console.log('calcAverageTips', calcAverage(tips));
console.log('calcAverageTotals', calcAverage(totals));




