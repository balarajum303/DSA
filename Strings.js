// /////////////////// 1. reverse String //////////////////////////
// function reverse(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverse("Balu"));
// --------------------------------------------------
// function reverse(str) {
//   res = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     res = res + str[i];
//   }
//   return res;
// }
// console.log(reverse("Balu"));
// -----------------------------------------------------
// function reverse(str) {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     res = str[i] + res;
//   }
//   return res;
// }
// console.log(reverse("Balu"));
// --------------------------------------------------------
// function reverse(str) {
//   res = "";
//   str.split("").forEach((element) => {
//     res = element + res;
//   });
//   return res;
// }
// console.log(reverse("Balu"))
// --------------------- with recursion ------------------------
// function reversed(str){
//         if(str==""){
//             return str;
//         }
//         else{
//             return reversed(str.substr(1))+str[0]
//         }
//     }
//     console.log(reversed("balu"))
// /////////////////// 2.String is palindrome or not //////////////////////////
// function palindrome(str){
//     let cleanedStr=str.replace(/[^A-Za-z0-9]/g,"").toLowerCase()
//     return cleanedStr === cleanedStr.split("").reverse().join("")
// }
// console.log(palindrome("A man, a plan, a canal, Panama")) // true
// -------------------------------------------------
// function palindrome(str) {
//   let cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
//   return cleanedStr === cleanedStr.split("").reduce((acc, cur) => cur + acc);
// }
// console.log(palindrome("A man, a plan, a canal, Panama"));
// ----------------------using two pointers----------------------
// function isPalindrome(str) {
//     let left = 0, right = str.length - 1;
//     while (left < right) {
//         if (str[left] !== str[right]) return false;
//         left++;
//         right--;
//     }
//     return true;
// }
// console.log(isPalindrome("radar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false
// /////////////////// 3.find repeating and non-repeating char in string //////////////////////////
// function repeatingAndnonrepeating(str) {
//   let repeat = [];
//   let nonRepeat = [];

//   for (let i = 0; i < str.length; i++) {
//     let count = 0;
//     for (let j = 0; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         count++;
//       }
//     }
//     if (count > 1 && !repeat.includes(str[i])) {
//       repeat.push(str[i]);
//     } else if (count === 1) {
//       nonRepeat.push(str[i]);
//     }
//   }
//   return { repeat, nonRepeat };
// }

// console.log(repeatingAndnonrepeating("bbaaluu"));
// /////////////////// 4.remove duplicates and display duplicates in a string ////////////////////////
// function repeatingAndnonrepeating(str) {
//   let repeat = [];
//   let nonRepeat = [];
//   for (let i = 0; i < str.length; i++) {
//     if (!repeat.includes(str[i])) {
//       repeat.push(str[i]);
//     } else if (!nonRepeat.includes(str[i])) {
//       nonRepeat.push(str[i]);
//     }
//   }
//   return { repeat, nonRepeat };
// }
// console.log(repeatingAndnonrepeating("bbaaluu")); //{ repeat: [ 'b', 'a', 'l', 'u' ], nonRepeat: [ 'b', 'a', 'u' ] }
// ////////////////5. first non repeating character in a string ///////////////////////
// function repeatingAndnonrepeating(str) {
//   let repeat = [];
//   let nonRepeat = [];

//   for (let i = 0; i < str.length; i++) {
//     let count = 0;
//     for (let j = 0; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         count++;
//       }
//     }
//     if (count > 1 && !repeat.includes(str[i])) {
//       repeat.push(str[i]);
//     } else if (count === 1) {
//       nonRepeat.push(str[i]);
//     }
//   }
//   let firstNonRepeat = nonRepeat[0];
//   return { repeat, nonRepeat, firstNonRepeat };
// }

