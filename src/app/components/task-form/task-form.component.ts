import { Component,Output,EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<void>();
  newTask: Task = { title: '', description: '', dueDate: '', completed: false };

  constructor(private taskService: TaskService) {}

  addTask() {
    this.taskService.addTask(this.newTask).then(() => {
      alert('new task is addeddd');
      this.newTask = { title: '', description: '', dueDate: '', completed: false }; 
      this.taskAdded.emit(); 
    });
  }
}
