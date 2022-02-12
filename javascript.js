let secretNum = Math.floor(Math.random()*20) +1;
let score = 20;
let highestScore = 0;
let message = function(message){
    document.querySelector('#message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function(){
   let guess = Number(document.querySelector('.guess').value);
   if(!guess){
       message('👎Not Found!');
   }else if(guess ===secretNum){
    message('🎉Correct Number!');
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').textContent=secretNum;
    if(score>highestScore){
        highestScore = score;
        document.querySelector('.highscore').textContent = highestScore;
    }
   }else if(guess !==secretNum){
    if(score>1){
        
        message(guess>secretNum ? 'Number Is Too High!' : "Number Is Too Low!");
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        message('😥You Lost The Game!');
        score--;
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor='red';
    }

   }
   
})

document.querySelector('.reset').addEventListener('click', function(){
    let secretNum = Math.floor(Math.random()*20) +1;
    let score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('#message').textContent = "Start guessing...";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})