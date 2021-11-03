import { Injectable } from '@angular/core';

export class Task{

  public name: string;
  public id: number;
  public static taskCount: number = 0;

  public constructor(name: string){
      this.name = name
      Task.taskCount++;
      this.id = Task.taskCount;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks : Array<Task> = [];
  private completed : Array<Task> = [];
  private deleted : Array<Task> = []; 

    getItems() : Array<Task> {
        return this.tasks;
    }

    pushItem(name : string){
        this.tasks.push(new Task(name));
    }

    deleteItem(id:number): void{
      for(let i = 0; i < this.tasks.length; i++){
        if(this.tasks[i].id === id){
          this.deleted.push(this.tasks[i]);
          this.tasks = this.tasks.filter(obj => obj !== this.tasks[i]);
        }
      }
    }

    getDeleted() : Array<Task>{
      return this.deleted;
    }

    completeItem(id : number) : void{
      for(let i = 0; i < this.tasks.length; i++){
        if(this.tasks[i].id === id){
          this.completed.push(this.tasks[i]);
          this.tasks = this.tasks.filter(obj => obj !== this.tasks[i]);
        }
      }
    }

    getCompleted() : Array<Task>{
      return this.completed;
    }

  constructor() { }
}
