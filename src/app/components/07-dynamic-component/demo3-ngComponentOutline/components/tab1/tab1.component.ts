import { Component, Injector, OnInit } from '@angular/core';
import { DynamicService } from '../../dynamic.service';
import { token } from './../../tab-container/tab-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {
  dataIn!: string;

  constructor(
    private inject: Injector,
    private serv: DynamicService
  ) { }

  ngOnInit(): void {
    this.dataIn = this.inject.get(token);
  }

  sendData() {
    this.serv.outputFromDynamicComponent('Sent data from Tab1');
    }

}
