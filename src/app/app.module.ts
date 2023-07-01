import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompoundsViewComponent } from './compounds-view/compounds-view.component';
import { CompoundViewIdComponent } from './compound-view-id/compound-view-id.component';

@NgModule({
  declarations: [AppComponent, CompoundsViewComponent, CompoundViewIdComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
