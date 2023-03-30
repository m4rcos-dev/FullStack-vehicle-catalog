<h1 align="center">🎉 Boas-vindas ao meu repositório do projeto catálago de veículos </h1>

![vehicle catalog](https://user-images.githubusercontent.com/104791582/228703451-681772cd-c984-401f-9481-67024a082ee7.gif)

![flag tools](https://img.shields.io/badge/Tools-%20Docker%20|%20.NET-9cf) ![flag tools](https://img.shields.io/badge/Languages-JavaScript%20|%20C%23-yellow) ![flag tools](https://img.shields.io/badge/Frameworks-Identity%20|%20JWT%20|%20React-yelow) ![flag database](https://img.shields.io/badge/Database-MySql-green) ![flag orm](https://img.shields.io/badge/ORM-Entity-blue) ![flag architecture](https://img.shields.io/badge/Architecture-P.O.O%20|%20MSC-orange) ![flag desing](https://img.shields.io/badge/Design%20Patterns-S.O.L.I.D-brown)

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

  ## Utilitários nescessários

  Para rodar a aplicação é nescessário ter instalado e configurado na máquina o `Docker`, `dotnet sdk` e `node`.

  ### A aplicação é dividia em 3 camadas:
  - Banco de Dados em MySql componentizado no Docker.
  - BackEnd utilizando o framework dotnet sdk.
  - FronteEnd utilizando os frameworks node e react.

  > Rode inicialmente o `banco de dados` na pasta que esta na raiz do projeto depois com o comando abaixo para subir o banco de dados.
  ````
  docker-compose up -d
  ````
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `db_vehicles_catalog`.

  > Após o container e o banco em execução ainda na raiz da pasta entre na pasta `backEnd` e rode as `migrations` para popular o `banco de dados` com o comando:
````
dotnet ef database update
````

  > Após rodar as `migrations` corretamente rode o comando:
````
dotnet run.
````
  - Ele irá fazer o `build` e roda a aplicação backEnd nas portas 7267 e 5000.
  - Dando assim acesso aos endpoints
  - `/Vehicle` com os métodos `GET` `POST` e `/Vheicle/{id}` com os métodos `GET` `PUT` `DELETE`.

  > Em um novo terminal volte para a raiz do projeto e entre na pasta chamada `frontEnd`

  > Instale as dependências com:
````
npm install
````

  > Após a instalação rode a aplicação com o comando:
````
npm start
````
  - a aplicação abrirá no browser rodando no `localhost:3000`

  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  ⚠ Atenção ⚠ Caso você esteja usando macOS e ao executar o `docker-compose up -d` se depare com o seguinte erro:

  ~~~bash
  The Compose file './docker-compose.yml' is invalid because:
  Unsupported config option for services.db: 'platform'
  Unsupported config option for services.node: 'platform'
  ~~~

> Foram encontradas 2 possíveis soluções para este problema:
> 1. Você pode adicionar manualmente a option `platform: linux/amd64` no service do banco de dados no arquivo docker-compose.yml do projeto, mas essa é uma solução local e você deverá reproduzir isso para os outros projetos.
> 2. Você pode adicionar manualmente nos arquivos .bashrc, .zshenv ou .zshrc do seu computador a linha `export DOCKER_DEFAULT_PLATFORM=linux/amd64`, essa é uma solução global.
> As soluções foram com base [nesta fonte](https://stackoverflow.com/a/69636473).



✨ **Dica:** A extensão `Remote - Containers` é indicada para que você possa acessar os container Docker direto no VS Code, como você faz com seus arquivos locais.

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
