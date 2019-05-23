var fs = require("fs");

dataFile = [

    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Charlize",
        "photo": "",
        "scores": [
            2,
            3,
            2,
            3,
            3,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "userName": "Jen",
        "photo": "https://vignette.wikia.nocookie.net/muppet/images/f/fb/DC_Jen_3839.jpg/revision/latest?cb=20150806030025",
        "q01": "2",
        "q02": "4",
        "q03": "5",
        "q04": "1",
        "q05": "1",
        "q06": "2",
        "q07": "4",
        "q08": "2",
        "q09": "5",
        "q10": "2"
    }

];

inputData = {
    "name": "testSubject",
    "photo": "",
    "scores": [
        2,
        4,
        2,
        5,
        3,
        1,
        2,
        5,
        4,
        1
    ]
}
var currentScore = 0;
var scoreArray = [];

// Get compatibility score for each potential friend
for (let index = 0; index < dataFile.length; index++) {
    const scores = dataFile[index];
    getScore(scores);
    // console.log(scores.name, currentScore);
    scoreArray.push(currentScore);
    // console.log(scoreArray);
}

function getScore(currentValue) {

    var userScores = inputData.scores;
    var friend = currentValue.scores;


    for (let index = 0; index < userScores.length; index++) {
        const answerScore = userScores[index];
        const compareScore = friend[index];

        currentScore += diff(answerScore, compareScore);

        // find the difference between two numbers
        function diff(num1, num2) {
            return (num1 > num2) ? num1 - num2 : num2 - num1
        }

    }
    return currentScore;
}
maxFriend();

// Find friend with highest score
function maxFriend() {
    friendIndex = indexOfMax(scoreArray);
    bestMatch = dataFile[friendIndex].name;
    console.log("Best Match: "+bestMatch);
}

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    console.log(arr);
    return maxIndex;
}

