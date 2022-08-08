import readlineSync from 'readline-sync';

export default function brainCalcRound() {
  const randomNumber = Math.floor(Math.random() * 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    return 'correct';
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return 'incorrect';
}
