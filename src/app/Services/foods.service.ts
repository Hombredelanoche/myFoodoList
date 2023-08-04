import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class foodsService {
  public foods: string[] = [];

  constructor(private logService: LogService) {}

  public addFood(food: string): void {
    this.foods.push(food);
    this.logService.log(`${food} a bien été ajouter à la liste des aliments.`);
  }

  public removeFood(index: number): void {
    this.foods.splice(index, 1);
    this.logService.log(
      `${index} a bien été supprimer de la liste des aliments.`
    );
  }
}
