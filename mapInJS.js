/*
Given an array [1,2,3,4,5]. Give me back a new array in which everyvalue is multiplied by 2.

[1,2,3,4,5] --> [2,4,6,8,10]
*/

// Without using map we can writew as :

const inputArray = [1,2,3,4,5];
const outputArray =[];

for (let i = 0; i < inputArray.length; i++) {
    outputArray.push(inputArray[i]*2);
}

console.log("Output Array : "+ outputArray);

// Usin map

/*

Syntax:

    array_name.map( transformation_function/callback );

    --> array_name :- The array on which trasfromation need to perform
    --> transformation_function / callback :- The function that will perfrom transfromation

*/

const ans = inputArray.map((a)=>{
    return 2*a;
})
console.log("Output Array using map : "+ans);


// Example 

/*

Given an array [1,2,3,4,5] , transfrom this array to get new array as [1,8,27,64,125] ?

*/

const arr = [1,2,3,4,5];

const res = arr.map((element)=>{
    return element ** 3;
})

console.log("Result :- "+res);