import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { ServiceuserComponent } from './serviceuser/serviceuser.component';
import { AddTwoService } from './services/add-two.service';
import { DirectiveComponent } from './directive/directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    ServiceuserComponent,
    DirectiveComponent,
    AttributeDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AddTwoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
