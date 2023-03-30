#### EN - English [(Versão em Português Brasil aqui)](https://github.com/m4rcos-dev/FullStack-vehicle-catalog/blob/main/README_pt-br.md)

<h1 align="center">🎉 Welcome to my vehicle catalog project repository </h1>

![vehicle catalog](https://user-images.githubusercontent.com/104791582/228703451-681772cd-c984-401f-9481-67024a082ee7.gif)

![flag tools](https://img.shields.io/badge/Tools-%20Docker%20|%20.NET-9cf) ![flag tools](https://img.shields.io/badge/Languages-JavaScript%20|%20C%23-yellow) ![flag tools](https://img.shields.io/badge/Frameworks-Identity%20|%20JWT%20|%20React-yelow) ![flag database](https://img.shields.io/badge/Database-MySql-green) ![flag orm](https://img.shields.io/badge/ORM-Entity-blue) ![flag architecture](https://img.shields.io/badge/Architecture-P.O.O%20|%20MSC-orange) ![flag desing](https://img.shields.io/badge/Design%20Patterns-S.O.L.I.D-brown)

<p>The project's proposal was to create a vehicle catalog on a public page where it is possible to see registered vehicles and only the logged-in administrator can change, create and delete cars from the catalog.</p>
<p>All layers of the application (Models, Service and Controllers) were developed where it is possible to perform the basic operations on a given database: Creation, Reading and Deletion (or CRUD, for the most intimate 😜).</p >
<p>Endpoints were created to read and write in a database, using MySql.</p>
<p>A Front-End was developed with React to access endpoints and apply business rules together with the Back-End</p>

## 🔨 Project Resources

<ul>
<li>✅EndPoint for vehicle registration, using the POST method</li>
<li>✅EndPoint to list registered vehicles using the GET method.</li>
<li>✅EndPoint with data filter and pagination, using the GET method</li>
<li>✅EndPoint to list all vehicles, using the GET method</li>
<li>✅EndPoint for user login, using the POST method.</li>
<li>✅CRUD validations, user using token with JWT.</li>
<li>✅Manipulation and persistence of data using MySql database.</li>
<li>✅Componentized database using Docker.</li>
</ul>
<br>

## ▶️ Running application

<details>
   <summary><strong>🐳 Running all project dependencies</strong></summary><br />

   ## Utilities needed

   To run the application it is necessary to have `Docker`, `dotnet sdk` and `node` installed on the machine.

   ### The application is divided into 3 layers:
   - Database in MySql componentized in Docker.
   - BackEnd using the dotnet sdk framework.
   - FronteEnd using node and react frameworks.

   > Initially run the `database` in the folder that is in the root of the project then with the command below to upload the database.
   ````
   docker-compose up -d
   ````
   - Remember to stop `mysql` if you are using it locally on the default port (`3306`), or adapt it, if you want to use the application in containers
   - These services will initialize a container called `db_vehicles_catalog`.

   > After the container and the database are still running in the root of the folder, enter the `backEnd` folder and run the `migrations` to populate the `database` with the command:
````
dotnet ef database update
````

   > After running the `migrations` correctly run the command:
````
dotnet run.
````
   - It will build and run the backEnd application on ports 7267 and 5000.
   - Thus giving access to endpoints
   - `/Vehicle` with the `GET` `POST` methods and `/Vheicle/{id}` with the `GET` `PUT` `DELETE` methods.

   > In a new terminal go back to the root of the project and enter the folder called `frontEnd`

   > Install the dependencies with:
````
npm install
````

   > After installation run the application with the command:
````
npm start
````
   - the application will open in the browser running on `localhost:3000`

   ⚠ Warning ⚠ Do not run the npm audit fix command! It updates several project dependencies, and this update causes conflicts with the evaluator.

   ⚠ Warning ⚠ If you are using macOS and running `docker-compose up -d` you get the following error:

   ~~~bash
   The Compose file './docker-compose.yml' is invalid because:
   Unsupported config option for services.db: 'platform'
   Unsupported config option for services.node: 'platform'
   ~~~

> 2 possible solutions were found for this problem:
> 1. You can manually add the `platform: linux/amd64` option to the database service in the project's docker-compose.yml file, but this is a local solution and you should reproduce this for other projects.
> 2. You can manually add the line `export DOCKER_DEFAULT_PLATFORM=linux/amd64` to your computer's .bashrc, .zshenv or .zshrc files, this is a global solution.
> The solutions were based on [this source](https://stackoverflow.com/a/69636473).



✨ **Tip:** The `Remote - Containers` extension is indicated so that you can access Docker containers directly in VS Code, as you do with your local files.

<img src="https://user-images.githubusercontent.com/104791582/213542711-a092f145-a6e3-4172-89f4-417379cfefae.png" width="800px" >

</details>
<details>
   <summary><strong>🏦 Users and Passwords</strong></summary><br />

   The application has a pre-registered default user and password and with its admin permissions activated in the bank. Use to test the application.

   > Email: admin@admin.com

   > Password: @Admin123

   The database uses docker already with the environment and data persistence variables, but below are the variables for a local configuration.

   ```
       MYSQL_DATABASE: vehicleCatalog
       MYSQL_USER: root
       MYSQL_PASSWORD: password
       MYSQL_HOST: localhost
       MYSQL_ROOT_PASSWORD: password
   ```
</details>
</br>

## 🧔 Author

<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="dev-marcospaulo " data-version="v1"><a class="badge-base__link LI-simple-link" href="https://br.linkedin.com/in/dev-marcospaulo?trk=profile-badge">Marcos Paulo Pereira</a></div>