// console.log(repeatingAndnonrepeating("bbaaluukmn"));
// -----------------------------------------------------------
// function firstNonRepeat(str) {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//       return (res = str[i]);
//     }
//   }
//   return null;
// }
// console.log(firstNonRepeat("baluuuaak"));
// ----------------------------------------------------------
// function firstNonRepeatingChar(str) {
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       // Check if the character is unique
//       console.log("indexes",str.indexOf(char) )
//       console.log("last-indexes",str.lastIndexOf(char))
//       if (str.indexOf(char) === str.lastIndexOf(char)) {
//         return char; // Return the first non-repeating character
//       }
//     }
//     return null; // Return null if no non-repeating character is found
//   }
// console.log(firstNonRepeatingChar("balubaaa"))
// ---------------------h.o.f (find method)-------------
// function firstNonRepeat(str) {
//   let arr = str.split("");
//   return arr.find(
//     (element) => arr.indexOf(element) === arr.lastIndexOf(element)
//   );
// }
// console.log(firstNonRepeat("baballuru"))
// /////////////////////////////////////6. find num of vowels in a string ///////////////////////
// function vowels(str) {
//   let matches = str.match(/[aeiou]/g);
//   return matches ? matches.length : 0
// }
// console.log(vowels("hello world"))
// -------------------------------------------
// function countVowel(str){
//     let vowels="aeiou"
//     let count=0;
//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)) count++
//     }
//     return count
// }
// console.log(countVowel("baluA"))
// /////////////////////// 7. find longest word in a string /////////////////////////
// function longest(str) {
//   let arr = str.split(" ");
//   return arr.reduce((acc, cur) => cur.length > acc.length ? cur : acc,);

// }
// console.log(longest("I love programming"))
// ---------------------------------------------------------------
// function longest(str) {
//   const words = str.split(" ");
//   let max = "";
//   for (let word of words) {
//     if (word.length > max.length) max = word;
//   }
//   return max
// }
// console.log(longest("my self Balu"))
// /////////////////////// 8. find  Second longest word in a string /////////////////////////
// function secondLongestWord(str) {
//   let words = str.split(" ");
//   let longest = "";
//   let secondLongest = "";

//   for (let word of words) {
//     if (word.length > longest.length) {
//       secondLongest = longest;
//       longest = word;
//     } else if (word.length > secondLongest.length && word !== longest) {
//       secondLongest = word;
//     }
//   }

//   return secondLongest || null;
// }
// console.log(secondLongestWord("I love programming and problem solving")); // Output: "problem"
// /////////////////////// 9. check two strings are Anagrams /////////////////////////
// function anagrams(str1, str2) {
//     console.log(str1.split("").sort())
//     console.log(str2.split("").sort())

//   const clearStr1 = str1.split("").sort().join("");
//   const clearStr2=str2.split("").sort().join("")
//   return clearStr1===clearStr2
// }
// console.log(anagrams("baluzx","lubaxz")) // output true
// console.log(anagrams("baluzx","lubaxzz")) // output false
// --------------------------------------------------------
// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) return false;

//     const count = {};
//     for (const char of str1) {
//         count[char] = (count[char] || 0) + 1;
//     }
//     for (const char of str2) {
//         if (!count[char]) return false;
//         count[char]--;
//     }
//     return true;
// }
// console.log(isAnagram("listen", "silent")); // Output: true
// console.log(isAnagram("hello", "world"));   // Output: false
// /////////////////////// 10. find all permutations in a string /////////////////////////
// ------------------------for small strings -------------------------------
// function getPermutations(str) {
//   let res = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       if (i === j) continue;
//       for (let k = 0; k < str.length; k++) {
//         if (k == i || k == j) continue;
//         res.push(str[i] + str[j] + str[k]);
//       }

//     }
//   }
//   return res;
// }
// console.log(getPermutations("abc"));
//---------------------------------------------------
// function getPermutations(str) {
//   if (str.length <= 1) {
//     return [str];
//   }

//   let permutations = [];
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     console.log("slc1",str.slice(0, i))
//     // console.log("slc2",str.slice( i+1))
//     const remainingChars = str.slice(0, i) + str.slice(i + 1);
//     const remainingPermutations = getPermutations(remainingChars);

//     for (let perm of remainingPermutations) {
//       permutations.push(char + perm);
//     }
//   }

//   return permutations;
// }

