class Solution(object):
    
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        add_nums = 0
        running_sum = []
        for x in nums:
            add_nums = add_nums + x
            running_sum.append(add_nums)
        return running_sum
            
