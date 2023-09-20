import express from 'express'
import { connect } from "./config/database.js";
import apiRoutes from './routes/index.js'
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;
app.listen(PORT, async () => {
    app.use('api', apiRoutes)
    console.log(`Server is running on PORT ${PORT}`);
    await connect()
    console.log('Mongo db connected');
})