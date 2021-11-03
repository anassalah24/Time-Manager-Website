import { Component, OnInit , Input} from '@angular/core';
import { TaskService, Task } from 'src/app/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-main',
  templateUrl: './tasks-main.component.html',
  styleUrls: ['./tasks-main.component.css']
})
export class TasksMainComponent implements OnInit {
  @Input() task: Task = new Task(""); 
  
  constructor(private taskService : TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  delete(){
    this.taskService.deleteItem(this.task.id);
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
  
  complete(){
    this.taskService.completeItem(this.task.id);
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
}

