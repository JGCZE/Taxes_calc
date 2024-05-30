const socialInsuranceKoeficient = 0.071;
const healthInsuranceKoeficient = 0.045;
const taxBackupKoeficient = 0.1243;
const grossBruttoKoeficient = 1.338;
 
const totalKoeficient = socialInsuranceKoeficient + healthInsuranceKoeficient + taxBackupKoeficient;

const grossBruttoCalc = (salary) => {
  return {
    grossBrutto: salary * grossBruttoKoeficient,
  }
};

const bruttoDetails = (salary) => {
  return {
    brutto: Math.ceil(salary),
    socialInsurance: Math.ceil(salary * socialInsuranceKoeficient),
    healthInsurance: Math.ceil(salary * healthInsuranceKoeficient),
    taxBackup: Math.ceil(salary * taxBackupKoeficient),
  };
}

const nettoSalary = (salary) => {
  return {
    netto: salary * (1 - totalKoeficient)
  } 
}

const resolveSalary = (salary) => {
  const grossBrutto = grossBruttoCalc(salary);
  const brutto = bruttoDetails(salary);
  const netto = nettoSalary(salary);

  return {
    grossBrutto,
    brutto,
    netto,
  };
}
export default resolveSalary;
