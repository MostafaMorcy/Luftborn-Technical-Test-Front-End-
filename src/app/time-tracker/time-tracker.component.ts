import { Component, OnInit } from '@angular/core';
import { Product, TimeTrackerService } from './time-tracker.service';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnInit {

  constructor(private timeTrackerService: TimeTrackerService) { }
  daily : boolean = false;
  weekly : boolean = true ;
  monthly : boolean = false;
  products: Product[] = [];
  ngOnInit(): void {
    this.getProducts();
  }
 async getProducts() {
    try {
      const productsFetch = await this.timeTrackerService.getProducts();
      this.products=productsFetch
      console.log( this.products);
    } catch (error) {
      console.error(error);
    }
     
  }
  clickEvent(option: string){
    if(option == 'daily'){
      this.daily = true
      this.weekly = false
      this.monthly = false
    }
    if(option == 'weekly'){
      this.daily = false
      this.weekly = true
      this.monthly = false
    }
    if(option == 'monthly'){
      this.daily = false
      this.weekly = false
      this.monthly = true
    }
  

  }

}
