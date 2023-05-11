import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponentComponent,
    PageNotFoundComponentComponent,
  ],
  imports: [BrowserModule, UserModule, MessageModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
