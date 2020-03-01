const express = require('express');
const app = express();//top-level function of express

const path = require('path');
const apiData = require('./people.json');

const port = 3000;

app.use((req,res,next)=>{
  console.log(`${req.method} request for ${req.url} `);
  next();
})

//used to send a default message before routing
// app.get('/', (req, res) => res.send('Hello World!'));

app.use(express.static('public'));//all files from public folder must be included
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/popper', express.static(path.join(__dirname, 'node_modules/@popperjs/core/dist/umd')));
app.use('/js', express.static(path.join(__dirname,'public/js')));

// set the route for index.html
app.get('/', (req,res,)=>{
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

// set the route for about.html
app.get('/about', (req,res,)=>{
  res.sendFile(path.join(__dirname+'/public/about.html'));
});
//give access to apiData
app.get('/people', (req,res,)=>{
  res.json(apiData);
});


app.listen(port, () => console.log(`This app is listening on port ${port}!`))
