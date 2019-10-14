import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './Customer/Customer.component';
import { CustomerDetailComponent } from './Customer-detail/Customer-detail.component';
import { CustomerCreateComponent } from './Customer-create/Customer-create.component';
import { CustomerEditComponent } from './Customer-edit/Customer-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from '@angular/material';

const appRoutes: Routes = [
  {
    path: 'Customers',
    component: CustomerComponent,
    data: { CustomerName: 'Customer List' }
  },
  {
    path: 'Customer-details/:id',
    component: CustomerDetailComponent,
    data: { CustomerName: 'Customer Details' }
  },
  {
    path: 'Customer-create',
    component: CustomerCreateComponent,
    data: { CustomerName: 'Create Customer' }
  },
  {
    path: 'Customer-edit/:id',
    component: CustomerEditComponent,
    data: { CustomerName: 'Edit Customer' }
  },
  { path: '',
    redirectTo: '/Customers',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailComponent,
    CustomerCreateComponent,
    CustomerEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
