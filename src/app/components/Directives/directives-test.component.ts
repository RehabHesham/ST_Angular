import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-test',
  templateUrl: './directives-test.component.html',
  styleUrls: ['./directives-test.component.css'],
})
export class DirectivesTestComponent {
  isVisible: boolean = false;

  changeVal(e: any) {
    this.isVisible = e.target.checked;
  }

  color: string = '';
  changeColor(e: any) {
    this.color = e.target.value;
  }

  names: string[] = ['ali', 'omar', 'mona'];

  // attributes directives
  isCentered: boolean = true;
  changeVal2(e: any) {
    this.isCentered = e.target.checked;
  }
}
