**DAY 1**
[ - To install react in your project Note: [vite-project(React) is only for FrontEnd project(Seprate Folder), so you can install it later(When you need it)]
    npm create vite@latest ]
- fresh backend project setup
    npm init -y [use for Nodejs application initiate]
    * All in one line-Terminal-cmd:
    - npm i express mongoose nodemon dotenv cors
    
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
- 1st install git and github: select folder where you want to install it:
    - git init
then check terminal to git version by cmd:-> 
    - git --version
then use these: 
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
    or npm install --save-dev prettier   [use this instead]
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
    - Note: in postman we have to create new request and can be add a folder for diffrent project in collection and it can be save like get or post or put or many-more things to reuse further like:GET:http://localhost:4000/persons/2   or 
    POST:http://localhost:4000/user , then select body and type some code which is required to your project coding, which always written bitween{}. like:{
                "email":"test@123",  
                "pass":"test123"  
            } 
    and then click on 'Send' Button to get your project's response will be seen in Postman's Response.


**DAY 3**
- standard api-response and api-errors
- keep the data in constants (userRolesEnum and taskStatusEnum and DB_NAME)
- add basic middlewares and their importance
              -- express.json()
              -- urlencoded()
              -- cookieParser()
              -- express.static()

Note: to install cookie-parser on your project use cmd:
 - npm install cookie-parser or npm i cookie-parser


   **DAY 4**
  - basics of express routing
  - intro to controllers
  - add a healthCheck api endpoint and test it in postman
  - intro to mongoose ORM/ODM
       - npm install mongoose 
       or npm i mongoose
  - quick tour to mongodb atlas [MONOGO_DB_Cloud] and connect to db to our application
  - set IP address 0.0.0.0/0, to run our project smoothly. Because Its IP address changes every time it runs.


  **DAY 5**
- MONGO DB recap
- IP  whitelisting 
- data modeling with mongoose (practice models)
    - Data Model → Conceptual framework for how data is stored and related.
    - Data Module → Implementation unit that contains or manages data in an application or system.
    - Schema → A schema in a Database Management System (DBMS) is a blueprint or structure that defines how data is organized, stored, and related within a database. It includes tables, fields, relationships, constraints, and other database objects. Below is an example of a schema for an e-commerce application. Example: This schema includes entities such as Customers, Products, Orders, and Order_Items.
- DataBase Cluster → A database cluster is a collection of interconnected databases or servers that work together to improve performance, scalability, and availability of data management systems. 
- A database cluster refers to a group of multiple database servers (or nodes) that operate as a single system. Instead of relying on a single server to handle all data storage and processing tasks, a database cluster distributes the workload across multiple servers. This setup enhances the system's ability to manage larger volumes of data and higher numbers of simultaneous requests, ensuring that the database remains responsive and available even under heavy load. 

**day 6**
- understanding mvc architecture
- cons of mvc
- what industry follows

**day 7**
- mongo db crud operations


**day 8**
- make a .gitkeep file in folder images in public folder in your main project
- install bcrypt
    -  npm i bcrypt
- starting with our auth module
- unserstanding User schema for our project
- hash the password with pre hooks
- intro to mongoose methods with (isPasswordCorrect method)

**day 9**
- understanding tokens with jwt in theory
- implementing access and refresh token
- install jwt
    - npm i jsonwebtoken
- install uuid
    - npm i uuid

install "mailgen"-to generate a mail and "nodemailer"-to trigger/send a mail 
    - npm i mailgen 
    - npm i nodemailer

- install http-status-codes - to get http's codes
    - npm i http-status-codes

- implementing access and refresh token

**day 10**
- tokens implementation
    -refresh_token(daily new i_card_provider) access-token(daily new i_card) ko renew kr k dega

**day 11**
- understanding how to send mail in node.js

**day 12**
- how to register a user (production grade)

**day 13**
- install zod_middleware
    - npm i zod 
    - Zod is a TypeScript-first validation library. Define a schema and parse some data with it. You'll get back a strongly typed, validated result.
    - Before you can do anything else, you need to define a schema. For the purposes of this guide, we'll use a simple object schema.
    - import * as z from "zod";
        const Player = z.object({
        username: z.string(),
        xp: z.number(),
        });
    - Note — If your schema uses certain asynchronous APIs like async refinements or transforms, you'll need to use the .parseAsync() method instead.
    **Note- to know more search on 'zod npm'
