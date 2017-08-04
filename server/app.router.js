import express from 'express';

import employeeRouter from './api/employee/employee.router.js';

let router = new express.Router();

router.use('/employees', employeeRouter);
router.use('/pmo', employeeRouter);


export default router;