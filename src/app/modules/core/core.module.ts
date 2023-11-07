import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { FooterComponent } from 'src/app/components/template/footer/footer.component';
import { HeaderComponent } from 'src/app/components/template/header/header.component';
import { MenuComponent } from 'src/app/components/template/menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from '../dashboard/dashboard.module';


//Nesse módulo são importados os outros módulos necessários para a aplicação.


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,

    DashboardModule

 
  ]
})
export class CoreModule { }
