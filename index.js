//access express
let express = require('express');
let app =express();

//use the static pages in the pubic folder with index as home and every other file name as the extension to reach them
app.use('/',express.static("public"))

//access dynamic notebook pages using params
app.get('/:page', (req, res) => {
    //store the param in a variable and change it to a number so you can use math to find the next and previous pages
    const currentPage = Number(req.params.page)
    const nextPage = currentPage + 1
    const previousPage = currentPage - 1

    if(currentPage>51||currentPage<0){
        res.send(`<p>page does not exist</p>`)
    }

    //send a template literal of html code to create a dymic page
    res.send(`
    <ul>
        <a href="./">home</a>
        <a href="./about.html">about</a>
        <a href="./pages.html">notebook</a>
    </ul>
    <img width=600 src=pages/${currentPage}.JPG />
    <div>
    <a href="./${previousPage}" style="display:${currentPage>0?"block":"none"}">previous</a>
    <a href="./${nextPage}"  style="display:${currentPage<51?"block":"none"}">next</a>
    </div>
    `)
  })

//run this app locally on localhold:3000
app.listen(3000, ()=>{
    console.log("app is running at localhost: 3000")
})
