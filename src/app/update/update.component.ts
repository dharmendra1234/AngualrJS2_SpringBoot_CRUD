import { Component, OnInit } from '@angular/core';
import { Customers } from "app/shared/Customer";
import { Router, ActivatedRoute } from "@angular/router/";
import { CustomerServiceService } from "app/shared/customer-service.service";
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
"app/Customer";
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
providers : [CustomerServiceService]

})
export class UpdateComponent implements OnInit {

  cust : Customers = new Customers();
  customerForm: FormGroup;
  private sub;
  private id :number;
  private customerList;
  customer :any;

  constructor(private customerServiceService : CustomerServiceService ,private router : Router,private route : ActivatedRoute,private fb: FormBuilder) {
   }

  ngOnInit() {
    var id=this.route.params.subscribe(params=> {
      var id=params['id'];
    this.customerServiceService.getCustomer(id).subscribe(
        customer=>this.cust=customer,
        response => {
     
          if(response.status==404){
            this.router.navigate(['NotFound'])
          }
        });
    });

this.customerForm = this.fb.group({
     id: [this.cust.id, []],
     firstName: [this.cust.firstName, [Validators.required, Validators.minLength(2)]],
     lastName: [this.cust.lastName, [Validators.required, Validators.minLength(2)]],
     email: [this.cust.email, [Validators.required,Validators.email]],
     mobile: [this.cust.mobile, [Validators.required, Validators.minLength(10)]]
     });
    
  }


onSubmit(customerForm) {
     this.customerServiceService.addCustomer(customerForm).subscribe(
     success => { this.customerList = this.customerServiceService.getCustomers().subscribe(data => this.customer = data); });
     this.router.navigate(['/']);
}




}
