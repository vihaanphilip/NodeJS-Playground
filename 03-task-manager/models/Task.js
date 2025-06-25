const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a task name'],
        maxlength: [20, 'Task name cannot be more than 20 characters'],
        trim: true,
    }, 
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Task', taskSchema);