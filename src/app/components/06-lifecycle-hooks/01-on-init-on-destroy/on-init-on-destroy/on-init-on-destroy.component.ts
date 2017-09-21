import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init-on-destroy',
  templateUrl: './on-init-on-destroy.component.html',
  styleUrls: ['./on-init-on-destroy.component.css']
})
export class OnInitOnDestroyComponent implements OnDestroy, OnInit {

  constructor() {
    console.log('On Constructor');
  }

  ngOnInit(): void {
    console.log('On Init Hook');
  }

  ngOnDestroy(): void {
    console.log('On Destroy Hook');
  }
}
