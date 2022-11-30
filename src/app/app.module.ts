import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { GeneralLayoutComponent } from './shared/layout/general-layout/general-layout.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { filterReducer } from './store/filter.store';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GeneralLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot({ filters: filterReducer }, {}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
