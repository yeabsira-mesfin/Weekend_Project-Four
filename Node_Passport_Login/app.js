const expresss = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose')


const app = expresss();

// DB Config
const db = require('./config/keys').MongoURI

// Connect to Mongo

mongoose.connect(db,{useNewUrlParser: true}).then(() => console.log('MongoDB Connected...')).catch(err => {
    console.log(err)
})

//EJS 
app.use(expressLayouts);
app.set('view engine','ejs')

// Routes
app.use('/', require('./Routes/index'));
app.use('/', require('./Routes/users'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
