import React, { useEffect } from 'react';
import Input from './components/Input';
import  Button from './components/Button';
import { ZeroButton } from './components/Button/styles';
import { Container, Content, Row } from './styles';
import { add, subtract, multiply, divide, useCalculator } from './operations';


const App = () => {
  const {
    currentNumber,
    handleOnClear,
    handleAddNumber,
    handleOperation,
    handleEquals
  } = useCalculator(add, subtract, multiply, divide);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      switch (key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          handleAddNumber(key);
          break;
        case '+':
        case '-':
        case '*':
        case '/':
          handleOperation(key);
          break;
        case '=':
        case 'Enter':
          handleEquals();
          break;
        case 'Backspace':
          handleOnClear();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleAddNumber, handleEquals, handleOperation, handleOnClear]);

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="c" onClick={handleOnClear} />
          
          <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="*" onClick={() => handleOperation('*')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={() => handleOperation('-')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={() => handleOperation('+')} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="." onClick={() => handleAddNumber('.')} />
          <Button label="/" onClick={() => handleOperation('/')} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;