"use client"
import React, { createContext, useState, useContext } from 'react';

// Vytvoření kontextu
const SalaryContext = createContext();

// Poskytovatel kontextu
export const SalaryProvider = ({ children }) => {
  const [salary, setSalary] = useState('');
  
  
  const calculateResult = (salary) => {
    const grossSalary = salary*(1.3);
    const nettoSalary = salary*(0.85)
  }
  calculateResult(salary);

  const value = {
    salary,
    setSalary,
    grossSalary,
    nettoSalary
  };

  return (
    <SalaryContext.Provider value={value}>
      {children}
    </SalaryContext.Provider>
  );
};

// Hook pro použití kontextu
export const useSalary = () => useContext(SalaryContext);
