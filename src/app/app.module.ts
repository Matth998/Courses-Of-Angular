import { AlertComponent } from './alerts/alert.component';
import { HttpClientModule } from '@angular/common/http'
import { CourseInfoComponent } from './courses/course-info.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error-404/error-404.component';
import { MenuComponent } from './menu/menu.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { StarComponent } from './star/star.component';
import { CourseListComponent } from './courses/course-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    MenuComponent,
    Error404Component,
    HomeComponent,
    FooterComponent,
    CourseInfoComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    OrderModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {

        path: 'courses', component: CourseListComponent

      },

      {

        path: 'courses/info/:id', component: CourseInfoComponent

      },

      {

        path: 'home', component: HomeComponent

      },

      {

        path: '**', component: Error404Component

      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
