import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddFoodComponent } from './Components/add-food/add-food.component';
import { FoodListComponent } from './Components/food-list/food-list.component';
import { FormsModule } from '@angular/forms';
import { foodsService } from './Services/foods.service';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFoodComponent,
    FoodListComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [foodsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
