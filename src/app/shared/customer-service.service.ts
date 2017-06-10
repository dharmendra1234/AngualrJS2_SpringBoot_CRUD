import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/toPromise';
import { Customers } from "app/shared/Customer";

@Injectable()
export class CustomerServiceService {

  headers: Headers = new Headers;

  private url: string = "http://localhost:8080/api/customers/";
  constructor(private http: Http) {
    this.headers.append('Content-Type','application/json');
    }

  getCustomers() {
    return this.http.get(this.url).map(res => res.json());
  }

  getCustomer(id) {
    return this.http.get(this.url + id).map(res => res.json());
  }

  addCustomer(customer) {
     return  this.http.post("http://localhost:8080/api/customers/", customer, { headers: this.headers }).map(res => res.json());
   }
 
  updateCustomer(customer) {
    return this.http.put(this.getCustomerUrl(customer.id), JSON.stringify(customer)).map(res => res.json());
  }

  deleteCustomer(id){
      return this.http.delete(this.getCustomerUrl(id)).map(res => res.json());
  }

  private getCustomerUrl(id) {
    return this.url + "/" + id ;
  }

}
