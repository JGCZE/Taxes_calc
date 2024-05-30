// dph dle spotřebního koše
const DHP_15 = 0.15; // 50% spotřebního koše je daněno cca 15 procenty
const DPH_50 = 0.50 // 18% spotřebního koše je daněno 50 procenty

const SPENDING_IN_DPH_15 = 0.5;
const SPENDING_IN_DPH_50 = 0.18;

export const FINAL_DPH_15 = DHP_15 * SPENDING_IN_DPH_15;
export const FINAL_DPH_50 = DPH_50 * SPENDING_IN_DPH_50;
