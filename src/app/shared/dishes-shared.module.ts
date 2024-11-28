import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesCategoriesComponent } from '../core/layout/dishes/categories/categories.component';
import { DishesLayoutComponent } from '../core/layout/dishes/dishes.component';
import { DishesMenuComponent } from '../core/layout/dishes/menu/menu.component';
import { CartComponent } from '../core/layout/dishes/cart/cart.component';

@NgModule({
  declarations: [
    DishesCategoriesComponent,
    DishesLayoutComponent,
    DishesMenuComponent,
    CartComponent,
  ],
  imports: [CommonModule],
  exports: [
    DishesCategoriesComponent,
    DishesLayoutComponent,
    DishesMenuComponent,
    CartComponent,
  ], // Export the header for use in other modules
})
export class DishesSharedModule {}
