import { Component, Injector, OnInit } from '@angular/core';
import { DynamicService } from '../../dynamic.service';
import { token } from './../../tab-container/tab-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})
export class Tab2Component implements OnInit {
  dataIn!: string;

  constructor(
    private inject: Injector,
    private service: DynamicService
  ) { }

  ngOnInit(): void {
    this.dataIn = this.inject.get(token);
  }

  sendData(): void {
    this.service.outputFromDynamicComponent('Sent data from Tab2');
    }

}
