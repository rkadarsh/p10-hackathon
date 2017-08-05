import express from 'express';
import controller from './employee.controller.js';

let router = express.Router();

router.get('/', controller.getEmployees);
router.get('/projects/:id',controller.empGetPojects);
router.post('/timesheetRetrieval',controller.getTimeSheetRange);//get range of date for timesheet 
router.get('/activities',controller.getActivities);
router.get('/getTimeSheet', controller.getTimeSheet);
router.post('/timesheet', controller.updateTimeSheet);
router.post('/login',controller.getEmployees);
// 
export default router;