// This is a function called performCalculation
function performCalculation() {
    // Declare variables and retrieve input values
    // num1 and num2 are the inputs that will be in float data type by using parseFloat function.
    // operator is the input that will be in string data type.
    // each variable will be related to the IDs that exist in html file so we used getElementById() method.
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    // Declare a variable named 'isValidOperator' and assign it a boolean value (true/false).
    // The value is determined by checking if the 'operator' variable is included in the array ['+', '-', '*', '/', '%', '**'].
    // The 'includes()' method checks if an array contains a specific value and returns true or false.
    let isValidOperator = ['+', '-', '*', '/', '%', '**'].includes(operator);

    // Use an 'if' statement to check if 'isValidOperator' is false.
    if (!isValidOperator) {
        // If 'isValidOperator' is false, it means the 'operator' is not valid.
        // Access the HTML element with the id 'result' and change its text content to "Invalid operator".
        document.getElementById('result').innerText = "Invalid operator";
        
        // Use the 'return' statement to exit the function immediately.
        // This prevents further code execution in the current function.
        return;
    }

    // Check if the operator is division ('/') or modulus ('%') and if the second number (num2) is zero.
    // If either condition is true, display an appropriate error message and exit the function.
    if ((operator === '/' && num2 === 0) || (operator === '%' && num2 === 0)) {
        // Use the ternary operator to determine the error message based on the operator.
        // If the operator is '/', display "Cannot divide by zero."
        // If the operator is '%', display "Cannot perform modulus by zero."
        document.getElementById('result').innerText = operator === '/' ? 
            "Cannot divide by zero." : "Cannot perform modulus by zero.";
        
       // return statement as well as the previous error message in line NO. 24
        return;
    }
    // result is the output that will be in float data type.
    // Perform the calculation based on the operator for example if it is + make addition function for the numbers etc..
    let result;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else if (operator === '%') {
        result = num1 % num2;
    } else if (operator === '**') {
        result = num1 ** num2;
    }س

    // signInfo is the output that will be in string data type.
    // Determine the sign information like if the numbers are negative or positive or one negative and one positive
    let signInfo;
    if (num1 > 0 && num2 > 0) {
        signInfo = "Both numbers are positive.";
    } 
    else if (num1 < 0 && num2 < 0) {
        signInfo = "Both numbers are negative.";
    } 
    else if (num1 > 0 && num2 < 0){
        signInfo = "num1 is positive and the other is negative.";
    }
    else if (num1 < 0 && num2 > 0){
        signInfo = "num2 is positive and the other is negative.";
    }
    else {
        signInfo = "One or both numbers are not valid.";
    }
    // Display the result with the sign info of the result in string data type and print it in the html webpage.
    document.getElementById('result').innerText = `Result: ${result}. ${signInfo}`;
}

