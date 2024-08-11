// TASK 1

// let age = prompt("Введите ваш возраст:");

// if (age >= 0 && age < 18) {
//     alert("Вы еще молоды, Вам нужно учиться");
// } else if (age >= 18 && age < 50) {
//     alert("Вам нужно работать");
// } else if (age >= 50 && age < 59) {
//     alert("Вам скоро на пенсию");
// } else if (age >= 59 && age <= 100) {
//     alert("Вы пенсионер");
// } else if (age > 100) {
//     alert("Что-то пошло не так");
// } else {
//     alert("Что-то пошло не так");
// }

// // TASK 2

// let time = prompt("Введите время в часах:");

// switch (true) {
//     case (time >= 0 && time < 6):
//         alert(time + " часа ночи");
//         break;
//     case (time >= 7 && time <= 10):
//         alert(time + " часов утра");
//         break;
//     case (time >= 11 && time <= 17):
//         alert((time - 12) + " часа дня");
//         break;
//     case (time >= 18 && time <= 23):
//         alert((time - 12) + " часов вечера");
//         break;
//     default:
//         alert("Введено неверное время");
// }

// TASK 3

// let a = prompt('enter the first number')
// let b = prompt('enter the second number')
// let c = prompt('enter the third number')


// if((a>b &&a<c) || (a<b && a>c)){
//     alert(a);
// }else if((b>a && b<c) || (b<a && c>b) ){
//     alert(b);
// }else if((c>a && c<b) || (c<a && c>b)){
//     alert(c);
// }else{
//     alert('your numbers are either equal or incorrect')
// }


let a = parseFloat(prompt('Enter the first number'));
let b = parseFloat(prompt('Enter the second number'));
let c = parseFloat(prompt('Enter the third number'));

if ((a > b && a < c) || (a < b && a > c)) {
    alert(a);
} else if ((b > a && b < c) || (b < a && b > c)) {
    alert(b);
} else if ((c > a && c < b) || (c < a && c > b)) {
    alert(c);
} else {
    alert('Your numbers are either equal or incorrect');
}




