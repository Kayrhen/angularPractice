import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService} from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  dishes: Dish[];
  selectedDish: Dish;

  constructor(private dishService: DishService){
    //will create a single dishservice object, no longer have DISHES const. how
    //do you fetch info?//tihs defines dishService property and
    //identifies it as an injection site
  }

  getDishes(): void{
    this.dishes = this.dishService.getDishes();
  }
  ngOnInit(){
    //automatically exectued when this comp is created
    this.getDishes();
    //set into local variable
  }
. . .

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
