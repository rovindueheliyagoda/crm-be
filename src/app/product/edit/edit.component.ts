import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/servise/shared.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  validateForm!: FormGroup;

  submitForm(): void {
    console.log('submit', this.validateForm.value);
    this.saveprod();
  }

  constructor(private fb: FormBuilder, private service:SharedService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      price: [null, [Validators.required]],
      qty: [null, [Validators.required]],
      remember: [true]
    });
  }

  saveprod()
  {
    var val = {
      name: this.validateForm.value.name,
      price: this.validateForm.value.price,
      qty: this.validateForm.value.qty,

    };
    this.service.addP(val).subscribe((data)=>{
      alert("Product Saved");
    });
  }



}
