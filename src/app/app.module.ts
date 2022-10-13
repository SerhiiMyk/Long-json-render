import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { ImageListPageComponent } from './pages/image-list-page/image-list-page.component';
import { ImageDetailsPageComponent } from './pages/image-details-page/image-details-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { imageReducer } from './store/reducers/image.reducer';
import { ImageEffects } from './store/effects/image.effect';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ImageListPageComponent,
    ImageDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatIconModule,
    StoreModule.forRoot({ data: imageReducer }),
    EffectsModule.forRoot([ImageEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
