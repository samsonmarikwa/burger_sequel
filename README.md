# Eat-Da-Burger
Eat-Da-Burger is a restaurant application that lets users input burgers they would like to eat. On clicking the Submit button, the burger is saved to a database. The burger is displayed on the web-page in the Available section. If the user clicks the Devout It button which is next to the burger, the burger is moved to the devoured section.


## Setup
The application uses Express web server, Handlebars template engine - partials have also been used in displaying the Available and Devoured sections. A MySQL database has been used for persistence. Ajax has been used to communicate from the front-end to the backend APIs. The application coding is layed out following the MVC model. I have also developed an ORM framework to interact with the database. The objective of developing the ORM is to have an understanding of the underlying design of the existing ORM Frameworks on the market such as Sequelize.

## Access
The application can be accessed on [Heroku](https://glacial-fjord-45128.herokuapp.com/)

## Local Deployment
To deploy the code on your machine, run a git clone and then npm install to deploy the modules required for the application. You should then create a database using the scripts provided. You do not need to run the seeds.sql. You should then create your own .env file with a password for your database.
