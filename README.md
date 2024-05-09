# Getting Started with Hook Form + zod

### Install dependencies 
```
npm i react-hook-form zod @hookform/resolvers
```
* <b>React Hook Forms:</b> é uma biblioteca que auxiliará a organizar e padronizar as validações dos formulários por toda a aplicação. Ele cria validação de formulário simples, alinhado com os existentes dentro do próprio HTML, as validações suportadas são: required, min, max, maxlength, minlength, pattern, validate. Adotando o uso de entradas não controladas em vez de depender do estado. Essa abordagem torna os formulários mais eficientes e reduz o número de novas renderizações.

* <b>zod:</b> é uma biblioteca de declaração e validação de dados, ou “schema validation” em TypeScript. Dessa forma, é possível criar uma estrutura com os requisitos de dados que você deseja validar.

* <b>@hookform/resolvers</b> que será responsável por associar nosso schema ao React Hook Form.

[Tutorial de Validação de Formulário](https://medium.com/@rbgadotti/valida%C3%A7%C3%A3o-de-formul%C3%A1rio-com-zod-e-react-hook-form-garantindo-a-integridade-dos-dados-nos-seus-b1802aa329f1)

```
npm install -D tailwindcss postcss autoprefixer
```
* <b>postCSS</b> é uma ferramenta para pré-processar seu CSS com plugins JS. O PostCSS por si só não faz muita coisa. O que ele faz é prover um parser CSS e um framework para criar plugins.

* <b>autoprefixer</b> analisa seu CSS e adiciona prefixos e código para manter seu código CSS compatível com diversos browsers, enquanto você apenas escreve código que siga a especificação da W3C. Isso livra o arquivo de mixins (caso esteja usando Sass) e também de prefixos colocados na mão.

```
npx tailwind init -p
```

* Criar arquivos de configuração