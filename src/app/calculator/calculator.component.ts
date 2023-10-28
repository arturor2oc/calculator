import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  display = '';
  numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
  operation = ['+', '-', '*', '/'];
  appendToDisplay(value: any) {
    this.display += value.innerText;
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      this.display = 'Error';
    }
  }

  deleteData() {
    this.display = this.display.slice(0, this.display.length - 1);
  }

  clear() {
    this.display = '';
  }
}
