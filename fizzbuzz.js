let fizzbuzz = n => {
    for (var i = 1; i < n; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            console.log("Fizzbuzz!")
        }
        else if (i % 3 == 0) {
            console.log("Fizz!")
        }
        else if (i % 5 == 0) {
            console.log("Buzz!")
        }
        else {
            console.log(i)
        }
    }
}

fizzbuzz(50)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function (a, b) {
        return b - a
    })
    console.log(nums)
    let highest = 0;
    let secondHighest = 0;
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > highest) {
            highest = nums[i];
        }
    }
 
        if (nums[i] > secondHighest && nums[i] < highest) {
        nums[i] = secondHighest}
    
    console.log(secondHighest);
}
getSecondLargest(nums)
