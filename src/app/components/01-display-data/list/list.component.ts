import { Component, OnInit } from '@angular/core';

import { Item } from './../item.model';
import { ListService } from './../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  item: Item;
  items: Array<Item>;

  constructor(
    private listService: ListService
  ) { }

  ngOnInit() {
    this.item = this.listService.getItem();
    this.items = this.listService.getItems();
  }

}
