import { EU_PAYMENTS, INTEREST_ON_GOVERNMENT_DEBT, MIN_CULTURE, PENSIONS, PUBLIC_SECTOR_SALARIES } from "../utils/expenses";

export const resolveGovermentPayments = (calculatedResults) => {
  const { monthlyTotal } = calculatedResults;

  const pensions = Math.ceil(monthlyTotal * PENSIONS);
  const publicSectorSelaries = Math.ceil(PUBLIC_SECTOR_SALARIES * monthlyTotal);
  const publicDebt = Math.ceil(monthlyTotal * INTEREST_ON_GOVERNMENT_DEBT)
  const euPayments = Math.ceil(monthlyTotal * EU_PAYMENTS)
  const culture = Math.ceil(monthlyTotal * MIN_CULTURE)

  
  return {
    pensions,
    publicSectorSelaries,
    publicDebt,
    euPayments,
    culture 
  }
}
