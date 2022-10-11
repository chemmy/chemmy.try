import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "Enter";
  @Input() type: string = "primary";

  constructor() { }

  ngOnInit(): void {
  }
}
