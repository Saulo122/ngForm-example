import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemType } from './item/item-type.modul';
import { Item } from "./item/item.component";
//Comentario
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
  
  addChoice(choice: string, name:string, price:string){
    if(choice === "cafes"){
      this.items.unshift({id: Math.floor(Math.random()*1000), name: name, price: price});
    }
    else if(choice === "postres"){
      this.desserts.unshift({id: Math.floor(Math.random()*1000), name: name, price: price});
    }
  }

  deleteItem(id: number){
      this.items = this.items.filter((item) => item.id !== id);
      this.desserts = this.desserts.filter((item) => item.id !== id);
  }
  
}
