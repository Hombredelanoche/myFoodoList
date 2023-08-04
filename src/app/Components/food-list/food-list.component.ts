import { Component, OnInit } from '@angular/core';
import { foodsService } from '../../Services/foods.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public fodos: string[];
  public constructor(private foodsService: foodsService) {}

  public removeFood(index: number): void {
    this.foodsService.removeFood(index);
  }

  ngOnInit(): void {
    this.fodos = this.foodsService.foods;
  }
}
