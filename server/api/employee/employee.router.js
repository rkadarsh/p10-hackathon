import express from 'express';
import controller from './employee.controller.js';

let router = express.Router();

router.get('/', controller.getEmployees);
router.get('/getTimeSheet', controller.getTimeSheet);
router.post('/timesheet', controller.updateTimeSheet);

export default router;