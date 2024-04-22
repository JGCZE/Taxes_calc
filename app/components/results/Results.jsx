"use client"
import React from 'react'
import style from './results.module.css'
import { useSalary } from '../../globalContext/Context'

const Results = () => {
  const { results } = useSalary()

  return (
    <div>Results
      <p>{results}</p>
    </div>
  )
}

export default Results