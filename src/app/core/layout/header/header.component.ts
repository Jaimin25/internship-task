import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  logo = '/public/logo.jpg';
  title = 'FoodChow Demo India';
  location = 'Valsad, Gujarat, India';
  restaurantStatus = 'Restaurant is Open';
  restaurantTiming = 'Timing 07:00 am - 11:00 pm';
  mobileNo = '7016997342';
}
