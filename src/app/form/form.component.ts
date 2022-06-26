import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../shared/booking.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public bookingForm!: FormGroup;


  constructor(
    public fb: FormBuilder,
    public bookingApi: BookingService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.bookingApi.GetVisitorsList();
    this.visitorForm();
  }

  visitorForm() {
    this.bookingForm= this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      date: ['',[Validators.required]],
      ticketSize: ['',[Validators.required]]
    });
  }

  get id() {
    return this.bookingForm.get('id');
  }

  get name() {
    return this.bookingForm.get('name');
  }
  get email() {
    return this.bookingForm.get('email');
  }
  get phone() {
    return this.bookingForm.get('phone');
  }
  get date() {
    return this.bookingForm.get('date');
  }
  get ticketSize() {
    return this.bookingForm.get('ticketSize');
  }

  ResetForm() {
    this.bookingForm.reset();
  }

  submitVisitorData() {
    this.bookingApi.AddVisitor(this.bookingForm.value);
    this.ResetForm();
    this.router.navigate(['/payment']);
  }

}
