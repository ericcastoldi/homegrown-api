# Homegrown 

Aplicativo auxiliar no planejamento doméstico.
Consiste em um processamento de quatro a cinco etapas (TBD): 
    - **Providers:** realizam a obtenção dos dados, a partir de planilhas e de serviços bancários ou de Cartão de Crédito
    - **Parsers:**  realizam a análise dos dados recebidos dos _Providers_, unificando o modelo de dados a ser repassado para os 
        - **Conciliation:** _(TBD)_ para os casos em que os _Parsers_ não conseguiram interpretar o modelo retornado pelo provider, o usuário precisará dar uma "ajudinha" ao Homegrown. Ex: quebrar uma transação do nubank em vários lançamentos no caso de uma compra de areia e ração num Pet Shop.
    - **Suggestion:** tendo em mãos uma massa de dados com informações de frequencia de compra podemos realizar sugestões de datas de futuras compras de cada item e com as informações de média de valores e nomes de estabelecimentos conseguimos determinar onde pode ser mais vantajoso fazer determinadas compras. 

> Cada etapa dessas consiste de uma serie de implementações que são executadas em sequencia em forma de pipe, de forma que cada camada enriquece mais o resultado da camada anterior.
    
## TODO

Os TODOs abaixo levam em consideração apenas as funcionalidades em desenvolvimento no momento. Desta forma, os TODOs abaixo não levam em consideração necessidades das camadas de Conciliation e Suggestion pois ainda não foram implementadas. 

### Alterar modelo de dados da planilha

Algumas informações estão fazendo falta e algumas aparentemente não estão trazendo muito valor para a solução.

Um conjunto de informações que está fazendo falta são as quantidades. Precisamos de quantidades em unidades e quantidades Granel, para conseguirmos extrair informações mais exatas com relação às quantidades sendo compradas.

Ex: 
```
{ 
    valor: 1.48, 
    valorExibicao: 'R$ 1,48', 
    valorUnitario: 2.48,
    qtd: 3, 
    qtdGranel: 0.595, 
    unidadeMedidaGranel: 'kg' 
}
```

Em contrapartida, algumas informações não estão sendo utilizadas e talvez não precisem estar no modelo. São elas:

- **Ultima atualização (Item):** Não está sendo utilizado para nada. É um campo de controle do Google Spreadsheets que a princípio não tem porque estar no modelo. 
- **Categoria (Item):** Não está sendo utilizado para nada. Talvez faça mais sentido que a coluna _"Item"_ vire a _"Categoria"_ e passemos a ter um campo _"Nome"_ ou _"Descrição"_ que armazene exatamente a mesma descrição existente nos Cupons Fiscais e Extratos.
- **Valor Exibição (Histórico):** Não está sendo utilizado para absolutamente nada, apenas para mostrar o dado Cru antes de ter sido convertido para numérico _(Ver abaixo sugestão do campo_ `_raw`_)_
- **Observações (Histórico):** Está sendo utilizado principalmente para descrever quantidades (o que já é resolvido pela sugestão acima) e marca/produto (que pode ser resolvido na forma de Familia / Familia Rotulada).

> Uma ideia é incluir um campo `_raw` nos modelos, cujo objetivo é armazenar exatamente o json do registro retornado pelos providers, antes de passar pelos parsers. Isso seria particularmente útil para a **Conciliação**, além de possibilitar uma modelagem mais objetiva.

### Utilizar OCR para importar Cupons Fiscais

Essa funcionalidade seria extremamente útil para contornar a necessidade de digitar manualmente na Planilha os itens dos Cupons de Compras, de forma que bastaa tirar uma foto do cupom que o Homegrown utilizando uma biblioteca de OCR realiza a extração do texto e gera registros de itens para cada item presente no Cupom.

Pacotes/artigos a avaliar:
- https://ourcodeworld.com/articles/read/348/getting-started-with-optical-character-recognition-ocr-with-tesseract-in-node-js
- https://www.npmjs.com/package/ocr
- https://github.com/dbashford/textract
- https://github.com/desmondmorris/node-tesseract
- http://tesseract.projectnaptha.com/
- https://www.twilio.com/blog/2016/11/a-simple-way-to-ocr-images-from-a-url-with-tesseract-js.html

> Inicialmente importar para a planilha, futuramente teremos um storage dedicado para o Homegrown. Inclusive é interessante que a foto do cupom fique salva no storage junto com os itens importados.


### Realizar integração com NuBank e BB

A ideia é importar os lançamentos existentes e realizar os mesmos processamentos já existentes (parsing, média de preço e média de freqüencia, sugestões, etc).
Como comentado antes, esse tipo de provider tem uma maior possibilidade de necessitar de ação humana. Isso porque como são lançamentos "genéricos" (contendo apenas o valor e o estabelecimento), pode haver a necessidade de quebrar um lançamento em vários itens (como no exemplo do Pet Shop).

Pacotes/artigos a avaliar:
- BB - https://developers.bb.com.br/docs/#!/Checking_Account/get_statements_checking_account
- Nubank - https://github.com/Astrocoders/nubank-api

> Devido a possível necessidade de ação humana, a camada de Conciliação vai ser bastante necessária após a implementação desses providers. Inclusive uma opção que será necessária é a de ignorar determinados itens que não desejamos fazer projeções.