import readlineSync from 'readline-sync';

export default function brainCalcRound() {
  const action = ['+', '-', '*'][Math.floor(3 * Math.random())];
  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);
  const expression = `${randomNumber1} ${action} ${randomNumber2}`;
  let correctAnswer;
  switch (action) {
    case '+':
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case '-':
      correctAnswer = randomNumber1 - randomNumber2;
      break;
    default:
      correctAnswer = randomNumber1 * randomNumber2;
  }
  console.log(`Question: ${expression}`);
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return 'correct';
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return 'incorrect';
}
