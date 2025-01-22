const name1 = "дедушка"
const name2 = "заяц"
const name3 = "лиса"

function kolobok(action) {
  switch (action) {
    case 'дедушка':
      return'Я от дедушки ушёл';
      break;  // break не обязателен, так как мы уже возвращаем значение

    case 'заяц':
      return 'Я от зайца ушёл';
      break;  // break не обязателен, так как мы уже возвращаем значение

    case 'лиса':
      return 'Меня съели';
      break;  // break не обязателен, так как мы уже возвращаем значение

    default:
      return 'Неизвестный персонаж';
  }
return result
}

console.log(kolobok(name1)); // Я от дедушки ушёл
console.log(kolobok(name2));     // Меня съели
console.log(kolobok(name3));     // Я от зайца ушёл
console.log(kolobok('мышка'));



function kolobok(action) {
  let result;
  switch (action) {
    case 'дедушка':
      result = 'Я от дедушки ушёл';
      break;  // break не обязателен, так как мы уже возвращаем значение

    case 'заяц':
      result = 'Я от зайца ушёл';
      break;  // break не обязателен, так как мы уже возвращаем значение

    case 'лиса':
      result = 'Меня съели';
      break;  // break не обязателен, так как мы уже возвращаем значение

    default:
      result = 'Неизвестный персонаж';
      break;  // break не обязателен, так как мы уже возвращаем значение
  }
  return result
}

console.log(kolobok(name1)); // Я от дедушки ушёл
console.log(kolobok(name2));     // Меня съели
console.log(kolobok(name3));     // Я от зайца ушёл
console.log(kolobok('мышка'));



const character1 = 'Дед Мороз'
const character2 = 'Снегурочка'


function newYear(character) {
  if (character === "Дед Мороз") {
  return `C новым годом, ${character}!`
} else if (character === "Снегурочка") {
  return `${character}! ${character}! ${character}!`
} else {
  return `${character}!`
}
}

console.log(newYear(character1));
console.log(newYear(character2));
console.log(newYear("Волк"));
