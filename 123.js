'use strict'

function adder (a, b) {
    let sum = a + b;
    return console.log(sum);
}

adder(1, 2)

const add = (a, b) => {
    return a + b;
}

console.log(add(2, 3))

let arr = []

let obj = {}

const check = (a) => {
    if (a >= 18 ) {
        return 'OK'
    }
    else {
        return 'ne ok'
    }
}

console.log(check(19))

const age = (a) => {
    return a >= 18 ? a : 'ne ok'
}

console.log(age(10))

const num = (a, b) => {
    return a > b ? a : b
}

console.log(num(10, 12))

const pow = (a, b) => {
    let res = 1;
    for(let i = 0; i < b; i++) {
        res *= a;
    }
    return res;
}
console.log(pow(2, 3))

const sumToN = (a) => {
    let b = 0;
    for(let i = 0; i <= a; i++) {
        b += i;
    }
    return b;
}
 console.log(sumToN(4))


 const checkAge = (a) => {
     if (a <= 14 && a >= 90) {
         return console.log(' hui')
     } 
     return console.log('qwe')
 }

 checkAge(5)

 for (let i = 2; i <= 10; i += 2) {
     console.log(i)
 }

 let a = 0;
 while (a < 3) {
     console.log(a++)
 }
 console.log('-------------------------')

let isSimple = true;
 for (let i = 2; i <= 10; i++) {
    isSimple = true;
     for (let x = i - 1; x > 1; x--) {
        if ((i % x) === 0){
             isSimple = false;
        }
     }
     if(isSimple === true) console.log(i);
 }

 console.log('~~~~~~~~~~~~~~~~~')


 const min = (a, b) => {
    return a < b ? a : b
 }
 console.log(min(7, 6))


const ucFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1)
}
console.log(ucFirst('asdfghkjk'))

const target1 = 'xxx'

const checkSpam = (str) => {
    let pos = 0 
    const newStr = str.toLowerCase()
    while((pos = newStr.indexOf(target1, pos + 1)) != -1) 
    return false
    return true;
}

console.log(checkSpam('elskbdkl'))

const truncate = (str, maxLength) => {
    return (str.length > maxLength) ?
    str.slice(0, maxLength - 3) + '...' : str;
}
console.log(truncate('fgDDDDDDDDDDDDDDDDDDDDDDDDDDDh', 10))


const extract = (str) => str.slice(1);
console.log(extract('$120'))

const user = {
    'Имя' : 'vasia'
};
user.name = 'Vasia';
user.surname = 'Hui';
user.name = 'Seryi';
delete user.surname

console.log(user['Имя'])



console.log('+++++++++++++++++++++++++++++++++++++++++++')

const isEmpty = (obj) => {
    for(let key in obj) {
        return false
    }
    return true
}

let schedule = {};
console.log(isEmpty(schedule))

schedule['8:30'] = 'vstavai'
console.log(isEmpty(schedule))


let salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
  };

let counter = 0
const howMuch = (obj) => {
    for(let key in obj){
        counter += obj[key]       
    }
    return counter
}
console.log(howMuch(salaries))


let salaries1 = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
  };

  const theBest = (obj) => {
      let max = 0;
      for(let key in obj){
            if(max < obj[key]){
              max = obj[key]
          }
        }
     return max
  }

  console.log(theBest(salaries1))

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

const mult = (obj) => {
    for(let prop in obj){
        typeof(obj[prop]) === 'number' ? obj[prop] = obj[prop] * 2 : null;
    }
    return obj;
}



console.log(typeof(1));

// const multiply = (obj) => {
//     for(let key in obj) {
//            obj[key] *= 2
//     }
//     return obj
// }
console.log(mult(menu))

let fruits = ['sdf','dsfwe', 'sdfkjerhnd']

console.log(fruits.pop())

fruits[fruits.length] = 'hui'
console.log(fruits)

let styles = ['jazz', 'bluesz']
styles.push('rock')
styles[styles.length - 2] = 'classic'
console.log(styles.shift())
styles.unshift('rap', 'reggie')
console.log(styles)


const min = 0;
const max = styles.length - 1;
const rand = min + Math.floor(Math.random() * (max + 1 - min));
console.log(styles[rand])

const find = (arr, value) => {
	for(let i = 0; i < arr.length; i++){
		 if(arr[i] === value){
			 return i
		 }
	} 
 return -1
}
console.log(find(fruits, 'dsfwe'))

const find1 = (arr, value) => {
	const index = arr.indexOf(value)
	return index != -1 ? index : -1
}
console.log(find1(fruits, 'dsfwe'))

let numbers = [1, 7, 3, 9, 10, 1111, 5, 8, 2]

const filterRange = (arr, a, b) =>{
	let arr1 = [];
	for(let i = 0; i < arr.length; i++){
		if(arr[i] <= a || arr[i] >= b) {
			delete arr[i];
		}
		else arr1.push(arr[i]);
	}
	return arr1;
}

console.log(filterRange(numbers, 2, 8))

let hundred = []; 
for(let i = 2; i <= 30; i++) {
	hundred[i - 2] = i
}


const Eratosfen = (arr) =>{
	for(let i = 1; i < arr.length; i++){
		if(arr[i] % arr[0] === 0) arr.splice(i, 1);
	}
	return arr
}

console.log(Eratosfen(hundred))

var names = 'Маша, Петя, Марина, Василий';

var arr = names.split(', ');

for (var i = 0; i < arr.length; i++) {
  console.log( 'Вам сообщение ' + arr[i] );
}
*/

let zas = {
  className: 'open menu menu hui'
}


const removecls = (obj, cls) => {
	let arr = obj.className.split(' ');
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] === cls) {
			arr.splice(i, 1);
			i--;
		}
	}
	return arr
}

console.log(removecls(zas, 'menu'))

let numeros = [1,8,4,6,2,7];
const filterRange = (arr, a, b) => {
	for(let i = 0; i < arr.length; i++){
		if(arr[i] < a || arr[i] > b) {
			arr.splice(i, 1)
			i--;
		}
	}
	return arr;
}
console.log(filterRange(numeros, 2, 7))


const reverse = (a, b) => {
	return a - b;
}

console.log(numeros.sort(reverse))