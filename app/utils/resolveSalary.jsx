import { FINAL_DPH_15, FINAL_DPH_50 } from "./dph";

const SOC_INSURACE_KOEF = 0.071;
const HEALTH_INSURANCE_KOEF = 0.045;
const TAX_BACKUP_KOEF = 0.15;
const TAX_DISCOUNT = 2570;
const GROSS_BRUTTO_KOEF = 1.338;
 
const TOTAL_KOEF = SOC_INSURACE_KOEF + HEALTH_INSURANCE_KOEF // + taxBackup(salary);

export const correctFormat = (number) => {
  return Math.ceil(number).toLocaleString();
}

const taxBackup = (salary) => {
  console.log((salary * TAX_BACKUP_KOEF) - TAX_DISCOUNT)
  return Math.ceil((salary * TAX_BACKUP_KOEF) - TAX_DISCOUNT);
}

const grossBruttoCalc = (salary) => {
  return {
    grossBrutto: Math.ceil(salary * GROSS_BRUTTO_KOEF),
  }
};

const bruttoDetails = (salary) => {
  return {
    brutto: Math.ceil(salary),
    socialInsurance: Math.ceil(salary * SOC_INSURACE_KOEF),
    healthInsurance: Math.ceil(salary * HEALTH_INSURANCE_KOEF),
    taxBackup: taxBackup(salary),
  };
}

const nettoSalary = (salary) => {
  return {
    netto: (salary * (1 - TOTAL_KOEF)) - taxBackup(salary),
  } 
}

const dphCalc = (netto) => {
  return {
    dph: netto * (FINAL_DPH_15 + FINAL_DPH_50)
  }
}

const totalPayed = (grossBrutto, netto, dph) => {
  const baseAmount = grossBrutto - netto + dph;
console.log(grossBrutto, netto, dph);
  return {
    monthlyTotal: Math.ceil(baseAmount),
    yearlyTotal: Math.ceil(baseAmount * 12)
  }
}

const resolveSalary = (salary) => {
  const grossBrutto = grossBruttoCalc(salary);
  const brutto = bruttoDetails(salary);
  const netto = nettoSalary(salary);
  const dph = dphCalc(netto.netto);
  const total = totalPayed(grossBrutto.grossBrutto, netto.netto, dph.dph);

  return {
    grossBrutto,
    brutto,
    netto,
    dph,
    total,
  };
}
export default resolveSalary;
