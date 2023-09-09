var tip;

// const CalculateTip = (billValue) => {
//     if((billValue >=50) && (billValue <=300))
//     {
//         return tip = billValue * (15/100);
//     }
//     else {
//         return tip =billValue * (20/100);
//     }
    
// }
const CalculateTip2 = (billValue) => {
    (billValue >=50) && (billValue <=300) ? tip=billValue * (15/100) : tip=billValue * (20/100);
    return tip;
}
console.log(CalculateTip2(275));
console.log(CalculateTip2(40));
console.log(CalculateTip2(430));

// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
var total = (bill,tip)=> {
    return bill + tip;
}
var bill_1 = 275;
var tip_1 = CalculateTip2(bill_1)
console.log(`The bill was ${bill_1}, the tip was ${tip_1}, and the total value ${total(bill_1,tip_1)}`);
