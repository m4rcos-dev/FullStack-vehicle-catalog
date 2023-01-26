<h1 align="center">🎉 Boas-vindas ao meu repositório do proejto vehicle-catalog </h1>

![vehicle catalog](https://user-images.githubusercontent.com/104791582/214746712-9316826d-7c38-491d-98a5-028b4c59efa1.gif)

![flag tools](https://img.shields.io/badge/Tools-VScode%20|%20WorkBanch|%20|%20MySql%20|%20Docker-9cf) ![flag languages](https://img.shields.io/badge/Languages-JavaScript%20%7C%20C%23-yellow) ![flag tools](https://img.shields.io/badge/Frameworks-.NET%20|%20JWT|%20React-yelow)



<p>A proposta do projeto era criar um catalágo de veículos em uma página pública onde é possivel ver os veículos cadastrados e somente o administrador logado pode alterar, criar e deletar os carros do catálago.</p>
<p>Foi desenvolvido todas as camadas da aplicação (Models, Service e Controllers) onde é possível executar as operações básicas em um determinado banco de dados: Criação, Leitura e Exclusão (ou CRUD, para os mais íntimos 😜).</p>
<p>Foi criado endpoints para ler e escrever em um banco de dados, utilizando MySql.</p>

## 🔨 Recursos do projeto

<ul>
<li>✅EndPoint para cadastro de veículos, utilizando o método POST</li>
<li>✅EndPoint para listar veículos cadastrados usando o método GET.</li>
<li>✅EndPoint para listas todos os veículos, usando o método GET</li>
<li>✅EndPoint para login de pessoa usuária, utilizando o método POST.</li>
<li>✅Validações do CRUD, pessoa usuária utilizando token com JWT.</li>
<li>✅Manipulação e persistencia de dados utilizando banco de dados MySql.</li>
<li>✅Banco de dados componentizado utilizando o Docker.</li>
</ul>

## ▶️ Executando aplicação
</br>
<details>
  <summary><strong>🐳 Rodando todos as dependencias do projeto</strong></summary><br />

  ## Utilitários nescessários

  Para rodar a aplicação é nescessário ter instalado e configurado na máquina o `Docker`, `dotnet sdk` e `node`.

  ### A aplicação é dividia em 3 camadas:
  - Banco de Dados em MySql componentizado no Docker.
  - BackEnd utilizando o framework dotnet sdk.
  - FronteEnd utilizando os frameworks node e react.

  > Rode inicialmente o `banco de dados` na pasta que esta na raiz do projeto depois com o comando `docker-compose up -d` suba o banco de dados.
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `db_vehicles_catalog`.

  > Após o container e o banco em execução ainda na raiz da pasta entre na pasta `backEnd` e rode o comando `dotnet run`.
  - Ele irá fazer o `build` e roda a aplicação backEnd nas portas 7267 e 5000.
  - Dando assim acesso aos endpoints
  - `/Vehicle` com os métodos `GET` `POST` e `/Vheicle/{id}` com os métodos `GET` `PUT` `DELETE`.

  > Em um novo terminal volte para a raiz do projeto e entre na pasta chamada `frontEnd`

  > Instale as dependências com `npm install`

  > Após a instalação rode a aplicação com o comando `npm start`
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

  > Email: admin@admin

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

<details>
  <summary><strong>🪑 Tabelas</strong></summary><br />

    O arquivo `vehicleCatalog_db` contém as _queries_ que criam e populam o banco porém isso já feito coma as migrations no docker.

  ```sql
 /*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/ vehicleCatalog /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE vehicleCatalog;

DROP TABLE IF EXISTS AspNetRoleClaims;
CREATE TABLE `AspNetRoleClaims` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `RoleId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ClaimType` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `ClaimValue` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`Id`),
  KEY `IX_AspNetRoleClaims_RoleId` (`RoleId`),
  CONSTRAINT `FK_AspNetRoleClaims_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `AspNetRoles` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS AspNetRoles;
CREATE TABLE `AspNetRoles` (
  `Id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `NormalizedName` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ConcurrencyStamp` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `RoleNameIndex` (`NormalizedName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS AspNetUserClaims;
CREATE TABLE `AspNetUserClaims` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `UserId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ClaimType` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `ClaimValue` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`Id`),
  KEY `IX_AspNetUserClaims_UserId` (`UserId`),
  CONSTRAINT `FK_AspNetUserClaims_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS AspNetUserLogins;
CREATE TABLE `AspNetUserLogins` (
  `LoginProvider` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ProviderKey` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ProviderDisplayName` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `UserId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`LoginProvider`,`ProviderKey`),
  KEY `IX_AspNetUserLogins_UserId` (`UserId`),
  CONSTRAINT `FK_AspNetUserLogins_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS AspNetUserRoles;
CREATE TABLE `AspNetUserRoles` (
  `UserId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `RoleId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`UserId`,`RoleId`),
  KEY `IX_AspNetUserRoles_RoleId` (`RoleId`),
  CONSTRAINT `FK_AspNetUserRoles_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `AspNetRoles` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `FK_AspNetUserRoles_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS AspNetUserTokens;
CREATE TABLE `AspNetUserTokens` (
  `UserId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `LoginProvider` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Value` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`UserId`,`LoginProvider`,`Name`),
  CONSTRAINT `FK_AspNetUserTokens_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS AspNetUsers;
CREATE TABLE `AspNetUsers` (
  `Id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `UserName` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `NormalizedUserName` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Email` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `NormalizedEmail` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `EmailConfirmed` tinyint(1) NOT NULL,
  `PasswordHash` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `SecurityStamp` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `ConcurrencyStamp` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `PhoneNumber` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `PhoneNumberConfirmed` tinyint(1) NOT NULL,
  `TwoFactorEnabled` tinyint(1) NOT NULL,
  `LockoutEnd` datetime(6) DEFAULT NULL,
  `LockoutEnabled` tinyint(1) NOT NULL,
  `AccessFailedCount` int NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `UserNameIndex` (`NormalizedUserName`),
  KEY `EmailIndex` (`NormalizedEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS Vehicles;
CREATE TABLE `Vehicles` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nome` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `Marca` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `Modelo` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `Valor` int NOT NULL,
  `Foto` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS __EFMigrationsHistory;
CREATE TABLE `__EFMigrationsHistory` (
  `MigrationId` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ProductVersion` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`MigrationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



INSERT INTO AspNetUserClaims(Id,UserId,ClaimType,ClaimValue) VALUES(1,'caab0f3a-9e25-4c53-bc7e-b01f814aacb5',X'56656869636c65',X'4372656174652c5570646174652c44656c657465'),(2,'221330ab-9f3d-436f-a576-6d6b05e198ba',X'56656869636c65',X'437265617465');




INSERT INTO AspNetUsers(Id,UserName,NormalizedUserName,Email,NormalizedEmail,EmailConfirmed,PasswordHash,SecurityStamp,ConcurrencyStamp,PhoneNumber,PhoneNumberConfirmed,TwoFactorEnabled,LockoutEnd,LockoutEnabled,AccessFailedCount) VALUES('221330ab-9f3d-436f-a576-6d6b05e198ba','user@user','USER@USER','user@user','USER@USER',1,X'41514141414145414143635141414141454336636169644a56727759704e68386b774231652f4a4662394b652b795039504f3379434e784b383851735178644d5a3743516c514d76555030684d58433955413d3d',X'3458584e4b42344d365437544d4c415855434356573456525144444248354a54',X'34313138363630332d373439662d346237612d396430612d643834343464353739313730',NULL,0,0,NULL,1,0),('caab0f3a-9e25-4c53-bc7e-b01f814aacb5','admin@admin','ADMIN@ADMIN','admin@admin','ADMIN@ADMIN',1,X'415141414141454141436351414141414546545865664d625a737452582b366c473767794d4a54442b4d747862546d464b655636754c6a4a3335656c796353744b4a7249503754775850762b786c2f5768513d3d',X'334f4934514c55523356344b4348454c52474445544642454f4348574333464b',X'30643834613833342d303164612d343239372d623430622d646134393361663666303464',NULL,0,0,'2023-01-26 01:34:59.838957',1,0);

INSERT INTO Vehicles(Id,Nome,Marca,Modelo,Valor,Foto) VALUES(1,X'4172676f',X'46696174',X'46495245464c59204452495645',54299,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3231303332342f4558544552494f522d66726f6e745369646550696c6f744e6561722d313636383737353531393631332e6a7065673f643d35343078333130'),(2,X'4a65747461',X'566f6c6b73776167656e',X'434f4e464f52544c494e45',61899,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3133303536302f4558544552494f522d66726f6e745369646550696c6f744e6561722d31363336383238373637333538312e6a70673f643d35343078333130'),(3,X'4b69636b73',X'4e697373616e',X'535441525420534c',103899,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3233303038302f4558544552494f522d66726f6e745369646550696c6f744e6561722d313637333239363634333834382e6a7065673f643d35343078333130'),(4,X'436170747572',X'5265616e756c74',X'424f5345',101799,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3232393533372f4558544552494f522d66726f6e745369646550696c6f744e6561722d313637323934303439313330322e6a7065673f643d35343078333130'),(5,X'4372657461',X'4879756e646169',X'4154544954554445',89399,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3232373931302f4558544552494f522d66726f6e745369646550696c6f744e6561722d313637323737333738383030322e6a7065673f643d35343078333130'),(6,X'53656e747261',X'4e697373616e',X'5356205354415254',88499,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3232323239302f4558544552494f522d66726f6e745369646550696c6f744e6561722d313636393330323339383838352e6a7065673f643d35343078333130'),(7,X'506f6c6f',X'566f6c6b73776167656e',X'54534920484947484c494e45',86599,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3231373530312f4558544552494f522d66726f6e745369646550696c6f744e6561722d313637303238373735323533382e6a7065673f643d35343078333130'),(8,X'506963616e746f',X'4b6961',X'4558',44299,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3230323532352f4558544552494f522d66726f6e745369646550696c6f744e6561722d313636343339383338323737342e6a7065673f643d35343078333130'),(9,X'43697479',X'486f6e6461',X'4558',64499,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3138353539332f4558544552494f522d66726f6e745369646550696c6f744e6561722d313635323938313037363330312e6a7065673f643d35343078333130'),(10,X'466f637573',X'466f7264',X'534520504c555320534544414e',60399,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3138313830342f4558544552494f522d66726f6e745369646550696c6f744e6561722d313634393438303835383234342e6a7065673f643d35343078333130'),(11,X'536f6e6963',X'43686576726f6c6574',X'4c54',40799,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3138313336382f4558544552494f522d66726f6e745369646550696c6f744e6561722d313635323634363930313333352e6a7065673f643d35343078333130'),(12,X'436f726f6c6c61',X'546f796f7461',X'584549',80299,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3135373637382f4558544552494f522d66726f6e745369646550696c6f744e6561722d313634333039393936393433362e6a7065673f643d35343078333130'),(13,X'447573746572',X'526e61756c74',X'44594e414d49515545',56699,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3132333232352f6475737465722d72656e61756c742d64796e616d697175652d323031362d6578746572696f722d66726f6e747369646570696c6f746e6561722d31363334353538363035323638392e6a70673f643d35343078333130'),(14,X'447573746572',X'526e61756c74',X'5343452045585052455353494f4e',73199,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3131353532312f4558544552494f522d66726f6e745369646550696c6f744e6561722d31363333373332373236303039302e6a70673f643d35343078333130'),(15,X'4372657461',X'4879756e646169',X'4154544954554445',80999,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3130373532352f63726574612d6879756e6461692d61747469747564652d323031372d6578746572696f722d66726f6e747369646570696c6f746e6561722d31363236373934373134313839352e6a70673f643d35343078333130'),(16,X'52656e6567617465',X'4a656570',X'4c494d49544544',117199,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3232363237352f4558544552494f522d66726f6e745369646550696c6f744e6561722d313637323836303732393333342e6a7065673f643d35343078333130'),(17,X'43726f6e6f73',X'46696174',X'452e544f525120505245434953494f4e',72399,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3230393333382f4558544552494f522d66726f6e745369646550696c6f744e6561722d313636373530363336373533352e6a7065673f643d35343078333130'),(18,X'5961726973',X'546f796f7461',X'534544414e20584c53204d554c54494452495645',88099,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3231373935322f4558544552494f522d66726f6e745369646550696c6f744e6561722d313636393035393530343731332e6a7065673f643d35343078333130'),(19,X'353030',X'46696174',X'43414252494f',70799,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3230393631392f4558544552494f522d66726f6e745369646550696c6f744e6561722d313636383230343833323636362e6a7065673f643d35343078333130'),(20,X'533630',X'566f6c766f',X'543420465744',55699,X'68747470733a2f2f696d616765732e6b6176616b2e73657276696365732f696d616765732f3136393834372f4558544552494f522d66726f6e745369646550696c6f744e6561722d313636353738303934363433322e6a7065673f643d35343078333130');
INSERT INTO __EFMigrationsHistory(MigrationId,ProductVersion) VALUES('20230123202045_InitialCreate','6.0.1');
  ```
</details>
</br>

## 🧔 Autor

<div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="dev-marcospaulo" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://br.linkedin.com/in/dev-marcospaulo?trk=profile-badge">Marcos Paulo Pereira</a></div>
