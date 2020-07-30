import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuBarComponent} from './menu-bar/menu-bar.component';
import { HomeComponent } from './home/home.component';
import { FootPageComponent } from './foot-page/foot-page.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductListDetailsComponent } from './product-list-details/product-list-details.component';

import { ShoppingService } from './shopping.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    FootPageComponent,
    ProductsListComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductListDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsListComponent},
      {path: 'about', component: AboutUsComponent},
      {path: 'contact', component: ContactUsComponent},
      {path: 'products/:productId', component: ProductListDetailsComponent}
    ])

  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
