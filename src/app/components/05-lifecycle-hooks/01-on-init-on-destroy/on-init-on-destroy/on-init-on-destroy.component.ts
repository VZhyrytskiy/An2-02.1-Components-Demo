import { Component, type OnDestroy, type OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init-on-destroy',
  standalone: true,
  templateUrl: './on-init-on-destroy.component.html',
  styleUrl: './on-init-on-destroy.component.css'
})
export class OnInitOnDestroyComponent implements OnDestroy, OnInit {

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit Hook');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Hook');
  }
}
