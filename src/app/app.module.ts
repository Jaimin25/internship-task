import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppSharedModule } from './shared/app-shared.module';
import { DishesSharedModule } from './shared/dishes-shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppSharedModule,
    AppRoutingModule,
    DishesSharedModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
