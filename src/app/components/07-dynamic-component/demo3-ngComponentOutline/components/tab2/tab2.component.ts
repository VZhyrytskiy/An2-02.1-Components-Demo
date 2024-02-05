import { Component, Injector, OnInit, inject } from '@angular/core';
import { DynamicService } from '../../dynamic.service';
import { token } from './../../tab-container/tab-container.component';

@Component({
  selector: 'app-tab2',
  standalone: true,
  templateUrl: './tab2.component.html',
  styleUrl: './tab2.component.css',
})
export class Tab2Component implements OnInit {
  private injector = inject(Injector);
  private dynamicService = inject(DynamicService);

  dataIn!: string;

  ngOnInit(): void {
    // get data from parent component (TabContainer)
    this.dataIn = this.injector.get(token);
  }

  sendData(): void {
    // send data to parent component (TabContainer)
    this.dynamicService.outputFromDynamicComponent('Sent data from Tab2');
  }
}
