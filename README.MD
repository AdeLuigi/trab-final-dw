# Readme - Beneficio CSV Parser

Este é um código em JavaScript que realiza o parse de um arquivo CSV contendo informações de benefícios e realiza algumas transformações nos dados antes de salvá-los em outro arquivo CSV.

## Dependências

O código utiliza duas bibliotecas externas:

- [Papa Parse](https://www.papaparse.com/): É uma biblioteca que facilita a análise de arquivos CSV em JavaScript.
- [fs](https://nodejs.org/api/fs.html): É um módulo do Node.js que fornece métodos para interagir com o sistema de arquivos.

Certifique-se de que essas bibliotecas estão instaladas antes de executar o código.

## Funcionamento

1. O código lê o arquivo 'beneficio.csv' utilizando o módulo `fs.readFile()`.
2. Em caso de erro na leitura do arquivo, uma mensagem de erro é exibida no console.
3. O arquivo é lido com sucesso, e os dados são passados para o método `Papa.parse()` para análise.
4. O método `Papa.parse()` retorna um objeto `results` contendo os dados analisados.
5. O código percorre os dados analisados e realiza as seguintes transformações:
   - Converte a data no formato 'MM/AAAA' para o formato 'AAAA-MM'.
   - Converte o valor do benefício de uma string no formato 'X.XXX,XX' para um número de ponto flutuante.
   - Os dados tratados são armazenados na variável `dadosTratados`.
6. O código modifica o cabeçalho da coluna do valor do benefício para 'Valor Transferido'.
7. Utilizando o método `Papa.unparse()`, os dados tratados são convertidos de volta para o formato CSV.
8. O arquivo 'dados.csv' é criado e os dados tratados são gravados nele utilizando o método `fs.writeFileSync()`.
9. Por fim, o código exibe no console a mensagem "total dos valores recebidos" seguida dos dados tratados.

## Funções auxiliares

O código também inclui duas funções auxiliares:

### `convertMoneyToFloat(money)`

Esta função recebe uma string `money` no formato 'X.XXX,XX' e remove os pontos de milhar e substitui a vírgula decimal por um ponto. Em seguida, converte a string para um número de ponto flutuante e o retorna.

### `convertDate(dateString)`

Esta função recebe uma string `dateString` no formato 'MM/AAAA' e a converte para o formato 'AAAA-MM', onde 'AAAA' representa o ano e 'MM' o mês. A função retorna a data convertida.

Certifique-se de que essas funções estejam definidas e acessíveis antes de executar o código.