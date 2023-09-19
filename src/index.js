import express from 'express'
import { connect } from "./config/database.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;
app.listen(PORT, async () => {
    console.log(`Server is running on PORT ${PORT}`);
    await connect()
    console.log('Mongo db connected');
})