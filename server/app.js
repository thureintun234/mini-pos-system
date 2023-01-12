const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');

const config = require('./utils/config');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');

const productRouter = require('./routers/product.router');
const userRouter = require('./routers/user.router');

// connect to mongoDB
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to mongodb');
  })
  .catch((err) => {
    logger.error('error connecting to mongodb', err.message);
  });

// middlewares
app.use(express.json());
app.use(cors());
app.use(middleware.requestLogger);
app.use(helmet());

// routers
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
// accessing images route
app.use('/images', express.static('upload'));

// validation middlewares
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
