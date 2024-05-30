"use client"
import React from 'react'
import style from './results.module.css'
import { useSalary } from '../../globalContext/Context'

const Results = () => {
  const { results } = useSalary()

  if (!results) return null; // Rychlé ukončení, pokud nejsou výsledky k dispozici

  const {
    grossBrutto: { grossBrutto },
    brutto: { brutto },
    netto: { netto },
    total: { monthlyTotal, yearlyTotal }
  } = results;

  return (
    <div>Results
      <div className={style.container}>
        <h3>Základní přehled mzdy</h3>
        <p>Náklady na zaměstnance: {grossBrutto.toLocaleString()}</p>
        <p>Hrubá mzda: {brutto.toLocaleString()}</p>
        <p>Čistá mzda: {netto.toLocaleString()}</p>

        <h3>Celkem zaplaceno státu na odvodech, DPH a spotřební daně</h3>
        <p>Jak jsme spočítaly odvody a daně? click</p>
        <p>Za měsíc: {monthlyTotal.toLocaleString()}</p>
        <p>Za rok: {yearlyTotal.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default Results;
