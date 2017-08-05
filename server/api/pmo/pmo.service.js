import connection from '../../db/db-pg-connection.js';

let PmoService = {
getPmoProjects(){
         return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM public.project', (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res.rows);
            });
        });
    },
addProject(data){
     return new Promise((resolve, reject) => {
          const tableQuery = {
                text:"INSERT INTO public.project(project_name,project_description) VALUES($1,$2) RETURNING *",
                values: [data.project_name,data.project_description]
            }
            connection.query(tableQuery, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res.rows[0]);
            });
        });

},
    ActivitiesAdd(data){
         return new Promise((resolve, reject) => {
             console.log("hahaha",data)
          const tableQuery = {
                text:"INSERT INTO public.activity(project_id,activity_name)VALUES($1,$2)",
                values: [data.project_id,data.activity_name]
            }
            connection.query(tableQuery, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res.rows[0]);
            });
        });
    }
  
};

export default PmoService;