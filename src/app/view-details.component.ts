import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent {
  show = true;
  
   @Input() details:any;
 
  constructor() {
   
   }

  ngOnInit(): void {
    console.log(this.details)
  }

}
