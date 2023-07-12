import {Client} from 'whatsapp-web.js';
import Papa from 'papaparse';
import fs from 'fs'

fs.readFile('beneficio.csv', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

let PETI = 0;
let AE = 0;
let BF = 0;
let AB = 0;
let BPC = 0;

Papa.parse(data, {
    complete: function(results) {
        results.data.forEach(element => {
            if(element[2] == 'PETI'){
                PETI += convertMoneyToFloat(element[1])
            }
            if(element[2] == 'Auxílio Emergencial'){
                AE += convertMoneyToFloat(element[1])
            }
            if(element[2] == 'Bolsa Família'){
                BF += convertMoneyToFloat(element[1])
            }
            if(element[2] == 'BPC'){
                BPC += convertMoneyToFloat(element[1])
            }
            if(element[2] == 'Auxílio Brasil'){
                AB += convertMoneyToFloat(element[1])
            }
        });
      console.log("total dos valores recebidos", {
        PETI,
        auxilioEmergencial: AE,
        bolsaFamilia: BF,
        BPC,
        auxilioBrasil:AB
      });
    }
  });
});

function convertMoneyToFloat(money) {
    // Remover pontos e substituir vírgulas por pontos
    const cleanedMoney = money.replace(/\./g, '').replace(',', '.');
  
    // Converter para float
    const floatValue = parseFloat(cleanedMoney);
  
    return floatValue;
  }
