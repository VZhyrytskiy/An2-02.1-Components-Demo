import { Component, DestroyRef, inject } from '@angular/core';

@Component({
  selector: 'app-on-destroy-ref',
  standalone: true,
  templateUrl: './on-destroy-ref.component.html',
  styleUrls: ['./on-destroy-ref.component.css'],
})
export class OnDestroyRefComponent {
  constructor() {
    const destroyRef = inject(DestroyRef);

    // register a destroy callback
    const unregisterFn = destroyRef.onDestroy(() => {
      console.log('On Destroy Hook from destroyRef');
    });

    // stop the destroy callback from executing if needed
    // unregisterFn();
  }
}
