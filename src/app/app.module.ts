import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';

import { AppComponent }     from 'components/app/app.component';
import { HeaderComponent }  from 'components/app/header/header.component';
import { FooterComponent }  from 'components/app/footer/footer.component';
import { HomeComponent }    from './components/pages/home/home.component';

import { AppRoutingModule }     from 'modules/app_routing/app_routing.module';
import { OnasComponent }        from './components/pages/onas/onas.component';
import { FaqComponent }         from './components/pages/faq/faq.component';
import { TarifComponent }       from './components/pages/tarif/tarif.component';
import { BezopasnostComponent } from './components/pages/bezopasnost/bezopasnost.component';
import { LegalComponent }       from './components/pages/legal/legal.component';
import { CatComponent }         from './components/cats/cat.component';
import { LoginComponent }       from './components/dialogs/login/login.component';
import { SignupComponent }      from './components/dialogs/signup/signup.component';
import { Page404Component }     from './components/pages/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OnasComponent,
    FaqComponent,
    TarifComponent,
    BezopasnostComponent,
    LegalComponent,
    CatComponent,
    LoginComponent,
    SignupComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
