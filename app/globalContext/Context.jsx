"use client"
import React, { createContext, useState, useContext } from 'react';
import calculate from '../utils/calculations';

// Vytvoření kontextu
const SalaryContext = createContext();

// Poskytovatel kontextu
export const SalaryProvider = ({ children }) => {
  const [salary, setSalary] = useState({});
  const [results, setResults] = useState()

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(`Submitted Salary: ${salary}`);
    const calculatedResults = calculate(salary)
    setResults(calculatedResults)
  };
console.log(salary, results)
    const value = {
      setSalary,
      handleSubmit,
      salary,
      results,
    };
  
  return (
    <SalaryContext.Provider value={value}>
      {children}
    </SalaryContext.Provider>
  );
};

// Hook pro použití kontextu
export const useSalary = () => useContext(SalaryContext);
