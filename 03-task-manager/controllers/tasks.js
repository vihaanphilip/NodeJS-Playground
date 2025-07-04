const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const {createCustomError} = require('../errors/custom-error');
const getAllTasks = asyncWrapper( async (req, res) => {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
        // res
        //     .status(200)
        //     .json({ status: 'success', data: { tasks, nHbits: tasks.length } });
})

const getTask = asyncWrapper( async (req, res, next) => {
    const { id:taskID } = req.params;
    const task = await Task.findOne({ _id:  taskID });
    if (!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 404));
        // const error = new Error(`No task with id: ${taskID}`);
        // error.status = 404;
        // return next(error);
        // return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
})


const createTask = asyncWrapper( async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });  
})

const updateTask = asyncWrapper( async (req, res) => {
    const { id:taskID } = req.params;
    const task = await Task.findOneAndUpdate(
        { _id: taskID }, 
        req.body, 
        { new: true, runValidators: true }
    );
    if (!task) {
        return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    // res.status(200).json({ id: taskID, data: req.body });
    res.status(200).json({ task });
})


const deleteTask = asyncWrapper( async (req, res) => {
    const { id:taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
        return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
})

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};