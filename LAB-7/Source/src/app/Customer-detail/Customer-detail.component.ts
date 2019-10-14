import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-Customer-detail',
  templateUrl: './Customer-detail.component.html',
  styleUrls: ['./Customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  Customer = {
    CustomerId: String,
  CustomerName: String,
  CustomerEmail: String,
  CustomerPhone: String,
    _id: '/Customer-detail',
    /*description: String,
    title: String,*/
  };


  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.getCustomerDetails(this.route.snapshot.params['id']);
  }

  getCustomerDetails(id) {
    this.api.getCustomer(id)
      .subscribe(data => {
        console.log(data);
        this.Customer = data;
      });
  }

  deleteCustomer(id) {
    this.api.deleteCustomer(id)
      .subscribe(res => {
          this.router.navigate(['/Customer']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  }
