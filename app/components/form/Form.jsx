"use client"
import { useState } from 'react'
import style from './form.module.css'
import { useSalary } from '../../globalContext/Context'

const Form = () => {
  const { salary, setSalary, grossSalary, nettoSalary } = useSalary(); 

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setSalary(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(`Submitted Salary: ${salary}`);
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="salary">Zadejte vaší hrubou mzdu</label>
        <input
          type="number"
          placeholder="např: 37684"
          name="salary"
          id="salary"
          value={salary}
          onChange={handleInputChange}
        />
        {/* <button type='submit' className={style.button}>Odeslat</button> */}
      </form>

      <p>{grossSalary}</p>
      <p>{nettoSalary}</p>
    </div>
  );
}

export default Form;
