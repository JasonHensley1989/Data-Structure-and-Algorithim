// // console.log('hello'); 

// // // algorithm testing

// // // area
// // const findArea = (l, w) => {
// //     let result = l * w;
// //     console.log(result);
// // }

// // findArea(7, 8);

// // // find even numbers

// // const arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];

// // const even = arr.filter(arr => {
// //     return arr % 2 === 0;
// // })

// // console.log(even);

// // // find odd numbers
// // const arr1 = [1, 2, 3, 4, 5, 6, 8, 9, 10];

// // const odd = arr.filter(arr1 => {
// //     return arr1 % 2 !== 0;
// // })

// // console.log(odd);

// // // loop through 1 - 10
// // const count = () => {
// //     let num = 0;
// //     for(let i = 1; i < 11; i++) {
// //         num++; 
// //         console.log(num)
// //     }
// // }
// // count();

// // // reverse 10 - 1
// // const reverseCount = () => {
// //     let num = 10;
// //     for(let i = 10; i > 0; i--) {
// //         num--; 
// //         console.log(num)
// //     }
// // }

// // reverseCount();

// // // count from twenty and log even number
// // const logEven = (num) => {
// //     while(num > 0) {
// //         if(num % 2 === 0) {
// //             console.log(num)
// //         }
// //         num--;
// //     }
// // }

// // logEven(20);

// // // count to 15 and log odd numbers
// // const logOdd = (num) => {
// //     while(num < 16) {
// //         if(num % 2 !== 0) {
// //             console.log(num)
// //         }
// //         num++;
// //     }
// // }

// // logOdd(0);

// // multiply by 3, 5, and 7

// const chooseMult = (num) => {
//     let newArr = [];
//     let result = num * 3;
//     let result1 = num * 5;
//     let result2 = num * 7;
//     newArr.push(result, result1, result2)
//     console.log(newArr)
// }

// chooseMult(10);

// // find direction

// const direction = (num) => {
//     if(num % 5 === 0) {
//         console.log('West')
//     } else if(num % 4 === 0) {
//         console.log('North')
//     } else if(num % 3 === 0) {
//         console.log('South');
//     } else if(num % 2 == 0) {
//         console.log('East')
// }
// }

// direction(18)

// // multiply function
// const multiply = (num, num2) => {
//     let result = num * num2;
//     return result
//   }
  
//   multiply(2, 4)


// // test string for letter x

// const str = 'Hello my friends, I like to play the xylophone';

// // str.indexOf('x');
// if(str.indexOf('a')) {
//     console.log('True')
// } else {
//     console.log('False')
// }

// // test to see if decimal operators work the same as integers
// const testDecimal = (dec, dec2) => {
//     let result = dec * dec2;
//     console.log(result)
// }

// testDecimal(0.2, 0.3);

// // find string length
// const testStr = 'Hell0, my name is Jason Hensley';
// console.log(testStr.length)


// // Array work
// const arr1 = ['Mom', 50, "Anna", 27];
// const arr2 = ['John', 48, "Geo", 28];

// // tests array access
// console.log(arr1[0], arr1[1], arr2[0], arr2[1]);

// // join arrays
// const arr3 = [...arr1, ...arr2];
// console.log(arr3)
// console.log(arr2)

// // square function
// const square = (num, num2, num3, num4) => {
//     const result = num * num;
//     const result2 = num2* num2;
//     const result3 = num3* num3;
//     const result4 = num4 * num4;
//     let finalResult = result + result2 + result3 + result4;
//     console.log(finalResult)
// }

// square(4, 2, 5, 6);

// // convert to opposite number
// const convertNum = (num) => {
//     let result = num * -1;
//     console.log(result)   
// }

// convertNum(10);

// // convert number to string
// const numToString = (num) => {
//     let str = num.toString();
//     console.log(typeof str);
// }

// numToString(2);

// // convert float to integer
// const convertFloat = (float) => {
//     let result = parseInt(float);
//     console.log(result);
// }

// convertFloat(4.4);

// // convert string to array
// const animals = "Dog, Horse, Cow, Racoon";
// let animalArr = animals.split("");
// let animalArr2 = animals.split();
// console.log(animalArr2, animalArr);

// // test array for string and return item index in front
// const line =  ['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep'];
// const line2 =  ['sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep'];
// // need to loop through array, 
// const lineSearch = (arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//         if(arr[i] === 'wolf') {
//             console.log(i)
//         }
//     }
// }

// lineSearch(line);
// lineSearch(line2);

// card counter
count = 0;
const countCard = (card) => {
    switch(card){
        case 1:
            count++;
            console.log(count)
            break;
        case 2:
            count +=2;
            console.log(count);
            break;
        case 3:
            count += 3;
            console.log(count);
            break;
    }
}

