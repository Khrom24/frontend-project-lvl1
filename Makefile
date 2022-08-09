install: # установка зависимостей
	npm ci

brain-games: # запуск
	node bin/brain-games.js

brain-even: # Проверка на чётность
	node bin/brain-even.js

brain-calc: # Калькулятор
	node bin/brain-calc.js

brain-gcd: # НОД
	node bin/brain-gcd.js

brain-progression: # Арифметическая прогрессия
	node bin/brain-progression.js

brain-prime: # Простое ли число
	node bin/brain-prime.js

publish:
	npm publish --dry-run

init: # Линтер
	npx eslint .