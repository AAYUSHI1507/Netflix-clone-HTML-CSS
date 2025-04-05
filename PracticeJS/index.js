function faultyCalculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operator = prompt("Enter the operator (+, -, *, /):");
    console.log(num1, num2, operator);

    // Function to decide if the operation should be faulty (10% chance)
    function isFaulty() {
        return Math.random() < 0.1; // 10% chance
    }

    let result;

    if (isFaulty()) {
        // Perform faulty operations
        switch (operator) {
            case '+':
                result = num1 - num2;
                break;
            case '-':
                result = num1 * num2;
                break;
            case '*':
                result = num1 / num2;
                break;
            case '/':
                result = num1 - num2;
                break;
            default:
                alert("Invalid operator!");
                return;
        }
        alert(`Faulty Result: ${result}`);
    } else {
        // Perform correct operations
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                alert("Invalid operator!");
                return;
        }
        alert(`Correct Result: ${result}`);
    }
}

faultyCalculator();