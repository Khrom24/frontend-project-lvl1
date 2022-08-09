import readlineSync from 'readline-sync';

const brainCalcRound = () => {
  const action = ['+', '-', '*'][Math.floor(3 * Math.random())];
  const randomNum1 = Math.floor(Math.random() * 100);
  const randomNum2 = Math.floor(Math.random() * 100);
  const expression = `${randomNum1} ${action} ${randomNum2}`;
  let correctAnswer;
  switch (action) {
    case '+':
      correctAnswer = randomNum1 + randomNum2;
      break;
    case '-':
      correctAnswer = randomNum1 - randomNum2;
      break;
    default:
      correctAnswer = randomNum1 * randomNum2;
      break;
  }
  console.log(`Question: ${expression}`);
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return 'correct';
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return 'incorrect';
};

export default brainCalcRound;
