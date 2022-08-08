#!/usr/bin/env node
import round from '../games/brain-even-round.js';
import universalGame from '../src/index.js';

universalGame('Answer "yes" if the number is even, otherwise answer "no".', round);
