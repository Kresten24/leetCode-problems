/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
 var twoOutOfThree = function(nums1, nums2, nums3) {
    let res = []
    res.push(...nums1.filter(num=> nums2.includes(num) || nums3.includes(num)))
    res.push(...nums2.filter(num=> nums1.includes(num) || nums3.includes(num)))
    return [...(new Set(res))]
};