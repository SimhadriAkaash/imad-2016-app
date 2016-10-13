var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articleOne= {
    title:'Article one | Akaash',
    heading:'Article one',
    date:'29 Sept 16',
    content : `
    <p>
          This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.
      </p> 
      <p>
          This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.
      </p>
        <p>
          This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.This is the content ofthe article one.
      </p>`
};


function createTemplate(data){

var title=data.title;
var date=data.date;
var content=data.content;
var heading=data.heading;

var htmlTemplate=`

<html>
    
    <head>
        <title>
           ${title}
            </title>
            </head>
<body>
  
  <div>
        <a href="">Home</a>
  
  </div>
  <hr>     
  <h3>${heading}</h3>

  <link href="/ui/style.css" rel="stylesheet" />
  <div >${date}</div>
  <div class="container" >
     ${content}
  </div>
  
  
    </body>

</html>

`
    return htmlTemplate;
}
var counter=0;

app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne))
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
