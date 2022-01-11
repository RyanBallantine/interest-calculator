import { Component, OnInit, ViewChild } from '@angular/core';
import { InterestForm } from 'src/app/models/interest-form.model';
import { InterestCalculateComponent } from '../interest-calculate/interest-calculate.component';

@Component({
  selector: 'app-interest-form',
  templateUrl: './interest-form.component.html',
  styleUrls: ['./interest-form.component.css']
})
export class InterestFormComponent implements OnInit {
  interestForm: InterestForm = new InterestForm();
  @ViewChild(InterestCalculateComponent)
  interestCalc!: InterestCalculateComponent;

  constructor() { }

  ngOnInit(): void {
  }

  calculateInterest() {
    this.interestCalc.calculateInterest();
  }

  isValid() {
    return (this.interestForm.interestAmount != null && this.interestForm.loanAmount != null && this.interestForm.years != null);
  }
}
