import express from 'express'
import 'dotenv/config'

// Create an instance of express
const app = express();

// Parse Middleware Requests
app.use(express.json());

// Start Server
app.listen( process.env.PORT, ()=> {
    console.log(`App is listening to PORT ${process.env.PORT}`);
} )