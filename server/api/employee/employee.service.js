import connection from '../../db/db-pg-connection.js';

let EmployeeService = {
    getTimeSheet(data) {
        return new Promise((resolve, reject) => {
            const addTime = new Date();
            const query = {
                text: "SELECT * FROM public.timesheet_management WHERE employee_id =$1 AND project_id =$2 AND date_for_timesheet =$3",
                value: [data.employee_id, data.project_id, data.date_for_timesheet]

            }
            connection.query(query, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    console.log("promises");
                    resolve(res.rows[0]);
                }

            });

        });
    },

    updateTimeSheet(array) {
        let promises = [], promise;

        array.forEach(data => {
            promise = new Promise((resolve, reject) => {
                 const addTime = new Date();
                let queryString;

                if(data && !data.id){
                    queryString = {
                        text: 'INSERT INTO public.timesheet_management (employee_id, project_id, activity_id, status, actual_hours, planned_hours, date_for_timesheet, created_at, updated_at) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)',
                        values: [data.employee_id, data.project_id, data.activity_id, data.status, data.actual_hours,data.planned_hours, addTime, addTime, addTime]
                    };
                }
                else{
                    queryString = {
                        text: 'UPDATE public.timesheet_management SET activity_id = $1, status = $2, actual_hours = $3, planned_hours=$4, updated_at = $5 WHERE id=$6',
                        values: [data.activity_id, data.status, data.active_hours, data.planned_hours, addTime, data.id]
                    };
                }
                    
                
                    connection.query(queryString, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(res);
                        }
                    });

            });

            promises.push(promise);
        });

        return Promise.all(promises);
    }
};

export default EmployeeService;