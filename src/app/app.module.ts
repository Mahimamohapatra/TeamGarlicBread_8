import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { PaymentComponent } from './payment/payment.component';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';

const firebaseConfig = {
  apiKey: "AIzaSyAHveyQSTm1s4q-Gy_cc8M2FsPdy2U1SLY",
  authDomain: "museaa-230b0.firebaseapp.com",
  projectId: "museaa-230b0",
  storageBucket: "https://museaa-230b0-default-rtdb.firebaseio.com/",
  messagingSenderId: "614875853618",
  appId: "1:614875853618:web:96fe17a71e2bc58e969d2b"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    PaymentComponent,
    QrGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
