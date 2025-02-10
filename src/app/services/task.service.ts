import { Injectable } from '@angular/core';
import axios from 'axios';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
    private apiUrl = 'http://localhost:8080/api/tasks';

    getTasks() {
      return axios.get<Task[]>(this.apiUrl);
    }
  
    addTask(task: Task) {
      return axios.post(this.apiUrl, task);
    }

    updateTask(task: Task) {
      return axios.put(`${this.apiUrl}/${task.id}`, task);
    }

    toggleTaskCompletion(id: number, completed: boolean) {
      return axios.patch(`${this.apiUrl}/${id}`, { completed });
    }
  
    deleteTask(id: number) {
      return axios.delete(`${this.apiUrl}/${id}`);
    }

    // searchTasks(query: string) {
    //   return axios.get<Task[]>(`${this.apiUrl}/search?query=${query}`);
    // }

}
