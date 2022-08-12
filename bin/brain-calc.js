#!/usr/bin/env node
import round from '../games/brain-calc-round.js';
import universalGame from '../src/index.js';

universalGame('What is the result of the expression?', round);