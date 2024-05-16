/*

Given an array , return an even numbers array 
*/


const inputArr = [1,2,3,4,5];

const ans = inputArr.filter((n)=>{
    return (n%2==0) ? true : false;
})

console.log("Ans :",ans)