import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css',
})
export class StatusComponent {
  @Input() value: { message: string; status: boolean } = {
    message: 'one',
    status: false,
  };
  constructor() {}
  ngOnInit() {
    (() => {
      console.log('status working correctly');
      console.log(this.value.message);
    })();
    setTimeout(() => {
      this.value.message = '';
    }, 2000);
  }
}
