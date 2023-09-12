const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

const app = express();

if(process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}

app.use(express.json());
//app.use(morgan('dev'));

app.use(express.json());


app.use('/api/v1/users', userRouter);
app.use('/api/v1/product', productRouter);

module.exports = app;