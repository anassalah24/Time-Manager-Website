import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pocket : number;
  trash : number;
  tasks : number;
  constructor(private taskService : TaskService) { 
    this.pocket = taskService.getCompleted().length;
    this.trash = taskService.getDeleted().length;
    this.tasks = taskService.getItems().length;
  }

  ngOnInit(): void {
  }
  search:string="Search...."

}
