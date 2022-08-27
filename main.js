// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
	//get the length of each string
	//use charAt to compare
	const len1=str.length
	const len2=ending.length
	const x= len1-len2
	return str.slice(x)===ending
  }