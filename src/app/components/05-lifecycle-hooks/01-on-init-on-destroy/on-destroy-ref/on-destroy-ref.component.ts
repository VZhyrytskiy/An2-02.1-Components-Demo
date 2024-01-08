import { Component, DestroyRef, inject } from '@angular/core';

@Component({
  selector: 'app-on-destroy-ref',
  standalone: true,
  templateUrl: './on-destroy-ref.component.html',
  styleUrl: './on-destroy-ref.component.css',
})
export class OnDestroyRefComponent {
  // it is possible to inject the DestroyRef in injection context,
  // not only in the class
  private destroyRef = inject(DestroyRef);

  // register a destroy callback
  unregisterFn = this.destroyRef.onDestroy(() => {
    console.log('onDestroy Callback from destroyRef');
  });

  // if you need to stop the destroy callback from executing,
  // run this function
  // unregisterFn();
}
