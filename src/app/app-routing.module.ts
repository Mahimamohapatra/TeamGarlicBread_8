import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';

const routes: Routes = [
  { path: '', redirectTo: '/home' ,pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'qr-code', component: QrGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
