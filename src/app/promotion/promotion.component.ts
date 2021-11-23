import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SharedService } from '../servise/shared.service';




@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

 

  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    this.getPromotionValue();
  }

  constructor(private fb: FormBuilder, private servise: SharedService) {}

  result:any;
  d1:any;
  d2:any;
  d3:any;
  d4:any;

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      year: [null, [Validators.required]],
      month: [null, [Validators.required]],
      remember: [true]
    });
  }

  getPromotionValue(){
    var vl = {
      year:this.validateForm.value.year,
      month:this.validateForm.value.month
    }
    this.servise.getResults(vl).subscribe((res)=>{
      this.result=res;
      var arr = String(this.result).split(',');
      console.log("Split" + arr);
      console.log(arr.length);
      for (var _i = 0; _i < this.result.length; _i++) {
        var responseValues = this.result[_i];
        if (_i == 0) {
          this.d1 = responseValues;
   
        } else if (_i == 1) {
          this.d2 = responseValues;

        } else if (_i == 2) {
          this.d3 = responseValues;

        } else if (_i == 3) {
          this.d4 = responseValues;

        } 
        else {
          console.error();
        }
      }
    });
  }


  


}
