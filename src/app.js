import express from 'express';
import cors from 'cors';
import contactRouter from './app/routes/contact.route.js';
import ApiError from './app/api-error.js'

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

// Middleware xử lý lỗi
// Xử lý lỗi ở phía client 404
app.use((req, res, next) => {
    return next(
        new ApiError(404, 'Resource Not Found')
    )
})

// Xử lý lỗi tập trung
app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || 'Interval Server Error'
    })
})

export default app;