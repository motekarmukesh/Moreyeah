import { Component, Input } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees:Employee[]=[
    new Employee("mukesh" ,27,"07-09-1993","01-01-2021"),
    new Employee("hohn" ,27,"07-09-1993","01-01-2021"),
    new Employee("doe" ,27,"07-09-1993","01-01-2021"),
    new Employee("mona" ,27,"07-09-1993","01-01-2021"),
    new Employee("amin" ,27,"07-09-1993","01-01-2021"),
    new Employee("yogesh" ,27,"07-09-1993","01-01-2021"),
  ];
    newemployee:Employee = new Employee(null,null,null,null);
  msg: void;
  eachdetail: Employee[];
  singleuser: Employee;
  employee:Employee[] = [];

  info: string;
  str:string = "";
       sortcolumn = "";
       order = 1;
  
       constructor(){
        this.employee = this.employees;
     }
 
  
  onInsertClick(){
    this.employees.push(new Employee(this.newemployee.Name,
      this.newemployee.age,this.newemployee.dob,this.newemployee.createdon))
     this.newemployee.Name=null;
     this.newemployee.age=null;
     this.newemployee.dob=null;
     this.newemployee.createdon=null;
     console.log("reg working");
 }

 onDeleteClick(n){
    if(confirm("Are you sure to delete this emp?")){
       this.employees.splice(n,1);
    }
 }
 onViewClick(n){
   this.eachdetail=this.employees;
   this.singleuser=this.eachdetail[n]
   console.log(this.singleuser)
   
   
 }
 onSortClick(){
  this.employees = this.employees.sort((emp1,emp2) => {
        
        if(this.sortcolumn=="Name"){
           return (emp1[this.sortcolumn].charCodeAt(0) - emp2[this.sortcolumn].charCodeAt(0)) * this.order;
        }
  });
}    

 
}