import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRegisterComponent } from './app-register/app-register.component'
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
    {path: 'register', component: AppRegisterComponent },
    {path: 'login', component: LoginComponent },
    {path: 'profile', component:CandidateProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
