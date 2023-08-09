import { MaterialCompModule } from './material-comp/material-comp.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { FormsValidationComponent } from './forms-validation/forms-validation.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AppChildComponent } from './app-child/app-child.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component'
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { UserdefPipe } from './userdef.pipe';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CounterComponent,
    RegisterComponent,
    FormsValidationComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AppChildComponent,
    AboutComponent,
    ContactComponent,
    Comp1Component,
    Comp2Component,
    UserComponent,
    UserdefPipe,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialCompModule,
    HttpClientModule
    // CategoryModule,
    // AuthModule,
  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
