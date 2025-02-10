import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
alert(arg0: string) {
throw new Error('Method not implementeddddd.');
}
tasks: Task[] = [];
searchList: string = '';
editingTask: Task | null = null;

constructor(private taskService: TaskService) {}

ngOnInit() {
  this.fetchTasks();
}

fetchTasks() {
  this.taskService.getTasks().then(response => {
    this.tasks = response.data;
  });
}

deleteTask(id: number) {
  if (confirm('Are you sure you want to delete thiss')) {
    this.taskService.deleteTask(id).then(() => {
      alert('deleted succesfully');
      this.fetchTasks();
    });
  }
}

editTask(task: Task) {
  this.editingTask = { ...task };
}

saveTask() {
  if (this.editingTask) {
    this.taskService.updateTask(this.editingTask).then(() => {
      alert('Task Updated Succesfullyyyyy');
      this.editingTask = null;
      this.fetchTasks();
    });
  }
}

toggleCompletion(task: Task) {
  this.taskService.toggleTaskCompletion(task.id!, !task.completed).then(() => {
    task.completed = !task.completed;
  });
}

searchTasks() {
  if (this.searchList.trim() === '') {
    this.fetchTasks(); 
  } else {
    this.tasks = this.tasks.filter(task =>
      task.title.toLowerCase().includes(this.searchList.toLowerCase())
    );
  }
}

}
