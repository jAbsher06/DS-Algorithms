class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        res = []
        length = len(nums)
        for i in range(0, length):
            for j in range(i + 1, length):
                if nums[i] + nums[j] == target:
                    res.append(i)
                    res.append(j)
                    return res
                    
                    
        