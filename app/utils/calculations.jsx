const socialInsuranceKoeficient = 0.065;
const healthInsuranceKoeficient = 0.045;
const sickPayInsuranceKoeficient = 0.006;
const taxBackupKoeficient = 0.0077;
 
const totalKoeficient = socialInsuranceKoeficient + healthInsuranceKoeficient + sickPayInsuranceKoeficient + taxBackupKoeficient;

const bruttoDetails = (salary) => {

  return {
    brutto: Math.ceil(salary),
    socialInsurance: Math.ceil(salary * socialInsuranceKoeficient),
    healthInsurance: Math.ceil(salary * healthInsuranceKoeficient),
    sickPayInsurance: Math.ceil(salary * sickPayInsuranceKoeficient),
    taxBackup: Math.ceil(salary * taxBackupKoeficient),
  };
}

const nettoSalary = (salary) => {
  return {
    netto: salary * (1 - totalKoeficient)
  } 
}

const calculate = (salary) => {
  const brutto = bruttoDetails(salary);
  const netto = nettoSalary(salary);

  return {
    brutto,
    netto,
  };
}
export default calculate;
