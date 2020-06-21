
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home_login/home.component';
import { IndiComponent } from './individual/indi.component';

import { EduComponent } from './education/edu.component';
import { EducationFormComponent } from './admin_registration/education-form/education-form.component';
import { CompanyFormComponent } from './admin_registration/company-form/company-form.component';
import { AdminPageComponent } from './admin_registration/admin-page/admin-page.component';
import { CompanyListComponent } from './admin_registration/company-list/company-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndiFormComponent } from './admin_registration/indi-form/indi-form.component';
import { EduListComponent } from './admin_registration/edu-list/edu-list.component';
import { IndiListComponent } from './admin_registration/indi-list/indi-list.component';
import { ComComponent } from './company/com.component';
import { Error404Component } from './error404/error404.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';
import { RouteGuardIndiService } from './services/route-guard-indi.service';
import { RouteGuardCompanyService } from './services/route-guard-company.service';
import { RouteGuardEducationService } from './services/route-guard-education.service';

const routes: Routes = [


  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'indi', component: IndiComponent,canActivate:[RouteGuardIndiService] },
  { path: 'com', component: ComComponent,canActivate: [RouteGuardCompanyService]},
  { path: 'edu', component: EduComponent,canActivate: [RouteGuardEducationService]},
  { path: 'nav', component: NavbarComponent },

  


  { path: 'admin', component: AdminPageComponent, canActivate: [RouteGuardService] },
  { path: 'companyList', component: CompanyListComponent, canActivate: [RouteGuardService] },
  { path: 'addcompany', component: CompanyFormComponent },
  { path: 'addeducation', component: EducationFormComponent },
  { path: 'addIndi', component: IndiFormComponent },
  { path: 'eduList', component: EduListComponent, canActivate: [RouteGuardService] },
  { path: 'indiList', component: IndiListComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent }, 
  { path: '**', component: Error404Component, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}