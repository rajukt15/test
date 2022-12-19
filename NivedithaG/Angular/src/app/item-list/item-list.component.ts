import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  @Input() itemListArray:string[]=[]

  
handleDelete(indexNo:number){
  this.itemListArray.splice(indexNo,1)
}


}