- we can use express_middlewares but zod is better(used everywhere in small companies too)
- intro to validators 
- validate the user register endpoint
- we have to set validators' error as well 
- regex [RegExp]
    - A regular expression (often abbreviated as regex or regexp) is a sequence of characters that defines a search pattern. This pattern can be used for various string operations such as searching, matching, and replacing text. Regular expressions are widely used in programming languages, text editors, and search engines.
    - Basic Syntax
        1. Literals: Characters that match themselves. For example, the regex abc matches the string "abc".
        2. Metacharacters: Special characters that have specific meanings. Some common metacharacters include: .: Matches any single character except a newline. *: Matches zero or more occurrences of the preceding element. +: Matches one or more occurrences of the preceding element. ?: Matches zero or one occurrence of the preceding element. ^: Matches the start of a string. $: Matches the end of a string. []: Matches any one of the characters inside the brackets. |: Acts as a logical OR between patterns. () : Groups patterns together and captures the matched text^2^.
    - Examples
        1. Matching Digits: The regex \d matches any digit. For example, \d+ matches one or more digits.
        2. Matching Words: The regex \w+ matches one or more word characters (letters, digits, and underscores).
        3. Matching Whitespace: The regex \s matches any whitespace character (spaces, tabs, etc.).
        4. Character Classes: [a-z] matches any lowercase letter, and [A-Z] matches any uppercase letter.
    - Advanced Features
        1. Quantifiers: Specify the number of times an element should be matched. For example, a{2,4} matches "aa", "aaa", or "aaaa".
        2. Lookahead and Lookbehind: Assertions that match a pattern only if it is (or isn't) followed or preceded by another pattern. For example, (?<=\d)abc matches "abc" only if it is preceded by a digit.
        3. Backreferences: Allow you to refer to previously matched groups. For example, (\w+)\s\1 matches a word followed by a space and the same word again.
    - Practical Applications
        1. Regular expressions are used in various applications, including:
        2. Text Processing: Searching and replacing text in documents and code.
        3. Data Validation: Validating input formats such as email addresses, phone numbers, and URLs.
        4. Syntax Highlighting: Highlighting code syntax in text editors.
        5. Web Scraping: Extracting data from web pages.
    - Example:
        1. for Email: .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Invalid email format")
        - Explanation:
            1. Regex Pattern:
                1. - /^:  ^ means start of the string.
                2. - [a-zA-Z0-9._%+-]+
                    This represents the username (local part) of the email.
                    Allowed characters: Symbol	Meaning
                        a-z	lowercase letters
                        A-Z	uppercase letters
                        0-9	numbers
                        .	dot
                        _	underscore
                        %	percent
                        +	plus
                        -	hyphen
                        + means one or more characters must exist. 
                3. - @ : This matches the @ symbol.Every valid email must contain.
                4. - [a-zA-Z0-9.-]+
                    This represents the domain name.
                    Allowed characters: Symbol	Meaning
                        a-z	lowercase letters
                        A-Z	uppercase letters
                        0-9	numbers
                        .	dot
                        -	hyphen
                5. - \.  :  \. means a literal dot .
                    Because in regex . normally means any character, so we escape it with \.
                    This represents the dot before the domain extension.
                6. - [a-zA-Z]{2,}
                        This represents the domain extension (TLD).
                        {2,} means minimum 2 letters.
                7. - $
                    $ means end of the string
                    So the entire email must match this pattern.
            - Final Email Format Rule: Valid format:
                Requirements:
                    ✅ Username with allowed characters
                    ✅ @ symbol
                    ✅ Domain name
                    ✅ .
                    ✅ Extension with at least 2 letters
            2. trim(): removes accidental spaces before/after the email.
            3. "Type check" ensures only strings are processed.
    - Key Points:
        - "Regex" ensures stricter control than z.string().email() (e.g., no spaces, valid TLD).
        - "safeParse" prevents exceptions and returns structured error messages.
        - Works "both in backend and frontend" for consistent validation.
    - Example: Password Regex Validation Pattern in react/backend
        2. for Password: .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        - Explanation:
            1. (?=.*[a-z]): Ensures at least one lowercase letter.
            2. (?=.*[A-Z]): Ensures at least one uppercase letter.
            3. .{8,}: Ensures the password is at least 8 characters long.
        - Additional Considerations:
            If you want to include more rules like digits or special characters:
            1. Add (?=.*\d) for at least one digit.
            2. Add (?=.*[@$!%*?&]) for at least one special character.
        - Explanation_2:
                - 1. ^ means start of the string. So the password checking starts from the beginning.
                - 2. (?=.*[a-z]) : This is a positive lookahead. 
                    .* → any characters
                    [a-z] → at least one lowercase letter. So the password must contain at least one lowercase letter.
                - 3. (?=.*[A-Z]):  [A-Z] → at least one uppercase letter. So password must contain at least one uppercase letter.
                - 4. (?=.*\d) : \d → digit (0–9) .So password must contain at least one number.
                - 5. (?=.*[@$!%*?&]): This ensures at least one special character.
                - 6. [A-Za-z\d@$!%*?&]{8,}: This part defines what characters are allowed and the length.
                    {8,} means:
                        ➡ Minimum 8 characters
                        ➡ No maximum limit
                - 7.  $ means end of the string. So the entire password must match this pattern/rule.
            --> **Final Password Rules**
                A valid password must contain:
                ✅ At least 1 lowercase letter
                ✅ At least 1 uppercase letter
                ✅ At least 1 number
                ✅ At least 1 special character (@$!%*?&)
                ✅ Minimum 8 characters
        - "Real-time validation" updates the error message as the user types.
        - "Backend safety": You should revalidate the password on the backend using the same regex to prevent bypassing client-side checks.
        - error: console.log("Password must include uppercase, lowercase, a number, a special character, and be at least 8 characters long.");
            

