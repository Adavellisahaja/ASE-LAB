import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-Customer-edit',
  templateUrl: './Customer-edit.component.html',
  styleUrls: ['./Customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  Customer = {};
  CustomerForm: FormGroup;
  CustomerId: string = '';
  CustomerName: string = '';
  CustomerEmail: string = '';
  CustomerPhone: String = '';
  matcher: string;
  /*author: string = '';
  publisher: string = '';
  published_year: string = '';*/
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.CustomerForm = this.formBuilder.group({
      'CustomerId': [null, Validators.required],
      'CustomerName': [null, Validators.required],
      'CustomerEmail': [null, Validators.required],
      'CustomerPhone': [null, Validators.required],
      /*'publisher': [null, Validators.required],
      'published_year': [null, Validators.required]*/
    });
    this.getCustomer(this.route.snapshot.params['id']);
  }
  getCustomerDetails(id) {
    this.api.getCustomer(id)
      .subscribe(data => {
        console.log(data);
        this.Customer = data;
      });
  }
  onFormSubmit(form: NgForm) {
    let id = this.route.snapshot.params['id'];
    console.log(form)
    this.api.updateCustomer(id, form)
      .subscribe(res => {
        this.router.navigate(['/Customer-details', id]);
      }, (err) => {
        console.log(err);
      });
  }
  getCustomer(id) {
    this.api.getCustomer(id).subscribe(data => {
      id = data._id;
      this.CustomerForm.setValue({
        CustomerId: data.CustomerId,
        CustomerName: data.CustomerName,
        CustomerEmail: data.CustomerEmail,
        CustomerPhone: data.CustomerPhone,
        /*publisher: data.publisher,
        published_year: data.published_year*/
      });
    });
  }
}
