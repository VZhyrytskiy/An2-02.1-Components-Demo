import { Component, Injector, OnInit, inject } from '@angular/core';
import { DynamicService } from '../../dynamic.service';
import { token } from './../../tab-container/tab-container.component';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: './tab1.component.html',
  styleUrl: './tab1.component.css'
})
export class Tab1Component implements OnInit {
  private injector =  inject(Injector);
  private dynamicService = inject( DynamicService);

  dataIn!: string;

  ngOnInit(): void {
    // get data from parent component (TabContainer)
    this.dataIn = this.injector.get(token);
  }

  sendData() {
    // send data to parent component (TabContainer)
    this.dynamicService.outputFromDynamicComponent('Sent data from Tab1');
  }

}
