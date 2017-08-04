import EmployeeService from './employee.service.js';

let controller = {
    getEmployees(req, res, next) {
        EmployeeService.getEmployees()
            .then(employees => {
                res.send({ employees })
            })
            .catch(next);
    },
    empGetPojects(req, res, next) {
        EmployeeService.getEmployeeProjects(req.params.id)
            .then(employeesProject => {
                res.status(200);
                res.send(employeesProject);
            })

    },
};

export default controller;