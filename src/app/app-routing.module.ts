import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { PricingComponent } from './pricing/pricing.component';
import { SignComponent } from './sign/sign.component';

const routes: Routes = [
  {path:'app-home' ,component: HomeComponent},
  {path:'app-about', component:AboutComponent},
  {path:'app-pricing', component:PricingComponent},
  {path:'app-log', component:LogComponent},
  {path:'app-sign', component:SignComponent},
  {path:'app-contact', component:ContactComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
