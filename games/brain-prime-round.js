import readlineSync from 'readline-sync';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }

    divider += 1;
  }

  return true;
};

export default function brainPrimeRound() {
  const randomNumber = Math.ceil(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  if (answer === correctAnswer) {
    console.log('Correct!');
    return 'correct';
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return 'incorrect';
}
