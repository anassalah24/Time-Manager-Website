import { Component, OnInit } from '@angular/core';
import {TaskService, Task} from '../../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Array<Task>;
  constructor(public taskService : TaskService) {
    this.tasks = taskService.getItems();
  }

  ngOnInit(): void {
  }

  addTask(name : string) : void{
    this.taskService.pushItem(name);
    this.tasks = this.taskService.getItems();
  }
}
