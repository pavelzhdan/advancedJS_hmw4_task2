/* eslint-disable linebreak-style */
const results = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];


export default function findBy(key, value) {
  return (element) => element[key] === value;
}

const finder = findBy('name', 'урон');

console.log(results.filter(finder));
