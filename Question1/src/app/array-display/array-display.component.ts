import { Component } from '@angular/core';

@Component({
  selector: 'app-array-display',
  templateUrl: './array-display.component.html',
  styleUrls: ['./array-display.component.scss']
})
export class ArrayDisplayComponent {
  arrayData: Array<Number> = [1, 2, 3, 4, 5];
}
