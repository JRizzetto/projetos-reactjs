import { useState, useEffect } from "react";
import axios from "axios"; 

import './CurrencyConverter.css'

const CurrencyConverter = () => {
    const [rates, setRates] = useState(null);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(null);

    useEffect(() => {
        axios.get(
            "https://v6.exchangerate-api.com/v6/2ccd3c4f1534b5cbe7fb7f71/latest/USD"
            )
            .then((response) => {
                setRates(response.data.conversion_rates)
            })
            .catch((error) => {
                console.log("Ocorreu um erro", error);
            })
    }, []);

    useEffect(() => {
        if (rates) {
            const conversionRate = rates[toCurrency] / rates[fromCurrency];
            setConvertedAmount((amount * conversionRate).toFixed(2));
        }
    }, [amount, fromCurrency, toCurrency, rates]);

    useEffect(() => {
        if(rates) {
            const rateFrom = rates[fromCurrency] || 0;
            const rateTo = rates[toCurrency] || 0;
            setConvertedAmount(((amount / rateFrom) * rateTo).toFixed(2));
        }
    }, [amount, rates, fromCurrency, toCurrency]);

    if(!rates) {
        return <h1>Carregando ...</h1>
    }

    return (
        <div className='converter'>
            <h2>Conversor de Moedas</h2>
            <input 
                type="number" 
                placeholder='Digite o valor ...' 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
            />
            <span>Selecione as moedas</span>
            <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                {rates && Object.keys(rates).map((currency) => (
                    <option value={currency} key={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            <span>para</span>
            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                {rates && Object.keys(rates).map((currency) => (
                    <option value={currency} key={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            <h3>{convertedAmount} {toCurrency}</h3>
            <p>{amount} {fromCurrency} valem {convertedAmount} {toCurrency}</p>
        </div>
    );
};

export default CurrencyConverter;
