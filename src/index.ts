import logger from 'jet-logger';
import EnvVars from '@src/common/EnvVars';
import { connectToDatabase } from './services/database.service';
import express from 'express';
import { app_init } from './app';


// **** Variables **** //
const SERVER_START_MSG = 'Express server started on port: ' + EnvVars.Port.toString();
const app = express();

connectToDatabase()
.then(() => {
    app_init(app);
    console.log('app now listening of port: 8080')
    app.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG));
})
.catch((error: Error) => {
    console.error('Database connection failed', error);
    process.exit();
});

// app_init(app);
// console.log('app now listening of port: 8080')
// app.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG));