//Qs1.Write a JavaScript function that returns array elements larger than a number
// let a = Number(prompt("Enter a number"));
// let arr = [2, 8, 6, 5, 1, 4];
// function larger(arr, a) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > a) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(larger(arr, a));

//Qs2.Write a JavaScript function to extract unique characters  from a string.Example:str=“abcdabcdefgggh”ans=“abcdefgh”
// let country = ["Australia", "Germany", "UnitedStatesofAmerica"];

// function longestcountry(country) {
//   let longest = country[0];
//   for (let i = 1; i < country.length; i++) {
//     if (country[i].length > longest.length) {
//       longest = country[i];
//     }
//   }
//   return longest;
// }

// console.log(longestcountry(country)); // Output: UnitedStatesofAmerica

//Qs3.Write a JavaScript function that accepts a listof 
//countrynames as input and returns the longest country name as output
//.Example:country=["Australia","Germany","UnitedStatesofAmerica"] output:"UnitedStatesofAmerica"
// function countvowels(str) {
//     let count = 0;
//     str = str.toLowerCase();
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   let str = prompt("Please enter a string:");
//   console.log(countvowels(str));
  
//Qs4 .Write a JavaScript function to count the number of vowels in a String argument
// let str = prompt("please enter a string");
// function countvowels(str){
//     let count = 0;
//     let char = str.toLowerCase();
//     for(let i =0;i<str.length;i++){
//         if(char[i]=='a'||char[i]=='e'||char[i]=='i'||char[i]=='o'||char[i]=='u'){
//             count++;
//             return count;
//         }
//     }
// }
// console.log(countvowels(str));
//Qs5.Write a JavaScript function to generate a random number with in a range(start,end)
let start = 100;
let end = 200;
function generateRandom(start,end){
    let diff = end-start;
    return Math.floor(Math.random()*diff)+start;
}
// Math.random() → gives a random number between 0 and 1 (not including 1).

// Multiply by (end - start + 1) → scales it to desired range.

// Add start → shifts range from 0–(end-start) to start–end.

// Math.floor() → converts to integer.
