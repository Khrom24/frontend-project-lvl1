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
  const roundNum = Math.ceil(Math.random() * 100);
  console.log(`Question: ${roundNum}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(roundNum) ? 'yes' : 'no';
  if (answer === correctAnswer) {
    console.log('Correct!');
    return 'correct';
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return 'incorrect';
};

export default brainPrimeRound;
