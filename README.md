# AppClientCrud

Client app consuming a JSON Server API to make CRUD operations with HTTP requisitions.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

# JSON Server

JSON Server allows developer to test HTTP requisitions of his client application in a fake API/database. 

It's possible to create collections/arrays which will work like tables in a database, and create relationships between them, and also do HTTP requisitions on them while running in a localhost port.

To install this dependency in your application, you have to run the script below:

`npm install json-server`

And then set a script like this one in your `package.json`, in the `"scripts":` object.

`"json-server": "json-server --watch api/db.json --port 5000"`

With this configuration above, specifying the path of your db.json (which will be your JSON Server database), the fake API will run in your `http://localhost:5000`.

# npm-run-all

To be able to run both JSON Server localhost and the Angular app localhost, it is necessary to install an extra dependency. In my case I utilized the `npm-run-all`. 

To install this dependency in your application, you have to run the script below:

`npm install --save-dev npm-run-all`

And then, again in the `"scripts":` object of your `package.json`, you can set your `"start:"` script configuration with the value:

`"npm-run-all --parallel serve json-server"`

And also set a script `"serve": "ng serve"` in this same object.

Like this, when you do a `npm run start`, both localhosts you setted (on the port 4200 by default for Angular apps, and the localhost you setted to your JSON Server fake API) will run both Angular app and the JSON Server.

# dependencies used on this application

**Some Angular Material components to make the layout/view, Bootstrap, HttpClient to make HTTP requisitons to the API, JSON Server fake API, npm-run-all, RxJS to work asynchronous, ReactiveForm and Ngx Mask library to use CPF Mask.**

# observation

**The valid CPFs (Cadastro de Pessoas Físicas) submitted in the db.json by the POST form page were generated in the following link: "https://www.4devs.com.br/gerador_de_cpf".**
##
# PT/BR

# AppClientCrud

Client app consumindo uma JSON Server API para fazer operações de CRUD com requisições HTTP.

Esse projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 17.3.7.

# JSON Server

JSON Server permite o desenvolvedor frontend testar requisições HTTP da sua aplicação de cliente em uma API/banco de dados falso, em endpoints criados no localhost definido.

É possível criar coleções/arrays que vão funcionar como tabelas em um banco de dados, em um arquivo .json, e criar relações entre essas "tabelas", além de fazer requisições HTTP nelas enquanto rodando em uma porta local.

Para instalar essa dependência em sua aplicação, você precisa rodar o script abaixo:

`npm install json-server`

E então configurar um script como esse na sua `package.json`, no objeto `"scripts":`.

`"json-server": "json-server --watch api/db.json --port 5000"`

Com essa configuração acima, especificando o caminho do seu db.json (que vai ser o seu banco de dados JSON Server), a fake API vai rodar no seu `http://localhost:5000`.

# npm-run-all

Para ser possível rodar ambos localhosts (JSON Server e o Angular app), é necessário instalar uma dependência extra. No meu caso eu utilizei o `npm-run-all`.

Para instalar essa dependência na sua aplicação, você precisa rodar o script abaixo:

`npm install --save-dev npm-run-all`

E então, de novo no objeto `"scripts:"` da `package.json`, é possível setar a configuração do script `"start:"` com o valor:

`"npm-run-all --parallel serve json-server"`

E também setar o script `"serve:" "ng serve"` nesse mesmo objeto.

Com isso, quando você fizer um `npm run start`, ambos localhosts que você configurou (na porta 4200 por default para apps Angular, e o localhost que você configurou para o seu JSON Server fake API) vão rodar ambos Angular app e o JSON Server.

# dependências utilizadas nessa aplicação

**Alguns componentes do Angular Material para fazer o layout/view, Bootstrap, HttpClient para fazer requisições HTTP para a API, JSON Server fake API, npm-run-all, RxJS para trabalhar de forma assíncrona, formulário reativo e a biblioteca Ngx Mask para usar a máscara de CPF no campo de CPF.**

# observação

**Os CPFs válidos (Cadastro de Pessoas Físicas) submetidos no db.json pela página de POST do formulário foram gerados com o seguinte link: "https://www.4devs.com.br/gerador_de_cpf".**
