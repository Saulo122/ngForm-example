import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { FormsModule } from '@angular/forms';

@Component({
    selector: "app-item",
    imports: [FormsModule],
    templateUrl: "./item-html.html",
    styleUrl: "./item-style.css"
})

export class Item{
    @Input() name!:string;
    @Input() price!:string;
    @Input() id!:number;
    @Input() type!: string;
    @Output() delete = new EventEmitter();
   
    editable: boolean = false;
    nameItem: string = this.name;

    deleteItem(){
        this.delete.emit(this.id);
    }

    toggleEdit(){
        this.editable = !this.editable;
    }
}