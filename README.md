#### EN - English [(Versão em Português Brasil aqui)](https://github.com/m4rcos-dev/FullStack-vehicle-catalog/blob/main/README_pt-br.md)

<h1 align="center">🎉 Welcome to my vehicle catalog project repository </h1>

![vehicle catalog](https://user-images.githubusercontent.com/104791582/228703451-681772cd-c984-401f-9481-67024a082ee7.gif)

![flag tools](https://img.shields.io/badge/Tools-%20Docker%20|%20.NET-9cf) ![flag tools](https://img.shields.io/badge/Languages-JavaScript%20|%20C%23-yellow) ![flag tools](https://img.shields.io/badge/Frameworks-Identity%20|%20JWT%20|%20React-yelow) ![flag database](https://img.shields.io/badge/Database-MySql-green) ![flag orm](https://img.shields.io/badge/ORM-Entity-blue) ![flag architecture](https://img.shields.io/badge/Architecture-P.O.O%20|%20MSC-orange) ![flag desing](https://img.shields.io/badge/Design%20Patterns-S.O.L.I.D-brown)

### [DEPLOY](https://karsshop.bohr.io/)

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

   **⚠️ Before starting, your docker-compose needs to be at version 1.29 or higher. [See here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-en) or [in the documentation](https ://docs.docker.com/compose/install/) how to install it. In the first article, you can replace where you are with `1.26.0` with `1.29.2`.**

> ℹ️ Run the `backend`, `frontend` and `db` services with the command:
```
  docker-compose up -d --build
```
   - Remember to stop `mysql` if you are using it locally on the default port (`3306`), or adapt it, if you want to use the application in containers;

   - These services will initialize a container named `backend_vheicles_catalog`, `fontend_vheicles_catalog` and another named `db_vheicles_catalog`;

   - From here you can access the application at `http://localhost:3000`;

   - The back-end endpoints are found at `http://localhost:5099`;

   - **⚠️ Attention:** Do not run the npm audit fix command! It updates several project dependencies, and this update causes conflicts.

   - ✨ **Tip:** The `Remote - Containers` extension is indicated so that you can develop your application in the Docker container directly in VS Code, as you do with your local files.

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
