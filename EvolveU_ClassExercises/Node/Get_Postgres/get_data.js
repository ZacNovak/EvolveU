
const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const handlebars = require('handlebars');


const postgres = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'evolveu',
      password : 'Password',
      database : 'evolveu'
    }
  });

const app = express()




app.use(bodyParser.json())


app.get('/', (req, res) =>  {
    postgres.select('*').from('clients').then(data => {
        
        const source = "<h1>Hello World!</h1>" + 
                        "<p>Here are the list of clients<br>" +
                        "<ul>{{#clients}}<li>ID: {{client_id}} <ul>Name:{{name}}</ul> <ul>Email:{{email}}</ul></li>{{/clients}}</ul>"
        const template = handlebars.compile(source);
        const result = template({'clients':data});
        res.send(result);
    });

});

app.listen(3000, () => {
console.log('app is running on port 3000');
});
