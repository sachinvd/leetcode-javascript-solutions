//Problem : Single Number
//Description : https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var num;
    let i=0;
    
    while(i < nums.length) {
        //XOR operation of same numbers results into 0 so only number remaining at the end
        //loop is the single number
        
        num = num ^ nums[i];
        i++;
    }
    
    return num;
};
