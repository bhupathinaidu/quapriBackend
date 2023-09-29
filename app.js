const express = require('express');
const morgan = require('morgan');
var cors = require('cors')

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

const app = express();

if(process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors())
//app.use(morgan('dev'));

app.use(express.json());


app.use('/api/v1/users', userRouter);
app.use('/api/v1/product', productRouter);

module.exports = app;