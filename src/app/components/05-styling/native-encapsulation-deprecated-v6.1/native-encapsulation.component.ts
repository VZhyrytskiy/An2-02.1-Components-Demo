import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-native-encapsulation',
  templateUrl: './native-encapsulation.component.html',
  styleUrls: ['./native-encapsulation.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class NativeEncapsulationComponent {
}
