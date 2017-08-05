import express from 'express';

import employeeRouter from './api/employee/employee.router.js';
import pmoRouter from './api/pmo/pmo.router.js';

let router = new express.Router();

router.use('/employees', employeeRouter);
router.use('/pmo', pmoRouter);


export default router;