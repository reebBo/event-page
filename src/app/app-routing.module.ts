import { SubmitFormComponent } from './submit-form/submit-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component';


const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'submit-form', component: SubmitFormComponent },
  //{ path: 'to-do', component: ThingsToDoComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
