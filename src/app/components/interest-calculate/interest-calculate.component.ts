import { Component, Input, OnInit } from '@angular/core';
import { InterestForm } from 'src/app/models/interest-form.model';

@Component({
  selector: 'app-interest-calculate',
  templateUrl: './interest-calculate.component.html',
  styleUrls: ['./interest-calculate.component.css']
})
export class InterestCalculateComponent implements OnInit {
  @Input()
  interestData!: InterestForm;
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.show = false;
  }

  totalReturn?: any;
  totalInterest?: any;

  calculateInterest() {
    this.show = true;
    let loan = this.interestData.loanAmount;
    let interest = this.interestData.interestAmount;
    let years = this.interestData.years;

    if (loan != null && interest != null && years != null) {
      this.totalReturn = (loan * (1 + (interest * years) / 100)).toFixed(2);
      this.totalInterest = (Number(this.totalReturn) - loan).toFixed(2);
    }
  }

}
