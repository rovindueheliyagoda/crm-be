import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { PromotionComponent } from './promotion/promotion.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/promotion'},
  {path:'promotion',component:PromotionComponent},
  {path:'product', component:ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
