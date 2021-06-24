import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfComponent } from './if/if.component';
import { ProductComponent } from './product/product.component';
import { SellerComponent } from './seller/seller.component';
import { SwitchComponent } from './switch/switch.component';
import { ForComponent } from './for/for.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesService} from './countries.service'
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SellerComponent,
    IfComponent,
    SwitchComponent,
    ForComponent,
    CountriesComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
