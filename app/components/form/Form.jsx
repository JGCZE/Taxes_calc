"use client"
import { useState } from 'react'
import style from './form.module.css'
import { useSalary } from '../../globalContext/Context'

const Form = () => {
  const { displaySalary , handleSubmit, handleInputChange } = useSalary();

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="salary">Zadejte vaší hrubou mzdu</label>
        <input
          type="text"  // změna z number na text kvůli formátování
          placeholder="např: 37 600"
          name="salary"
          id="salary"
          value={displaySalary}
          onChange={handleInputChange}
        />
        <button type='submit' className={style.button}>Počítej</button>
      </form>
    </div>
  );
};

export default Form;
