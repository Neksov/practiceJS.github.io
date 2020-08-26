var number = 5;
var string = "hello";
var syn = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4 / 0);
console.log('string' * 9);
let somesing;
console.log(somesing);

let person = {
  name: 'Jone',
  age: 25,
  isMarried: false
};
console.log(person.name);

let arr = ['plus.png', 'orange.png', 'first.png'];
console.log(arr[1]);


//Динамическая типизация

//-to String
//1)
console.log(typeof (String(65)));
//2)
console.log(typeof (String("ww" + "223")));
//На практике


//-to Number
//1)
console.log(typeof (Number('65')));
//2)
console.log(typeof (+'5'));
//3
console.log(typeof (parseInt('15px', 10)));
//На практике
//let ans = +prompt("hello?", '');

let switcher = null;
if (switcher) {
  console.log('Working...');
}
switcher = 1;
if (switcher) {
  console.log('Working...');
}

//3
console.log(typeof (Boolean('65')));