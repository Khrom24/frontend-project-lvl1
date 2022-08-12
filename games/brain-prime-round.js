import readlineSync from 'readline-sync';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const brainPrimeRound = () => {
  const randomNum1 = Math.round(Math.random() * 100); // рандомный номер
  console.log(`Question: ${randomNum1}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(randomNum1) ? 'yes' : 'no'; // проверяем, четное ли число
  if (answer === correctAnswer) { // сравниваем ответы
    console.log('Correct!');
    return 'correct';
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return 'incorrect';
};

export default brainPrimeRound;