// console.log(getPermutations("abc")); // Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
// ------------------------------------using reduce ---------------------------------
// function getPermutationsReduce(str) {
//     return str.split("").reduce((acc, char, i) => {
//       let newPermutations = [];
//       acc.forEach((perm) => {
//         for (let j = 0; j <= perm.length; j++) {
//           newPermutations.push(perm.slice(0, j) + char + perm.slice(j));
//         }
//       });
//       return newPermutations;
//     }, [""]);
//   }

//   // Example
//   console.log(getPermutationsReduce("abc"));
//   // Output: ['abc', 'bac', 'bca', 'acb', 'cab', 'cba']
// --------------------------------------------------
// function getPermutationsIterative(str) {
//     let result = [str[0]];

//     for (let i = 1; i < str.length; i++) {
//       let newResult = [];
//       for (let perm of result) {
//         for (let j = 0; j <= perm.length; j++) {
//           newResult.push(perm.slice(0, j) + str[i] + perm.slice(j));
//         }
//       }
//       result = newResult;
//     }

//     return result;
//   }

//   // Example
//   console.log(getPermutationsIterative("abc"));
//   // Output: ['abc', 'bac', 'bca', 'acb', 'cab', 'cba']

// /////////////////////// 11. Capitalize first letter of each word /////////////////////////
// function Capitalize(str) {
//   let arr = str.split(" ");
//   console.log(arr)
//   return arr.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
// }
// console.log(Capitalize("balu"))
// //--------------------------------------------------------------------
// function capitalizeWords(str) {
//     return str.split(" ").reduce((acc, word) => {
//       return acc + (acc ? " " : "") + word.charAt(0).toUpperCase() + word.slice(1);
//     }, "");
//   }

//   // Example
//   console.log(capitalizeWords("hello world from javascript"));
//   // Output: "Hello World From Javascript"
// ------------------------ ---------------------
// function Capitalize(str) {
//   let arr = str.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     arr[i]=arr[i][0].toUpperCase() + arr[i].slice(1)
//   }
//   return arr.join(" ")
// }
// console.log(Capitalize("balu i love you"))
// ----------------------------------------------------
// function Capitalize(str) {
//   let arr = str.split(" ");
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
//   }
//   return res.join(" ")
// }
// console.log(Capitalize("balu i love you"));
// //////////////////////////////// 12.Count the Frequency of Each Character in a String////////////////////////
// function charFrequency(str) {
//     const freq = {};
//     for (const char of str) {
//         freq[char] = (freq[char] || 0) + 1;
//     }
//     return freq;
// }
// console.log(charFrequency("banana"));
// // Output: { b: 1, a: 3, n: 2 }
// /--------------------------------------------
// function charFrequency(str) {
//     const freq = new Map();
//     for (const char of str) {
//         freq.set(char, (freq.get(char) || 0) + 1);
//     }
//     return Object.fromEntries(freq);
// }
// console.log(charFrequency("banana"));
// // Output: { b: 1, a: 3, n: 2 }
// -------------------------------------------
// function charFrequency(str) {
//   let frequency = {};
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     console.log("char", char); //check char
//     console.log("frequency",frequency)
//     frequency[char] = (frequency[char] || 0 ) + 1;
//     console.log("frequency-char",frequency[char])
//   }
//   return frequency;
// }

// // Example
// console.log(charFrequency("hello world"));
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
// ------------------------------------------------
// function charFrequency(str) {
//     let frequency = {};
//     for (const char of str) {
//       frequency[char] = (frequency[char] || 0) + 1;
//     }
//     return frequency;
//   }

//   // Example
//   console.log(charFrequency("hello world"));
//   // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
// //---------------------------------------------------
// function charFrequency(str) {
//   return str.split(" ").reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     return acc;
//   }, {});
// }

// // Example
// console.log(charFrequency("hello world"));
// // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
// ------------frequency only but except some word--------------------
// function freq(str, valueText) {
//   let arr = str.split(" ");
//   let res = [];
//   for (i = 0; i < arr.length; i++) {
//     // if (arr[i] !== valueText) {
//     //   res[arr[i]] = (res[arr[i]] || 0) + 1;
//     // }
//     if (arr[i] === valueText) {
//       continue;
//     }
//     res[arr[i]] = (res[arr[i]] || 0) + 1;
//   }
//   return res;
// }
// console.log(freq("hai balu hai ra hai nanna balu nanna balu nanna", "hai")); //[ balu: 3, ra: 1, nanna: 3 ]

