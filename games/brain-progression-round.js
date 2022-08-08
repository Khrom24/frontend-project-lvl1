import readlineSync from 'readline-sync';

export default function brainCalcRound() {
  const noOfNumbers = Math.floor(Math.random() * 5) + 5;
  const missingNumber = Math.ceil(Math.random() * noOfNumbers);
  const firstNumber = Math.floor(Math.random() * 100);
  const progressionStep = Math.floor(Math.random() * 10);
  const correctAnswer = firstNumber + progressionStep * (missingNumber - 1);
  const array = [];
  for (let i = 0; i < noOfNumbers; i += 1) {
    if (i === missingNumber - 1) {
      array[i] = '..';
    } else {
      array[i] = firstNumber + progressionStep * i;
    }
  }
  const sequence = array.join(' ');
  console.log(`Question: ${sequence}`);
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return 'correct';
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return 'incorrect';
}
