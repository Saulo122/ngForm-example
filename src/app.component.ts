import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemType } from './item/item-type.modul';
import { Item } from "./item/item.component";

@Component({
  selector: 'app-root',
  imports: [FormsModule, Item],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {
  
  choice = "";
  name = "";
  price = "";
  items: ItemType[] = [];
  desserts: ItemType[] = [];
  
  addChoice(userChoice: string, itemName:string, itemPrice:string){
    if(userChoice === "cafes"){
      this.items.unshift({id: Math.floor(Math.random()*1000), name: itemName, price: itemPrice});
    }
    else if(userChoice === "postres"){
      this.desserts.unshift({id: Math.floor(Math.random()*1000), name: itemName, price: itemPrice});
    }
  }

  deleteItem(id: number){
      this.items = this.items.filter((item) => item.id !== id);
      this.desserts = this.desserts.filter((item) => item.id !== id);
  }
  
}
