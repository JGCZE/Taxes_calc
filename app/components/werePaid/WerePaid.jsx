"use client"
import { useSalary } from '../../globalContext/Context'
import style from './werePaid.module.css'

const WerePaid = () => {
 const { showWherePaid } = useSalary()
 console.log(showWherePaid);
 
 const { 
    pensions,
    publicSectorSelaries,
    publicDebt,
    euPayments,
    culture,
  } = showWherePaid;

  return (
    <div className={style.container}>WerePaid
      <p>penze: {pensions}</p>
      <p>platy ve veřejném sektoru: {publicSectorSelaries}</p>
      <p>úroky z dluhu: {publicDebt}</p>
      <p>platby do EU: {euPayments}</p>
      <p>kultura: {culture}</p>
    </div>
  ) 
}

export default WerePaid
