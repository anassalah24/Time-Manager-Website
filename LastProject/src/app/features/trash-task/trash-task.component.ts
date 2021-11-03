import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/task.service';

@Component({
  selector: 'app-trash-task',
  templateUrl: './trash-task.component.html',
  styleUrls: ['./trash-task.component.css']
})
export class TrashTaskComponent implements OnInit {
  @Input() task: Task = new Task("");
  
  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
