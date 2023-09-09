// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
const arr = [12, 5, -5, 0, 4];

//... 17oC in 1
// days ... 21oC in 2 days ... 23oC in 3 days ...

const printForecast = () => {
    var total="";
   for(let i=0;i<arr.length;i++){
        total += ` ${arr[i]}oC in ${i+1} days ...`;
   }
   return total;
   
}

console.log("..." + printForecast());
