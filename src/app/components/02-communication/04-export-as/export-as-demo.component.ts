import { Component } from '@angular/core';

@Component({
  selector: 'app-export-as-demo',
  templateUrl: './export-as-demo.component.html'
})
export class ExportAsDemoComponent  {

  onClick(d: any) {
    console.log(d.getValue());
  }

}
