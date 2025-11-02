//1)
// let arr = [1,2,3,4,5,6,2,3]
// let num  = 2;
// for(let i =0;i<arr.length;i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);
//2)
// let num  = 287152;
// let count  = 0;
// while(num > 0){
//     num = Math.floor(num/10);
//     count++;
// }
// console.log(count);
// 3) sum of digits in a number 
// let num = 287152;
// let sum = 0;
// while(num>0){
//     rem = num%10;
//     num = Math.floor(num/10);
//     sum = sum + rem;
// }
// console.log(sum);
//4) factorial of a  number 
// let num =5;
// let product =1;
// for(let i = num;i>=1;i--){
//     product = product*i;
// }
// console.log(`factorial of ${num}is ${product}`);
//5)find largest element in the array 
let arr = [2,8,16,45,12,5]
let largest = 0;
for(let i =0;i<arr.length;i++){
    if(largest<arr[i]){
        largest = arr[i];
    }
}
console.log(largest);


