import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/task.service';

@Component({
  selector: 'app-pocket-task',
  templateUrl: './pocket-task.component.html',
  styleUrls: ['./pocket-task.component.css']
})
export class PocketTaskComponent implements OnInit {
  @Input() task : Task = new Task("");

  constructor() {

   }

  ngOnInit(): void {
  }

}
