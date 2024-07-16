/*Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.*/

/*Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.*/


/*let input1 = [[1,3], [2,6], [8,10], [15,18]];//[[1,6], [8,10], [15,18]]
let input2 = [[1,4], [4,5]];//[[1,5]]
let input3 = [[11,12], [2,3], [5,7], [1,4], [8,10], [6,8]];//[[1,4], [5,10], [11,12]]

function marge(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [intervals[0]];

  for (let interval of intervals) {
    let recent = result[result.length - 1];
    if (recent[1] >= interval[0]) {
      recent[1] = Math.max(recent[1], interval[1]);
    } else {
      result.push(interval);
    }
  }
  return result;
}
console.log(marge(input1));
console.log(marge(input2));
console.log(marge(input3));
*



/*Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.*/

/* Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted. */


const input1 = [1,2,2,1];
const input2 = [2,2];
//output: [2,2]

const input3 = [4,9,5];
const input4 = [9,4,9,8,4];
//output: [4,9] or [9,4]

let intersect = function (nums1, nums2) {
  let result = [];

  let map = nums1.reduce((acc, i) => {
    acc[i] = acc[i] ? acc[i] + 1 : 1;
    return acc;
  }, {});

  for (let i = 0; i < nums2.length; i++) {
    let current = nums2[i];
    let currentMapItem = map[current];

    if (currentMapItem && currentMapItem > 0) {
      result.push(current);
      map[current] = currentMapItem - 1;
    }
  }

  return result;
};


console.log(intersect(input1,input2));
console.log(intersect(input3,input4));