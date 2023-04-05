<h1 align="center">🎉 Boas-vindas ao meu repositório do projeto catálago de veículos </h1>

![vehicle catalog](https://user-images.githubusercontent.com/104791582/228703451-681772cd-c984-401f-9481-67024a082ee7.gif)

![flag tools](https://img.shields.io/badge/Tools-%20Docker%20|%20.NET-9cf) ![flag tools](https://img.shields.io/badge/Languages-JavaScript%20|%20C%23-yellow) ![flag tools](https://img.shields.io/badge/Frameworks-Identity%20|%20JWT%20|%20React-yelow) ![flag database](https://img.shields.io/badge/Database-MySql-green) ![flag orm](https://img.shields.io/badge/ORM-Entity-blue) ![flag architecture](https://img.shields.io/badge/Architecture-P.O.O%20|%20MSC-orange) ![flag desing](https://img.shields.io/badge/Design%20Patterns-S.O.L.I.D-brown)

### [DEPLOY](https://karsshop.bohr.io/)

<p>A proposta do projeto era criar um catalágo de veículos em uma página pública onde é possivel ver os veículos cadastrados e somente o administrador logado pode alterar, criar e deletar os carros do catálago.</p>
<p>Foi desenvolvido todas as camadas da aplicação (Models, Service e Controllers) onde é possível executar as operações básicas em um determinado banco de dados: Criação, Leitura e Exclusão (ou CRUD, para os mais íntimos 😜).</p>
<p>Foi criado endpoints para ler e escrever em um banco de dados, utilizando MySql.</p>
<p>Foi desenvolvido um Front-End com React para acessar os endpoints e aplicar as regras de negócio juntamente com o Back-End</p>

## 🔨 Recursos do projeto

<ul>
<li>✅EndPoint para cadastro de veículos, utilizando o método POST</li>
<li>✅EndPoint para listar veículos cadastrados usando o método GET.</li>
<li>✅EndPoint com filtro de dados e paginação, utilizando o método GET</li>
<li>✅EndPoint para listas todos os veículos, usando o método GET</li>
<li>✅EndPoint para login de pessoa usuária, utilizando o método POST.</li>
<li>✅Validações do CRUD, pessoa usuária utilizando token com JWT.</li>
<li>✅Manipulação e persistencia de dados utilizando banco de dados MySql.</li>
<li>✅Banco de dados componentizado utilizando o Docker.</li>
</ul>
<br>

## ▶️ Executando aplicação

<details>
  <summary><strong>🐳 Rodando todos as dependencias do projeto</strong></summary><br />

  **⚠️ Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

> ℹ️ Rode os serviços `backend`, `frontend` e `db` com o comando:
```
 docker-compose up -d --build
```
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `backend_vheicles_catalog`, `fontend_vheicles_catalog` e outro chamado `db_vheicles_catalog`;

  - A partir daqui você pode acessar a aplicação em `http://localhost:3000`;

  - Os endpoints dos back-end se encontram em `http://localhost:5099`;

  - **⚠️ Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos.

  - ✨ **Dica:** A extensão `Remote - Containers` é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  <img src="https://user-images.githubusercontent.com/104791582/213542711-a092f145-a6e3-4172-89f4-417379cfefae.png" width="800px" >

</details>
<details>
  <summary><strong>🏦 Usuários e Senhas</strong></summary><br />

  A aplicação possui usuário e senha padrão pré cadastrado e com suas permições de admins ativadas no banco. Utilize para testar a aplicação.

  > Email: admin@admin.com

  > Senha: @Admin123

  O banco de dados utiliza o docker já com as váriaves de anbientes e persitencia de dados porém abaixo estão as váriaveis para uma configuração local.

  ```
      MYSQL_DATABASE: vehicleCatalog
      MYSQL_USER: root
      MYSQL_PASSWORD: password
      MYSQL_HOST: localhost
      MYSQL_ROOT_PASSWORD: password
  ```
</details>
</br>

## 🧔 Autor

<div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="dev-marcospaulo" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://br.linkedin.com/in/dev-marcospaulo?trk=profile-badge">Marcos Paulo Pereira</a></div>
