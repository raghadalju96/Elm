
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyFormComponent } from './admin_registration/company-form/company-form.component';
import { CompanyListComponent } from './admin_registration/company-list/company-list.component';
import { EducationFormComponent } from './admin_registration/education-form/education-form.component';
import { AdminPageComponent } from './admin_registration/admin-page/admin-page.component';
import { CompanyServiceService } from './admin_registration/company-service.service';
import { HomeComponent } from './home_login/home.component';
import { IndiComponent } from './individual/indi.component';
import { FooterComponent } from './footer/footer.component';

import { EduComponent } from './education/edu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndiFormComponent } from './admin_registration/indi-form/indi-form.component';
import { EduListComponent } from './admin_registration/edu-list/edu-list.component';
import { IndiListComponent } from './admin_registration/indi-list/indi-list.component';
import { ComComponent } from './company/com.component';
import { Error404Component } from './error404/error404.component';
import { LogoutComponent } from './logout/logout.component';







@NgModule({
  declarations: [
    AppComponent,
    CompanyFormComponent,
    CompanyListComponent,
    EducationFormComponent,
    AdminPageComponent,

    HomeComponent,
    IndiComponent,
    FooterComponent,

    EduComponent,
    NavbarComponent,
    IndiFormComponent,
    EduListComponent,
    IndiListComponent,
    ComComponent,
    Error404Component,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


    HttpClientModule,
    FormsModule
  ],


  providers: [CompanyServiceService,
    
  
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



