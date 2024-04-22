"use client"
import { useState } from 'react'
import style from './form.module.css'
import { useSalary } from '../../globalContext/Context'

const Form = () => {
  const { salary, setSalary, handleSubmit } = useSalary(); 

  const handleInputChange = (event) => {
    setSalary(event.target.value);
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
        <button type='submit' className={style.button}>Počítej</button>
      </form>
    </div>
  );
}

export default Form;
