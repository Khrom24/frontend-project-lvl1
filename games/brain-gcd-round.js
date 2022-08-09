import readlineSync from 'readline-sync';

const brainCalcRound = () => {
  const roundNum1 = Math.round(Math.random() * 100); //первое рандомное число
  const roundNum2 = Math.round(Math.random() * 100); //второе рандомное число
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
  const correctAnswer = x; //ответ
  if (Number(answer) === correctAnswer) { //сравниваем ответы
    console.log('Correct!');
    return 'correct';
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return 'incorrect';
};

export default brainCalcRound;
