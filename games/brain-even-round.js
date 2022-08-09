import readlineSync from 'readline-sync';

const brainCalcRound = () => {
  const randomNum = Math.round(Math.random() * 100); // рандомное число
  const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no'; // проверяем, четное ли оно
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) { // сравниваем ответы
    console.log('Correct!');
    return 'correct';
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return 'incorrect';
};

export default brainCalcRound;
