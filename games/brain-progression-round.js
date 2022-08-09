import readlineSync from 'readline-sync';

const brainCalcRound = () => {
  const noOfNums = Math.round(Math.random() * 5) + 5; // колличество
  const missingNum = Math.round(Math.random() * noOfNums); // отсутсвующая цифра
  const firstNum = Math.round(Math.random() * 100); // первый номер
  const progressionStep = Math.round(Math.random() * 10); // шаг
  const correctAnswer = firstNum + progressionStep * (missingNum - 1);
  const array = [];
  for (let i = 0; i < noOfNums; i += 1) {
    if (i === missingNum - 1) {
      array[i] = '..';
    } else {
      array[i] = firstNum + progressionStep * i;
    }
  }
  const sequence = array.join(' '); // разъединяем пробелами
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
