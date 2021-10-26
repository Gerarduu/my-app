import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items-service/items.service';
import { GoogleItem } from 'src/app/models/googleItem';

@Component({
  selector: 'app-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.scss']
})
export class MyGridComponent implements OnInit {

  items: GoogleItem[] = []
  searchText = ""

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemsService.getItemsList().then(data => this.items = data.data)
  }

}
