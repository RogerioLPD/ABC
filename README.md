# ABC
Esse é o back end desenvolvido em Node Js usando o Postgres como banco de dados

Na pasta server está localizado o arquivo de conexão com o postgres com o nome de _database.js

Esse banco de dados é o cadastro de funcionários de uma determinada empresa onde a tabela é constituida por:
Nome, departamento, cargo, salario e número de dependentes.
Foram realizadas consultas específicas que estão listadas abaixo.

Consultas:

1 - Executando o arquivo analistas.js irá mostrar no console o nome do departamento com os nomes dos seus respectivos funcionários de todos
os departamentos cujo nome começa com “ANALISTA”.

2 - Executando o arquivo gerentes.js irá mostrar no console o nome do departamento e do funcionário de cada departamento que tem o cargo
de “GERENTE”.

3 - Executando o arquivo maior_salario.js irá mostar no console o nome do funcionário e do departamento ao qual pertence o funcionário com o
maior salário.

4 - Executando o arquivo mais_funcionarios.js irá mostrar no console o nome do departamento que tem o maior número de funcionários,
mostrando também a quantidade de funcionários desse departamento.

5 - Executando o arquivo menos_dependentes.js irá mostrar no console o nome do departamento que tem a menor quantidade de funcionários sem
dependentes, com a quantidade de funcionários.

