const expresss = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = expresss();

//EJS 

app.use(expressLayouts);
app.set('view engine','ejs')
// Routes

app.use('/', require('./Routes/index'));

app.use('/', require('./Routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
