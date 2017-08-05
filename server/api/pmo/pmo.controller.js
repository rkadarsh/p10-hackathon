import PmoService from './pmo.service.js';

let Pmocontroller = {
     empGetPojects(req, res, next) { //not done
        PmoService.getPmoProjects(req.body)
            .then(projects => {
                res.send({ projects })
            })
            .catch(next);
    },
        addProject(req,res,next){
            PmoService.addProject(req.body)
            .then(addedProjects=>{
                res.status(200);
                res.send("project added successfully");
                
            })
        },
        addActivities(req,res,next){
             PmoService.ActivitiesAdd(req.body)
            .then(addedActivities=>{
                res.status(200);
                res.send("project added successfully");
                
            })
        }
};

export default Pmocontroller;