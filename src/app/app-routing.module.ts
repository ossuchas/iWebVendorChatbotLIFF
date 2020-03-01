import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestGRComponent } from './request-gr/request-gr.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RequestBillingComponent } from './request-billing/request-billing.component';
import { PoidlistComponent } from './poidlist/poidlist.component';


const routes: Routes = [
  { path: 'requestgr', component: RequestGRComponent},
  { path: 'requestbl', component: RequestBillingComponent},
  { path: 'polist', component: PoidlistComponent},
  { path: '', redirectTo: '/polist', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
