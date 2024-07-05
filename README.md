# Calculator Project
## Calculator Documentation

### Overview
This documentation details the implementation and functionality of a basic calculator built using HTML, CSS, and JavaScript. The calculator allows users to perform addition, subtraction, multiplication, and division operations on numbers entered via buttons on the interface.

### Functionality

1. **Basic Operations**
   - Addition (+): Adds two numbers.
   - Subtraction (-): Subtracts one number from another.
   - Multiplication (*): Multiplies two numbers.
   - Division (/): Divides one number by another.

2. **User Interface Elements**
   - **HTML Structure**: The calculator includes buttons for digits (0-9), decimal point (.), operators (+, -, *, /), equals (=), undo (to remove the last input), and clear (to reset calculations).
   - **Display**: The result and current input are displayed in a designated area (`#calc-screen`).

3. **Operation Handling**
   - **Event Listeners**: Each button click updates the `currentCalc` string and displays it on the screen.
   - **Clear Button**: Resets `currentCalc` and clears the display.
   - **Undo Button**: Removes the last character from `currentCalc`.

4. **Calculation Logic**
   - **Operate Function**: Accepts two operands and an operator, performs the corresponding operation, and returns the result. Handles division by zero scenarios gracefully.
   - **Processing Input**: Parses the `currentCalc` string to extract operands and operators, then performs calculations when the equals (=) button is pressed.

### Implementation Details

- **Variables**:
  - `currentCalc`: Stores the current input string displayed on the calculator screen.
  - `numberOne`, `operator`, `numberTwo`: Variables to store operands and operator for calculations.
  - `result`: Holds the result of the operation.

- **Functions**:
  - `operate(operandOne, operatorItem, operandTwo)`: Performs arithmetic operations based on the operator provided.
  - `getNumbers(stringNumber)`: Parses the input string to extract operands and operator, then calls `operate` to calculate results.

- **Event Listeners**:
  - Each number and operator button (`one` to `nine`, `zero`, `divide`, `multiply`, `subtract`, `add`, `decimal`) updates `currentCalc` accordingly and displays it.

### Example Usage

```javascript
// Example usage of the calculator functions
let currentCalc = '12+7=';
getNumbers(currentCalc); // Output: 19

// Example of user interaction:
// If user clicks '1', '+', '7', '=' in sequence, the display updates to '8'.
```

### Conclusion

This documentation provides a comprehensive overview of the calculator project, detailing its functionalities, implementation of basic operations, user interface elements, and handling of user inputs. It ensures accurate calculation outputs while maintaining an intuitive user experience with error handling for division by zero scenarios.