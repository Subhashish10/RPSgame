function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    //For bot choice
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer Choice:',botChoice);
    //Deciding winner
    results = decideWinner(humanChoice,botChoice);
    console.log(results);
    //Final message
    message = finalMessage(results);
    console.log(message);
    rpsFrontend(yourChoice.id, botChoice, message);

}
function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number){
    return ['rock','paper','scissor'][number];
}
function decideWinner(yourChoice,computerChoice){
    var rpsDatabase = {
        'rock' : {'scissor':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'paper':1,'scissor':0.5,'rock':0},
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore,computerScore];

}

function finalMessage([yourScore,computerScore]){
    if (yourScore === 0){
        return{'message':'You lost!','color':'red'};
    }
    else if(yourScore === 0.5){
        return{'message':'You tied','color':'yellow'}
    }
    else{
        return{'message':'You won','color':'green'}
    }




}

//The frontend
function rpsFrontend(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase={
        'rock' : document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src,



    }
    //removing all the images
    document.getElementById('rock').remove();
    document.getElementById('scissor').remove();
    document.getElementById('paper').remove();


    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src = '" + imagesDatabase[humanImageChoice] + "' height = 150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>"
    messageDiv.innerHTML= "<h1>"+finalMessage['message']+"</h1>";
    botDiv.innerHTML = "<img src = '" + imagesDatabase[botImageChoice] + "' height = 150 width=150 style='box-shadow: red'>"
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);



}