import express from 'express';
import controller from './employee.controller.js';

let router = express.Router();

router.get('/', controller.getEmployees);

export default router;