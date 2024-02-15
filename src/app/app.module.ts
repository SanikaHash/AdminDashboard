import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { OrderComponent } from "./order/order.component";
import { UserComponent } from "./user/user.component";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookComponent } from "./book/book.component";
import { AdduserComponent} from "./adduser/adduser.component";
import { AddbulkComponent} from "./addbulk/addbulk.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        DashboardComponent,
        OrderComponent,
        UserComponent,
        BookComponent,
        AdduserComponent,
        AddbulkComponent,
        LoginComponent,
        SignupComponent



    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
        DashboardComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
