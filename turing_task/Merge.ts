// let a = [1];
// let b = [0];

// var merge = function (nums1: number[], nums2: number[]) {
//   //   nums1 = nums1.filter((item) => item !== 0);
//   //   nums2 = nums2.filter((item) => item !== 0);
//   for (let i = 0; i < nums1.length; i++) {
//     if (nums1[i] === 0) {
//       delete nums1[i];
//     }
//   }
//   for (let i = 0; i < nums2.length; i++) {
//     if (nums2[i] === 0) {
//       delete nums2[i];
//     }
//   }
//   let first;
//   let second;
//   let max_a = Math.max(...nums1);
//   let max_b = Math.max(...nums2);
//   if (max_a > max_b) {
//     first = nums1;
//     second = nums2;
//   } else {
//     second = nums1;
//     first = nums2;
//   }
//   for (let i = 0; i < first.length; i++) {
//     for (let j = 0; j < second.length; j++) {
//       if (second[j] <= first[i]) {
//         first.splice(i, 0, second[j]);
//         delete second[j];
//         break;
//       }
//     }
//   }
//   nums1 = first;
//   return nums1;
// };

// console.log(merge([1, 2, 3, 0, 0, 0], [2, 5, 6]));

let removeElement = function (nums: number[], val: number) {
  return nums.filter((item) => item !== val);
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
