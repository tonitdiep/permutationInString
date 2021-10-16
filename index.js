567. Permutation in String
Question: 
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false

Constraints:
1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  //algo club pair programming 128 ms runtime
    if(s1.length > s2.length) return false
    
    let s1Array = new Array(26).fill(0)
    let slidingWindowArray = new Array(26).fill(0)
    
    for (let char of s1) {
        // console.log(char.charCodeAt() - 97)
        let idx = char.charCodeAt() - 97
        s1Array[idx]++
    }
    
    //do the window movement
    for(let i = 0; i < s1.length; i++) {
        let idx = s2[i].charCodeAt() - 97
        slidingWindowArray[idx]++
    
    }
    let start = 0, end = s1.length -1

    while(end < s2.length) {
        if(s1Array.join("") === slidingWindowArray.join("")) return true
    
        end++
        if(end === s2.length) break
        
        let oldStart = s2[start].charCodeAt() - 97
        let newEnd = s2[end].charCodeAt() - 97
        
        --slidingWindowArray[oldStart]
        ++slidingWindowArray[newEnd]
      
        start++   

    }
    return false

}