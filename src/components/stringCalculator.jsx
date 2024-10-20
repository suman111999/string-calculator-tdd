import React, { useState } from 'react';
import { add } from '../utils/stringCalculator';

const StringCalculator = () => {
    const [numerString, setNumerString] = useState('');
    const [sum, setSum] = useState(null);
    const [error, setError] = useState('');

    const handleCalculate = () => {
        try {
            const sumNumbers = add(numerString);
            setSum(sumNumbers);
            setError('');
        } catch (err) {
            setError(err.message);
            setSum(null);
        }
    };

    return (
        <div>
            <h1>String Calculator</h1>
            <textarea
                rows="4"
                cols="50"
                placeholder="Enter numbers"
                value={numerString}
                onChange={(e) => setNumerString(e.target.value)}
            />
            <br />
            <button onClick={handleCalculate}>Calculate</button>
            {error && <div style={{ color: 'red' }}>Error: {error}</div>}
            {sum !== null && <div>Result: {sum}</div>}
        </div>
    )
}

export default StringCalculator;