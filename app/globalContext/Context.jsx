"use client"
import React, { createContext, useState, useContext } from 'react';
import resolveSalary from '../resolvers/resolveSalary';
import { resolveGovermentPayments } from '../resolvers/resolveGovermentPayments';

// Vytvoření kontextu
const SalaryContext = createContext();

// Poskytovatel kontextu
export const SalaryProvider = ({ children }) => {
  const [salary, setRawSalary] = useState(0);
  const [displaySalary, setDisplaySalary] = useState('');
  const [results, setResults] = useState()
  const [showWherePaid, setShowWherePaid] = useState({})

  const handleInputChange = (event) => {
    let value = event.target.value.replace(/\s/g, '');
    const numericValue = parseInt(value, 10);

    if (!isNaN(numericValue)) {
      setRawSalary(numericValue);
      setDisplaySalary(numericValue.toLocaleString('cs-CZ'));
    } else {
      setDisplaySalary(''); // Reset pokud vstup není platné číslo
      setRawSalary(0);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const calculatedResults = resolveSalary(salary)
    setResults(calculatedResults)
    const showWherePaid = resolveGovermentPayments(calculatedResults.total)
    setShowWherePaid(showWherePaid)
  };

  const value = {
    handleSubmit,
    handleInputChange,
    salary,
    results,
    displaySalary,
    showWherePaid,
  };
  
  return (
    <SalaryContext.Provider value={value}>
      {children}
    </SalaryContext.Provider>
  );
};

// Hook pro použití kontextu
export const useSalary = () => useContext(SalaryContext);
