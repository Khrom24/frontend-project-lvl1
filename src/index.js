import readlineSync from 'readline-sync';

const universalGame = (intro, round) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(intro);
  for (let i = 0; i < 3; i += 1) {
    if (round() !== 'correct') {
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default universalGame;
