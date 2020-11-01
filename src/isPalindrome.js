// A function to test if a supplied word is a palindrome

const isPalindrome = function(word) {
	let letters = [...word]; 
	let reverseWord = ''; 

	letters.reverse();

	for (let letter of letters) {
		reverseWord += letter; 
	}

	return reverseWord === word; 
}
