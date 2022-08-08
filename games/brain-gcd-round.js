import readlineSync from 'readline-sync';

export default function brainCalcRound() {
  const randomNumber1 = Math.ceil(Math.random() * 100);
  const randomNumber2 = Math.ceil(Math.random() * 100);
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  const answer = readlineSync.question('Your answer: ');
  let x = randomNumber1;
  let y = randomNumber2;
  let t = randomNumber2;
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
}
