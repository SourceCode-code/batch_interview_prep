

//***************GENRATE AADHAR NUMBER*************************

let adharNumber = ''

for (let i = 0; i < 12; i++) {
    adharNumber = adharNumber + Math.floor(Math.random() * 10); // Generate a random digit (0-9) and append it to the string
}
let adharNumberDigit= parseInt(adharNumber) // Convert the string to an integer (optional, depending on use case)
console.log(adharNumberDigit) // prints a randomly generated 12-digit Aadhar number
console.log(typeof adharNumberDigit) // prints the type of the generated Aadhar number (should be "number")

//***************************check Aadhar number format***************************/

// Check if the Aadhar number is valid (12 digits)
let regex =/^[0-9]{12}$/  //regex For 12 checking 12 number digit

let isAdharNumberInCorrectFormat= regex.test(adharNumberDigit)

console.log(isAdharNumberInCorrectFormat)

//****************************************8******8****************************************
// way 2 to check aadhar number format

if(adharNumber.length ===12 && !isNaN(adharNumberDigit)){
   console.log('Aadhar number is valid') 
}else{
    return false

}

//explain isNaN in detail how it is used not in this code snippet but in general
/*isNaN() is a built-in JavaScript function that determines whether a value is NaN (Not-a-Number). 
It is used to check if a given value can be converted to a number or not. 
Here’s a detailed explanation of how isNaN() works and how it is generally used:

1. **Function Signature**: 
   - `isNaN(value)`: Takes a single argument `value` and returns a boolean.

2. **Return Value**:
   - Returns `true` if the value is NaN or cannot be converted to a number.
   - Returns `false` if the value can be converted to a valid number.

3. **Type Coercion**:
   - Before checking, `isNaN()` attempts to convert the value to a number. 
   - If the conversion results in NaN, it returns true; otherwise, it returns false.

4. **Examples**:
   - `isNaN(NaN)` returns `true` because NaN is not a number.
   - `isNaN(123)` returns `false` because 123 is a valid number.
   - `isNaN('123')` returns `false` because the string '123' can be converted to the number 123.
   - `isNaN('abc')` returns `true` because 'abc' cannot be converted to a number.
   - `isNaN(undefined)` returns `true` because undefined cannot be converted to a number.

5. **Common Use Cases**:
   - **Input Validation**: To check if user input is a valid number before performing calculations.
   - **Error Handling**: To detect and handle cases where mathematical operations result in NaN.

6. **Caveats**:
   - Be cautious when using isNaN() with non-numeric strings, as it may lead to unexpected results due to type coercion.
   - For more robust checks, consider using `Number.isNaN()` which does not perform type coercion and only returns true for actual NaN values.

    

//explain regex in detail how they are used not in this code snippet but in general

Regular expressions (regex) are powerful tools used for pattern matching and text manipulation. 
They allow you to define search patterns that can be used to find, match, or replace strings in text. 
Here's a detailed explanation of how regex works and how it is generally used:

1. **Basic Structure**: A regex pattern is a sequence of characters that defines a search pattern. 
It can include literal characters, special characters, and quantifiers.

2. **Literal Characters**: These are the characters that match themselves. For example, the regex `abc` will match the string "abc".

3. **Special Characters**: These characters have special meanings in regex:
   - `.` (dot): Matches any single character except newline.
   - `^`: Matches the start of a string.
   - `$`: Matches the end of a string. example: `^abc$` matches the string "abc" exactly, with nothing before or after it.
   - `[]`: Denotes a character class, matching any one of the characters inside the brackets. example: `[abc]` matches "a", "b", or "c".
   - `|`: Acts as a logical OR between patterns. example: `cat|dog` matches either "cat" or "dog".

4. **Quantifiers**: These specify how many times an element can occur:
   - `*`: Matches 0 or more occurrences. example: `a*` matches "", "a", "aa", etc.
   - `+`: Matches 1 or more occurrences. example: `a+` matches "a", "aa", "aaa", etc.
   - `?`: Matches 0 or 1 occurrence. example: `a?` matches "", "a".
   - `{n}`: Matches exactly n occurrences. example: `a{3}` matches "aaa".
   - `{n,}`: Matches n or more occurrences. example: `a{2,}` matches "aa", "aaa", "aaaa", etc.
   - `{n,m}`: Matches between n and m occurrences. example: `a{2,4}` matches "aa", "aaa", "aaaa".

5. **Anchors**: These are used to specify the position in the string:
   - `\b`: Matches a word boundary.
   - `\B`: Matches a non-word boundary.

6. **Escaping Special Characters**: If you want to match a special character literally, you need to escape it with a backslash (`\`). 
    For example, to match a dot, you would use `\.`.

7. **Groups and Capturing**: Parentheses `()` are used to group parts of a regex pattern. 
This allows you to apply quantifiers to the entire group and also capture matched substrings for later use.

8. **Flags**: Regex can have flags that modify its behavior:
   - `g`: Global search (find all matches).
   - `i`: Case-insensitive search.
   - `m`: Multi-line search.

9. **Common Use Cases**:
   - **Validation**: Checking if input matches a specific format (e.g., email addresses, phone numbers).
   - **Searching**: Finding specific patterns in text (e.g., finding all occurrences of a word).
   - **Replacing**: Substituting parts of a string that match a pattern with something else.
   - **Splitting**: Dividing a string into an array based on a regex pattern.

10. **Examples**:
    - To validate an email address: `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`
    - To find all digits in a string: `/\d+/g`
    - To replace all whitespace with a single space: `/\s+/g`

In summary, regex is a versatile tool for working with strings, allowing for complex pattern matching and manipulation in a concise manner. 

*/