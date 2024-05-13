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

**Some Angular Material components to make the layout, Bootstrap, HttpClient to make HTTP requisitons to the API, JSON Server fake API, npm-run-all, RxJS to work asynchronous and ReactiveForm**
