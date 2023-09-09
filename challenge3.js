// Coding Challenge #3
// 1. Calculate the average score for each team, using the test data below

const  Dolphins_score1=96, Dolphins_score2=108, Dolphins_score3 =89;
const  Koalas_score1=88, Koalas_score2=91, Koalas_score3=110;

const averageScore = (score1,score2,score3) => {
    return (score1 + score2 + score3)/3;
}
let avg_dolphins =  averageScore(Dolphins_score1,Dolphins_score2,Dolphins_score3);
let avg_koalas =  averageScore(Koalas_score1,Koalas_score2,Koalas_score3);
console.log("Average score Dolphins: " + avg_dolphins);
console.log("Average score Koalas: " + avg_koalas);

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
const compareAvg = (dolphins, koalas) => {
    if(dolphins > koalas)
    {
        return "Dolphins win"
    }
    else if(dolphins == koalas)
    {
        return "they have the same average score";
    }
    return "Koalas win";
}
console.log("Result : " + compareAvg(avg_dolphins,avg_koalas));
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 
const  Dolphins_score1_bonus1=97, Dolphins_score2_bonus1=112, Dolphins_score3_bonus1=101;
const  Koalas_score1_bonus1=109, Koalas_score2_bonus1=95, Koalas_score3_bonus1=123;
let avg_dolphins_bonus1 =  averageScore(Dolphins_score1_bonus1,Dolphins_score2_bonus1,Dolphins_score3_bonus1);
let avg_koalas_bonus1 =  averageScore(Koalas_score1_bonus1,Koalas_score2_bonus1,Koalas_score3_bonus1);
console.log(avg_dolphins_bonus1);
console.log(avg_koalas_bonus1);

const compareAvg2 = (dolphins_bonus1,koalas_bonus1) => {
    if((dolphins_bonus1>=100) && (koalas_bonus1>=100))
    {
        if(dolphins_bonus1 > koalas_bonus1)
        {
            return "Dolphins win"
        }
        else if(dolphins_bonus1 == koalas_bonus1)
        {
            return "they have the same average score";
        }
        return "Koalas win";
    }
    else{
        return "Score of at least 100 points";
    }
}

console.log("Result bonus 1 : " + compareAvg2(avg_dolphins_bonus1,avg_koalas_bonus1));
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
const  Dolphins_score1_bonus2=97, Dolphins_score2_bonus2=112, Dolphins_score3_bonus2=101;
const  Koalas_score1_bonus2=109, Koalas_score2_bonus2=95, Koalas_score3_bonus2=106;
let avg_dolphins_bonus2 =  averageScore(Dolphins_score1_bonus2,Dolphins_score2_bonus2,Dolphins_score3_bonus2);
let avg_koalas_bonus2 =  averageScore(Koalas_score1_bonus2,Koalas_score2_bonus2,Koalas_score3_bonus2);
// console.log(avg_dolphins_bonus2);
// console.log(avg_koalas_bonus2);
console.log("Result bonus 2 : " + compareAvg2(avg_dolphins_bonus2,avg_koalas_bonus2));
