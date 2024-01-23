/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // max_sum=Number.NEGATIVE_INFINITY;
  // for(let i = 0; i<nums.length; i++){
  //     let curret_sum=0;
  //     for(let j = i; j<nums.length; j++){
  //         curret_sum += nums[j];
  //         if(curret_sum > max_sum){
  //             max_sum = curret_sum
  //         }

  //     }
  // }
  // return max_sum;

  // i have to check at any index, if I should start a new array or should I extend the older one
  // max(nums[i], sum till max[i])

  let previous_subarray_sum = nums[0];
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < previous_subarray_sum + nums[i]) {
      //extend the sub array
      previous_subarray_sum = previous_subarray_sum + nums[i];
      // console.log("extend the sub array");
      nums[i] = previous_subarray_sum;
    } else {
      // start a new subarray
      previous_subarray_sum = nums[i];
      // console.log("start a new subarray");
      nums[i] = previous_subarray_sum;
    }
  }
  for (let j = 0; j < nums.length; j++) {
    // console.log(nums[j]);
    if (nums[j] > max) {
      max = nums[j];
    }
  }
  return max;
};

console.log(maxSubArray([1]));
