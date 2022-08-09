import readlineSync from 'readline-sync';

const brainCalcRound = () => {
  const roundNum1 = Math.ceil(Math.random() * 100);
  const roundNum2 = Math.ceil(Math.random() * 100);
  console.log(`Question: ${roundNum1} ${roundNum2}`);
  const answer = readlineSync.question('Your answer: ');
  let x = roundNum1;
  let y = roundNum2;
  let t = roundNum2;
  while (y > 0) {
    t = y;
    y = x % y;
    x = t;
  }
  const correctAnswer = x;
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return 'correct';
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return 'incorrect';
};

export default brainCalcRound;
