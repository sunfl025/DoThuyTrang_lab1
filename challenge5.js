const  Dolphins_score1=44, Dolphins_score2=23, Dolphins_score3 =71;
const  Koalas_score1=65, Koalas_score2=54, Koalas_score3=49;
//1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1,score2,score3) => {
    return (score1 + score2 + score3)/3;
}
//2. Use the function to calculate the average for both teams
console.log("Average dolphins :" + calcAverage(Dolphins_score1,Dolphins_score2,Dolphins_score3));
console.log("Average koalas :" + calcAverage(Koalas_score1,Koalas_score2,Koalas_score3));

// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
const checkWinner = (avgDolhins,avgKoalas) => {
    if(avgDolhins >avgKoalas)
    {
        return `Dolphins win (${avgDolhins} vs. ${avgKoalas})`;
    }
    else if(avgDolhins == avgKoalas)
    {
        return "they have the same average score";
    }
    return `Koalas win (${avgKoalas} vs. ${avgDolhins})`
}

var avg_dolphins = calcAverage(Dolphins_score1,Dolphins_score2,Dolphins_score3);
var avg_koalas = calcAverage(Koalas_score1,Koalas_score2,Koalas_score3);
 console.log(checkWinner(avg_dolphins,avg_koalas));
//  4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
var avg_dolphins_data2 = calcAverage(85,54,41);
var avg_koalas_data2 = calcAverage(23,34,27);
console.log("Check winner data 1 : " + checkWinner(avg_dolphins,avg_koalas));
console.log("Check winner data 2 : " + checkWinner(avg_dolphins_data2,avg_koalas_data2));
// 5. Ignore draws this time
const checkWinner2 = (avgDolhins1,avgKoalas1) => {
    if(avgDolhins1 >avgKoalas1)
    {
        return `Dolphins win (${avgDolhins1} vs. ${avgKoalas1})`;
    }
    else if(avgDolhins1 < avgKoalas1)
    {
        return `Koalas win (${avgKoalas1} vs. ${avgDolhins1})`;
    }
    
}
console.log("Check winner data 1 : " + checkWinner2(avg_dolphins,avg_koalas));
console.log("Check winner data 2 : " + checkWinner2(90,90));

