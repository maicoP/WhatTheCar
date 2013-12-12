var rightAnswer;
var score;

function getScore(){
    html5sql.process(
    [
        "SELECT * FROM user;"
    ],
    function (transaction, results){
        console.log("get score");
        score = results.rows.item(0).score;
        $("#score").text(score);
        
    },catchError);
}

function riseScore(){
    html5sql.process(
    [
        "UPDATE user set score = score + 10 where userID = 1;"
    ],
    function(transaction, results){
  
    },catchError);
}

function lowerScore(){
    html5sql.process(
    [
        "UPDATE user set score = score - 2 where userID = 1;"
    ],
    function(transaction, results){
  
    },catchError);
}

function getAnswers(){
        console.log("fil answers");
        document.getElementById("contentQuestion").innerHTML = "";
        document.getElementById("contentImage").innerHTML = "";
        var carID = Math.floor((Math.random()*5));
        html5sql.process(
            [
                "SELECT*FROM cars;"
            ],
            function(transaction, results){
                var row = results.rows.item(carID);
                rightAnswer = row.CorrectAnswer;
                 $("#contentQuestion").append("<p>"+row.Question+"</p>");
                 $("#btn1").attr("value",row.Answer1);
                 $("#btn2").attr("value",row.Answer2);
                 $("#btn3").attr("value",row.Answer3);
                 $("#contentImage").append("<img width=500 src="+row.picture+">");
            },catchError);
    }

 $("#btnNext").on("click",getAnswers);
                  


$(".btnAnswer").click(function(){
    console.log("checkAnswer");
    if(this.value== rightAnswer){
       riseScore();
       getScore();
       getAnswers();
    }else{
        if(score != 0){
            lowerScore();
            getScore();
        }else{
            alert("wrong answer");
        }
        
    }
});

function dataLoaded(){
    getAnswers();
    getScore();
}

