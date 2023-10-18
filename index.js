let express = require('express');
let app =express();

app.get('/', (request,response)=>{
    response.send("hello");
})

app.get('/about', (request,response)=>{
    response.send("this is about");
})

app.listen(3000, ()=>{
    console.log("app is running at localhost: 3000")
})