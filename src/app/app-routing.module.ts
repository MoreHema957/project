import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';
import {ReactiveFormComponent} from './pages/reactive-form/reactive-form.component';
const routes: Routes = [
  { path: ' ', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'form', component: TemplateFormComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
