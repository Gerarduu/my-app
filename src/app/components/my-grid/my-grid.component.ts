import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items-service/items.service';
import { Data } from 'src/app/models/data';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.scss']
})
export class MyGridComponent implements OnInit {

  items: Item[] = []

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemsService.getDataFromAPI()
    .subscribe(
      data => { 
      this.items = data.results
    })
  }

}
