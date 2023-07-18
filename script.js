function threeSum(arr, target) {
// write your code here
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
		sum = arr[i]+arr[i+1]+arr[i+2];
		if(sum == target + 1){
			return sum;
		}
	}
  return sum;
}

module.exports = threeSum;
