let score = {};

function Openingceremony(score, Race100m){
    score = {Red:0, Blue:0, Green:0, Yellow:0};
    setTimeout(() => {
        console.log("Let's the game begin!");
        Race100m(score, LongJump);
    }, 1000);
}

function Race100m(score, LongJump){
    setTimeout(() => {
        console.log("Score");
        console.log(score);
        const obj = {
             Red: Math.floor(Math.random() * 6) + 10,
             Blue:  Math.floor(Math.random() * 6) + 10,
             Green:  Math.floor(Math.random() * 6) + 10,
             Yellow:  Math.floor(Math.random() * 6) + 10
        };
        const sortedArr = Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
        let newObj = {};
        newObj[sortedArr[0]] = 50;
        newObj[sortedArr[1]] = 25;
        console.log("Winner of 100M race is " + sortedArr[0]);

        score[sortedArr[0]] += 50;
        score[sortedArr[1]] += 25;

        console.log("Updated Score");
        console.log(score);
        LongJump(score, HighJump);

    }, 3000);

    
}

function LongJump(score, HighJump){
    setTimeout(() => {
        console.log("Prev Score");
        console.log(score);

        const i = Math.floor(Math.random() * 4) + 1;
        if(i == 1){
            let val = score.Red;
            val += 150;
            score.Red = val;
            console.log("Winner of LongJump is " + "Red");
            console.log("Updated Score");
            console.log(score);
        }
        if(i == 2){
            let val = score.Blue;
            val += 150;
            score.Blue = val;
            console.log("Winner of LongJump is " + "Blue");
            console.log("Updated Score");
            console.log(score);
        }
        if(i == 3){
            let val = score.Green;
            val += 150;
            score.Green = val;
            console.log("Winner of LongJump is " + "Green");
            console.log("Updated Score");
            console.log(score);
        }
        if(i == 4){
            let val = score.Yellow;
            val += 150;
            score.Yellow = val;
            console.log("Winner of LongJump is " + "Yellow");
            console.log("Updated Score");
            console.log(score);
        }
        HighJump(score, AwardCeremony);
        
    }, 2000);
}

function HighJump(score, AwardCeremony){

    console.log("Prev Score");
    console.log(score);

    let person = prompt("Please enter the Colour");

    if (person == null || person == "") {
        console.log("Event Was cancelled");
        AwardCeremony(score);
    } else {
        if(person == "Red"){
            let val = score.Red;
            val += 100;
            score.Red = val;
            console.log("Winner of HighJump is Red");
            console.log("Updated Score");
            console.log(score);
        }
        if(person == "Blue"){
            let val = score.Blue;
            val += 100;
            score.Blue = val;
            console.log("Winner of HighJump is Blue");
            console.log("Updated Score");
            console.log(score);
        }
        if(person == "Green"){
            let val = score.Green;
            val += 100;
            score.Green = val;
            console.log("Winner of HighJump is Green");
            console.log("Updated Score");
            console.log(score);
        }
        if(person == "Yellow"){
            let val = score.Yellow;
            val += 100;
            score.Yellow = val;
            console.log("Winner of HighJump is Yellow");
            console.log("Updated Score");
            console.log(score);
        }
        AwardCeremony(score);
    }
}

function AwardCeremony(score){
    
    let sortedArr = Object.keys(score).sort((a, b) => score[a] - score[b]);
    let n = sortedArr.length;
    
    console.log(`${sortedArr[n-1]} Came First with ${score[sortedArr[n-1]]} points`);
    console.log(`${sortedArr[n-2]} Came Second with ${score[sortedArr[n-2]]} points`);
    console.log(`${sortedArr[n-3]} Came Third with ${score[sortedArr[n-3]]} points`);
    console.log(`${sortedArr[n-4]} Came Fourth with ${score[sortedArr[n-4]]} points`);
}

Openingceremony(score, Race100m);