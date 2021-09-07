class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start = maxLength = 0
        curString = {}
        
        for i in range(len(s)):
            if s[i] in curString and start <= curString[s[i]]:
                start = curString[s[i]] + 1
            else:
                maxLength = max(maxLength, i - start + 1)
                
            curString[s[i]] = i
            
        return maxLength
        