///////////////////////////////////////////////////13. combinations of a string /////////////////////////////////////////
// function getAllCombinations(str) {
//   let res = [];

//   function combine(prefix, remaining) {
//     for (let i = 0; i < remaining.length; i++) {
//       let newCombo = prefix + remaining[i];
//       res.push(newCombo);
//       combine(newCombo, remaining.slice(i + 1));
//     }
//   }
//   combine("", str);
//   return res;
// }
//--------------------------------------------------------------------------------////////////
// function getAllCombinations(prefix, str, res = []) {
//   for (let i = 0; i < str.length; i++) {
//     let newCombo = prefix + str[i];
//     res.push(newCombo);
//     getAllCombinations(newCombo, str.slice(i + 1), res);
//   }
//   return res;
// }

// console.log(getAllCombinations("", "abc"));
//////////////////////////////////////////////14. longest common prefix //////////////////////////////////
// function longestCommonPrefix(arr) {
//   if (arr.length === 0) return "";
//   let prefix = "";
//   for (let i = 0; i < arr[0].length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[j][i] !== arr[0][i]) {
//         return prefix;
//       }
//     }
//     prefix += arr[0][i];
//   }
//   return prefix;
// }
// console.log(longestCommonPrefix(["flower", "flow", "fly"]));
//////////////////////////////////15. Check if One String is a Rotation of Another///////////////////
// function isRotation(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   return (str1 + str1).includes(str2);
// }

// // Test
// console.log(isRotation("abcd", "cdab")); // true
// console.log(isRotation("abcd", "acbd")); // false

/////////////////////////16. Longest Palindromic Substring///////////////////////////
// function longestSubString(s) {
//   if (s.length <= 1) return s;
//   let start = 0,
//     end = 0;
//   for (let i = 0; i < s.length; i++) {
//     let len1 = expandFromCenter(s, i, i); // odd length palindrome
//     let len2 = expandFromCenter(s, i, i + 1); // even length palindrome

//     function expandFromCenter(s, left, right) {
//       while (left >= 0 && right < s.length && s[left] === s[right]) {
//         left--;
//         right++;
//       }
//       return right - left - 1;
//     }

//     let len = Math.max(len1, len2);
//     if (len > end - start) {
//       start = i - Math.floor((len - 1) / 2);
//       end = i + Math.floor(len / 2);
//     }
//   }
//   return s.slice(start, end + 1);
// }

// console.log(longestSubString("babc"));
/////////////////////////17.Simple Brute Force Substring Search//////////////////////////
// console.log("abxabcabcaby".indexOf("abcaby")); // Output: 6
// console.log("hello world".indexOf("world"));   // Output: 6
// console.log("abcd".indexOf("ef"));             // Output: -1
//------------------------------------------------------------------------------------------------
// function simpleSearch(text, pattern) {
//   let n = text.length,
//     m = pattern.length;
//   for (let i = 0; i <= n - m; i++) {
//     let j = 0;
//     while (j < m && text[i+j] === pattern[j]) {
//       j++;
//     }
//     if(j===m) return i;
//   }
//   return -1
// }
// console.log(simpleSearch("abc", "bc"));
//-------------KMP(Knuth-Morries-Prott) Algorithm-------------------------///////
// Step 1: Build the LPS array
// function buildLPS(pattern) {
//   const lps = new Array(pattern.length).fill(0);
//   let len = 0;
//   let i = 1;

//   while (i < pattern.length) {
//     if (pattern[i] === pattern[len]) {
//       len++;
//       lps[i] = len;
//       i++;
//     } else {
//       if (len !== 0) {
//         len = lps[len - 1];
//       } else {
//         lps[i] = 0;
//         i++;
//       }
//     }
//   }
//   return lps;
// }

