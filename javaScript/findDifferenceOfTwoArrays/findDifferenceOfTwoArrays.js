/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
 var findDifference = function(nums1, nums2) {
    let nums1Set = new Set(nums1)
    let nums2Set = new Set(nums2)
    
     nums1.forEach(el => nums2Set.delete(el))
    nums2.forEach(el => nums1Set.delete(el))
    
    return [[...nums1Set], [...nums2Set]]
};