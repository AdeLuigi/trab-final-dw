import Papa from 'papaparse';
import fs from 'fs'

fs.readFile('beneficio.csv', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

let dadosTratados

Papa.parse(data, {
    complete: function(results) {
        results.data.forEach((element, index) => {
            if (element[1] == undefined) {
              return
            }
            results.data[index][0] = convertDate(element[0])
            results.data[index][1] = convertMoneyToFloat(element[1])
        });

        results.data[0][1] = 'Valor Transferido'

        const opcoes = {
          delimiter: ',', // Delimitador de campo
          newline: '\n' // Caractere de nova linha
        };          

        dadosTratados = Papa.unparse(results.data, opcoes);

        fs.writeFileSync('dados.csv', dadosTratados, 'utf8');
      console.log("total dos valores recebidos", results.data);
    }
  });
});

function convertMoneyToFloat(money) {
    const cleanedMoney = money.replace(/\./g, '').replace(',', '.');
    const floatValue = parseFloat(cleanedMoney);

    return floatValue;
}

function convertDate(dateString) {
  var parts = dateString.split('/');
  var month = parts[0];
  var year = parts[1];
  var convertedDate = year + '-' + month;

  return convertedDate;
}
