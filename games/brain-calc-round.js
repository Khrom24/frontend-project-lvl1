import readlineSync from 'readline-sync';

const brainCalcRound = () => {
  const action = ['+', '-', '*'][Math.round(3 * Math.random())]; // операция
  const randomNum1 = Math.round(Math.random() * 100); // рандомное первое число
  const randomNum2 = Math.round(Math.random() * 100); // рандомное второе число
  const expression = `${randomNum1} ${action} ${randomNum2}`; // собираем в едное выражение
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
  console.log(`Question: ${expression}`); // выводим на экран выражение
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === correctAnswer) { // сравниваем ответы
    console.log('Correct!');
    return 'correct';
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return 'incorrect';
};

export default brainCalcRound;
