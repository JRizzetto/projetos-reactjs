import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [currentInput, setCurrentInput] = useState("");
    const [num1, setNum1] = useState(null);
    const [operation, setOperation] = useState("");

    const numberOperation = ["AC", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const operations = ["+", "-", "*", "/", "="];

    const handleNumberClick = (buttonNumber) => {
        if (buttonNumber === "AC") {
            setCurrentInput("");
            setNum1(null);
            setOperation("");
        } else {
            setCurrentInput((prev) => prev + buttonNumber);
        }
    };

    const handleOperationClick = (buttonOperation) => {
        if (buttonOperation !== "=") {
            if (currentInput !== "") {
                setNum1(parseFloat(currentInput)); // Armazena o número atual
                setOperation(buttonOperation); // Define o operador
                setCurrentInput(""); // Limpa o display para o próximo número
            }
        } else {
            // Calcular o resultado apenas se todos os valores necessários estiverem definidos
            if (num1 !== null && operation !== "" && currentInput !== "") {
                const num2 = parseFloat(currentInput);
                let result;

                switch (operation) {
                    case "+":
                        result = num1 + num2;
                        break;
                    case "-":
                        result = num1 - num2;
                        break;
                    case "*":
                        result = num1 * num2;
                        break;
                    case "/":
                        result = num2 !== 0 ? num1 / num2 : "Error"; // Evitar divisão por zero
                        break;
                    default:
                        result = "Error";
                }

                setCurrentInput(result.toString()); // Exibe o resultado
                setNum1(null); // Reseta o estado para uma nova operação
                setOperation("");
            }
        }
    };

    return (
        <div className="calculatorContainer">
            <div className="operationDisplay">{currentInput}</div>
            <div className="resultDisplay">150</div>

            <div className="buttons-container">
                {numberOperation.map((buttonNumber) => (
                    <button key={buttonNumber} onClick={() => handleNumberClick(buttonNumber)}>
                        {buttonNumber}
                    </button>
                ))}

                {operations.map((buttonOperation) => (
                    <button key={buttonOperation} onClick={() => handleOperationClick(buttonOperation)}>
                        {buttonOperation}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
