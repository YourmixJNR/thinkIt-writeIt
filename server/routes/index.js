import { Router } from "express";

const indexRouter = Router()

indexRouter.get('/api', function (req, res) {
    res.json({
        message: 'Welcome to the API',
        data: null,
    });
});

export default indexRouter