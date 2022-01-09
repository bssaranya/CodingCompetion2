const express = require('express');
const app= new express();

// const nav = [{link:'./books',name:'Books'},{link:'./authors',name:'Authors'},{link:'./admin',name:'Add Book'}]
const homeRouter = require('./src/routes/homeRoutes');
// const mailRouter = require('./src/routes/mailerRoutes')


app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/home',homeRouter);
// app.use('/mailer',mailerRouter)

app.get('/',(req,res) => {
    res.render("index")
});


app.listen(3000);