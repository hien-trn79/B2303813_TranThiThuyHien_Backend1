import express from 'express';
import cors from 'cors';
import contactRouter from './app/routes/contact.route.js'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({
        message: 'Hello NodeJs'
    })
})

// config route /api/contacts/
app.use('/api/contacts/', contactRouter);

export default app;