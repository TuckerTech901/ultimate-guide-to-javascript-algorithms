/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


//** split-reverse-join method */
// function reverseString(text) {
//     return text.split("").reverse().join("") 
// }

//**spread operator example */

function reverseString(text){
    return [...text].reverse().join('')
}

// **for loop example** //


function reverseString(text) {
    let result = ""

    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }

    return result
}
// **The for loop is looping in reverse this the i>= 0 and i--**

//** the for of way */

function reverseString (text){
    let result = "";
     
    for (let char of text){
        result = char + result
    }
    return result;
}

// ** the recursive way */

function reverseString (text){
    if (text ===""){
        return ""
    }else {
        return reverseString(text.substr(1)) + text [0]
    }
}

//**reduce method */
// function reverseString(text){
//   return text.split("").reduce((acc, char)) => + acc, '')
// }

 /* with spread operator*/

 function reverseString(text){
  return [...text].reduce((acc, char) => char + acc, '')
 }



module.exports = reverseString