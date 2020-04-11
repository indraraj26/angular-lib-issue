import { ShareButtonModule } from 'ngx-share-button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShareButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
