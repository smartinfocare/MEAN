import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCartComponent } from './add-cart/add-cart.component';

const routes: Routes = [
  { path: 'add_cart', component:  AddCartComponent},
  {path: '', redirectTo: '/add_cart', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
