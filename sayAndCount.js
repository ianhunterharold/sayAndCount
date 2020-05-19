// /**
//  * @param {number} n
//  * @return {string}
//  */
let totalIterations = 1;
 
let nums = [1];

const countAndSay = (n) => {

while (totalIterations < n){

  let arr= [];
  
  var occurance = 1;

  for (let i = 0; i <nums.length;i++){

    let value = nums[i]; 
    
    if (nums[i] === nums[i + 1]){
      occurance += 1;
    } 

    if (nums[i] !== nums[i + 1] || !nums[i + 1]){
      let buildingNextNumber = arr.push(occurance,value);
      occurance = 1;
    }  
  }

    nums = arr; // resetting the initial arr
   
    totalIterations += 1; // increment by one 

  countAndSay(n,nums)
}
// take the nums array and turn it into a string value 
let turnToStr = nums.join('');

return turnToStr;
};


countAndSay(1);

// solve as a human

// iterate n number of times recursively, making the new number every time 
// its count then number to be built in the string 
// stop when you hit n number of recursions 

// solve as a dev
// iterate until n has been satisfied 
// build out the number based on count and then on number 
// return final number as a string 

// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

// Note: Each term of the sequence of integers will be represented as a string.



// Example 1:

// Input: 1
// Output: "1"
// Explanation: This is the base case.
// Example 2:

// Input: 4
// Output: "1211"
// Explanation: For n = 3 the term was "21" in which we have two groups "2" and "1", "2" can be read as "12" which means frequency = 1 and value = 2, the same way "1" is read as "11", so the answer is the concatenation of "12" and "11" which is "1211".