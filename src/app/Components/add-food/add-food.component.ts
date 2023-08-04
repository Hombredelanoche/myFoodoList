import { Component } from '@angular/core';
import { foodsService } from '../../Services/foods.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss'],
})
export class AddFoodComponent {
  public food: string = '';
  public constructor(private foodsService: foodsService) {}

  public addFood() {
    this.foodsService.addFood(this.food);
    console.log();
    this.food = '';
  }
}
