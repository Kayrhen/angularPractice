import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatGridListModule, MatListModule, MatButtonModule, MatCardModule,
  MatMenuModule, MatToolbarModule, MatIconModule, MatAutocompleteModule,
  MatInputModule,MatFormFieldModule, MatCheckboxModule,
  MatSlideToggleModule, MatSelectModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpModule} from '@angular/http';
import { MenuComponent } from './menu/menu.component';
import {CommonModule} from '@angular/common';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import {DishService} from './services/dish.service';
import{PromotionService} from './services/promotion.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {LeaderService} from './services/leader.service';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
//import { FormsModule } from '@angular/forms';
//import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSelectModule,
  //  FormsModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    //MaterialModule,
    AppRoutingModule,
    CommonModule,
    MatGridListModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [DishService, PromotionService, LeaderService],
  entryComponents:[
    LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
