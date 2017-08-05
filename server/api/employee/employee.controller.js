import EmployeeService from './employee.service.js';
import _ from 'underscore';

let controller = {
    getEmployees(req, res, next) {
        EmployeeService.getUserDetail(req.body)
            .then(employee => {
                let data=employee.employee;
                res.status(200);
                res.send(employee)
            })
            .catch(err=>{
                if(err){
                    res.status(400)
                    res.send("email or password does not match");
                }
            });
    },
    empGetPojects(req, res, next) {
        EmployeeService.getEmployeeProjects(req.params.id)
            .then(employeesProject => {
                res.status(200);
                res.send(employeesProject);
            })

    },
    getTimeSheetRange(req, res, next) {//get timesheet history based on the date range
        let data=req.body;
        let timeSheet;
        EmployeeService.getRangeTime(data)
        .then(getTimeSheet => {
            timeSheet = getTimeSheet;
            return EmployeeService.getProjectActivities(data)
            .then((activitydata)=>{
                let differActivities = _.filter(activitydata, function(obj){ return !_.findWhere(getTimeSheet, {activity_id: obj.id}); });
                let dataToSend = _.union(getTimeSheet, differActivities);
                res.status(200);
                res.send(dataToSend);
            })
        }).catch(err=>{
            res.status(400);
            res.send("no data in this limit");
        })

        
        
    },
    getActivities(req,res,next){
        EmployeeService.Activities().then(result=>{
            console.log(result,"result");
            res.status(200);
            res.send(result);
        })
    },
    getTimeSheet(req,res, next){
        console.log("getting timesheet");
        EmployeeService.getTimeSheet(req.params.id)
            .then(timesheet => { res.send({timesheet})})
            .catch(next);
    },
    updateTimeSheet(req, res, next) {
        console.log('controll');
        EmployeeService.updateTimeSheet(req.body)
            .then(result => {res.send({status: 1, Message: "Success"})})
            .catch(next);
    }
};

export default controller;