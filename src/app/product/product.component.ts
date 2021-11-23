import { Component, OnInit } from '@angular/core';
import { SharedService } from '../servise/shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  isVisible = false;

  constructor(private service:SharedService ) { }

  ngOnInit(): void {
    this.showList();
  }

  mydata:any;
  // prod:any;

  showList() 
  {
    this.service.getList().subscribe((data)=>{
      this.mydata = data;
    });
  }

  delete(val:any)
  {
    this.service.deleteProd(val).subscribe((data)=>{
      alert("Selected product Deleted");
      this.showList();
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    this.showList();
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.showList();
  }

  // edit(data:any)
  // {
  //   this.prod=data;
  //   this.isVisible = true;
  // }

}
