import { Component, OnInit } from '@angular/core';
import { Customers } from "app/shared/Customer";
import { CustomerServiceService } from "app/shared/customer-service.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [CustomerServiceService]
})
export class ListComponent implements OnInit {

  errorMessage: string;
  customer: Customers[] = [];
  mode = "Promise";
  private customerList;

  constructor(private customerServiceService: CustomerServiceService, private router: Router) { }

  ngOnInit() {
    this.customerList = this.customerServiceService.getCustomers().subscribe(data => this.customer = data);
  }


  deleteCustomer(customer: Customers) {
    this.customerServiceService.deleteCustomer(customer.id).subscribe(
      success => {
        this.customerList = this.customerServiceService.getCustomers().subscribe(data => this.customer = data);
      });
  }


}