countCard(3);
countCard(2);

// traffic light controller
// will take in 3 arrays 
// if array is empty red light
// if array is not empty
// find length of greatest
// and turn light to green
// let north = [];
// let northLight = 'green';
// let west = ['car'];
// let westLight = 'green';
// let east = ['car', 'car', 'truck'];
// let eastLight = 'green';

// const trafControl = (north, west, east) => {
//     if(north == []) {
//         northLight = 'red';
//         console.log(northLight);
//     } else if(west === []) {
//         westLight = 'red';
//         console.log(westLight);
//     } else if(east === []) {
//         eastLight = 'red';
//         console.log(eastLight);
//     }

// }

// trafControl(north, west, east);

// console.log(northLight, westLight, eastLight)

// above problem work in progress

// create function which answers whether name starts with r if yes
// return yes if no etc.

// const playingBanjo = (name) => {
//     let result =  name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + ' banjo';
//     console.log(result);
// }

// playingBanjo('rodney');

// // reverse list order
// const testList = ['a', 'b', 'c']

// const reverseList = (arr) => {
//     let result = arr.reverse();
//     console.log(result);
// }

// reverseList(testList)

// // create palindrome

// const lighter = 'red, liquidy, lights, empty';

// const testLight = (string) => {
//     if(string === 'empty') {
//         return "tis bitch cant light"
//     } else {
//         return 'youlit thje lgith'
//     }
// }

// for(let i = 1; i < 11; i++) {
    
// }

// algorithims for this week plans

// find the square root for three methods

// return stroke count for golf game
// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   // Only change code below this line
//   if(strokes === 1) {
//     return 'Hole-in-one!';
//   } else if(strokes <= par - 2) {
//     return 'Eagle';
//   } else if(strokes === par - 1) {
//     return 'Birdie';
//   } else if(strokes === par) {
//     return 'Par';
//   } else if(strokes === par + 1) {
//     return 'Bogey';
//   } else if(strokes === par  + 2){
//     return 'Double Bogey';
//   } else {
//     return 'Go Home!';
//   }

//   return "Change Me";
//   // Only change code above this line
// }

// golfScore(5, 4);
// object literal insertion function
// next up record colection
// solve linear equations
//solve linear equations
// var x = nerdamer.solve('(x+1)*3=x-6', 'x');
// console.log(x.toString());
// //quadratic
// var x2 = nerdamer.solve('x^2-8x+15', 'x');
// console.log(x2.toString());
// //quadratic algebraically
// var x3 = nerdamer.solve('x^2-ax+3*b', 'x');
// console.log(x3.toString());
// //multiple roots
// var x4 = nerdamer.solve('x^6+41*x^5+652*x^4+5102*x^3+20581*x^2+40361*x+30030', 'x');
// console.log(x4.toString());
// //functions - numerically around to zero up to a predefined range
// var x5 = nerdamer.solve('cos(x)^2+sin(x-1)', 'x');
// console.log(x5.toString());
// //solve a system of linear equations
// var x6 = nerdamer.solveEquations(['2x+y=7', 'x-y+3z=11', 'y-z=-1']);
// console.log(x6.toString());
// //solve a system of nonlinear equations
// var x7 = nerdamer.solveEquations(['3*x^2/y=2', 'z*x*y-1=35', '5*z^2+7=52']);
// console.log(x7.toString());

// function to return power of number
// const pow = () => {
//     return 'something'
// }

// palindrome algorithm
// function validatePalin(str) {  
  
//     // get the total length of the words  
//     const len = string.length;  
  
//     // Use for loop to divide the words into 2 half  
//     for (let i = 0; i < len / 2; i++) {  
  
//         // validate the first and last characters are same  
//         if (string[i] !== string[len - 1 - i]) {  
//             alert( 'It is not a palindrome');  
//         }  
//     }  
//     alert( 'It is a palindrome');  
// }  
  
// // accept the string or number from the prompt  
// const string = prompt('Enter a string or number: ');  
  
// const value = validatePalin(string);  
  
// console.log(value);  

// palindrome 2
// function palindromeFun (str )  
// {  
// // convert the string into an array using the string.split() function  
// const arrValue = string.split (''); //   
  
// // use reverse() method to reverse the array values  
// const reveArrVal = arrValue.reverse();   
  
// // use join() method to group the array values into the string  
// const revString = reveArrVal.join('');  
  
// if (string == revString) // if string condition is equal to the revString  
// {  
// alert('It is a Palindrome string '); // print the Palindrome   
// }  
// else {  
// alert (' It is not a Palindrome string' ); // if the condition is not true.  
// }  
// }  
// // take a string from the user  
// const string = prompt( ' Enter the string to check Palindrome ');  
// const value = palindromeFun (string); // call the function  
// console.log(value); 


// next algo to be more focused on data structures