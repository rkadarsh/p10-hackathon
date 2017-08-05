import express from 'express';
import PmoController from './pmo.controller.js';

let router = express.Router();
router.get('/getProjects',PmoController.empGetPojects);//get projects for pmo 
router.post('/Addproject',PmoController.addProject); //add project
// router.post('/addActivities',PmoController.addActivities)//add activities

export default router;