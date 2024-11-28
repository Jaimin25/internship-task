import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuData = new BehaviorSubject<any>(null);
  private $data = this.menuData.asObservable();

  url =
    'https://www.foodchow.com/api/FoodChowWD/GetRestaurantMenuWDWidget_multi?ShopId=3161&locale_id=null';
  constructor(private httpClient: HttpClient) {}
  getData(): Observable<any> {
    this.httpClient
      .get<any>(this.url, {
        headers: { Accept: 'application/json' },
      })
      .pipe(tap((data) => this.menuData.next(JSON.parse(data.data))))
      .subscribe();

    return this.$data;
  }
}
