import EmployeeService from './employee.service.js';

let controller = {
    getEmployees(req, res, next) {
        EmployeeService.getEmployees()
            .then(employees => { res.send({ employees }) })
            .catch(next);
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
    //  loginUser: function(req,res,next){
    //     let userData;
    //     UserService.loginUser(req.body)
    //         .then( user =>{

    //             userData = user;
    //             return UserService.getUserWalletData(userData.user_id);
                
    //         })
    //         .then(walletData=>{
    //             userData.balance=walletData;
    //             userData.status=true;
    //             res.status(200);
    //             res.send(userData);
    // })
};

export default controller;