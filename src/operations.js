import { useState, useCallback } from 'react';

export const add = (num1, num2) => num1 + num2;
export const subtract = (num1, num2) => num1 - num2;
export const multiply = (num1, num2) => num1 * num2;
export const divide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return num1 / num2;
};

export const useCalculator = (add, subtract, multiply, divide) => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleOnClear = useCallback(() => {
    setCurrentNumber('0');
    setFirstNumber(null);
    setOperation(null);
  }, []);

  const handleAddNumber = (number) => {
    setCurrentNumber(prevNumber => prevNumber === '0' ? number : prevNumber + number);
  };

  const handleOperation = useCallback((op) => {
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
    setOperation(op);
  }, [currentNumber]);

  const calculate = useCallback(() => {
    let result;
    switch (operation) {
      case '+':
        result = add(parseFloat(firstNumber), parseFloat(currentNumber));
        break;
      case '-':
        result = subtract(parseFloat(firstNumber), parseFloat(currentNumber));
        break;
      case '*':
        result = multiply(parseFloat(firstNumber), parseFloat(currentNumber));
        break;
      case '/':
        result = divide(parseFloat(firstNumber), parseFloat(currentNumber));
        break;
      default:
        break;
    }
    return result;
  }, [add, subtract, multiply, divide, currentNumber, firstNumber, operation]);

  const handleEquals = useCallback(() => {
    const result = calculate();
    if (result !== undefined) {
      setCurrentNumber(String(result));
      setFirstNumber(null);
      setOperation(null);
    }
  }, [calculate]);

  return {
    currentNumber,
    handleOnClear,
    handleAddNumber,
    handleOperation,
    handleEquals
  };
};