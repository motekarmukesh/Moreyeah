import { Component, Input } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees:Employee[]=[
    new Employee(101, "John", 5000,"mukesh" ,27,"07-09-1993","01-01-2021"),
    new Employee(101, "John", 5000,"hohn" ,27,"07-09-1993","01-01-2021"),
    new Employee(101, "John", 5000,"doe" ,27,"07-09-1993","01-01-2021"),
    
  ];
    newemployee:Employee = new Employee(null,null,null,null,null,null,null);
  msg: void;
  eachdetail: Employee[];
  singleuser: Employee;
  info: string;
  show: boolean;
  onInsertClick(){
    this.employees.push(new Employee(this.newemployee.empId,this.newemployee.empname,this.newemployee.salary,this.newemployee.Name,
      this.newemployee.age,this.newemployee.dob,this.newemployee.createdon));
     this.newemployee.empId = null;
     this.newemployee.empname = null;
     this.newemployee.salary = null;
     this.newemployee.Name=null;
     this.newemployee.age=null;
     this.newemployee.dob=null;
     this.newemployee.createdon=null;
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
   
   this.show = true;
 }

 
}
