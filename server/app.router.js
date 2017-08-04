import express from 'express';

import employeeRouter from './api/employee/employee.router.js';

let router = new express.Router();

router.use('/employees', employeeRouter);

export default router;