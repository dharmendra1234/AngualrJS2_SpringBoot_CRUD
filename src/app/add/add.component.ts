import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from "app/shared/customer-service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers : [CustomerServiceService]
})
export class AddComponent implements OnInit {

private customerList;

customer :any;

  constructor(private customerServiceService :CustomerServiceService,private router :Router) {
    this.customerList=[];
   }

  ngOnInit() {
  }

  onSubmit(form){
     this.customerServiceService.addCustomer(form).subscribe(
      success => {
        this.customerList = this.customerServiceService.getCustomers().subscribe(data => this.customer = data);
      });
     this.router.navigate(['/']);
  }

}
