import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, CardContainerComponent, CardComponent],
  imports: [BrowserModule],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
