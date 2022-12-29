import express from "express";
import * as todoController from './../controllers/todo-controller.js';

const router = express.Router();

/* URLs
Search all the tasks - GET /todo
Create task - POST /todo
*/


router.route('/todo')
    .post(todoController.post)
    .get(todoController.index);

/* URLs
Retrieve task by id - GET /todo/${id}
Update task by id - PUT /todo/${id}
Delete task by id - DELETE /todo/${id}
*/
router.route('/todo/:id')
    .get(todoController.get)
    .put(todoController.update)
    .delete(todoController.remove);

export default router;