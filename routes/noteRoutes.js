import express  from "express";
import { DeletedNote, createNote, getAllNote, updateNote } from "../controller/noteController.js";


const routes = express.Router()

routes.route('/').get(getAllNote).post(createNote)
routes.route('/:id').put(updateNote).delete(DeletedNote)

export default routes
