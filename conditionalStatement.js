//Первое задание. Ответ - да, выведется
if ("0") {
    alert( 'Привет' );
}
//Второе задание
const name = prompt('Какое "официальное" название JavaScript?', '');
if(name === 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? “ECMAScript”!');
}
//Третье задание
const num = prompt('Введите число', '');
if(Number(num) === 0){
    alert(0);
} else {
    if(Number(num) > 0) {
        alert(1);
    } else {
        alert(-1);
    }
}
//Четвёртое задание
let result;
let a = 3;
let b = 2;

(a + b < 4) ? result = 'Мало' : result = 'Много';
//Пятое задание
let message;
let login = '';

(login == 'Сотрудник') ? message = 'Привет' :
    (login == 'Директор') ? message = 'Здравствуйте' :
    (login == '') ? message = 'Нет логина' : message = '';