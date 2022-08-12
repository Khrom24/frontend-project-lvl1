#!/usr/bin/env node
import round from '../games/brain-prime-round.js';
import universalGame from '../src/index.js';

universalGame('Answer "yes" if the number is prime, otherwise answer "no".', round);
