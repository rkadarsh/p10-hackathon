import express from 'express';
import controller from './employee.controller.js';

let router = express.Router();

router.get('/', controller.getEmployees);
router.get('/projects/:id',controller.empGetPojects);

export default router;