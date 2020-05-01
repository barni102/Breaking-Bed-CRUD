import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './authguard.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path:'list',
    component:ListComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path:'details/:id',
    component: DetailsComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
