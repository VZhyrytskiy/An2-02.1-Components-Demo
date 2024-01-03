import { Component, inject, type OnInit } from '@angular/core';

import { type Item } from './../item.model';
import { ListService } from './../list.service';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  item!: Item;
  items!: Array<Item>;

  private listService = inject(ListService);

  ngOnInit(): void {
    this.item = this.listService.getItem();
    this.items = this.listService.getItems();
  }
}