// // Step 2: Use LPS in the main KMP search
// function KMP(text, pattern) {
//   if (pattern.length === 0) return 0;

//   const lps = buildLPS(pattern);
//   let i = 0; // index for text
//   let j = 0; // index for pattern

//   while (i < text.length) {
//     if (text[i] === pattern[j]) {
//       i++;
//       j++;
//     }

//     if (j === pattern.length) {
//       return i - j; // pattern found
//     } else if (i < text.length && text[i] !== pattern[j]) {
//       if (j !== 0) {
//         j = lps[j - 1];
//       } else {
//         i++;
//       }
//     }
//   }

//   return -1; // pattern not found
// }

// // Test
// console.log(KMP("abxabcabcaby", "abcaby")); // Output: 6
// console.log(KMP("hello world", "world"));   // Output: 6
// console.log(KMP("abcd", "ef"));             // Output: -1
// console.log(KMP("abc","bc"))                // 1

/////////////17. string pattern matching ///////////////////////////////
// function findAllOccurrences(text, pattern) {
//   const result = [];
//   let index = text.indexOf(pattern);

//   while (index !== -1) {
//     result.push(index);
//     index = text.indexOf(pattern, index + 1); // search from next position
//   }

//   return result;
// }

// // Test
// console.log(findAllOccurrences("abcdedede", "de")); // Output: [3, 5, 7]

//------------------------------------------------------------------------------------
// function simpleSearch(text, pattern) {
//   let n = text.length,
//     m = pattern.length;
//     let res=[]
//     // for (let i = 0; i <= n - m; i++) {
//     //   if (text.substring(i, i + m) === pattern) {
//     //     res.push(i);
//     //   }
//     // }
//   for (let i = 0; i <= n - m; i++) {
//     let j = 0;
//     while (j < m && text[i + j] === pattern[j]) {
//       j++;
//     }
//     if (j === m){
//         res.push(i)
//     }
//   }
//   return res;
// }
// console.log(simpleSearch("abcdedede", "de"));   //[3,5,7]

//-----------------------------Z-Algorithm (Pattern Search)-----------------------------------
// function ZAlgorithm(text, pattern) {
//   const combined = pattern + "$" + text; // pattern still goes first in the combined string
//   const Z = new Array(combined.length).fill(0);
//   const result = [];

//   let left = 0, right = 0;

//   for (let i = 1; i < combined.length; i++) {
//     if (i <= right) {
//       Z[i] = Math.min(right - i + 1, Z[i - left]);
//     }

//     while (
//       i + Z[i] < combined.length &&
//       combined[Z[i]] === combined[i + Z[i]]
//     ) {
//       Z[i]++;
//     }

//     if (i + Z[i] - 1 > right) {
//       left = i;
//       right = i + Z[i] - 1;
//     }

//     if (Z[i] === pattern.length) {
//       result.push(i - pattern.length - 1); // Adjust index for combined string
//     }
//   }

//   return result;
// }

// // Test
// console.log(ZAlgorithm("abcdedede", "de")); // [3, 5, 7]
///////////////////////////////////////////////////18.Group anagrams ///////////////////////////////////////////

// function groupAnagram(words) {
//   let map = {};
//   for (let word of words) {
//     let key = word.split("").sort().join("");

//     if (!map[key]) {
//       map[key] = [];
//     }
//     map[key].push(word);
//   }
//   // console.log("map", map);  //map { aet: [ 'eat', 'tea', 'ate' ], ant: [ 'tan', 'nat' ], abt: [ 'bat' ] }
//   return Object.values(map);
// }
// console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
// // Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

////////////////////////////////////////////////19. isomorphic strings ///////////////////////////
// function isomorphic(s, t) {
//   if (s.length !== t.length) return false;
//   let mapST = {},
//     mapTS = {};

//   for (let i = 0; i < s.length; i++) {
//     let c1 = s[i];
//     let c2 = t[i];
//     if ((mapST[c1] && mapST[c1] !== c2) || (mapTS[c2] && mapTS[c2] !== c1)) {
//       return false;
//     }
//     mapST[c1] = c2;
//     mapTS[c2] = c1;
//   }
//   return true;
// }
// console.log(isomorphic("add", "egg"));
// console.log(isomorphic("abc", "dee"));

