import connection from '../../db/db-pg-connection.js';

let EmployeeService = {
    getEmployees() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM public.project', (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res.rows);
            });
        });
    },
    //get projects
    getEmployeeProjects(data) {
        return new Promise((resolve, reject) => {
            const tableQuery = {
                text: "SELECT project_id, B.project_name  FROM public.employee_project_map AS A, project AS B WHERE A.employee_id = $1 AND A.project_id = B.id",
                // text:"SELECT  B.id,B.project_name,C.status  FROM project AS B,timesheet_management AS C WHERE B.id = $1 AND C.project_id=B.id",
                // text:"SELECT A.id,B.project_name,status  FROM public.employee_project_map AS A, project AS B,timesheet_management AS C WHERE A.employee_id = $1 AND A.project_id =B.id AND C.project_id=B.id",
                values: [data]
            }
            connection.query(tableQuery, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res.rows);
            });
        })
    },
    getRangeTime(data){
        return new Promise((resolve, reject) => {
       //filter the dates before passing
            const tableQuery = {
                // text: "SELECT * FROM timesheet_management WHERE ($1 <=date_for_timesheet AND $2 >=date_for_timesheet)",
            //   text:"SELECT * FROM timesheet_management WHERE date_for_timesheet >= '2012-03-15' AND date_for_timesheet <= '2012-03-20'",
              text:"SELECT * FROM timesheet_management WHERE date_for_timesheet >= $1 AND date_for_timesheet <= $2",
              values:[data.startDate,data.toDate]
              // values: ['2012-03-15','2012-03-20 '] //from date and to date 
            }
            connection.query(tableQuery, (err, res) => {
                if (err)
                    {
                        reject(err);
                    }
                else
                    resolve(res.rows);
            });
        })
    
    },
    getProjectActivities(data){
       return new Promise((resolve, reject) => {
            const tableQuery = {
              text:"SELECT * FROM activity WHERE project_id = $1",
              values: [data.project_id]
            }
            connection.query(tableQuery, (err, res) => {
                if (err)
                    {
                        reject(err);
                    }
                else
                    resolve(res.rows);
            });
        })
    },
    Activities(){
        return new Promise((resolve, reject) => {
            // const tableQuery = {
            //   text:"SELECT * FROM activity ",
            // }
            connection.query("SELECT * FROM activity ", (err, res) => {
                if (err)
                    {
                        reject(err);
                    }
                else
                    resolve(res.rows);
            });
        })
    }
  
};

export default EmployeeService;