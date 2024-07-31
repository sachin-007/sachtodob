import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, required: true, enum: ['To-do', 'In progress', 'Under review', 'Finished'] },
  priority: { type: String, enum: ['Low', 'Medium', 'Urgent'] },
  deadline: { type: Date },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;

