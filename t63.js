// console.log('Hello World');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Box shadow</title>
      <style>
          .container{
              display:flex;
          }
          .class{
              border:2px solid black;
              background-color:antiquewhite;
              margin:15px 10px;
              padding:15px 20px;
              /* box-shadow: offset-x offset-y blurradius spreadradius color; */
              box-shadow: 10px 10px rosybrown;
              /* box-shadow: -10px -10px rosybrown; */
              box-shadow: 7px 7px 10px rosybrown;
              /* box-shadow: -7px -7px 10px rosybrown;
              box-shadow: -7px -7px 7px 10px rosybrown; */
              box-shadow: 7px 7px 10px rgba(93, 240, 40,1);
              box-shadow: inset 7px 10px orange;
              box-shadow: 5px 5px orange,10px 10px red;
          }
          h3{
              text-shadow: 1px 1px 1px orange;
          }
      </style>
  </head>
  
  <body>
      <div class="container">
          <div class="class" id="class-1">
              <h3>Class1</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nisi repudiandae omnis? Impedit
                  mollitia error reiciendis eaque dolor harum eius, amet, voluptatibus nobis repellendus, porro
                  accusantium laudantium est quibusdam nam eos. Eaque explicabo sequi fuga voluptatem?</p>
          </div>
          <div class="class" id="class-2">
              <h3>Class2</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nisi repudiandae omnis? Impedit
                  mollitia error reiciendis eaque dolor harum eius, amet, voluptatibus nobis repellendus, porro
                  accusantium laudantium est quibusdam nam eos. Eaque explicabo sequi fuga voluptatem?</p>
          </div>
          <div class="class" id="class-3">
              <h3>Class3</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nisi repudiandae omnis? Impedit
                  mollitia error reiciendis eaque dolor harum eius, amet, voluptatibus nobis repellendus, porro
                  accusantium laudantium est quibusdam nam eos. Eaque explicabo sequi fuga voluptatem?</p>
          </div>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});