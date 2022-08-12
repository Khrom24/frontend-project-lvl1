#!/usr/bin/env node
import round from '../games/brain-progression-round.js';
import universalGame from '../src/index.js';

universalGame('What number is missing in the progression?', round);
