let currentPrize;
let number;
let answer;
let incremeningNumber = 8;
let sumIncrease = 2;
let decreasingPerAttempt = 2;
let startAttemptNumber = 3;

while (confirm('Do you want to play the game?')) {

  let maxPrize = 100;
  let maxNumber = 8;
  let attemptNumber = startAttemptNumber;
  let totalPrize = 0;
  let playFlag = true;

  while (playFlag) {
    currentPrize = maxPrize;
    number = Math.floor(Math.random() * Math.floor(maxNumber + 1));

    for (let i = attemptNumber; i > 0;) {
      answer = Number(prompt('Choose a roulette pocket number from 0 to '+ maxNumber+
'\nAttempts left: '+ i+
'\nTotal prize: '+ totalPrize +
'\nPossible prize on current attempt: '+ currentPrize));

      i--;
      if (answer === number) {
        if (confirm('Congratulations, you won!.\nYour prize is: ${currentPrize}.\n Do you want to continue?')) {
          maxNumber += incremeningNumber;
          maxPrize *= sumIncrease;
          attemptNumber = startAttemptNumber;
          totalPrize += currentPrize;
        } else {
          totalPrize += currentPrize;
          alert('Thanks for your participation. Your prize is: ${totalPrize}.');
          playFlag = false;
        }
        
        break;
      }
      currentPrize /= decreasingPerAttempt;
      if (i === 0) {
        alert('Thanks for your participation. Your prize is: ' + totalPrize );
        playFlag = false;
      }
    }
  }
}
alert('You did not become a billionaire, but can.');