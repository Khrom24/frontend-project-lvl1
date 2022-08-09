import readlineSync from 'readline-sync';

const brainCalcRound = () => {
  const randomNum = Math.floor(Math.random() * 100);
  const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    return 'correct';
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return 'incorrect';
};

export default brainCalcRound;
