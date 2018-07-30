import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home.page/home-page/home-page.component';
import { SectionComponent } from './components/section/section.component';
import { MatrixComponent } from './matrix/matrix.component';
import { FooterComponent } from './footer/footer.component';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SectionComponent,
    MatrixComponent,
    FooterComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
