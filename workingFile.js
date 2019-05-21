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

// Get compatibility score for each potential friend
for (let index = 0; index < dataFile.length; index++) {
    const scores = dataFile[index];
    getScore(scores);
    console.log(scores.name, currentScore);
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