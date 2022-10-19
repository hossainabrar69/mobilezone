import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component"
import { AboutComponent } from "./about/about.component"
import { ProductsComponent } from "./products/products.component"
import { SingleProductComponent } from "./single-product/single-product.component"
import { ContactUsComponent } from "./contact-us/contact-us.component"

const routes: Routes = [
  { path:"", component:HomeComponent },
  { path:"about", component:AboutComponent },
  { path:"products", component:ProductsComponent },
  { path:"single-product", component:SingleProductComponent },
  { path:"contact-us", component:ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }