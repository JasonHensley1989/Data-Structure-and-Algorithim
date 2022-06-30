// console.log('hello'); 

// // algorithm testing

// // area
// const findArea = (l, w) => {
//     let result = l * w;
//     console.log(result);
// }

// findArea(7, 8);

// // find even numbers

// const arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];

// const even = arr.filter(arr => {
//     return arr % 2 === 0;
// })

// console.log(even);

// // find odd numbers
// const arr1 = [1, 2, 3, 4, 5, 6, 8, 9, 10];

// const odd = arr.filter(arr1 => {
//     return arr1 % 2 !== 0;
// })

// console.log(odd);

// // loop through 1 - 10
// const count = () => {
//     let num = 0;
//     for(let i = 1; i < 11; i++) {
//         num++; 
//         console.log(num)
//     }
// }
// count();

// // reverse 10 - 1
// const reverseCount = () => {
//     let num = 10;
//     for(let i = 10; i > 0; i--) {
//         num--; 
//         console.log(num)
//     }
// }

// reverseCount();

// // count from twenty and log even number
// const logEven = (num) => {
//     while(num > 0) {
//         if(num % 2 === 0) {
//             console.log(num)
//         }
//         num--;
//     }
// }

// logEven(20);

// // count to 15 and log odd numbers
// const logOdd = (num) => {
//     while(num < 16) {
//         if(num % 2 !== 0) {
//             console.log(num)
//         }
//         num++;
//     }
// }

// logOdd(0);

// multiply by 3, 5, and 7

const chooseMult = (num) => {
    let newArr = [];
    let result = num * 3;
    let result1 = num * 5;
    let result2 = num * 7;
    newArr.push(result, result1, result2)
    console.log(newArr)
}

chooseMult(10);

// find direction

const direction = (num) => {
    if(num % 5 === 0) {
        console.log('West')
    } else if(num % 4 === 0) {
        console.log('North')
    } else if(num % 3 === 0) {
        console.log('South');
    } else if(num % 2 == 0) {
        console.log('East')
}
}

direction(18)

// multiply function
const multiply = (num, num2) => {
    let result = num * num2;
    return result
  }
  
  multiply(2, 4)


// test string for letter x

const str = 'Hello my friends, I like to play the xylophone';

// str.indexOf('x');
if(str.indexOf('a')) {
    console.log('True')
} else {
    console.log('False')
}

