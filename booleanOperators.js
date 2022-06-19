//Задание 1 Выведет 2
alert( null || 2 || undefined );
//Задание 2 Выведет сначала 1, потом 2
alert( alert(1) || 2 || alert(3) );
//Задание 3 Выведет null
alert( 1 && null && 2 );
//Задание 4 Выведет 1, потом undefined
alert( alert(1) && alert(2) );
//Задание 5 Выведет 3
alert( null || 2 && 3 || 4 );
//Задание 6
const age = 16;
if(age >= 14 && age <= 90) alert('age больше 14 и меньше 90');
//Задание 7
if(age < 14 || age > 90) alert('age меньше 14 или больше 90');
if(!(age >= 14 && age <= 90)) alert('age меньше 14 или больше 90');
//Задание 8
if (-1 || 0) alert( 'first' ); // будет -1, это true => выведется
if (-1 && 0) alert( 'second' ); // будет 0, это false => не выведется
if (null || -1 && 1) alert( 'third' ); // будет 1, это true => выведется
//Задание 9
const name5 = prompt('Кто там?', '');
if(name5 === 'Админ') {
    const password = prompt('Пароль?', '');
    if(password === 'Я Главный') alert('Здравствуйте!'); 
        else if(password === null) alert('Отменено'); 
        else alert('Неверный пароль');
} else if(name5 === null) 
    alert('Отменено');
    else alert('Я вас не знаю');
