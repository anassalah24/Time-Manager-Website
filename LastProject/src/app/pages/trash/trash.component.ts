import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from 'src/app/task.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
  deletedTasks : Array<Task>;
  constructor(private taskService : TaskService) {
    console.log(taskService.getDeleted());
    this.deletedTasks = taskService.getDeleted();
   }

  ngOnInit(): void {
  }

}
