import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: DashboardComponent },
  // // { path: 'about', component: AboutComponent },
  // // { path: 'products', component: ProductsComponent },
  // // { path: 'product-detail/:id', component: ProductDetailComponent },
  // // { path: 'contact', component: ContactComponent },
  // { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
