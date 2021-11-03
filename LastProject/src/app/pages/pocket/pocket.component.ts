import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from 'src/app/task.service';

@Component({
  selector: 'app-pocket',
  templateUrl: './pocket.component.html',
  styleUrls: ['./pocket.component.css']
})
export class PocketComponent implements OnInit {
  completedTasks : Array<Task>;

  constructor(private taskService : TaskService) { 
    this.completedTasks = taskService.getCompleted();
  }

  ngOnInit(): void {
  }

}
