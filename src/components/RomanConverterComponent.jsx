import {
  Flex, Heading, StatusLight, Text, TextField, View
} from '@adobe/react-spectrum';
import React, { useState } from 'react';
import { CONFIG } from '../config/constants';
import { convertNumber } from '../services/numberConversionService';
import styles from '../styles/RomanConverter.module.css';

const RomanConverterComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isValidInput = (value) => 
    value === '' || (Number(value) >= CONFIG.VALIDATION.MIN_NUMBER && 
    Number(value) <= CONFIG.VALIDATION.MAX_NUMBER);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue) return;

    setLoading(true);
    setError('');
    setResult('');

    try {
      const data = await convertNumber(inputValue);
      setResult(data.output);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View padding="size-100">
      <Heading level={1}>Roman Numeral Converter</Heading>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="size-200">
          <TextField
            label={`Enter a number (${CONFIG.VALIDATION.MIN_NUMBER}-${CONFIG.VALIDATION.MAX_NUMBER})`}
            value={inputValue}
            onChange={handleInputChange}
            type="number"
            width="size-3000"
            validationState={isValidInput(inputValue) ? 'valid' : 'invalid'}
            errorMessage={isValidInput(inputValue) ? null : `Please enter a number between ${CONFIG.VALIDATION.MIN_NUMBER} and ${CONFIG.VALIDATION.MAX_NUMBER}`}
          />
          <button
            type="submit"
            className={styles.submitButton}
            disabled={!inputValue || !isValidInput(inputValue) || loading}
          >
            Convert
          </button>
          
          {loading && (
            <StatusLight variant="info">Converting...</StatusLight>
          )}
          
          {error && (
            <View 
              className={styles.errorBox}
              borderColor="negative"
            >
              <Text>Error: {error}</Text>
            </View>
          )}
          
          {result && !error && (
            <View 
              className={styles.resultBox}
              borderColor="dark"
            >
              <Text>Roman Numeral: {result}</Text>
            </View>
          )}
        </Flex>
      </form>
    </View>
  );
};

export default RomanConverterComponent;