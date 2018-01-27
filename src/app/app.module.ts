import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home.page/home-page/home-page.component';
import { SectionComponent } from './components/section/section.component';
import { MatrixComponent } from './matrix/matrix.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SectionComponent,
    MatrixComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
