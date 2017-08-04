import EmployeeService from './employee.service.js';

let controller = {
    getEmployees(req, res, next) {
        EmployeeService.getEmployees()
            .then(employees => { res.send({ employees }) })
            .catch(next);
    }
};

export default controller;