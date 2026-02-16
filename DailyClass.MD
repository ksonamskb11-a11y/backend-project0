**DAY 1**
[ - To install react in your project Note: [vite-project(React) is only for FrontEnd project(Seprate Folder), so you can install it later(When you need it)]
    npm create vite@latest ]
- fresh backend project setup
    npm init [use for Nodejs application initiate]
    npm run dev
    npm install express --save [install express package]
- understanding folder structure
    Authentication
    Authraization
- require v/s import statement
    routes, controllers
- basics of routing
    (error, request,respond,next)
- understanding the prd and it's importance
- .gitkeep file
- .gitignore file

- import express from "express";    or can be use  
  import e from "express";
  Express is used in the backend to quickly build fast, maintainable, and scalable web servers and APIs with minimal boilerplate code.Express.js is a popular backend web framework for Node.js that simplifies building server-side applications and APIs.
  Using Express eliminates the need for complex, repetitive row Node.js code, making backend development faster and more efficient.Express provides easy-to-use methods like app.get(), app.post(), etc., to define routes quickly.Express has a powerful routing system to handle different HTTP methods (GET, POST, PUT, DELETE) and URL patterns.
  Middleware functions let you process requests before sending a response.
  Common uses:
    Parsing JSON or form data
    Authentication
    Logging
    Error handling

-API [use for: to provide communication between 2 different applications]
  (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. APIs enable the exchange of data, features, and functionality between applications, simplifying and accelerating software development.
  API's Work:APIs function through a request and response mechanism between a client and a server. The client sends a request to the server via the API, which processes the request and returns the appropriate response. This interaction is often compared to a waiter in a restaurant who takes orders from customers (clients) and delivers them to the kitchen (server) and then brings the food back to the customers.

 - Work of files: 
 1. app.js -> use for create a server
 2. index.js / server.js -> use for 'To start Server'

 - use of Task-cmds:
  get ->  take data to Frontend from server 
  post ->  send data to server from Frontend 
  patch -> Update data which already on server
  delete -> delete data which already on server

 - Path for data:
  PS C:\Users\Ksona\OneDrive\Desktop\react\06_Swiggy_App\swiggy-project\src\data>  npx json-server data.json --port 3000  
 **Changes about this (in package.json) on Day1** 
   "type": "module",
  "main": "./src/index.js",
  "scripts": {
    "dev": "node ./src/index.js"},
**DAY 1.1**
- For 1st time to add ur git/React files into github use below commands-->  
  cmd 1 - git add .
  cmd 2 - git commit -m "message" // message should have a usefull/meaningfull name 
        (use above 2 commands one by one )
  cmd 3 - git remote add origin https://github.com/ksonamskb11-a11y/react.git
          git branch -M main
          git push -u origin main
        (use above 3 commands   as copy paste in terminal at a time..from github New repository which You made)
- Send code on github(For 2nd time & so on):
  cmd 1 - git add .
  cmd 2 - git commit -m "type meaningful message here"
  cmd 3 - git push


**DAY 2**
we can install all npm's from npm website
- nodemon - to avoid run backend program again and again.
    - npm install --save-dev nodemon  
        or npm i nodemon
**nodemon is install on day1 but changes about this (in package.json) will be on Day2.**
- prettier intro.. and config
- npm i prettier 
    or npm install --save-dev prettier  
    and To uninstall it:  npm uninstall prettier
    To install Prettier, follow these steps:
    1. Install Prettier Locally: Run the command npm install --save-dev prettier in your project directory to install Prettier as a     development dependency. 
    2. Create Configuration Files: Optionally, create a .prettierrc file for configuration and a .prettierignore file to specify    files or directories to ignore. 
    3. Initialize Your Project: If you haven't already, initialize your project with npm init to create a package.json file. 
    These steps will set up Prettier in your codebase effectively.
    OR
    install--> Prettier - Code formatter 
    (Prettier Formatter for Visual Studio Code)
    Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
- dot env intro.. and config
    .env used to store sensitive data/info - to keep it private 
    - npm install dotenv --save
    or npm i dotenv
- CORS importance and configutation 
    - npm install cors
    or npm i cors
    Cross-Origin Resource Sharing (CORS) is a security feature that allows servers to specify which origins are permitted to access their resources. It is essential for enabling secure cross-origin requests in web applications.
    you can configure CORS in a Node.js backend using the cors middleware.

- introduction of postman/thunder client:
    install them from/into vs code Extensions



**DAY 3**
- standard api response and errors
- keep the data in constants (userRolesEnum and taskStatusEnum and DB_NAME)
- add basic middlewares and their importance
              -- express.json()
              -- urlencoded()
              -- cookieParser()
              -- express.static()