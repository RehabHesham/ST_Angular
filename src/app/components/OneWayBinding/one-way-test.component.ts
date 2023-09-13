import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-test',
  templateUrl: './one-way-test.component.html',
  styleUrls: ['./one-way-test.component.css'],
})
export class OneWayTestComponent {
  // data
  ComponentTitle: string = 'Welcome Ali';
  imgSrc: string = 'assets/images/1.jpg';
  imgSrc2: string = '2.jpg';

  printTarget(e: any) {
    console.log(e.target);
  }

  getText(e: any) {
    console.log(e.target.value);
  }
}
