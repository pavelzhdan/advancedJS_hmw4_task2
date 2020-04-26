/* eslint-disable linebreak-style */
import findBy from '../../index';

test('check to successed search', () => {
  const base = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];

  const result = base.filter(findBy('name', 'урон'));

  expect(result).toEqual([{ name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' }]);
});

test('check to failed search', () => {
  const base = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];

  const result = base.filter(findBy('name', 'урод'));

  expect(result).toEqual([]);
});
