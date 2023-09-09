// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100

const calcTip =(billValue) => {
    (billValue >=50) && (billValue <=300) ? tip=billValue * (15/100) : tip=billValue * (20/100);
    return tip;
} 

console.log("Tip: " + calcTip(100));
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
var bills = [125,555,44];
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
var tip1 = calcTip(bills[0]);
var tip2 = calcTip(bills[1]);
var tip3 = calcTip(bills[2]);
var tips = [tip1,tip2,tip3];
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
var total1 = bills[0]+tips[0];
var total2 =  bills[1]+tips[1];
var total3 =  bills[2]+tips[2];
var totals = [total1,total2,total3];
console.log(totals[0],totals[1],totals[2])



