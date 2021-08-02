import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent {
  
  
   @Input() details:any;
   
  todayDate : Date = new Date();
  
 
  constructor() {
   
   }

  ngOnInit(): void {
    
  }

}