///////////////////////////////////////////////20.Encode and Decode ////////////////////////////////////////////

// Encoding: Add the length of each word followed by a special character (e.g., '#') and the word
// function encode(strs) {
//   return strs.map(s => s.length + "#" + s).join('');
// }

// // Decoding: Read length, skip '#', then extract that many characters
// function decode(s) {
//   const res = [];
//   let i = 0;

//   while (i < s.length) {
//     let j = i;
//     while (s[j] !== "#") j++;
//     const length = parseInt(s.slice(i, j));
//     const word = s.slice(j + 1, j + 1 + length);
//     res.push(word);
//     i = j + 1 + length;
//   }

//   return res;
// }

// // Example
// const original = ["leet", "code", "123"];
// const encoded = encode(original);
// console.log("Encoded:", encoded);  // Output: "4#leet4#code3#123"

// const decoded = decode(encoded);
// console.log("Decoded:", decoded);  // Output: ["leet", "code", "123"]

////////////////////////////////////////// 21.check number or not ////////////////////////////////////////////////////////////
// function isNumber(num) {
//     return num.trim() !== "" && !isNaN(num)
// }
// console.log(isNumber("123"));        // true
// console.log(isNumber("  -45.67 "));  // true
// console.log(isNumber("1e10"));       // true
// console.log(isNumber("e9"));         // false
// console.log(isNumber("abc"));        // false
// console.log(isNumber("   "));        // false
///////////////////////////////////////////////////  22.       /////////////////////////////////
// function unlknown(s) {
//     if (!s) return s;
//     let count = 1, res = "";
//     for (let i = 1; i <= s.length; i++) {
//         if (s[i] === s[i - 1]) {
//             count++
//         }
//         else {
//             res += s[i - 1] + (count > 1 ? count : "");
//         }

//     }
//     return res;
// }
// console.log(unlknown("aabccccddeff")) ///a2b2c5d6e6f7
////////////////////////////////////////////  23.Remove Invalid Parentheses/////////////////////////////////
// function removeInvalidParentheses(s) {
//   // Helper function to check if a string has valid parentheses
//   const isValid = (str) => {
//     let count = 0;
//     for (let char of str) {
//       if (char === "(") count++; // Increase count for open parens
//       if (char === ")") {
//         if (count === 0) return false; // Too many closing parens
//         count--; // Match one open paren
//       }
//     }
//     return count === 0; // True if all open parens are matched
//   };

//   let res = []; // Stores valid result strings
//   let found = false; // Flag to stop after finding minimum deletions
//   let queue = [s]; // Start BFS with the input string

//   while (queue.length) {
//     const str = queue.shift(); // Take the next string from the queue

//     if (isValid(str)) {
//       // Check if it's valid
//       res.push(str); // Add to results
//       found = true; // We've found at least one valid string
//     }

//     if (found) continue; // Skip generating more strings at deeper levels

//     // Generate all possible strings by removing one parenthesis at each position
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] !== "(" && str[i] !== ")") continue; // Skip non-parenthesis characters

//       // Create new string by removing the i-th character
//       let data = str.slice(0, i) + str.slice(i + 1);

//       // Add new string to the queue (no visited set, so duplicates may occur)
//       queue.push(data);
//     }
//   }

//   // Return unique valid results (remove duplicates using Set)
//   return Array.from(new Set(res));
// }

// // Example usage
// console.log(removeInvalidParentheses("()())()"));
// // Expected output: [ '(())()', '()()()' ]
// /////-----------------------------------------------------------------------------------------------/////
// function removeInvalidParentheses(s) {
//   const isValid = (str) => {
//     let count = 0;
//     for (let char of str) {
//       if (char === "(") count++;
//       if (char === ")") {
//         if (count === 0) return false;
//         count--;
//       }
//     }
//     return count === 0;
//   };

//   const result = [];
//   const visited = new Set();
//   const queue = [s];
//   let found = false;

