import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneWayTestComponent } from './components/OneWayBinding/one-way-test.component';
import { TwoWayTestComponent } from './components/TwoWayBinding/two-way-test.component';
import { FormsModule } from '@angular/forms';
import { DirectivesTestComponent } from './components/Directives/directives-test.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    // components
    AppComponent,
    OneWayTestComponent,
    TwoWayTestComponent,
    DirectivesTestComponent,
    TestComponent,
  ],
  imports: [
    // modules
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
