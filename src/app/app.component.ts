import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RedirectingRouteInAngular16';
  employees =[
    {
      id:101,
      name:"Dinesh",
      age:23
    },
    {
      id:102,
      name:'Ramesh',
      age:34
    },
    {
      id:103,
      name:'ranjKumar',
      age:45
    },{
      id:104,
      name:"Ranjeet",
      age : 50
    },
    {
      id:105,
      name:"Rakesh",
      age:45
    },
    {
      id:106,
      name:'Indrajeet',
      age:34
    }
  ]
  student() {
    console.log(this.employees);
    
    }
}
