import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-test',
  templateUrl: './two-way-test.component.html',
  styleUrls: ['./two-way-test.component.css'],
})
export class TwoWayTestComponent {
  imgList: string[] = [
    'assets/images/3.jpg',
    'assets/images/4.jpg',
    'assets/images/5.jpg',
  ];

  index: number = 0;

  imgSrc: string = this.imgList[this.index];

  nextImage() {
    this.index++;
    if (this.index === this.imgList.length) this.index = 0;
    this.imgSrc = this.imgList[this.index];
  }

  message: string = '';
  getMessage(e: any) {
    this.message = e.target.value;
  }

  username: string = '';
  password: string = '';
  getName(e: any) {
    this.username = e.target.value;
  }
  getPassword(e: any) {
    this.password = e.target.value;
  }
  submit(e: any) {
    e.preventDefault();
    console.log('submit');
    console.log(`name: ${this.username}, password: ${this.password}`);
    this.username = this.password = '';
  }

  username2: string = '';
  password2: string = '';
  submit2(e: any) {
    e.preventDefault();
    console.log('submit');
    console.log(`name: ${this.username2}, password: ${this.password2}`);
    this.username2 = this.password2 = '';
  }
}
