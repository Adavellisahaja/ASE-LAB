import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-Customer-create',
  templateUrl: './Customer-create.component.html',
  styleUrls: ['./Customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  CustomerForm: FormGroup;
  CustomerId: string = '';
  CustomerName: string = '';
  CustomerEmail: string = '';
  CustomerPhone: string = '';
  matcher: String;
  /*author: string = '';
  publisher: string = '';
  published_year: string = '';*/

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
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
  }

  onFormSubmit(form: NgForm) {
    this.api.postCustomer(form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/Customer-details', id]);
      }, (err) => {
        console.log(err);
      });
  }
}
