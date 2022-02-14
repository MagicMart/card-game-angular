import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardComponent } from './card/card.component';
import { ZeroPadPipe } from '../zero-pad.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardContainerComponent,
    CardComponent,
    ZeroPadPipe,
  ],
  imports: [BrowserModule],
  providers: [Titl],
  bootstrap: [AppComponent],
})
export class AppModule {}
