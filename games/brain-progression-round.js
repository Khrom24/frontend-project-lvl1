import readlineSync from 'readline-sync';

const brainCalcRound = () => {
  const noOfNums = Math.floor(Math.random() * 5) + 5;
  const missingNum = Math.ceil(Math.random() * noOfNums);
  const firstNum = Math.floor(Math.random() * 100);
  const progressionStep = Math.floor(Math.random() * 10);
  const correctAnswer = firstNum + progressionStep * (missingNum - 1);
  const array = [];
  for (let i = 0; i < noOfNums; i += 1) {
    if (i === missingNum - 1) {
      array[i] = '..';
    } else {
      array[i] = firstNum + progressionStep * i;
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
};

export default brainCalcRound;
