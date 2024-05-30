"use client"
import React from 'react'
import style from './results.module.css'
import { useSalary } from '../../globalContext/Context'

const Results = () => {
  const { results } = useSalary()
console.log(results)
  return (
    <div>Results
      {results ? (
        <div className={style.container}>
          <p> Hrubá mzda: {results.brutto.brutto} </p>
          <p> Sociální pojištění: {results.brutto.socialInsurance} </p>
          <p> Zdravotní pojištění: {results.brutto.healthInsurance} </p>
          <p> Pojištění v nezaměstnanosti: {results.brutto.sickPayInsurance} </p>
          <p> Záloha na daně: {results.brutto.taxBackup} </p>

          <p> Čistá mzda: {results.netto.netto} </p>
        </div>
      ) : null}
  </div>
  )
}

export default Results
