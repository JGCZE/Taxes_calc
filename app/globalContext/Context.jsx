"use client"
import React, { createContext, useState, useContext } from 'react';

// Vytvoření kontextu
const SalaryContext = createContext();

// Poskytovatel kontextu
export const SalaryProvider = ({ children }) => {
  const [salary, setSalary] = useState('');

  const value = {
    salary,
    setSalary
  };

  console.log(salary);

  return (
    <SalaryContext.Provider value={value}>
      {children}
    </SalaryContext.Provider>
  );
};

// Hook pro použití kontextu
export const useSalary = () => useContext(SalaryContext);
