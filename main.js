console.log('hello'); 

// algorithm testing

// area
const findArea = (l, w) => {
    let result = l * w;
    console.log(result);
}

findArea(7, 8);

// find even numbers

const arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];

const even = arr.filter(arr => {
    return arr % 2 === 0;
})

console.log(even);

// find odd numbers
const arr1 = [1, 2, 3, 4, 5, 6, 8, 9, 10];

const odd = arr.filter(arr1 => {
    return arr1 % 2 !== 0;
})

console.log(odd);

// loop through 1 - 10
let num = 0;
for(let i = 1; i < 11; i++) {
    num++; 
    console.log(num)
}

