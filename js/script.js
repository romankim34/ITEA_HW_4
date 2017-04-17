//Написати функцію min(a, b) яка буде вертати менше з чисел a, b
function min(a, b) {
  return a < b ? a : b;
};

console.log(min(-3, -5));


//Написати функцію pow(x, n) яка буде вертати x в степерні n
function pow(x, n) {
var result = x;
for (var i = 0; i < n-1; i++) {
  result *= x;
};
return result;
};

console.log(pow(2, 3));

// Перепишіть функцію так. щоб вона робила те ж саме але без if, в одну стрічку.
// Зробіть два варіанти функції checkAge:
// Використовуючи оператор ?
// Використовуючи оператор ||
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }


function checkAge(age) {
  age > 18 ? true : confirm('Родители разрешили?');
};

function checkAge(age) {
  return ((age > 18) || (confirm('Родители разрешили?')));
};

checkAge(15);




// Написати функцію яка першим параметром буде приймати стрічку, 'колір', 
// другим параметром буде приймати масив стрічок.

// Після виклику функція має в тег ul добавити li з текстом зі стрічок 
// і кольором тексту з першого параметру функції.

function addLi(colorLi, strArr) {
  var li, ul, str; 
  li = document.createElement('li');
  ul = document.querySelector('ul');
  ul.appendChild(li); 
  li.style.color = colorLi;
  str = strArr.join(' ');
  li.innerHTML = str;
}

addLi('red', ['some', 'new', 'text']);



// Побудувати функцію sqr яка буде приймати параметром число і вертати його в квадраті.

// Побудувати функцію calculator яка першим параметром прийматиме sqr а другим
//  параметром прийматиме масив чисел.

// Функція calculator при виклику повинна передати по черзі з масиву числа в функцію sqr
//  і вивести результат sqr в консоль.

function sqr(number) {
  return number * number;
};

function calculator(sqr, numbers) {
  for (var i = 0; i < numbers.length; i++) {
    var res =  sqr(numbers[i]);
    console.log(numbers[i] + ' в квадрате ' + ' = ' + res);
  };
};

calculator(sqr, [4, 5]);