//   while (queue.length) {
//     const str = queue.shift();
//     if (isValid(str)) {
//       result.push(str);
//       found = true;
//     }

//     if (found) continue;

//     for (let i = 0; i < str.length; i++) {
//       if (str[i] !== "(" && str[i] !== ")") continue;

//       const next = str.slice(0, i) + str.slice(i + 1);
//       if (!visited.has(next)) {
//         visited.add(next);
//         queue.push(next);
//       }
//     }
//   }

//   return result;
// }
// console.log(removeInvalidParentheses("()())()"));
/*
  Output: ["()()()", "(())()"]
  Explanation: Both are valid expressions formed by removing one parenthesis.
  */
//////////////////////////////////////// 24. Minimum Window Substring/////////////////////////////////
// function minWindow(s, t) {
//   if (s.length === 0 || t.length === 0) return "";
//   let need = {};
//   for (let i = 0; i < t.length; i++) {
//     let char = t[i];
//     need[char] = (need[char] || 0) + 1;
//   }

//   let left = 0;
//   let minStart = 0;
//   let minLength = Infinity;
//   let count = 0;
//   let window = {};
//   for (let right = 0; right < s.length; right++) {
//     let rightChar = s[right];
//     window[rightChar] = (window[rightChar] || 0) + 1;

//     if (need[rightChar] && window[rightChar] <= need[rightChar]) {
//       count++;
//     }
//     // When all characters from t are matched
//     while (count === t.length) {
//       if (right - left + 1 < minLength) {
//         minLength = right - left + 1;
//         minStart = left;
//       }

//       let leftChar = s[left];
//       window[leftChar]--;

//       // If it's a needed char and dropping it means we're short
//       if (need[leftChar] && window[leftChar] < need[leftChar]) {
//         count--;
//       }

//       left++;
//     }
//   }
//   return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength);
// }
// console.log(minWindow("aabdec", "abc")); //abdec

//////////////////////////////////////////// 25.finad all Anagrams of a sub string  //////////////////////
// function subAnagram(s, p) {
//   let sortedP = p.split("").sort().join("");
//   let pLen = p.length;
//   let res = [];
//   for (let i = 0; i <= s.length; i++) {
//     let data = s.slice(i, i + pLen);
//     if (data.split("").sort().join("") === sortedP) {
//        res.push(data);
//       // res.push(i)  //[ 0, 6 ]
//     }
//   }
//   return res;
// }
// console.log(subAnagram("cbaebabacd", "abc")); //[ 'cba', 'bac' ]

///------------------------------------------------------------------------------
// function findAnagrams(s, p) {
//   const result = [];
//   const sortedP = p.split("").sort().join("");
//   const pLen = p.length;

//   for (let i = 0; i <= s.length - pLen; i++) {
//     const sub = s.substring(i, i + pLen);
//     if (sub.split("").sort().join("") === sortedP) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// console.log(findAnagrams("cbaebabacd", "abc")); // Output: [0, 6]

// //////////////////////  26. Palindrome with deletion/////////////////////////////////////////////////////////
// function validPalindrome(s) {
//   const isPal = (str) => str === str.split("").reverse().join("");

//   for (let i = 0, j = s.length - 1; i < j; i++, j--) {
//     if (s[i] !== s[j]) {
//       // Try removing one character from either side
//       const skipLeft = s.slice(i, j);
//       const skipRight = s.slice(i + 1, j + 1);
//       return isPal(skipLeft) || isPal(skipRight);
//     }
//   }

//   return true; // Already a palindrome
// }

// console.log(validPalindrome("abca")); // true (remove 'c')
// console.log(validPalindrome("abc")); // false
// ///////////////////////////////////////////////  27.    /////////////////////////////////////////////////
// function strStr(haystack, needle) {
//   if (needle === "") return 0;
//   for (let i = 0; i <= haystack.length - needle.length; i++) {
//     if (haystack.slice(i, i + needle.length) === needle) {
//       return i;
//     }
//   }
//   return -1;
// }
// // Example
// console.log(strStr("hello", "ll")); // Output: 2
// console.log(strStr("abc", "d")); // Output: -1